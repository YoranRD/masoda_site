# AGENTS.md — Masoda

## Project identity
Masoda is a French, afro-centred lifestyle and wellbeing website built as a hybrid hub:
- creative workshops are the primary business pillar,
- editorial wellbeing and inspiration are the secondary pillar,
- an affiliate mini-boutique is a supporting pillar.

The site must feel **convivial, inspirational, joyful, premium, warm, aesthetic, ergonomic, and community-oriented**.
It must never feel cheap, gimmicky, overloaded, excessively militant in tone, or like a generic ecommerce template.

## Primary goals
Prioritise these outcomes in this order:
1. Help visitors **book a workshop**.
2. Help brands, venues, and creators **request a collaboration**.
3. Encourage visitors to **follow Masoda on social platforms**.

All UX, information architecture, copy, and CTAs must support those priorities.

## Audience
Primary audience:
- mostly women and people interested in afro-centred wellbeing, creation, beauty, lifestyle, and community,
- roughly 20–40 years old,
- mobile-first audience, but desktop must still feel polished and editorial.

Do not write as if the audience were niche experts. Keep language refined, warm, and accessible.

## Technical constraints
- Stack: **Astro**.
- Hosting: **GitHub Pages**.
- Language: **French only** for now.
- No integrated checkout or booking flow for now.
- Booking buttons should link out to the current reservation page.
- Structure the code so the monthly reservation link can be updated in one obvious place.

## Current external links
- Instagram: https://www.instagram.com/lesateliersmassoda/
- TikTok: https://www.tiktok.com/@lesateliersmassoda1
- Pinterest: https://fr.pinterest.com/barbandchill/
- Current reservation URL: https://www.billetweb.fr/paint-and-jam-with-love

If a global config or content file exists, external URLs should live there rather than being duplicated in components.

## Non-negotiable brand constraints
- Keep the **existing official logo with halo**.
- The **logo typeface and logo colour are non-negotiable**.
- General visual palette may use warm and positive tones inspired by **orange, brown, and subtle blue accents**.
- The palette must stay luminous, calm, and premium. Avoid harsh neon, heavy darkness, or flat generic beige-only wellness branding.
- Do **not** use fake AI-looking human imagery.
- Use real photography, abstract textures, crafted materials, objects, hands, workshops, environments, or tasteful illustrations if needed.

## Design direction
The site should balance:
- premium, but not corporate,
- warm, but not messy,
- inspirational, but not pseudo-spiritual,
- community-oriented, but not visually loud,
- editorial, but still conversion-aware.

A good mental model is:
- refined lifestyle brand,
- workshop/event brand,
- creative wellbeing journal,
all merged into one coherent experience.

## Main navigation
The main header navigation should prioritise:
- Accueil
- Ateliers
- Boutique
- Blog

The broader site structure should support these pages:
- Accueil
- À propos
- Ateliers
- Boutique
- Journal / Blog
- Partenaires
- Événements
- Ressources
- Contact
- FAQ

## Page-role expectations
### Accueil
Must quickly explain:
- what Masoda is,
- why it is distinctive,
- how to book an atelier,
- how to discover the lifestyle/editorial universe,
- how to explore collaborations and social channels.

The homepage should not feel like a wall of text. It should have a clear hierarchy and repeat the workshop CTA strategically.

### Ateliers
Must be the strongest conversion page.
Should include:
- workshop promise/value,
- atmosphere and audience fit,
- practical information blocks,
- upcoming workshop section,
- primary CTA to reservation platform,
- optional collaboration/private event angle.

### Boutique
For now this is an affiliate-forward curated boutique, not a large catalog.
Initial categories to prepare for:
- baya,
- plantes,
- nutrition anti-stress,
- déco,
- art.

Do not invent fake products. Build the page structure, category cards, placeholders, and curation logic so real partner products can be added later.

### Blog / Journal / Ressources
This area should be editorial and inspirational first, but SEO-compatible.
Priority themes:
- bien-être,
- confiance en soi,
- nutrition anti-stress,
- motivation,
- partage et communion,
- ressources personnelles,
- repos,
- arts.

Pinterest should be discoverable from the blog ecosystem.

### Partenaires / Contact
Must make collaboration feel credible, simple, and premium.
Clear positioning, collaboration use cases, and easy contact path.

## Content and copy guidelines
Write in French.
Tone should be:
- warm,
- confident,
- polished,
- human,
- slightly editorial,
- never salesy or inflated.

Avoid:
- generic startup jargon,
- mystical clichés,
- forced activism slogans,
- empty luxury language,
- exaggerated therapeutic promises,
- fake scarcity tactics.

Copy should give a sense of care, beauty, trust, and shared experience.

## UX principles
- Mobile-first by default.
- Strong visual rhythm with generous spacing.
- Clear CTA hierarchy.
- Fast orientation within the first screen.
- Components should be reusable and content-driven.
- Avoid long undifferentiated sections.
- Prefer concise sections with strong headings and well-defined actions.
- Make social proof, editorial discovery, and workshop conversion coexist without clutter.

## Accessibility baseline
Accessibility target is solid mainstream quality, not bare minimum.
At minimum:
- meaningful heading hierarchy,
- sufficient contrast,
- keyboard-reachable interactive elements,
- visible focus states,
- alt text for informative images,
- no text embedded in images unless also represented in HTML,
- buttons and links with explicit labels.

## Front-end implementation guidance
- Prefer clean Astro components and content collections or config-driven sections when useful.
- Keep data centralised where possible.
- Separate content, presentation, and layout concerns.
- Reuse section patterns instead of copy-pasting markup.
- Favour lightweight interactions.
- Avoid unnecessary client-side JavaScript.
- Optimise for maintainability on GitHub Pages.

## File and architecture guidance
When creating or refactoring:
- keep a clear `src/components`, `src/layouts`, `src/pages`, and content/data structure,
- centralise brand tokens and shared constants,
- avoid hardcoded duplicates of links, colours, or labels across many files,
- prefer small purposeful components over giant monolith files.

## Decision rules for Codex
When making choices, prioritise in this order:
1. clarity for visitors,
2. alignment with the Masoda brand,
3. workshop conversion,
4. maintainability,
5. visual flourish.

If there is uncertainty:
- do not invent business facts,
- do not fabricate testimonials, event dates, products, or partner names,
- use clear placeholders and mark them explicitly,
- preserve the existing brand intent.

## Required quality bar before considering a task done
Before finishing any front-end task, verify:
- the page is coherent on mobile,
- the first screen is clear,
- the primary CTA is obvious,
- spacing is consistent,
- typography hierarchy is clear,
- colours feel premium and warm,
- no section feels templated or generic,
- no fake content has been invented,
- the result still looks credible on desktop.

## Skills to use
For this project, use these local skills whenever relevant:
- `skills/masoda-design-system/SKILL.md`
- `skills/masoda-astro-page-builder/SKILL.md`

### When to use `masoda-design-system`
Use it for:
- visual direction,
- colour and typography decisions,
- spacing systems,
- component consistency,
- CTA hierarchy,
- polishing sections so the site feels premium and coherent.

### When to use `masoda-astro-page-builder`
Use it for:
- building or refactoring pages in Astro,
- structuring homepage and conversion journeys,
- implementing reusable sections,
- assembling editorial and commerce-lite pages,
- ensuring mobile-first page composition.

## Preferred workflow for agents
1. Read this file fully.
2. Identify whether the task is mostly a **brand/UI consistency** task or a **page-building** task.
3. Open and follow the matching skill.
4. Make the smallest coherent set of changes that achieves the goal cleanly.
5. Self-review against the quality bar above.

