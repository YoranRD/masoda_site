# Skill — Masoda Astro Page Builder

## Purpose
Use this skill when building, restructuring, or refactoring pages and reusable sections in Astro for the Masoda site.

This skill focuses on:
- page architecture,
- content hierarchy,
- conversion paths,
- reusable section composition,
- mobile-first implementation.

## Default page-building philosophy
For Masoda, pages should not be assembled as long unstructured marketing pages.
Each page should have a clear narrative sequence with a small number of purposeful sections.

Default flow:
1. orient the visitor quickly,
2. show value and atmosphere,
3. guide to the main action,
4. provide reassurance or discovery,
5. repeat the relevant CTA.

## Implementation rules
### 1. Build mobile-first
Start with the narrow layout logic first.
Ask:
- what does the visitor see in the first screen,
- what is the first actionable decision,
- what can be removed or simplified on small screens,
- how do sections stack without becoming repetitive.

Do not design desktop first and compress later.

### 2. Reuse sections intentionally
Prefer reusable components such as:
- hero,
- section intro,
- workshop highlights,
- editorial cards,
- curated category cards,
- social proof / reassurance blocks,
- newsletter block,
- partner / collaboration CTA,
- FAQ accordion,
- final CTA band.

Do not duplicate near-identical markup across pages if a component can express it cleanly.

### 3. Separate content from structure
Whenever practical:
- centralise external links,
- centralise key CTA labels,
- use data objects or content collections for repeatable cards,
- avoid burying business-critical text inside many component files.

This is especially important because booking URLs may change monthly.

### 4. Keep content honest
Never invent:
- partner brands,
- product details,
- workshop dates,
- testimonials,
- press mentions,
- attendance metrics.

If content is missing, create a credible placeholder structure and label it clearly.

## Page templates and expectations
### Homepage template
Recommended structure:
1. Hero: who Masoda is + book CTA.
2. Intro / positioning: creative wellbeing afro-centred universe.
3. Atelier spotlight: strongest conversion block.
4. Lifestyle pillars: baya, plantes, nutrition anti-stress, déco, art.
5. Editorial discovery: recent or featured articles.
6. Collaboration / partner block.
7. Social / Instagram-TikTok-Pinterest discovery.
8. Newsletter block.
9. Final CTA.

Rules:
- booking CTA must appear early,
- do not let blog content overpower workshops on the homepage,
- keep the page emotionally warm and commercially clear.

### Ateliers page template
Recommended structure:
1. Hero with immediate booking CTA.
2. What the experience is.
3. For whom / why come.
4. Practical info.
5. Current or upcoming sessions.
6. Private events or collaboration angle.
7. FAQ.
8. Final booking CTA.

### Boutique page template
Recommended structure:
1. Hero explaining curated affiliate boutique logic.
2. Category grid.
3. Featured selections or placeholder curation modules.
4. Why these products fit Masoda.
5. Newsletter or social discovery.

The boutique must feel curated, not mass retail.

### Blog / Journal page template
Recommended structure:
1. Hero / intro to editorial universe.
2. Category filters or featured themes.
3. Article grid.
4. Pinterest discovery or inspiration block.
5. Newsletter CTA.

### Partenaires / Contact page template
Recommended structure:
1. Hero with collaboration angle.
2. Types of collaborations.
3. Why Masoda / audience / brand fit.
4. Contact method.
5. Social links and reassurance.

## Astro-specific guidance
- Prefer static-friendly patterns.
- Keep pages fast and lightweight.
- Use layouts and shared components consistently.
- Minimise client directives unless needed.
- If a section is mostly content, keep it server-rendered/static.
- Use content collections when editorial scale starts increasing.

## Suggested content/config centralisation
If the project structure allows it, centralise things like:
- site metadata,
- social links,
- reservation URL,
- navigation labels,
- partner CTA email/contact info,
- boutique categories,
- homepage featured sections.

That makes updates safer and easier for a non-developer workflow.

## QA checklist per page
Before considering a page complete, verify:
- first screen explains the page clearly,
- one CTA is dominant,
- section order makes sense on mobile,
- repeated components are visually consistent,
- copy is concise enough,
- links are not duplicated inconsistently,
- no placeholder text sounds fake or sloppy,
- desktop layout gains elegance rather than just empty width.

## Refactor checklist
When refactoring an existing page:
1. Identify duplicated patterns.
2. Extract reusable components only where it genuinely simplifies the code.
3. Preserve content intent.
4. Improve CTA clarity.
5. Improve spacing and hierarchy.
6. Avoid overengineering.

## Definition of success
A successful Masoda page in Astro should:
- be easy to scan in under 10 seconds,
- express the Masoda mood quickly,
- make the next action obvious,
- feel premium without excess,
- be maintainable by future iterations.
