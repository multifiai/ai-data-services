# Frontend Technical Plan

## Goal

Build a high-fidelity homepage prototype based on the approved Monet Dark direction, with real HTML text, responsive layout, and animation layers that can later be expanded into the full website.

## Stack

- **Vite** for fast local development and production builds.
- **React + TypeScript** for structured sections and reusable visual components.
- **GSAP + ScrollTrigger** for precise scroll-linked animation, sticky sequences, and timeline control.
- **Lucide React** for clean icon buttons and capability icons.
- **Custom CSS** instead of a UI framework, so spacing, typography, panel edges, atmosphere, and motion can be art-directed precisely.

## Why This Stack

- The design depends on layered atmosphere, crisp UI overlays, and scroll choreography.
- GSAP is better suited than basic CSS for the lifecycle rail, hero parallax, count-up metrics, and section reveals.
- Custom CSS gives better control than Tailwind or component libraries for the approved visual direction.
- React keeps the long homepage organized into section-level components.

## Implementation Priorities

1. Static responsive homepage layout using the approved copy and section structure.
2. Hero workbench visual built from layered DOM/SVG/CSS elements.
3. Monet Dark background treatment with painterly but restrained light fields.
4. Scroll-triggered reveals for each major section.
5. Lifecycle line draw, dataset panel hover states, platform UI motion, RL path motion, and metric count-up.
6. Browser QA pass for desktop and mobile viewports.

## Fidelity Rules

- All meaningful text is HTML, not baked into images.
- The approved reference image is used as art direction, not as a flat screenshot background.
- The upper-right hero visual must feel alive: data particles, annotation frame draw, waveform motion, check pulses, and inspection-light sweep.
- Motion stays premium and restrained: no noisy neon, no excessive particle effects, no generic SaaS cards.
- `prefers-reduced-motion` must disable looped decorative motion.

## Project Structure

```txt
/
  index.html
  package.json
  src/
    main.tsx
    App.tsx
    styles.css
    data.ts
  public/
    assets/
      homepage-final-visual-reference.png
```

## Verification

- Run `npm run build` to catch TypeScript and bundling errors.
- Run the Vite dev server.
- Open the local page in browser automation for screenshot checks at desktop and mobile widths.
- Adjust layout until text does not overlap and key visual sections read clearly.
