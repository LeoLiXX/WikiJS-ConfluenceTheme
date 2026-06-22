# Handoff Log

This file records project state, completed steps, convergence checks, and decisions.

## Current Objective

Implement a Confluence-like custom CSS theme for Wiki.js using the SDD in
`Requirement.md`, with local preview support for easy validation.

## Repository Baseline

- Local Git repository initialized.
- Baseline commit: `f379a94 chore: initialize wiki theme baseline`.
- Workflow checkpoint commit: `c1c5705 docs: add agent workflow and css boundary`.
- Baseline files:
  - `Requirement.md`
  - `wiki.css`

## Task Status

| Task | Title | Status |
| --- | --- | --- |
| T0 | Project Setup And Baseline | Completed |
| T1 | Selector Audit | Completed |
| T2 | Theme Foundation | Completed |
| T3 | Global Layout And Shell | Pending |
| T4 | Article Typography | Pending |
| T5 | Rich Content Components | Pending |
| T6 | Floating Actions And Common Controls | Pending |
| T7 | Local Preview Implementation | Pending |
| T8 | Documentation For Local Validation | Pending |
| T9 | Local Verification | Pending |
| T10 | Final Acceptance Pass | Pending |

## Completed Steps

### 2026-06-22 - SDD Draft

Files changed:

- `Requirement.md`

Completed:

- Expanded the initial requirement into a lightweight SDD.
- Clarified that the existing `wiki.css` is only a technical selector reference.
- Clarified that the old teal style is rejected by the customer and must not be continued.
- Added local verification as a required deliverable.

Convergence checks:

- SDD states Confluence-like target: Passed.
- SDD excludes old teal visual direction: Passed.
- SDD requires local preview: Passed.

Verification:

- Read back `Requirement.md` after editing.

Known risks:

- Historical note: detailed design tokens were not finalized at SDD draft time; this was
  later resolved by T2.

### 2026-06-22 - Git Baseline

Files changed:

- `.git/` repository metadata

Completed:

- Initialized local Git repository.
- Committed `Requirement.md` and existing `wiki.css` as baseline.

Convergence checks:

- Git repository exists: Passed.
- Baseline commit exists: Passed, `f379a94`.
- Worktree was clean after commit: Passed at time of check.

Verification:

- Ran `git init`.
- Ran `git add -- Requirement.md wiki.css`.
- Ran `git commit -m "chore: initialize wiki theme baseline"`.

Known risks:

- None for baseline.

### 2026-06-22 - Agent Working Agreement

Files changed:

- `Agent.md`
- `HANDOFF.md`

Completed:

- Added binding repository working agreement in `Agent.md`.
- Added running handoff log in `HANDOFF.md`.
- Split SDD execution into explicit tasks with objective, convergence conditions,
  owner, and handoff requirement.
- Delegated an independent SDD task-breakdown review to sub-agent `Peirce`.
- Incorporated the sub-agent task breakdown into the final task structure.

Convergence checks:

- `Agent.md` exists and describes strict working process: Passed.
- SDD work is split into tasks with explicit convergence conditions: Passed.
- Handoff document exists and records completed setup steps: Passed.
- Sub-agent delegation rule is documented for context hygiene: Passed.
- Completed steps are recorded in `HANDOFF.md`: Passed.

Verification:

- Read `Requirement.md`.
- Created `Agent.md` and `HANDOFF.md`.
- Reviewed sub-agent output and updated task breakdown accordingly.

Known risks:

- Future implementation tasks still need their own handoff entries as they move from
  pending to completed.

### 2026-06-22 - Wiki.js Custom CSS Red Line

Files changed:

- `Agent.md`
- `Requirement.md`
- `HANDOFF.md`

Completed:

- Added explicit user red line that generated deliverables must strictly follow Wiki.js
  custom CSS usage.
- Prohibited unsupported or imagined Wiki.js theme package formats, plugin APIs, build
  steps, admin screens, and configuration interfaces.
- Clarified that `preview.html` is a local validation aid only.
- Verified official boundary:
  - Wiki.js public site describes CSS/JS override from the administration area:
    https://js.wiki/
  - Wiki.js developer theme documentation says custom themes are not fully supported
    and describes developer bundle/database work:
    https://docs.requarks.io/dev/themes

Convergence checks:

- Red line appears in `Agent.md`: Passed.
- Red line appears in `Requirement.md`: Passed.
- Red line appears in `HANDOFF.md`: Passed.
- Final acceptance conditions include no unsupported Wiki.js mechanisms: Passed.
- Official reference points are recorded: Passed.

Verification:

- Read existing `Agent.md`, `Requirement.md`, and `HANDOFF.md`.
- Checked official Wiki.js public site and developer theme documentation.
- Applied scoped documentation updates.

Known risks:

- Future implementation should verify real Wiki.js custom CSS behavior from local
  evidence or official documentation if uncertainty arises.

### 2026-06-22 - T1 Selector Audit

Files changed:

- `HANDOFF.md`

Completed:

- Delegated selector audit to sub-agent `Lorentz`.
- Reviewed `wiki.css` strictly as a Wiki.js/Vuetify selector map.
- Grouped selectors for global app, app bar/search, navigation drawer, article
  content, links, code, callouts, buttons/FABs, editor toolbar, footer, and dark mode.
- Identified broad Vuetify utility overrides and internal Vuetify/Wiki.js selectors as
  version-sensitive risks.
- Confirmed old teal palette, uppercase headings, decorative gradients, and current
  visual decisions must not be carried into the redesign.

Selector groups:

- Global app:
  - `#root .v-application`
  - `.primary`, `.primary--text`, `.blue.darken-2`, `.blue.darken-3`, `.deep-purple`
- App bar / top nav / search:
  - `.v-toolbar__title .subheading`
  - `.nav-header .v-toolbar.v-sheet`
  - `.nav-header.v-app-bar.v-app-bar`
  - `.nav-header ... .v-input__slot`
- Navigation drawer:
  - `.v-navigation-drawer`
  - `.v-list.primary`, `.v-navigation-drawer__content`, `.v-sheet`
  - `.v-icon`, `.v-list-group__header*`, `.v-list-item*`, `.v-subheader`
  - `.v-btn*`, `.v-divider`, `.v-list-item--active`, `.v-list-item:hover`
  - `.v-list-item--active::before`
  - `.__bar-wrap-is-vertical .__bar-is-vertical`
- Main content / article typography:
  - `.page-header-section .headline`
  - `.page-header-section .caption`
  - `.v-main .contents h1` through `h5`
  - `.v-main .contents h1:first-child`
  - `.v-main .contents h1::after` through `h5::after`
- Links / lists / tables:
  - `.v-main .contents a`, `a:hover`, `a:focus`
  - No explicit list selectors found in old `wiki.css`.
  - No explicit table selectors found in old `wiki.css`.
  - Later tasks should cover `.contents ul`, `.contents ol`, `.contents li`,
    `.contents table`, `.contents th`, and `.contents td` based on rendered Wiki.js
    content assumptions.
- Inline code / code blocks:
  - `.v-main .contents code`
  - `.v-main .contents .prismjs code`
- Blockquotes / callouts / admonitions:
  - `.v-main .contents blockquote`
  - `blockquote.is-info`, `blockquote.is-warning`, `blockquote.is-danger`,
    `blockquote.is-success`
  - Matching `::before` selectors for each callout state
- Buttons / FAB / action controls:
  - `.v-navigation-drawer .v-btn`
  - `.v-navigation-drawer .v-btn.blue`
  - `.v-navigation-drawer .v-btn.darken-2`
  - `.v-navigation-drawer .v-btn.darken-3`
  - `.v-navigation-drawer .v-btn.primary`
  - `.v-navigation-drawer .v-btn .v-btn__content`
  - `.v-navigation-drawer .v-btn .v-icon`
  - `.v-speed-dial .v-btn.v-btn--fab.btn-animate-edit`
  - `.v-speed-dial .v-btn.v-btn--fab.red`
- Editor toolbar:
  - `.editor-markdown .editor-markdown-toolbar`
- Footer:
  - `.v-footer a`
  - `.theme--dark .v-footer`
- Dark mode:
  - `.theme--dark .v-main .contents h2` through `h5`
  - `.theme--dark .v-main .contents a`, `a:hover`, `a:focus`
  - `.theme--dark .v-main .contents blockquote`
  - `.theme--dark .v-main .contents blockquote::before`
  - `.theme--dark .v-main .contents blockquote.is-info`
  - `.theme--dark .v-main .contents blockquote.is-warning`
  - `.theme--dark .v-main .contents blockquote.is-danger`
  - `.theme--dark .v-main .contents blockquote.is-success`

Risky, global, or version-sensitive selectors:

- `.primary`, `.primary--text`, `.blue.darken-2`, `.blue.darken-3`, `.deep-purple`
  are broad Vuetify utility overrides and may affect unrelated controls.
- `.v-input__slot` is a Vuetify internal structure and may be version-sensitive.
- `.v-list-group__header__append-icon`, `__content`, and `__prepend-icon` are
  Vuetify internal class names and may be version-sensitive.
- `.__bar-wrap-is-vertical .__bar-is-vertical` appears to target custom scrollbar
  internals and is high risk.
- `.btn-animate-edit` appears Wiki.js-specific and should be verified against real DOM.
- `.editor-markdown .editor-markdown-toolbar` is editor-only and may not appear in
  read-only preview.
- `.contents .prismjs code` assumes Prism wrapper markup.
- `blockquote.is-info`, `.is-warning`, `.is-danger`, and `.is-success` assume Wiki.js
  admonitions render as status blockquotes.
- `#root .v-application` is likely correct for Wiki.js/Vuetify but tightly couples the
  override to current root structure.

DOM assumptions:

- Wiki.js mounts under `#root` and uses Vuetify `.v-application`.
- Top navigation uses `.nav-header`, `.v-app-bar`, `.v-toolbar`, and search/input
  markup with `.v-input__slot`.
- Left navigation uses `.v-navigation-drawer`, `.v-list`, `.v-list-item`,
  `.v-list-group__header`, `.v-subheader`, `.v-divider`, and `.v-list-item--active`.
- Article content renders under `.v-main .contents`.
- Page title and metadata use `.page-header-section .headline` and `.caption`.
- Code highlighting uses `.prismjs code`.
- Callouts/admonitions are represented by `blockquote` plus status classes.
- Floating actions use `.v-speed-dial`, `.v-btn--fab`, `.btn-animate-edit`, and `.red`.
- Dark mode is signaled by `.v-application.theme--dark`.

Must not carry forward:

- Teal palette: `#70c7ba`, `#42a999`, `#4bb9a8`, `#3b9689`, `#49eacb`,
  `#a4f5e5`, `#108a73`, and related dark teal variants.
- Uppercase heading styling, including page title and content headings.
- Capitalized heading styling as a theme feature on `h3`.
- Decorative gradients, including editor toolbar gradient and `h2` gradient border.
- Brand-like dominant dark header identity from `#231f20`.
- Over-broad Vuetify utility color remapping as design tokens.
- Bright teal inline code background.
- Dashed teal link hover underline.
- Old heading scale that gives `h1` through `h5` the same base style before overrides.

Convergence checks:

- Existing `wiki.css` reviewed only as selector map: Passed.
- Key selectors identified for app bar, drawer, content, buttons, tables, code,
  callouts, floating actions, and footer: Passed, with note that lists/tables are not
  explicitly present in existing CSS and must be covered from rendered `.contents`
  markup assumptions.
- Selectors grouped by required areas: Passed.
- Unsupported or uncertain selectors marked as risks: Passed.
- No old teal, uppercase, or gradient visual decisions carried forward: Passed.

Verification:

- Sub-agent `Lorentz` read `Agent.md`, `Requirement.md`, `HANDOFF.md`, and `wiki.css`.
- Main agent incorporated the audit into `HANDOFF.md`.

Known risks:

- Some selectors depend on Vuetify internals or Wiki.js rendered DOM conventions and
  should be verified against a live Wiki.js instance or representative preview DOM.
- No unsupported Wiki.js theme APIs, package formats, plugin mechanisms, build steps,
  or configuration interfaces were assumed.

### 2026-06-22 - T2 Theme Foundation

Files changed:

- `HANDOFF.md`

Completed:

- Delegated Confluence/Atlassian visual reference analysis to sub-agent `Zeno`.
- Analyzed Confluence/Atlassian documentation visual direction and Atlassian Design
  System references.
- Finalized a CSS-only design foundation for Wiki.js custom CSS override.
- Defined interaction blue, neutral surfaces, text colors, borders, status colors,
  radius, shadows, spacing, and font stacks with Chinese fallback.
- Confirmed typography should be enterprise documentation style: sentence-case
  headings, readable body line-height, restrained hierarchy.
- Confirmed old teal, uppercase, decorative gradient direction must be excluded.

Visual direction:

- Light, documentation-first UI.
- White article canvas with very pale gray surrounding surfaces.
- Restrained borders and minimal shadows.
- Blue is reserved for links, active navigation, primary actions, and focus states.
- Navigation should feel like enterprise workspace chrome: compact, clear, and
  hierarchy-first.
- Content components should be practical rather than decorative.

Final design tokens for implementation:

```css
--wiki-bg: #f7f8f9;
--wiki-surface: #ffffff;
--wiki-surface-subtle: #f1f2f4;
--wiki-surface-hover: #f4f5f7;
--wiki-surface-active: #e9f2ff;

--wiki-text: #292a2e;
--wiki-heading: #172b4d;
--wiki-muted: #6b6e76;
--wiki-border: #dcdfe4;
--wiki-border-subtle: #ebecf0;

--wiki-primary: #1868db;
--wiki-primary-hover: #0c66e4;
--wiki-primary-active: #1558bc;
--wiki-focus: #388bff;

--wiki-code-bg: #f1f2f4;
--wiki-code-text: #172b4d;
--wiki-table-head-bg: #f7f8f9;

--wiki-info-bg: #e9f2ff;
--wiki-info-border: #1d7afc;
--wiki-success-bg: #dcfff1;
--wiki-success-border: #22a06b;
--wiki-warning-bg: #fff7d6;
--wiki-warning-border: #f5cd47;
--wiki-danger-bg: #ffeceb;
--wiki-danger-border: #e34935;

--wiki-radius-sm: 3px;
--wiki-radius: 6px;
--wiki-shadow-raised: 0 1px 2px rgba(9, 30, 66, 0.16);
--wiki-shadow-overlay: 0 8px 16px rgba(9, 30, 66, 0.15);

--wiki-font: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei",
  "PingFang SC", "Noto Sans CJK SC", "Noto Sans", sans-serif;
--wiki-mono: "JetBrains Mono", "SFMono-Regular", Consolas, "Liberation Mono",
  monospace;
```

Typography decisions:

- Body font size target: `14px` to `15px`.
- Body line-height target: `1.55` to `1.65`.
- Readable article width target: roughly `760px` to `920px`.
- Heading scale:
  - H1: `32px` / `40px`
  - H2: `24px` / `32px`
  - H3: `20px` / `28px`
  - H4: `16px` / `24px`
  - H5: `14px` / `20px`
- Heading weight: `600`.
- Headings must use sentence case from content and must not force uppercase or
  capitalize transformations.

Component guidance:

- App bar: white surface, subtle bottom border, restrained shadow only if needed.
- Search: pale neutral background, blue focus border or focus ring.
- Drawer navigation: white or pale-gray surface; active item uses pale blue fill,
  blue text, and optional blue left accent.
- Links: blue by default, darker blue on active/pressed, underline on hover/focus.
- Tables: light header background, 1px borders, compact `8px` to `12px` cell padding.
- Inline code: soft gray background, monospace text, modest radius.
- Code blocks: pale surface, border, radius, readable `13px` mono type.
- Callouts: soft status fills with stronger left border; avoid loud saturated panels.
- Buttons/FAB: primary blue fill with white text; neutral secondary buttons; focus ring
  uses `--wiki-focus`.

Explicit exclusions:

- Do not reuse old teal palette, teal hover underlines, teal inline-code backgrounds,
  or teal FAB identity.
- Do not use uppercase headings or capitalized heading styling as a theme feature.
- Do not use decorative gradients, gradient borders, or brand-like dark header blocks.
- Do not remap broad Vuetify utility colors as the design source unless tightly scoped
  by Wiki.js selectors.
- Do not import, copy, or depend on proprietary Atlassian assets.
- Do not introduce any Wiki.js theme APIs, plugins, packages, admin workflows, build
  steps, or runtime requirements.

Reference sources:

- Confluence Data Center documentation:
  https://confluence.atlassian.com/doc/confluence-data-center-documentation-135922.html
- Atlassian Design System color:
  https://atlassian.design/foundations/color
- Atlassian Design System tokens:
  https://atlassian.design/components/tokens/all-tokens
- Atlassian typography scale/typefaces:
  https://atlassian.design/foundations/typography/product-typefaces-and-scale
- Atlassian button:
  https://atlassian.design/components/button
- Atlassian focus ring:
  https://atlassian.design/components/focus-ring
- Atlassian section message:
  https://atlassian.design/components/section-message
- Atlassian code:
  https://atlassian.design/components/code
- Atlassian table:
  https://atlassian.design/components/table

Convergence checks:

- Tokens cover primary blue, text, muted text, borders, surfaces, hover/active/focus,
  code/table/callout colors, radius, shadows, spacing, and font stack: Passed.
- Old teal palette and decorative gradient direction explicitly excluded: Passed.
- Typography direction defined without all-caps headings: Passed.
- Direction suitable for enterprise documentation: Passed.
- No unsupported Wiki.js APIs, packages, plugins, build workflows, admin screens, or
  runtime requirements invented: Passed.

Verification:

- Sub-agent `Zeno` read `Agent.md`, `Requirement.md`, and `HANDOFF.md`.
- Sub-agent `Zeno` reviewed Confluence/Atlassian documentation visual references.
- Main agent reviewed and finalized the token set for CSS-only Wiki.js override use.

Known risks:

- Token values are Atlassian Design System-aligned approximations for a CSS-only
  Wiki.js override, not an exact Atlassian product clone.
- Font stack does not import or depend on proprietary Atlassian fonts; it uses local
  availability and open/system fallbacks.

## Active Notes

- `wiki.css` must be treated as a selector map, not a design source.
- Red line from user: generated deliverables must strictly follow Wiki.js custom CSS
  usage. Do not hallucinate unsupported Wiki.js theme/package/plugin/config mechanisms.
- Official boundary: deliver `wiki.css` as CSS override plus local preview support, not
  a custom theme package or source-code patch.
- `preview.html` is only for local validation and must not become a runtime requirement.
- Keep main context clean by delegating independent investigation or verification work.
- Update this file after every meaningful task state change.
