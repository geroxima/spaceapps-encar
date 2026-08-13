# NASA Space Apps Challenge — Styling Guide

Source: NASA Space Apps Brand Guidelines (updated June 25, 2026). Use this
document as the single source of truth when designing anything — web pages,
slides, artifacts, social assets, merch — for NASA Space Apps Challenge.
Full guide + downloadable assets: spaceappschallenge.org/brand

---

## 1. Color Palette

Always use these exact hex values. Do not invent new colors or shift hues.

| Name          | Hex       | PMS              | Role                               |
| ------------- | --------- | ---------------- | ---------------------------------- |
| Deep Blue     | `#07173F` | PMS 295 C        | Primary dark background            |
| Electric Blue | `#0042A6` | PMS 2146 C       | Primary background / gradient stop |
| Neon Blue     | `#0960E1` | —                | Accent blue                        |
| Blue Yonder   | `#2E96F5` | —                | Accent blue (lighter)              |
| Rocket Red    | `#E43700` | PMS Bright Red C | Accent — NASA red                  |
| Martian Red   | `#8E1100` | —                | Deep accent red                    |
| Neon Yellow   | `#EAFE07` | PMS Neon 387     | Accent ONLY (never a background)   |
| White         | `#FFFFFF` | —                | Background / text                  |

### Color rules

- Palette strongly favors blue (space, discovery). Red and yellow are accents.
- **Neon Yellow**: accent color for text, buttons, small symbols, highlights,
  interactive/attention-grabbing elements (e.g., hyperlinks), and to highlight
  a paragraph. **Never** use as a background color. **Never** use for headline
  text (headlines already carry visual weight). Apply the 60-30-10 rule
  (dominant / secondary / accent) with Neon Yellow as the ~10% accent.
- **Rocket Red**: never use as a background color.
- Body text may only sit on one of three backgrounds: **Deep Blue**,
  **Electric Blue**, or **White**.
- Never use color alone to convey meaning (e.g., "stop" or "error") — always
  pair color with text or an icon for accessibility.

### Contrast (WCAG 2.0)

- All text/background color pairings must meet **4.5:1** minimum contrast
  (AA). Prefer AAA (7:1+) where possible.
- 3:1–4.5:1 combinations are "large text only" (≥18pt / 14pt bold) — avoid
  for body copy.
- Below 3:1 — never use.
- Verify any new pairing with a contrast checker (e.g., WebAIM) before using it.

### Gradient

- Linear gradient only, background use.
- Direction: top-left **Electric Blue** `#0042A6` → bottom-right **Deep Blue**
  `#07173F`, at approximately a 45° angle.
- Must be smooth/eased across its full extent — no abrupt or banded
  transitions.

---

## 2. Typography

All typefaces are free/libre (GPL or SIL OFL) and available on Google Fonts.

| Use                       | Typeface      | Weights                                |
| ------------------------- | ------------- | -------------------------------------- |
| Titles & Headings         | **Fira Sans** | Black, Bold                            |
| Body copy / UI            | **Overpass**  | Light, Regular, SemiBold, Bold, Italic |
| Code / pre-formatted text | **Fira Code** | Regular, Bold                          |

### Type scale & hierarchy (reference sizes, desktop)

- **H1 Headline** — Fira Sans Black, 60pt/120%, ALL CAPS, +5% letter spacing.
- **H2 Headline** — Overpass Regular, 42pt/120%. Long H2 blocks may alternate
  text color line-by-line ("stripes on the flag" effect — see §2.1).
- **H3 Subheading** — Overpass SemiBold, 20pt/150%, ALL CAPS.
- **Body copy** — Overpass Light, 20pt/150%, paragraph spacing 20pt.
- **Buttons / links** — Overpass Bold, 24pt (scale proportionally for UI).

Web/UI pixel equivalents used in examples: H1 60px, H2/subhead 42px, body
20px, button/link 24px.

### 2.1 Text color combinations by background

**On White:**

- H1: Blue Near Black (Deep Blue)
- H2/subheading alt lines: Rocket Red (Medium Red) + Blue Near Black
- Body: Slate Gray
- Links: standard blue link color, underlined
- Button: Neon Yellow background, Blue Near Black text
- Secondary link: blue, underlined

**On Deep Blue / dark background:**

- H1: White
- H2/subheading alt lines: Rocket Red + White
- Body: White
- Button: Neon Yellow background, Blue Near Black text
- Secondary link: White, underlined; hover state: Rocket Red
- Hover state for links: Rocket Red

**On Electric Blue:**

- H1: White
- H2/subheading alt lines: Neon Yellow + White
- Body: White
- Button: Neon Yellow background, Blue Near Black text
- Secondary link: White, underlined; hover state: Rocket Red

**Rule of thumb:** on colored/dark backgrounds, alternate the accent color
(Rocket Red on Deep Blue and White backgrounds; Neon Yellow on Electric Blue
backgrounds) with the primary text color for multi-line subheadings, like
stripes.

---

## 3. Logo ("The Orbit")

The logo is **responsive** — pick the version that fits the space/resolution,
not by preference.

- **Core element**: the "Orbit" — a circle suggesting a planet/comet/satellite.
- **Default (horizontal) logo** — Orbit + "NASA" (red) + "SPACE APPS" (large)
  - "CHALLENGE" (tracked caps), arranged horizontally. **Preferred / default
    choice in most contexts** — pairs well with headlines and other text, fits
    the widest range of layouts.
- **Motif logo** — a self-contained circular lockup where the Orbit shape
  encloses the full wordmark. Treat as a **special option**, used mainly when
  there is little to no other text (e.g., merch: t-shirts, stickers, magnets).
- **Small logo** — just the Orbit shape, no text. Use when space or
  resolution is extremely limited (favicons, avatars). Preferred over
  shrinking the full logo, since small text becomes illegible.

### Logo don'ts (apply to every logo variant)

- Don't tilt, rotate, or skew the logo.
- Don't stretch or distort any element.
- Don't recolor — use only the provided colorways.
- Don't rearrange, deconstruct, or reassemble the lockup elements.
- Don't substitute or combine with official NASA "meatball" branding.
- Don't add strokes/outlines to the typography.
- Don't place the logo on busy, noisy, or low-contrast photographic
  backgrounds.

---

## 4. Photography

- Use full-color images at sufficient resolution for their display size.
- Avoid photo-manipulation or artificial/composited elements — prefer
  authentic imagery.
- **Always place images inside a holding shape.** Never overlay text or other
  design elements on top of, or embed content inside, a photo.
- Digital/web: rectangular holding shapes, or circles where appropriate.
- Print / self-contained social assets: prefer **circular** holding shapes.
  Circles can hang off the edge of a composition, appear as full circles, or
  stack multiple images to suggest celestial bodies.
- Circular holding shapes may be paired with thin concentric-line
  illustrations (orbit/ripple motifs).

---

## 5. Shapes & Icons

- Use icons/symbols only when meaning is unambiguous; otherwise prefer text
  labels.
- Style: **lightweight, line-based, consistent stroke weight** (outline
  icons, not filled/solid).
- Must contrast strongly against the background.
- Round icon sizes to powers of two or standard sizes to avoid anti-aliasing
  artifacts.
- Recommended libraries: **Phosphor Icons** (phosphoricons.com), **Feather
  Icons** (feathericons.com), or Streamline Line style. Custom icons are fine
  if they follow the same stroke/weight rules.

---

## 6. Patterns

- Decorative background patterns evoke orbits, coordinates, waves, cells,
  code, geometry — for scientific/technological texture.
- Screen patterns back to **~25% opacity** over a brand color, preferably a
  blue.
- Any custom pattern/vector art used this way must be **single-color**
  vector artwork, screened at the same ~25% opacity rule.

---

## 7. Awards / Badges

- Awards are illustrated as **3D icons** (not flat/line style — this is the
  one exception to the icon rules above), rendered in Neon Yellow / metallic
  gray tones on dark blue tiles.
- Categories include: Most Inspirational, Best Mission Concept, Galactic
  Impact, Best Use of Data, Local Impact, Global Community, Best Use of
  Technology, Best Use of Storytelling, Best Use of Science, Art &
  Technology.
- Optionally place the 3D icon inside a circular holding shape to form a
  "badge."

---

## 8. Quick Decision Checklist (for AI-generated assets)

1. **Background** → Deep Blue, Electric Blue, White, or the approved
   45° gradient (Electric Blue → Deep Blue). Never Rocket Red as a background.
2. **Headings** → Fira Sans Black, all caps, correct text color for the
   background (see §2.1).
3. **Body text** → Overpass Regular/Light, correct color, ≥4.5:1 contrast.
4. **Accent** → Neon Yellow sparingly, for links/buttons/highlights only —
   never backgrounds, never headlines.
5. **Logo** → pick Default (horizontal) unless it's merch/no-text context
   (Motif) or extremely tight space (Small/Orbit-only). Don't modify it.
6. **Photos** → always in a holding shape (rectangle or circle), no text
   overlaid on the image itself.
7. **Icons** → line-style, single consistent stroke, high-contrast color,
   from Phosphor/Feather/Streamline (or matching custom icons).
8. **Decoration** → optional single-color pattern at ~25% opacity over a
   blue background.
9. **Accessibility** → check every text/background pair against the 4.5:1
   contrast rule before finalizing.
