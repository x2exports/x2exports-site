# IronForge Exports — Design Directions

## Three stylistic approaches

### Theme Name: Forge Ledger
**Very Brief Intro:** A warm industrial editorial direction that treats the catalog like a beautifully typeset trade journal: graphite, bone, and oxidized orange with steel textures and precise information hierarchy.
**Probability:** 0.03

### Theme Name: Port of Scale
**Very Brief Intro:** A restrained maritime-industrial system built around deep navy, salt white, safety yellow, and blueprint-like diagrams, emphasizing global reach and logistics credibility.
**Probability:** 0.08

### Theme Name: Workshop Monument
**Very Brief Intro:** A stark architectural showcase with oversized product imagery, concrete neutrals, and museum-like pacing that makes everyday industrial furniture feel engineered and enduring.
**Probability:** 0.06

## Chosen Direction: Forge Ledger

### Design Movement
Contemporary industrial editorial, borrowing the discipline of Swiss International Typographic Style and the tactile honesty of utilitarian workshop graphics.

### Core Principles
1. **Material first:** Iron, powder coat, welds, and load-bearing geometry are treated as the visual story, not decorative afterthoughts.
2. **Editorial hierarchy:** Oversized condensed headlines, small technical labels, and visible numbering make the site feel like a trusted export catalog.
3. **Measured asymmetry:** Offset columns, rule lines, and staggered product panels avoid a generic centered SaaS layout while keeping content easy to scan.
4. **Warm precision:** Hard-edged geometry is softened by bone paper tones, amber-orange accents, and tactile grain.

### Color Philosophy
The palette is anchored by near-black graphite (#151716) for confidence, bone (#F2EEE6) for a printed-catalog warmth, and oxidized orange (#C95E2E) as the ownable signal color. Muted steel (#7A827F) and pale zinc (#D8D8D2) create industrial range without drifting into a cold tech aesthetic. Orange is reserved for action, measurement, and moments of proof; it should feel like a hand-painted factory marking.

### Layout Paradigm
The page behaves like an export catalog spread: a full-bleed hero with a split image/text lockup, a narrow vertical index rail, wide editorial bands, and product cards that alternate image weight and text density. Section intros sit on the left while proof points and grids flow from the right, creating motion across the page instead of stacking centered blocks.

### Signature Elements
- A thin orange index line with numbered section markers (01 / 02 / 03) that travels through the page.
- Technical microcopy in uppercase with generous tracking, paired with small steel-gray metadata chips.
- A faint paper grain and blueprint grid texture used sparingly behind bone sections.

### Interaction Philosophy
Interactions should feel like handling a well-made object: direct, tactile, and immediate. Links gain an underline or orange edge, buttons compress slightly on press, product cards lift by a few pixels with a hard shadow, and inquiry actions open a calm, focused modal rather than sending visitors into a dead end.

### Animation
Use short, physical transitions: 180–260ms ease-out for hover states, 100–160ms button press feedback, and 40–70ms staggered reveals for catalog items. Hero layers can drift in from their final position on load, but motion must be subtle and respect reduced-motion preferences. Avoid looping motion except for a low-opacity grain texture and a single thin line draw-in effect.

### Typography System
Use **Barlow Condensed** for display headings, product labels, section indices, and numeric proof points; it gives the brand a strong industrial silhouette. Use **DM Sans** for body copy, navigation, form fields, and supporting detail. Headings are bold and often uppercase with tight line-height; body copy uses 16–18px with relaxed line-height; metadata uses 11–12px uppercase with 0.14em tracking.

### Brand Essence
**IronForge Exports equips industrial spaces worldwide with dependable iron furniture that is specified with care, manufactured for repeatability, and shipped with confidence.**

**Personality:** exacting, grounded, capable.

### Brand Voice
Headlines are decisive and specific. CTAs should sound like the next action in a trade conversation, never like generic startup filler. Microcopy is clear about what happens next and avoids unearned claims.

Example lines:
- “Built for the shift. Packed for the world.”
- “Send your requirement. We’ll return a buildable quote.”

### Wordmark & Logo
The mark is a compact **IF monogram** built from two interlocking right-angle steel profiles: the vertical stroke of the I doubles as a rack upright, while the F locks into it like a bracket. The symbol should work without text on the favicon and beside the wordmark in the header. The wordmark is set in a custom-feeling condensed uppercase treatment with a deliberate gap between IRON and FORGE, never a default logo lockup.

### Signature Brand Color
**Oxidized Orange — #C95E2E.** A painted factory mark translated into a confident export signal: visible at a distance, useful for action, and unmistakably tied to the brand.

## Style Decisions
- Keep the page editorial and asymmetric; do not default to a centered marketing template.
- Use the generated product visuals as distinct focal points rather than repeating one image across sections.
- Keep CTAs specific to industrial sourcing: “View the range,” “Request a quote,” and “Talk to exports.”
- Maintain dark text on bone/light imagery and light text only on the graphite hero panel for contrast.
