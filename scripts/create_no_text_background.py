from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "output/design/homepage-final-visual-reference.png"
OUT_DIR = ROOT / "output/assets"
PUBLIC_DIR = ROOT / "public/assets"
OUT = OUT_DIR / "homepage-background-no-text.png"
PUBLIC_OUT = PUBLIC_DIR / "homepage-background-no-text.png"


def rect(x, y, w, h):
    return (x, y, x + w, y + h)


TEXT_RECTS = [
    # Top navigation and CTA.
    rect(206, 13, 304, 18),
    rect(744, 7, 106, 25),
    # Hero copy.
    rect(38, 88, 330, 82),
    rect(38, 174, 330, 32),
    rect(52, 222, 94, 24),
    rect(158, 222, 90, 24),
    rect(58, 286, 110, 28),
    rect(176, 286, 110, 28),
    rect(292, 286, 110, 28),
    # Capability strip.
    rect(86, 408, 112, 28),
    rect(254, 408, 116, 28),
    rect(421, 408, 122, 28),
    rect(589, 408, 126, 28),
    rect(758, 408, 112, 28),
    # Lifecycle.
    rect(355, 458, 155, 42),
    rect(82, 545, 92, 54),
    rect(212, 545, 92, 54),
    rect(342, 545, 92, 54),
    rect(471, 545, 92, 54),
    rect(601, 545, 96, 54),
    rect(731, 545, 96, 54),
    # Dataset heading and card labels.
    rect(318, 621, 230, 28),
    rect(38, 655, 100, 28),
    rect(146, 655, 100, 28),
    rect(255, 655, 100, 28),
    rect(363, 655, 100, 28),
    rect(472, 655, 100, 28),
    rect(580, 655, 120, 28),
    rect(689, 655, 120, 28),
    rect(48, 765, 78, 36),
    rect(156, 765, 78, 36),
    rect(265, 765, 78, 36),
    rect(373, 765, 78, 36),
    rect(482, 765, 78, 36),
    rect(590, 765, 78, 36),
    rect(699, 765, 78, 36),
    # Annotation section copy. Product UI text is intentionally kept as part of
    # the visual mockup for now; removing it with broad masks damages the image.
    rect(38, 828, 165, 135),
    # Evaluation and RL section marketing copy. UI labels inside the mockups are
    # kept in this pass.
    rect(38, 1138, 150, 88),
    rect(480, 1138, 160, 98),
    rect(511, 1242, 70, 28),
    # Metrics.
    rect(54, 1410, 130, 54),
    rect(222, 1410, 130, 54),
    rect(389, 1410, 130, 54),
    rect(557, 1410, 130, 54),
    rect(718, 1408, 132, 58),
    # Final CTA and footer.
    rect(38, 1504, 210, 116),
    rect(392, 1515, 356, 54),
    rect(42, 1592, 82, 22),
    rect(132, 1592, 104, 22),
    rect(38, 1678, 808, 132),
]


def make_mask(size):
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    for box in TEXT_RECTS:
        x0, y0, x1, y1 = box
        pad = 3
        draw.rounded_rectangle(
            (x0 - pad, y0 - pad, x1 + pad, y1 + pad),
            radius=4,
            fill=255,
        )
    return mask.filter(ImageFilter.GaussianBlur(2.2))


def diffuse_inpaint(image, mask, iterations=420):
    arr = np.asarray(image).astype(np.float32)
    mask_arr = np.asarray(mask) > 6

    # Seed masked pixels with a soft local blur so large typography regions start
    # close to the surrounding dark atmosphere before diffusion.
    seed = np.asarray(image.filter(ImageFilter.GaussianBlur(18))).astype(np.float32)
    arr[mask_arr] = seed[mask_arr]

    for _ in range(iterations):
        up = np.roll(arr, 1, axis=0)
        down = np.roll(arr, -1, axis=0)
        left = np.roll(arr, 1, axis=1)
        right = np.roll(arr, -1, axis=1)
        avg = (up + down + left + right) * 0.25
        arr[mask_arr] = avg[mask_arr]

    cleaned = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), "RGB")
    feather = mask.filter(ImageFilter.GaussianBlur(3.5))
    return Image.composite(cleaned, image, feather)


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)

    image = Image.open(SRC).convert("RGB")
    mask = make_mask(image.size)
    cleaned = diffuse_inpaint(image, mask)
    cleaned.save(OUT)
    cleaned.save(PUBLIC_OUT)
    mask.save(OUT_DIR / "homepage-text-removal-mask.png")
    print(OUT)
    print(PUBLIC_OUT)


if __name__ == "__main__":
    main()
