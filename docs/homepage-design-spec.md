# Homepage Design Spec

## Final Direction

**Style name:** Crisp UI over Monet Dark Atmosphere

The homepage should feel like a premium AI data infrastructure site layered over a dark impressionist data landscape. Backgrounds and hero imagery can be soft, painterly, and atmospheric; all UI, typography, buttons, dividers, icons, and product panels must stay crisp, modern, and readable.

**Approved reference:** `/Users/hanlu/Desktop/data/output/design/homepage-final-visual-reference.png`

**Hero effect requirement:** the upper-right hero visual uses the approved data workbench running-state concept: raw data plates, annotation frames, waveform/code/text/point-cloud artifacts, review checkmarks, and verified dataset stack. It should animate like an operating data atelier, not a static poster.

## Brand Feel

- Premium, atmospheric, artful, and B2B credible.
- More expressive than Vercel minimalism.
- More custom and mature than Lovable-style SaaS templates.
- Clearly different from Abaka: less engineering grid/forge, more dark impressionist data landscape plus clean infrastructure UI.
- The background can feel like soft reflected light on a dark lake or polished black glass, but should never become literal Monet imagery.

## Visual System

### Color

- `ink-950`: `#050607` for page background.
- `ink-900`: `#090D10` for section backgrounds.
- `slate-800`: `#111820` for panels.
- `ivory-50`: `#F3EFE5` for primary text.
- `ivory-400`: `#BDB7AA` for secondary text.
- `gold-300`: `#D8B979` for CTAs, active lines, checkmarks.
- `gold-500`: `#A87B38` for low-glow borders and accents.
- `teal-400`: `#65C4B7` for data signals.
- `indigo-500`: `#4D4B8C` for atmospheric light.
- `violet-700`: `#302448` for dark painterly shadows.
- `ember-500`: `#D9673F` for correction/error marks only.

Color ratio should stay roughly **90% dark, 8% linework, 2% highlight**.

### Typography

- Use a clean modern sans serif for UI and body copy.
- Use large editorial headings with strong contrast and generous line-height.
- Suggested stack: `Inter`, `Geist`, `Satoshi`, or similar.
- Hero H1: 64-76px desktop, 44-52px tablet, 36-42px mobile.
- Section H2: 36-48px desktop.
- Body: 16-18px with muted ivory/gray.
- Labels: 12-14px, uppercase optional, letter spacing slight but not excessive.
- No blurred text. No text embedded into background images.

### Layout

- Desktop canvas: 1440px wide reference.
- Main content max width: 1120-1180px.
- Hero can break rightward with the visual extending wider than text content.
- Sections use long-scroll rhythm with clear dividers and large negative space.
- Avoid dense card grids. Use specimen panels, rails, instrument panels, and editorial blocks.
- Borders are thin and precise: `1px rgba(255,255,255,0.12)` or gold-tinted variants.

## Homepage Structure

### 1. Fixed Navigation

**Elements**

- Logo placeholder.
- Nav: Products, Services, Platform, Pricing, Resources, Company.
- Primary CTA: Talk to an Expert.

**Design**

- Fixed top bar, translucent black.
- Thin bottom rule.
- CTA uses champagne fill or champagne border depending scroll state.

**Motion**

- Initial fade/slide from top: 300ms.
- On scroll: background opacity increases and height compresses slightly.
- Nav hover: short gold underline draws from center outward.

### 2. Hero

**Goal**

Immediately communicate: human intelligence plus data infrastructure for frontier AI.

**Elements**

- H1: concise two-line brand promise.
- Supporting copy: one short sentence covering datasets, annotation, evaluation, RL environments.
- CTA pair: Talk to an Expert, Explore Platform.
- Three small trust marks: enterprise security, global expert network, scalable data infrastructure.
- Right hero visual: data workbench running-state.

**Design**

- Left column text is crisp and high contrast.
- Right visual is atmospheric but data-specific.
- Background has Monet Dark light fields, not hard neon.

**Motion**

- Background light blooms softly after page load.
- Data plates fade in from left-to-right.
- Annotation frames draw around samples.
- Review checkmarks pulse in sequence.
- Verified stack edge glow rises subtly.
- Inspection light sweeps across the workbench every 6-8 seconds.

### 3. Capability Strip

**Elements**

- Multimodal datasets.
- Expert annotation.
- Evaluation & testing.
- RL environments.
- Secure delivery.

**Design**

- Horizontal strip with crisp icons, labels, and thin separators.
- Looks like an instrument calibration band, not a logo cloud.

**Motion**

- Items reveal left-to-right on scroll.
- Hover lights a small gold rule and icon ring.

### 4. Data Lifecycle

**Elements**

- Collect.
- Curate.
- Annotate.
- Review.
- Evaluate.
- Deliver.

**Design**

- Horizontal lifecycle rail.
- Gold/ivory connector line.
- Painterly dark background beneath, crisp markers above.

**Motion**

- Use sticky scroll section.
- Connector line draws as the user scrolls.
- Current station brightens; previous stations dim.
- Data particles travel left-to-right along the rail.

### 5. Curated Multimodal Datasets

**Elements**

- Image.
- Text.
- Code.
- Audio.
- Video.
- 3D / Point Cloud.
- Agentic Data.

**Design**

- Specimen cards/panels, sharp edges, soft atmospheric image fields inside.
- Panels should feel like curated data artifacts.

**Motion**

- Scroll reveal with staggered panel entrance.
- Hover raises panel 4-6px, highlights a thin gold edge, and reveals a small arrow.
- Audio waveform can subtly animate.
- Code/text strips should remain abstract or controlled, not fake unreadable blocks.

### 6. Expert Annotation & Quality Assurance

**Elements**

- Editorial intro and CTA.
- Process: Annotate, Review, Resolve, Approve, Verified.
- Sample panels showing annotation and review states.
- Gold approval seal.

**Design**

- More human-crafted and quality-focused.
- No people photos. Use expert nodes/avatars as abstract small circles if needed.

**Motion**

- Annotation boxes draw in.
- Correction marks appear in ember.
- Review state toggles from issue to resolved.
- Gold seal appears last with a restrained pulse.

### 7. Platform

**Elements**

- Task queue.
- Annotation workspace.
- Quality score.
- Reviewers.
- Delivery pipeline.
- Deliver Dataset CTA inside product panel.

**Design**

- Product UI must be crisp and believable.
- Keep it integrated with the Monet atmosphere but not blurred.

**Motion**

- Feature tabs switch product view.
- Task queue items advance status.
- Inspector/quality panel slides in.
- Quality score counts up once in view.

### 8. Model Evaluation

**Elements**

- Radar chart.
- Dimension scores.
- Report preview.
- Evaluation axes: factuality, safety, robustness, coherence, tool-use.

**Design**

- Scientific report feel over smoky violet/teal glow.
- Avoid heavy dashboard mosaic.

**Motion**

- Radar sweep rotates slowly.
- Score bars fill in on viewport entry.
- Report rows generate top-to-bottom.
- Risk/caution marks use muted amber or ember.

### 9. RL Environments

**Elements**

- Mini enterprise app islands: Chat, Browser, Orders, CRM, Files, Calendar.
- Agent path.
- Reward status.
- Episode status.

**Design**

- Abstract enterprise simulation landscape.
- App islands are crisp UI miniatures in a soft dark data environment.

**Motion**

- Agent light travels along path.
- Successful step emits small gold/teal pulse.
- Failed/alternate path can flash muted ember briefly.
- Episode dots progress left-to-right.

### 10. Proof Metrics

**Elements**

- 100PB+ high-quality data produced.
- 10M+ hours of expert annotation.
- 99%+ average data accuracy.
- 300+ enterprise customers.
- 50+ countries supported.

**Design**

- Large clean typographic numbers.
- Thin vertical separators.
- Subtle data texture behind numbers.

**Motion**

- Count-up on entry.
- Very subtle gold edge shimmer after final value settles.

### 11. Final CTA

**Elements**

- Strong closing headline.
- Short supporting copy.
- Talk to an Expert CTA.
- Request a Dataset CTA.
- Verified data surfaces/cards gathering into a luminous stack.

**Design**

- Return to a quiet, focused atmosphere.
- Keep conversion area clean and decisive.

**Motion**

- Verified panels assemble into a stack as section enters.
- CTA hover: champagne line sweep.

### 12. Footer

**Elements**

- Product links.
- Service links.
- Resource links.
- Company links.
- Newsletter/contact.
- Legal links.

**Design**

- Low contrast, clean columns.
- Subtle oversized watermark in background.
- No over-decoration.

## Component Inventory

- `SiteHeader`
- `HeroSection`
- `HeroWorkbenchVisual`
- `CapabilityStrip`
- `LifecycleRail`
- `DatasetSpecimenGrid`
- `AnnotationWorkflow`
- `PlatformPreview`
- `EvaluationPanel`
- `RLEnvironmentMap`
- `MetricBand`
- `FinalCTA`
- `SiteFooter`
- Shared: `Button`, `IconBadge`, `SectionShell`, `SpecimenPanel`, `GoldDivider`, `AtmosphereLayer`

## Hero Workbench Animation Layers

The right hero visual should not be a single flat image in implementation. Use a static base image plus crisp overlay layers.

1. `base-workbench-image`: soft atmospheric workbench visual.
2. `spotlight-layer`: radial/linear soft light sweep, masked to right visual.
3. `data-particles`: tiny dots moving left-to-right through connector paths.
4. `annotation-frames`: SVG rectangles and callout lines using stroke-dash animation.
5. `waveform-layer`: subtle animated path or clipped SVG waveform.
6. `review-checks`: gold check icons pulsing in sequence.
7. `verified-stack-glow`: low-intensity edge glow on the final dataset stack.
8. `scroll-camera`: hero visual scale/translate controlled by scroll.

## Motion Principles

- Motion should feel like a precision instrument, not a light show.
- Maximum two active animated focal areas per viewport.
- Prefer slow drift, line draw, pulse, and parallax over particle noise.
- All text and UI remain stationary or move minimally.
- Respect `prefers-reduced-motion`: disable loops, keep only simple fades.

## Implementation Notes

- Use GSAP + ScrollTrigger for sticky scroll sequences and lifecycle/proof animations.
- Use CSS keyframes for tiny idle loops: light drift, check pulse, soft shimmer.
- Use SVG for annotation frames, lifecycle line, agent paths, radar chart.
- Use Canvas only if particle paths become too expensive in DOM/SVG.
- Keep background atmosphere as optimized image/WebP or CSS gradient layers.
- Avoid placing real text inside generated images. All copy should be HTML for crispness and SEO.

## Responsive Behavior

### Desktop

- Full experience with sticky hero/lifecycle and wide product panels.
- Hero: text left, visual right.
- Dataset panels: 6-7 columns or horizontal scroll depending final content.

### Tablet

- Hero stacks partially: text top-left, visual still dominant below/right.
- Lifecycle can become horizontal scroll with snap points.
- Platform panel stays wide but can crop inside a scroll container.

### Mobile

- Header compresses to logo + menu + CTA icon.
- Hero text first, then workbench visual.
- Capability strip becomes two-row or horizontal scroll.
- Lifecycle becomes vertical timeline.
- Product/evaluation/RL panels become stacked but remain crisp.
- Reduce painterly background intensity behind text for contrast.

## Initial Build Priority

1. Static responsive homepage with final layout and HTML text.
2. Hero workbench visual base and overlay layers.
3. Lifecycle scroll animation.
4. Dataset and annotation section reveals.
5. Platform/evaluation/RL micro-interactions.
6. Performance pass and reduced-motion mode.

