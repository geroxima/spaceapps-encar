---
version: alpha
name: NASA International Space Apps Challenge
description: Design meets the Galaxy and Space
colors:
  BlueYonder: "#2E96F5"
  NeonBlue: "#0960E1"
  ElectricBlue: "#0042A6"
  DeepBlue: "#07173F"
  RocketRed: "#E43700"
  MartianRed: "#8E1100"
  NeonYellow: "#eafe07"
  MoonWhite: "#FBFFFE"
typography:
  h1:
    fontFamily: Fira Sans Black
    fontSize: 60pt
    fontWeight: 900
  h2:
    fontFamily: Overpass Regular
    fontSize: 42pt
    fontWeight: 400
  h3:
    fontFamily: Overpass SemiBold
    fontSize: 20pt
    fontWeight: 600
  body:
    fontFamily: Overpass Light
    fontSize: 20pt
    fontWeight: 300
  important:
    fontFamily: Overpass Bold
    fontSize: 24px
    fontWeight: 700
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  none: 0px
spacing:
  sm: 8px
  md: 16px
  lg: 24px
components:
  button-primary:
    backgroundColor: "{colors.NeonYellow}"
    textColor: "{colors.NeonBlue}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
    typography: "{typography.important}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.ElectricBlue}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
    typography: "{typography.important}"
  card:
    backgroundColor: "{colors.NeonBlue}"
    textColor: "{colors.MoonWhite}"
    rounded: "{rounded.md}"
    padding: 20px
    typography: "{typography.body}"
  input:
    backgroundColor: "{colors.MoonWhite}"
    textColor: "{colors.DeepBlue}"
    rounded: "{rounded.sm}"
    padding: "10px 14px"
    typography: "{typography.body}"
---

# NASA International Space Apps Challenge

## Overview

Industrial design meets science and youthful colors. The site evokes yonder and innovation. Space wonder and exploration. Convey information simply and directly.

## Colors

The palette is rooted in semantic tokens. Use the role (e.g. `{colors.primary}`) — never the hex literal — when authoring components.

- **BlueYonder (#2E96F5)**
- **NeonBlue (#0960E1)**
- **ElectricBlue (#0042A6)**
- **DeepBlue (#07173F)**
- **RocketRed (#E43700)**
- **MartianRed (#8E1100)**
- **NeonYellow (#eafe07)**
- **MoonWhite (#FBFFFE)**

## Typography

| Token       | Font              | Size | Weight |
| ----------- | ----------------- | ---- | ------ |
| `h1`        | Fira Sans Black   | 60pt | 900    |
| `h2`        | Overpass Regular  | 42pt | 400    |
| `h3`        | Overpass SemiBold | 20pt | 600    |
| `body`      | Overpass Light    | 20pt | 300    |
| `important` | Overpass Bold     | 24px | 700    |

## Layout

Spacing scale (use the named scale; avoid arbitrary values):

- `spacing.sm` — 8px
- `spacing.md` — 16px
- `spacing.lg` — 24px

## Elevation & Depth

Depth is conveyed through accents and shapes that evoke yonder, admiration and inspiration for space and science. Use colors, round shapes. When using imagery prefer **circular** holding shapes.

## Shapes

Corner radius scale:

- `rounded.sm` — 4px
- `rounded.md` — 8px
- `rounded.lg` — 16px
- `rounded.none` — 0px

## Components

### button-primary

- backgroundColor: `{colors.NeonYellow}`
- textColor: `{colors.NeonBlue}`
- rounded: `{rounded.sm}`
- padding: `12px 20px`
- typography: `{typography.important}`

### button-secondary

- backgroundColor: `transparent`
- textColor: `{colors.ElectricBlue}`
- rounded: `{rounded.sm}`
- padding: `12px 20px`
- typography: `{typography.important}`

### card

- backgroundColor: `{colors.NeonBlue}`
- textColor: `{colors.MoonWhite}`
- rounded: `{rounded.md}`
- padding: `20px`
- typography: `{typography.body}`

### input

- backgroundColor: `{colors.MoonWhite}`
- textColor: `{colors.DeepBlue}`
- rounded: `{rounded.sm}`
- padding: `10px 14px`
- typography: `{typography.body}`

## Do's and Don'ts

- ### 2.1 Text color combinations by background
- **On White:**
- - H1: Blue Near Black (Deep Blue)
- - H2/subheading alt lines: Rocket Red (Medium Red) + Blue Near Black
- - Body: Slate Gray
- - Links: standard blue link color, underlined
- - Button: Neon Yellow background, Blue Near Black text
- - Secondary link: blue, underlined
- **On Deep Blue / dark background:**
- - H1: White
- - H2/subheading alt lines: Rocket Red + White
- - Body: White
- - Button: Neon Yellow background, Blue Near Black text
- - Secondary link: White, underlined; hover state: Rocket Red
- - Hover state for links: Rocket Red
- **On Electric Blue:**
- - H1: White
- - H2/subheading alt lines: Neon Yellow + White
- - Body: White
- - Button: Neon Yellow background, Blue Near Black text
- - Secondary link: White, underlined; hover state: Rocket Red
- **Rule of thumb:** on colored/dark backgrounds, alternate the accent color
- (Rocket Red on Deep Blue and White backgrounds; Neon Yellow on Electric Blue
- backgrounds) with the primary text color for multi-line subheadings, like
- stripes.
- ### Type scale & hierarchy (reference sizes, desktop)
- - **H1 Headline** — Fira Sans Black, 60pt/120%, ALL CAPS, +5% letter spacing.
- - **H2 Headline** — Overpass Regular, 42pt/120%. Long H2 blocks may alternate
- text color line-by-line ("stripes on the flag" effect — see §2.1).
- - **H3 Subheading** — Overpass SemiBold, 20pt/150%, ALL CAPS.
- - **Body copy** — Overpass Light, 20pt/150%, paragraph spacing 20pt.
- - **Buttons / links** — Overpass Bold, 24pt (scale proportionally for UI).
- - Palette strongly favors blue (space, discovery). Red and yellow are accents.
- - **Neon Yellow**: accent color for text, buttons, small symbols, highlights,
- interactive/attention-grabbing elements (e.g., hyperlinks), and to highlight
- a paragraph. **Never** use as a background color. **Never** use for headline
- text (headlines already carry visual weight). Apply the 60-30-10 rule
- (dominant / secondary / accent) with Neon Yellow as the ~10% accent.
- - **Rocket Red**: never use as a background color.
- - Body text may only sit on one of three backgrounds: **Deep Blue**,
- **Electric Blue**, or **White**.
- - Never use color alone to convey meaning (e.g., "stop" or "error") — always
- pair color with text or an icon for accessibility.
