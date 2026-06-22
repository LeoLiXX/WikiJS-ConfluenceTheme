# Wiki.js Confluence-like Theme SDD

## 1. Background

The current custom `wiki.css` is only a technical reference for Wiki.js/Vuetify selectors.
It is not the design baseline.

The customer is not satisfied with the current visual style, especially the existing
brand-like teal color direction, uppercase headings, decorative gradients, and overall
non-Confluence look. The new work should be treated as a redesign toward a Confluence
Wiki documentation experience.

Reference page:

https://confluence.atlassian.com/doc/confluence-data-center-documentation-135922.html

## 2. Goal

Create a custom Wiki.js theme style that makes Wiki.js feel visually close to
Atlassian Confluence documentation:

- Enterprise documentation / knowledge-base appearance.
- Clean white surfaces, subtle gray borders, restrained shadows.
- Atlassian-like blue accent color for links, active states, and primary actions.
- Clear left navigation and content hierarchy.
- Comfortable long-form reading experience for technical documents.

The target is "Confluence-like", not an exact pixel-for-pixel clone.

## 3. Non-goals

- Do not continue the current teal visual direction from `wiki.css`.
- Do not preserve uppercase heading styling as a design feature.
- Do not add heavy decorative gradients or brand-specific ornamental styling.
- Do not modify Wiki.js source code unless CSS-only customization proves insufficient.
- Do not attempt to copy Atlassian proprietary assets, logos, or exact branding.
- Do not invent unsupported Wiki.js theme package formats, plugin APIs, build steps,
  admin screens, or configuration interfaces.
- Do not treat the local preview page as part of the Wiki.js runtime deliverable.

## 4. Wiki.js Custom CSS Boundary

This project must stay within the Wiki.js custom CSS / CSS override boundary.

Verified reference points:

- Official Wiki.js site describes the supported customization surface as injecting or
  overriding CSS/JS from the administration area: https://js.wiki/
- Official Wiki.js developer theme documentation says custom themes are not fully
  supported and describes developer-oriented bundle/database work:
  https://docs.requarks.io/dev/themes

Therefore the implementation deliverable is `wiki.css` as a CSS override plus local
preview support. It is not a Wiki.js custom theme package, plugin, source-code patch,
database migration, or build workflow.

## 5. Scope

First version should cover the common Wiki.js reading experience:

- Global font, colors, spacing, and surface styles.
- Top navigation / app bar.
- Left navigation drawer and active page state.
- Main article header and body typography.
- Links, lists, tables, inline code, code blocks, blockquotes, and admonitions.
- Buttons, search fields, dividers, cards/panels, and footer.
- Floating edit/action buttons.
- Basic responsive behavior for local preview and browser resizing.

Dark mode may be supported if practical, but the primary acceptance target is the
light Confluence-like documentation experience.

## 6. Design Direction

### 6.1 Color

Recommended palette:

- Primary blue: Atlassian-like blue for links and primary actions.
- Text: near-black for headings and body.
- Muted text: medium gray for metadata and secondary labels.
- Border: light neutral gray.
- Surface: white and very light gray backgrounds.
- Hover: pale blue or pale gray.
- Code: light neutral background with readable monospace text.
- Status colors: restrained info, warning, success, and danger variants.

### 6.2 Typography

- Keep a modern sans-serif stack with Chinese fallback.
- Avoid all-caps headings.
- Use clear heading hierarchy with modest spacing.
- Body text should prioritize long-form readability.

### 6.3 Layout Feel

- Documentation-first layout.
- Left navigation should feel like Confluence space/page navigation.
- Content area should be calm, readable, and not overly branded.
- UI should be dense enough for work use, without looking crowded.

## 7. Implementation Plan

1. Treat existing `wiki.css` as a selector map and implementation reference only.
2. Replace the current visual language with a Confluence-like design system.
3. Keep the implementation strictly aligned with Wiki.js custom CSS usage.
4. Add a local preview page that simulates common Wiki.js DOM/content patterns.
5. Verify the theme locally before treating it as ready for Wiki.js testing.

## 8. Deliverables

- `wiki.css`: final Wiki.js custom CSS.
- `preview.html`: local verification page that imports `wiki.css`; this is only a
  validation aid and not part of the Wiki.js runtime customization.
- Optional `README.md`: concise instructions for previewing locally and applying the CSS in Wiki.js.

## 9. Local Verification Requirement

The finished work must be easy to validate on this machine before it is installed into
a real Wiki.js instance.

Recommended local verification flow:

```powershell
python -m http.server 4173
```

Then open:

```text
http://localhost:4173/preview.html
```

The preview page should include representative Wiki content:

- Top app bar and search area.
- Left navigation with active and hover-like states.
- Article title and metadata.
- Headings, paragraphs, links, lists, tables.
- Inline code and code block examples.
- Info, warning, success, and danger callouts.
- Buttons and common action controls.

## 10. Acceptance Criteria

- The result no longer resembles the old teal theme.
- The visual direction is recognizably closer to Confluence documentation.
- The page feels suitable for enterprise documentation and knowledge-base use.
- Main content remains readable for long technical articles.
- Left navigation has clear active, hover, and section states.
- Tables, code blocks, blockquotes, and callouts are polished and consistent.
- The theme can be previewed locally through `preview.html`.
- The CSS can be copied into Wiki.js custom CSS without requiring source-code changes.
- The implementation does not depend on hallucinated or unsupported Wiki.js extension
  mechanisms.
