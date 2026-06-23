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
| T3 | Global Layout And Shell | Completed |
| T4 | Article Typography | Completed |
| T5 | Rich Content Components | Completed |
| T6 | Floating Actions And Common Controls | Completed |
| T7 | Local Preview Implementation | Completed |
| T8 | Documentation For Local Validation | Completed |
| T9 | Local Verification | Completed |
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

### 2026-06-22 - T3/T4 Global Shell And Article Typography

Files changed:

- `wiki.css`
- `preview.html`
- `HANDOFF.md`

Completed:

- Rewrote `wiki.css` from the old teal theme into a Confluence-like CSS override
  foundation.
- Added T2 design tokens as CSS custom properties scoped to `#root .v-application`.
- Styled global app surface, primary Vuetify color hooks, app bar, search field,
  navigation drawer, active nav states, page header, footer links, and dark-mode token
  overrides.
- Implemented article typography for `.v-main .contents`, including heading scale,
  body text, lists, links, horizontal rules, and responsive heading adjustment.
- Removed old teal palette, forced uppercase/capitalize heading behavior, decorative
  gradients, dark brand header identity, teal code background, and dashed teal link
  hover treatment.
- Added baseline compatibility cleanup for inline code, code blocks, blockquotes,
  tables, editor toolbar, and FAB colors so old visual identity does not leak forward.
  These are not considered final T5/T6 rich-component polish.

Implemented selector areas:

- Global app:
  - `#root .v-application`
  - `.primary`, `.primary--text`, `.blue.darken-2`, `.blue.darken-3`, `.deep-purple`
  - `.v-main`, `.v-card`, `.v-sheet`
- App bar / search:
  - `.v-toolbar__title .subheading`
  - `.nav-header .v-toolbar.v-sheet`
  - `.nav-header.v-app-bar.v-app-bar`
  - `.nav-header .v-input__slot`
  - `.nav-header .v-input--is-focused .v-input__slot`
  - `.nav-header input`, `.nav-header .v-label`
- Navigation drawer:
  - `.v-navigation-drawer`
  - `.v-list.primary`, `.v-navigation-drawer__content`, `.v-sheet`
  - `.v-list-item`, `.v-list-item--active`, `.v-list-item:hover`
  - `.v-list-group__header`, `.v-subheader`, `.v-divider`
  - Drawer button/icon/title/subtitle selectors
- Page header:
  - `.page-header-section`
  - `.page-header-section .headline`
  - `.page-header-section .caption`
- Article typography:
  - `.v-main .contents`
  - `.contents p`, `ul`, `ol`, `li`, `hr`
  - `.contents h1` through `h5`
  - `.contents h1:first-child`
  - `.contents h1::after` through `h5::after`
  - `.contents a`, hover/focus, and focus-visible states

T3 convergence checks:

- Clean white/light-gray surfaces are used: Passed.
- Borders and shadows are restrained: Passed.
- Atlassian-like blue active states are visible: Passed.
- Left navigation hierarchy is clear: Passed.
- Search and app bar styling fit the Confluence-like direction: Passed.
- Responsive behavior has basic CSS support through media query: Passed.
- All styling remains expressible as Wiki.js custom CSS selectors/declarations: Passed.

T4 convergence checks:

- Headings are not uppercase: Passed.
- Heading hierarchy, spacing, and body text line-height are clear: Passed.
- Paragraphs, lists, links, metadata, dividers, and blockquotes have readable contrast:
  Passed.
- Link and hover treatment uses the selected Atlassian-like blue direction: Passed.
- Content remains comfortable for long technical articles through `max-width: 920px`
  and `line-height: 1.62`: Passed.

Verification:

- Sub-agent `Ramanujan` provided a read-only T3/T4 preflight checklist.
- Ran grep checks against `wiki.css` for old colors and patterns:
  - `#70c7ba`, `#42a999`, `#4bb9a8`, `#3b9689`, `#49eacb`, `#a4f5e5`,
    `#108a73`, `#70C7BA`, `#231f20`: no matches.
  - `uppercase`, `capitalize`, `letter-spacing:\s*1px`, `border-image`,
    `linear-gradient`, `dashed`: no matches.
  - `theme package`, `plugin`, `build`, `database`, `migration`, `admin screen`,
    `configuration interface`: no matches in `wiki.css`.
- Checked CSS brace balance: `opens=65 closes=65`.
- Confirmed expected selector coverage with `rg` for nav/header/drawer/content
  selectors.

Known risks:

- `.primary`, `.primary--text`, `.blue.darken-2`, `.blue.darken-3`, and `.deep-purple`
  remain broad Vuetify utility hooks; they are mapped to the new blue tokens for
  compatibility but should be watched in real Wiki.js testing.
- `.v-input__slot`, `.v-list-group__header__*`, and scrollbar selectors are
  Vuetify/internal or implementation-sensitive selectors.
- T5/T6 still needed dedicated polish at this checkpoint; this was later resolved by
  the T5/T6 task.

### 2026-06-22 - T5/T6 Rich Content And Controls

Files changed:

- `wiki.css`
- `HANDOFF.md`

Completed:

- Delegated a read-only rich components/control checklist to sub-agent `Hilbert`.
- Polished tables, inline code, code blocks, blockquotes/callouts, cards/panels,
  Vuetify buttons, editor toolbar, and speed-dial/FAB controls.
- Added tokens for inverse text, code block background, and code block border.
- Added neutral and primary button treatment with hover/active states.
- Added card/sheet surface, border, radius, title, and subtitle styling.
- Added code block and Prism container styling with horizontal overflow handling.
- Added callout status pseudo-element colors for info, warning, danger, and success.
- Added table head, cell, hover, minimum width, and narrow viewport overflow behavior.
- Added editor toolbar button/icon polish.
- Added FAB shadow, primary hover, danger action, icon/text contrast, and z-index note.
- Kept `preview.html` deferred to T7.

Implemented selector areas:

- Rich content:
  - `.v-main .contents pre`
  - `.v-main .contents .prismjs`
  - `.v-main .contents pre code`
  - `.v-main .contents .prismjs code`
  - `.v-main .contents blockquote`
  - `.v-main .contents blockquote.is-info`
  - `.v-main .contents blockquote.is-warning`
  - `.v-main .contents blockquote.is-danger`
  - `.v-main .contents blockquote.is-success`
  - `.v-main .contents table`, `thead`, `tbody tr:hover`, `th`, `td`
  - `.v-main .contents .table-responsive`
  - `.v-main .contents .v-data-table`
- Cards/panels:
  - `.v-card`
  - `.v-sheet`
  - `.v-card__title`
  - `.v-card__subtitle`
- Buttons and common controls:
  - `.v-btn:not(.v-btn--icon):not(.v-btn--fab)`
  - `.v-btn.primary`
  - `.v-btn.blue.darken-2`
  - `.v-btn.deep-purple`
  - `.v-btn.red`
  - `.v-btn__content`
  - `.v-icon`
  - `:hover`, `:active`, and existing `:focus-visible`
- Editor/FAB:
  - `.editor-markdown .editor-markdown-toolbar`
  - `.editor-markdown-toolbar .v-btn`
  - `.editor-markdown-toolbar .v-icon`
  - `.v-speed-dial`
  - `.v-speed-dial .v-btn.v-btn--fab`
  - `.v-speed-dial .v-btn.v-btn--fab.btn-animate-edit`
  - `.v-speed-dial .v-btn.v-btn--fab.red`

T5 convergence checks:

- Tables, inline code, code blocks, cards/panels, buttons, and action controls are
  consistent with the theme: Passed.
- Info, warning, success, and danger callouts are styled with restrained status colors:
  Passed.
- Components no longer resemble the old teal styling: Passed.
- CSS remains installable as Wiki.js custom CSS: Passed.
- No generated CSS depends on unsupported scripts, generated markup, or imagined
  Wiki.js extension points: Passed.

T6 convergence checks:

- Floating buttons use the selected blue accent and fit the documentation UI: Passed.
- Hover, focus, and active states are restrained and readable: Passed.
- Buttons include responsive-friendly sizing and do not introduce layout dependencies:
  Passed by CSS review; visual overlap to be verified in T7/T9 preview.
- Z-index/mobile concerns recorded: Passed, `.v-speed-dial` uses `z-index: 8` and
  preview verification remains pending.

Verification:

- Sub-agent `Hilbert` provided a read-only T5/T6 checklist.
- Ran grep checks against `wiki.css` for old colors and patterns:
  - `#70c7ba`, `#42a999`, `#4bb9a8`, `#3b9689`, `#49eacb`, `#a4f5e5`,
    `#108a73`, `#70C7BA`, `#231f20`: no matches.
  - `uppercase`, `capitalize`, `linear-gradient`, `border-image`, `dashed`: no
    matches.
  - `theme package`, `plugin`, `build`, `database`, `migration`, `admin screen`,
    `configuration interface`: no matches in `wiki.css`.
- Checked CSS brace balance: `opens=91 closes=91`.
- Confirmed T5/T6 selector coverage with `rg` for `table`, `pre`, `prismjs`,
  `blockquote`, status callouts, `v-btn`, `v-speed-dial`, `btn-animate-edit`,
  `editor-markdown-toolbar`, and `focus-visible`.

Known risks:

- Visual overlap, table overflow behavior, and FAB positioning still need browser
  verification in T7/T9 once `preview.html` exists.
- Broad Vuetify button/color selectors remain scoped to `#root .v-application`, but
  should still be watched in a live Wiki.js instance.

### 2026-06-22 - T7 Local Preview Implementation

Files changed:

- `preview.html`
- `HANDOFF.md`

Completed:

- Created `preview.html` as a local validation aid that imports `wiki.css`.
- Mocked representative Wiki.js/Vuetify DOM patterns without adding runtime
  dependencies.
- Covered top app bar, search input, left navigation, active nav state, grouped nav
  header, article header, content typography, links, unordered and ordered lists,
  table, inline code, Prism-style code block, callouts, cards/panels, buttons, editor
  toolbar, footer, and FAB/speed-dial actions.
- Included utility button examples for `.primary`, `.blue.darken-2`, `.deep-purple`,
  neutral, and `.red`.
- Kept `preview.html` explicitly scoped as validation-only and not a Wiki.js runtime
  deliverable.

Deliberate mock DOM approximations:

- The page uses hand-written Vuetify/Wiki.js-like class names to exercise the CSS
  selectors.
- The page does not attempt to reproduce Wiki.js behavior, routing, Vue components,
  search logic, authentication, editor behavior, or real content rendering.
- Hover states are left to the browser; focused search is represented with
  `.v-input--is-focused`.

T7 convergence checks:

- `preview.html` exists and imports `wiki.css`: Passed.
- Preview includes top bar, search, left navigation, article header, headings, links,
  lists, table, inline code, code block, callouts, buttons, footer, and floating
  actions: Passed.
- Preview can be served locally with `python -m http.server 4173`: Pending actual
  server run in T9, but file is static and suitable for that flow.
- Preview is useful without a live Wiki.js instance: Passed.
- Preview is only a validation aid and does not introduce requirements that the actual
  Wiki.js custom CSS deliverable cannot satisfy: Passed.

Verification:

- Sub-agent `Plato` provided a read-only T7 preview coverage checklist.
- Ran `rg` to confirm `preview.html` imports `wiki.css`.
- Ran `rg` to confirm core DOM/class coverage for `#root`, `.v-application`,
  `.v-main`, `.contents`, `.nav-header`, `.v-navigation-drawer`, and
  `.page-header-section`.
- Ran `rg` to confirm rich/control coverage for status callouts, `.prismjs`,
  `.table-responsive`, `.v-speed-dial`, `.btn-animate-edit`, and
  `.editor-markdown-toolbar`.
- Ran `rg` for unsupported mechanism terms in `preview.html`; no matches.
- Checked rough HTML element balance: `element-opens=138 closes=138`.

Known risks:

- Visual correctness, responsive behavior, table overflow, and FAB overlap still need
  browser verification in T9.

### 2026-06-22 - T8/T9 Local Validation And Verification

Files changed:

- `README.md`
- `serve-preview.mjs`
- `preview.html`
- `wiki.css`
- `.gitignore`
- `HANDOFF.md`

Completed:

- Added `README.md` with local preview instructions, validation checklist, and Wiki.js
  custom CSS application guidance.
- Added `serve-preview.mjs`, a zero-dependency local Node static server for previewing
  `preview.html`; this is a local validation tool only.
- Updated `preview.html` helper layout so desktop and mobile preview widths are more
  reliable.
- Adjusted mobile table CSS so wide documentation tables scroll inside
  `.table-responsive` instead of forcing page-level horizontal overflow.
- Added `.gitignore` entry for local `verification/` artifacts.
- Started local preview server at `http://127.0.0.1:4173/preview.html`.

Local server:

- Command: `node .\serve-preview.mjs`
- URL: `http://127.0.0.1:4173/preview.html`
- PID at verification time: `47512`
- Port status at verification time: `127.0.0.1:4173 Listen 47512`

T8 convergence checks:

- README explains local preview commands: Passed.
- Wiki.js custom CSS application is described at a high level without inventing
  unsupported admin screens, file paths, theme package formats, or build workflows:
  Passed.
- Acceptance checklist is available to the user: Passed.

T9 convergence checks:

- Local server starts successfully: Passed.
- `preview.html` loads the CSS: Passed, HTTP 200 for both `preview.html` and
  `wiki.css`.
- Visual scan confirms Confluence-like direction and no obvious old teal identity
  remains: Passed by desktop/mobile Chrome screenshots.
- Responsive behavior is checked by viewport inspection: Passed for desktop
  `1440x1100` and mobile `390x1100` screenshots.
- Git status is reported: Passed before commit; only expected files changed and
  `verification/` is ignored.

Verification:

- Checked port 4173 before startup; no listener found.
- Attempted `npx http-server`; it did not stay available, so it was stopped and
  replaced with the zero-dependency Node preview server.
- Requested `http://127.0.0.1:4173/preview.html`: HTTP 200, length 12125 before final
  preview edits.
- Requested `http://127.0.0.1:4173/wiki.css`: HTTP 200, length 18481 before final CSS
  mobile table edit.
- Generated Chrome headless screenshots:
  - `verification/preview-desktop.png`
  - `verification/preview-mobile.png`
- Inspected screenshots manually: desktop and mobile previews are readable, shell is
  white/light-gray, navigation active state is blue, and rich content is visible.
- Used Chrome DevTools Protocol on a mobile viewport to inspect overflow:
  document-level `scrollWidth` did not exceed client width; wide table overflow is
  contained by the table area.
- Ran grep checks for old visual patterns in `wiki.css`, `preview.html`, and
  `README.md`. Only README prose mentions "uppercase" as a negative checklist item.
- Ran grep checks for unsupported mechanisms. README mentions theme package/plugin only
  to say not to use them; `wiki.css` and `preview.html` do not depend on those
  mechanisms.

Known risks:

- `serve-preview.mjs` is a local validation helper, not part of Wiki.js runtime.
- Live Wiki.js instance testing is still required in T10/final acceptance because
  `preview.html` is a representative mock DOM, not the real Wiki.js application.
- Broad Vuetify utility selector impact should still be watched in real Wiki.js.

### 2026-06-22 - Feedback Refinement: Contrast, Surface, Separators, Icons

Files changed:

- `wiki.css`
- `preview.html`
- `HANDOFF.md`

Completed:

- Addressed customer feedback from the Confluence Wiki screenshot review.
- Changed the top Create/primary button treatment so blue buttons use white foreground
  text and icons, including the nav-header primary button case.
- Aligned the main content area background with the left navigation surface by using a
  white application/main surface.
- Strengthened key separator colors for the app bar bottom border, drawer right border,
  drawer dividers, and table/content borders through the updated border tokens.
- Increased and normalized icon color/size treatment for real Wiki.js/Vuetify
  `.v-icon` usage in the app bar, navigation drawer, and floating action buttons.
- Replaced preview-only black character icons for search, page icons, expand triangle,
  and dropdown arrow with CSS-drawn local preview helper icons.
- Clarified the icon boundary: the CSS rules for `.v-icon` can affect real Wiki.js
  icons, while `.preview-icon`, `.preview-chevron`, and `.preview-search-icon` only
  affect `preview.html` and must not be copied as Wiki.js runtime markup.

Convergence checks:

- Create button blue background with white foreground: Passed in desktop preview.
- Content area and left navigation share the same white surface: Passed.
- Separator lines are visibly stronger but still restrained: Passed.
- Icons are larger and use a calmer Confluence-like icon color: Passed.
- Preview no longer uses the old black character triangle/dropdown/search/page glyphs:
  Passed.
- Deliverables remain Wiki.js custom CSS plus local validation preview only: Passed.

Verification:

- Confirmed preview server is still listening on `127.0.0.1:4173`.
- Requested `http://127.0.0.1:4173/preview.html`: HTTP 200, length 14310.
- Requested `http://127.0.0.1:4173/wiki.css`: HTTP 200, length 19752.
- Regenerated Chrome headless screenshots:
  - `verification/preview-desktop.png`
  - `verification/preview-mobile.png`
- Manually inspected screenshots for button contrast, white surfaces, stronger
  separators, and refined preview icons.
- Checked mobile viewport layout through Chrome DevTools Protocol: document
  `scrollWidth` matched `clientWidth`; the wide table scroll remained contained inside
  `.table-responsive`.
- Sub-agent `Mencius` performed a read-only feedback coverage review and recommended
  committing after this handoff entry.

Known risks:

- `preview.html` remains a representative mock DOM; final icon behavior should still be
  checked once `wiki.css` is applied to a live Wiki.js instance.
- Broad `.v-icon` sizing/color rules are intentional for the visual feedback, but real
  Wiki.js pages may reveal isolated icon cases that need narrower follow-up selectors.

### 2026-06-22 - Real Local Wiki.js Deployment And CSS Injection

Files changed:

- `.gitignore`
- `README.md`
- `REAL-WIKIJS.md`
- `HANDOFF.md`

Runtime files created, ignored by Git:

- `.runtime/wiki-js-windows.tar.gz`
- `.runtime/wikijs-win/`
- `.runtime/wikijs-win/config.yml`
- `.runtime/wikijs-win/data/wiki.sqlite`
- `.runtime/wikijs-win/LOCAL-CREDENTIALS.txt`
- `.runtime/wikijs-win/*.log`

Completed:

- Checked that Docker and Podman are not available in the current PowerShell session,
  and WSL has no installed Linux distribution.
- Downloaded official Wiki.js release `v2.5.314`, published 2026-05-01, using the
  Windows release asset `wiki-js-windows.tar.gz`.
- Configured a lightweight local Wiki.js instance with Node.js and SQLite on
  `127.0.0.1:3001`.
- Completed Wiki.js setup with a local-only administrator account recorded in ignored
  runtime state.
- Injected the current `wiki.css` into real Wiki.js theming `injectCSS` through the
  Wiki.js GraphQL `theming.setConfig` mutation.
- Created a real Wiki.js Markdown validation page at `/en/theme-test` covering
  headings, lists, tables, inline code, code blocks, blockquotes, tags, navigation, and
  page chrome.
- Added `REAL-WIKIJS.md` and updated `README.md` with startup, login, and Theme screen
  instructions.

Convergence checks:

- Real Wiki.js local instance starts and listens on `127.0.0.1:3001`: Passed.
- Setup wizard completed successfully: Passed.
- `wiki.css` is stored via Wiki.js theming `injectCSS`: Passed.
- Real validation page loads with injected CSS present in HTML: Passed.
- Runtime files, database, logs, and credentials are ignored by Git under `.runtime/`:
  Passed.
- Deliverable boundary remains custom CSS override, not theme package/plugin/source
  patch: Passed.

Verification:

- `docker --version`: failed because Docker is not installed or not in `PATH`.
- `podman`: failed because Podman is not installed or not in `PATH`.
- `wsl -l -v`: WSL exists, but no Linux distribution is installed.
- `node --version`: `v24.13.0`.
- Wiki.js log showed database connection, setup completion, GraphQL schema load, and
  HTTP server running on port `3001`.
- Requested `http://127.0.0.1:3001/`: HTTP 200.
- Requested `http://127.0.0.1:3001/login`: HTTP 200.
- Requested `http://127.0.0.1:3001/en/theme-test`: HTTP 200, length 23924,
  `--wiki-primary` present, `injectCSS` present.
- Generated real Wiki.js screenshot:
  - `verification/wikijs-real-theme-test.png`

Known risks:

- This local runtime uses SQLite for lightweight validation; production Wiki.js should
  use the database engine recommended by the deployment environment, commonly
  PostgreSQL.
- The local instance is real Wiki.js, but it is a disposable validation environment.
  Credentials and database are intentionally stored under ignored `.runtime/`.

### 2026-06-22 - Real Wiki.js Feedback: Right TOC And Reduced Frames

Files changed:

- `wiki.css`
- `HANDOFF.md`

Runtime state changed, ignored by Git:

- Real Wiki.js theming config updated via GraphQL `theming.setConfig`.
- `tocPosition` set to `right`.
- Current `wiki.css` injected into Wiki.js `injectCSS`.

Completed:

- Moved Page Contents to the right side using Wiki.js theming `tocPosition: "right"`.
- Removed heavy top app-bar line/frame artifacts caused by broad `.v-sheet` and
  toolbar styling against the real Wiki.js DOM.
- Kept the top area white and quiet with only a subtle bottom separator.
- Updated left navigation active/blue areas so blue backgrounds use light foreground
  text and icons.
- Reduced right sidebar card/line-frame feel for Page Contents, Tags, Talk, Last Edited
  and sharing areas while keeping readable grouping.
- Preserved CSS-only delivery boundary; no Wiki.js source files or runtime templates
  were edited.

Convergence checks:

- Page Contents appears on the right side in the real Wiki.js validation page: Passed.
- Top app bar no longer shows large white framed boxes: Passed by screenshot.
- Left blue navigation areas use light foreground: Passed by screenshot.
- Right sidebar is visually lighter and less frame-heavy: Passed.
- Mobile page remains readable and does not force the right TOC column: Passed.
- CSS remains valid by brace balance check: Passed, `110/110`.

Verification:

- Re-injected CSS into real Wiki.js through GraphQL `theming.setConfig`.
- Requested `http://127.0.0.1:3001/en/theme-test`: HTTP 200, `tocPosition` right and
  `--wiki-sidebar-active` present.
- Generated real Wiki.js desktop screenshot:
  - `verification/wikijs-real-theme-test-feedback3.png`
- Generated real Wiki.js mobile screenshot:
  - `verification/wikijs-real-theme-test-mobile-feedback3.png`
- Manually inspected both screenshots.

Known risks:

- Some secondary right-sidebar action buttons, such as share/print, still retain a
  light native button border. They are less prominent than before and can be further
  softened in a follow-up if desired.

### 2026-06-22 - Real Wiki.js Folder Hierarchy And Home/Browse Preservation

Files changed:

- `wiki.css`
- `REAL-WIKIJS.md`
- `HANDOFF.md`

Runtime state changed, ignored by Git:

- Created multiple real Wiki.js pages under `/en/training-home`.
- Real Wiki.js navigation config set to `MIXED`.
- Current `wiki.css` re-injected into Wiki.js theming `injectCSS`.
- `tocPosition` preserved as `right`.

Completed:

- Created a real Training Home folder-style hierarchy in the local Wiki.js instance,
  including folders:
  - `Free Talk`
  - `Harness`
  - `Testing Training`
  - `UX培训`
  - `产品组培训`
  - `制度 流程 技术规范`
  - `开发技术培训`
  - `自动测试培训主页`
- Created direct pages under Training Home matching the customer screenshot shape,
  including:
  - `Confluence Wiki 新人快速上手`
  - `General Management Skill ...`
  - `Mentor Training Material`
  - `Network Administrator Trai...`
  - `PGM培训`
  - `专项技能培训（开发技能、沟通...）`
  - `公司内部常用链接`
  - `新闻事入手`
  - `软件安全与防护培训`
- Restored the Wiki.js default-theme Home button and Browse/Main Menu toggle by using
  supported navigation mode `MIXED`.
- Confirmed `TREE` mode shows the page tree directly, but removes the Home/Browse
  shortcut area in Wiki.js default theme; therefore `TREE` is not the preferred local
  validation mode for this requirement.
- Confirmed static navigation in Wiki.js 2.5.x is flat. Nested folders/pages are
  generated from real page paths through Browse/page tree, not from static nav
  children.
- Styled the native Home/Browse shortcut area as large white buttons on the left
  sidebar blue background, matching the user's reference direction while preserving
  the native actions.
- Updated blue-sidebar subheader/subtitle foreground so labels such as Current
  Directory are readable on blue backgrounds.
- Updated `REAL-WIKIJS.md` with the folder-hierarchy validation page and navigation
  behavior notes.
- Preserved the CSS-only deliverable boundary; no Wiki.js source files, templates,
  plugins, theme packages, or injected JS were used.

Convergence checks:

- Local real Wiki.js has a multi-page folder hierarchy: Passed.
- Home button is present in the left sidebar: Passed by browser DOM check.
- Browse/Main Menu toggle is present in the left sidebar: Passed by browser DOM check.
- Browse view on a child page shows Training Home Current Directory folders/pages:
  Passed.
- Blue sidebar labels use light foreground where needed: Passed by computed color
  check for Current Directory, `rgba(255, 255, 255, 0.72)`.
- Page Contents remains on the right: Passed, `tocPosition` is `right`.
- Navigation config uses supported Wiki.js mode only: Passed, `MIXED`.
- CSS remains valid by brace balance check: Passed, `118/118`.
- Deliverable remains Wiki.js custom CSS plus validation docs: Passed.

Verification:

- Queried Wiki.js GraphQL navigation config and page tree.
- Used sub-agent `Faraday` for read-only navigation capability verification.
- Confirmed `NavigationItemInput` has no `children` field; static nav supports flat
  items with fields `id`, `kind`, `label`, `icon`, `targetType`, `target`,
  `visibilityMode`, and `visibilityGroups`.
- Re-injected CSS through GraphQL `theming.setConfig` with required `theme`,
  `iconset`, `darkMode`, `tocPosition`, `injectCSS`, `injectHead`, and `injectBody`
  arguments.
- Set navigation mode through GraphQL `navigation.updateConfig(mode: MIXED)`.
- Browser/CDP verification generated screenshots:
  - `verification/wikijs-training-mixed-default.png`
  - `verification/wikijs-training-mixed-browse.png`
  - `verification/wikijs-training-child-browse.png`
  - `verification/wikijs-training-mixed-browse-final.png`
- Final browser DOM check on
  `http://127.0.0.1:3001/en/training-home/confluence-wiki-new-user-quick-start`
  with Browse mode confirmed:
  - Home button dimensions: `60x52`.
  - Main Menu toggle dimensions: `151x52`.
  - `Current Directory` present.
  - All expected Training Home folders present.
  - All expected Training Home direct pages present.

Known risks:

- In the local Wiki.js instance, the Browse root label renders as `/ sidebar.root`.
  This appears to be a default-theme localization/runtime string issue, not caused by
  the CSS. It was not patched with injected JS or source edits because the project
  boundary is custom CSS only.
- In `MIXED` mode, the initial sidebar view can depend on the user's browser
  `localStorage.navPref`. The user can switch between Main Menu and Browse with the
  native button. `TREE` mode makes Browse-like page tree the default, but sacrifices
  the Home/Browse shortcut area.
- Static navigation can use folder/page-looking icons on flat links, but cannot create
  nested expandable folder trees in Wiki.js 2.5.x.

### 2026-06-22 - Real Wiki.js Preview Page Restoration

Files changed:

- `REAL-WIKIJS.md`
- `HANDOFF.md`

Runtime state changed, ignored by Git:

- Created real Wiki.js page `/en/theme-preview` with page id `40`.

Completed:

- Restored the earlier `preview.html` validation coverage into a real Wiki.js page at
  `http://127.0.0.1:3001/en/theme-preview`.
- Used Wiki.js Markdown content plus small inline HTML snippets to exercise existing
  CSS selectors for cards, buttons, callouts, and editor-toolbar-like controls.
- Covered page title, article headings, links, lists, table, inline code, code block,
  status callouts, card/panel, buttons, and verification notes.
- Kept real Wiki.js shell, app bar, sidebar, Page Contents, tags, and native floating
  actions supplied by the Wiki.js runtime rather than mocked markup.
- Did not add page-level JavaScript or page-level CSS.
- Preserved the project boundary: the theme deliverable remains `wiki.css` injected
  through Wiki.js custom CSS/theming config.

Convergence checks:

- `/en/theme-preview` exists in real Wiki.js: Passed, page id `40`.
- Page uses the Markdown editor/content type: Passed, `editor=markdown`,
  `contentType=markdown`.
- Rendered content contains table, code block, card, primary button, and info callout:
  Passed by GraphQL render check and browser DOM check.
- Primary button uses blue background with white foreground: Passed by computed style,
  `rgb(24, 104, 219)` background and `rgb(255, 255, 255)` text.
- Page Contents remains on the right: Passed by browser DOM check.
- Page has no document-level horizontal overflow at desktop viewport: Passed,
  `clientWidth=1425`, `scrollWidth=1425`.

Verification:

- Queried `/en/theme-preview` by GraphQL `pages.singleByPath`; it did not exist before
  creation.
- Created the page through GraphQL `pages.create`.
- Queried the created page and confirmed:
  - `id=40`
  - `path=theme-preview`
  - `title=Wiki.js Confluence-like Theme Preview`
  - `renderHasCard=true`
  - `renderHasButton=true`
  - `renderHasCallout=true`
- Browser/CDP verification generated screenshot:
  - `verification/wikijs-theme-preview-page.png`

Known risks:

- The restored page cannot reproduce top app bar, sidebar, or floating action markup
  exactly from `preview.html` because those are real Wiki.js runtime components on this
  page. That is intentional for validation fidelity.
- The page uses inline HTML inside Markdown to exercise Vuetify-like selector classes.
  This is content-only validation and does not introduce unsupported Wiki.js theme
  APIs, theme packages, source patches, or injected JS.

### 2026-06-22 - Sidebar Visual Refinement To Light Navigation

Files changed:

- `wiki.css`
- `HANDOFF.md`

Runtime state changed, ignored by Git:

- Current `wiki.css` re-injected into Wiki.js theming `injectCSS`.

Completed:

- Addressed feedback that the full blue left sidebar felt dated, visually heavy, and
  unlike Confluence documentation navigation.
- Reworked the left navigation from full blue background to a white/light-gray
  documentation sidebar.
- Kept the native Home and Browse/Main Menu shortcut buttons, but restyled them as
  flatter modern tool buttons with light border, no heavy shadow, and subtle hover.
- Further refined the Home/Browse shortcut area to use a white background and
  borderless lightweight buttons after user feedback that the light-gray band and
  button design still felt too heavy.
- Removed the active navigation item's left blue inset border after user feedback
  that it was visually too heavy; selected state now relies on pale blue fill and blue
  text/icon only.
- Limited blue usage to active/hover/focus emphasis rather than the entire sidebar
  surface.
- Fixed the poor hover contrast issue by ensuring hovered navigation rows use dark
  text on a pale neutral background, and shortcut buttons use pale blue with blue
  text/icons.
- Reduced the awkward "large blue empty area" when sidebar content is short by keeping
  the drawer background white.
- Preserved the CSS-only Wiki.js custom CSS boundary and did not change navigation
  behavior.

Convergence checks:

- Left drawer background is white: Passed, computed `rgb(255, 255, 255)`.
- Left navigation list background is white: Passed, computed `rgb(255, 255, 255)`.
- Home/Browse shortcut buttons remain present and usable: Passed.
- Shortcut buttons are lighter/modernized: Passed, `48px` height, no box-shadow,
  light border `rgb(215, 220, 227)`.
- Final shortcut refinement uses `44px` height, transparent default border, no
  shadow, and a white toolbar background: Passed by CSS/computed style check.
- Shortcut hover state has readable contrast: Passed, hover background
  `rgb(233, 242, 255)`, text/icon `rgb(24, 104, 219)`.
- Navigation row hover no longer uses low-contrast white foreground: Passed, hover
  background `rgb(244, 245, 247)`, title color remains dark.
- Active navigation no longer has a heavy left border: Passed, `box-shadow: none`.
- Page Contents remains on the right and was not made blue: Passed by screenshot.
- CSS remains valid by brace balance check: Passed, `119/119`.

Verification:

- Re-injected CSS into real Wiki.js through GraphQL `theming.setConfig`.
- Generated browser screenshots:
  - `verification/wikijs-sidebar-light-desktop.png`
  - `verification/wikijs-sidebar-light-desktop-hover.png`
  - `verification/wikijs-sidebar-light-final.png`
  - `verification/wikijs-sidebar-light-final-hover.png`
- Used Chrome DevTools Protocol to inspect computed styles for drawer, list,
  Home/Browse buttons, and hover states.
- Ran CSS brace balance and forbidden-pattern checks; no old teal, gradient, or
  unsupported theme-mechanism terms were found in `wiki.css`.

Known risks:

- The sidebar still uses Wiki.js default theme structure and icon set; the CSS can
  refine surfaces, colors, spacing, and states, but cannot replace the default theme's
  component layout without leaving the custom CSS boundary.

### 2026-06-22 - Comments Area Lightweight Confluence-like Refinement

Files changed:

- `wiki.css`
- `preview.html`
- `README.md`
- `REAL-WIKIJS.md`
- `HANDOFF.md`

Runtime state changed, ignored by Git:

- Current `wiki.css` re-injected into Wiki.js theming `injectCSS`.
- Added one local validation comment to `/en/theme-preview`.
- Generated screenshots in ignored `verification/`.

Completed:

- Addressed feedback that the whole Comments area was visually too heavy.
- Audited the local Wiki.js 2.5.314 runtime for default comments selectors:
  - page slot injection is in `.runtime/wikijs-win/server/views/page.pug`;
  - default provider mounts `<comments></comments>`;
  - compiled comments component uses `#discussion-new`, `.comments-post`,
    `.comments-post-actions`, `.comments-post-name`, `.comments-post-date`,
    `.comments-post-content`, `.comments-post-editcontent`, `v-timeline`, `v-avatar`,
    `v-card`, `v-textarea`, and `v-text-field`;
  - default theme CSS uses `.comments-container`, `.comments-header`, and
    `.comments-main` with a heavy blue-grey header and grey body.
- Added a dedicated comments CSS section instead of expanding global `.v-card`,
  `.v-btn`, `.blue-grey`, or `.pink` overrides.
- Changed the Comments shell from heavy blue-grey/grey block styling to:
  - white `.page-comments-card` / `.comments-container`;
  - white `.comments-header` with subtle bottom border;
  - white `.comments-main`;
  - light timeline rule;
  - pale-blue avatar;
  - white comment cards with subtle border and no shadow;
  - muted metadata;
  - quiet inline code and code block styling.
- Restyled default comments post/update buttons from `blue-grey darken-2` to the
  theme primary blue, scoped behind the comments input/edit selectors.
- Added a comments section to `preview.html` using the same key local classes, so the
  Comments visual treatment can be checked without relying on live Wiki.js comments.
- Follow-up refinement from user screenshot:
  - moved the new-comment input border from Vuetify `fieldset` to the scoped
    `.v-input__slot` to keep all four edges visible;
  - made the Post Comment button icon/content inherit the white foreground;
  - reduced focus treatment to the normal light border/no heavy blue frame in the
    verified Wiki.js rendering.
- Updated README and real Wiki.js validation notes.
- Preserved the CSS-only Wiki.js custom CSS boundary; no source patch, plugin, custom
  theme package, or injected JavaScript was introduced.

Convergence checks:

- `wiki.css` has dedicated comments rules and does not rely on unsupported Wiki.js
  APIs: Passed.
- Comments header no longer uses the heavy blue-grey bar: Passed, real Wiki.js
  computed `.comments-header` background is `rgb(255, 255, 255)`.
- Comments main area no longer uses the heavy grey block: Passed, real Wiki.js
  computed `.comments-main` background is `rgb(255, 255, 255)`.
- Comment card is white, lightly bordered, and shadowless: Passed, real Wiki.js
  computed `.comments-post .v-card` background `rgb(255, 255, 255)`, border
  `rgb(215, 220, 227)`, `box-shadow: none`.
- Comment avatar is pale blue rather than heavy blue-grey: Passed, computed
  `rgb(233, 242, 255)` background and `rgb(24, 104, 219)` text.
- Default comments inline code no longer uses pink background: Passed, computed
  `rgb(241, 242, 244)`.
- Default comments code block no longer uses black background: Passed, computed
  `rgb(247, 248, 249)`.
- New-comment input shows all four borders: Passed, computed `.v-input__slot` border
  top/right/bottom/left are all `1px` and `rgb(215, 220, 227)`.
- Post Comment icon matches button foreground: Passed, computed icon color is
  `rgb(255, 255, 255)`.
- Focus frame is not heavy blue: Passed, focused `#discussion-new` keeps a light
  border and no heavy box-shadow in the verified real Wiki.js render.
- Static preview demonstrates the Comments shell and post controls: Passed.
- Real local Wiki.js demonstrates the Comments shell with an actual comment: Passed.
- No document horizontal overflow in both static and real checks: Passed.
- CSS brace balance: Passed, `160/160`.
- Forbidden heavy/default comments colors are absent from `wiki.css` and
  `preview.html`: Passed for `rgba(233,30,99`, `#111`, `#607d8b`, and `#eceff1`.

Verification:

- Used sub-agent `Einstein` for read-only selector and risk review.
- Re-injected CSS into real Wiki.js through GraphQL `theming.setConfig`.
- Created one validation comment on `/en/theme-preview` through GraphQL
  `comments.create`.
- Confirmed local static preview is available:
  - `http://localhost:4173/preview.html`: HTTP 200.
- Confirmed real local Wiki.js page is available:
  - `http://127.0.0.1:3001/en/theme-preview`: HTTP 200.
- Used Chrome DevTools Protocol to inspect computed styles and capture screenshots:
  - `verification/preview-comments-light-final.png`
  - `verification/wikijs-comments-light-final.png`
  - `verification/wikijs-comments-border-final.png`
- Confirmed browser support for `:has()` in the local Chrome check:
  `CSS.supports('selector(:has(*))') === true`.

Known risks:

- The input wrapper rules use `:has(#discussion-new)` so the CSS can target the
  Vuetify parent field without changing markup. This works in modern Chrome/Edge and
  was verified locally, but older browsers that do not support `:has()` will still
  get the safer direct `#discussion-new` / `.comments-post*` styling and may miss the
  parent outline refinements.
- These selectors are for the built-in Wiki.js comments provider. Third-party
  providers such as Disqus, Commento, or Artalk inject their own containers and should
  be validated separately before adding provider-specific CSS.

### 2026-06-22 - Code Block, Callout, And Copy Button Feedback

Files changed:

- `wiki.css`
- `preview.html`
- `HANDOFF.md`

Runtime state changed, ignored by Git:

- Current `wiki.css` re-injected into Wiki.js theming `injectCSS`.
- Generated screenshots in ignored `verification/`.

Completed:

- Addressed feedback that code block colors were too muddy by increasing contrast:
  - code block background remains light, `rgb(247, 248, 249)`;
  - code text is now darker, `rgb(15, 23, 42)`;
  - Prism token colors are scoped under `.v-main .contents` only.
- Removed visible callout pseudo-icons entirely because the native Wiki.js icon
  pseudo-element can sit outside the callout box. Callouts now rely on restrained
  fills and left status borders.
- Added the real Wiki.js Prism toolbar selector:
  `.contents div.code-toolbar > .toolbar .toolbar-item > button`.
- Replaced the copy button text treatment with a CSS-only SVG mask using the
  Font Awesome copy path supplied by the user. This avoids relying on Font Awesome
  font availability and keeps the deliverable CSS-only.
- Updated `preview.html` to simulate the real `div.code-toolbar > .toolbar` DOM
  shape instead of only a class-based mock button.
- Used sub-agent `James` for focused read-only runtime DOM verification, keeping the
  main thread out of broad selector investigation.

Convergence checks:

- Code block text/background contrast is clearer in static preview and real Wiki.js:
  Passed, computed real Wiki.js pre background `rgb(247, 248, 249)` and text
  `rgb(15, 23, 42)`.
- Copy button no longer displays low-contrast text: Passed, computed text color is
  transparent and font size is `0px`; original `Copy` text remains in DOM.
- Copy button uses an icon instead of hand-drawn double borders: Passed, computed
  `::before` uses a data-URI SVG mask, `17px` by `17px`, with background
  `rgb(23, 43, 77)`.
- Real Wiki.js copy button is covered even though it has no class: Passed, sub-agent
  found `<button>Copy</button>` under `div.code-toolbar > .toolbar .toolbar-item`.
- Callout icons no longer overflow: Passed, computed real Wiki.js
  `blockquote::before` display is `none`.
- Static preview uses the real toolbar shape: Passed.
- CSS remains valid by brace balance check: Passed, `183/183`.
- No Font Awesome font dependency remains in `wiki.css`: Passed.
- No document horizontal overflow in both static and real checks: Passed.
- CSS-only Wiki.js custom CSS boundary is preserved: Passed.

Verification:

- Re-injected CSS into real Wiki.js through GraphQL `theming.setConfig`.
- Confirmed local static preview is available:
  - `http://localhost:4173/preview.html`: HTTP 200.
- Confirmed real local Wiki.js page is available:
  - `http://127.0.0.1:3001/en/theme-preview`: HTTP 200.
- Used Chrome DevTools Protocol to inspect computed styles and capture screenshots:
  - `verification/preview-code-callout-copy.png`
  - `verification/wikijs-code-callout-copy.png`
  - `verification/preview-copy-svg-mask.png`
  - `verification/wikijs-copy-svg-mask.png`
  - `verification/wikijs-copy-svg-mask-focused.png`

Known risks:

- The copy button remains a CSS override of Wiki.js/Prism runtime DOM. If Wiki.js
  changes the Prism toolbar markup in a future version, the structural selector may
  need to be adjusted.
- The SVG mask uses a CSS data URI and should work in current Chrome/Edge, which are
  the local validation targets. Very old browsers without CSS mask support would fall
  back to a blank visual button while retaining the original DOM text for assistive
  technology.

### 2026-06-22 - Inter Font Loading Correction

Files changed:

- `wiki.css`
- `HANDOFF.md`

Runtime state changed, ignored by Git:

- Current `wiki.css` re-injected into Wiki.js theming `injectCSS`.

Completed:

- Corrected the previous font setup: `Inter` was present in the font stack but was not
  explicitly loaded.
- Added a top-level Google Fonts `@import` to `wiki.css` for Inter and Roboto, using
  the same family parameters provided by the user.
- Updated `--wiki-font` to quote `"Inter"` and include `Roboto` before system
  fallbacks.
- Kept the deliverable as a single Wiki.js custom CSS file rather than requiring
  template edits, injected JavaScript, or a custom theme package.

Convergence checks:

- Google Fonts CSS endpoint is reachable locally: Passed, HTTP 200.
- `@import` appears at the first line of `wiki.css`: Passed.
- CSS remains valid by brace balance check: Passed, `183/183`.
- Real Wiki.js computed font stack starts with Inter: Passed.
- Real Wiki.js naturally loads Inter after waiting: Passed,
  `document.fonts.check('16px "Inter"') === true`.

Verification:

- Re-injected CSS into real Wiki.js through GraphQL `theming.setConfig`.
- Verified `http://127.0.0.1:3001/en/theme-preview` with Chrome DevTools Protocol:
  - computed app font family:
    `Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", ...`;
  - loaded Inter font faces present in `document.fonts`.

Known risks:

- This depends on access to `fonts.googleapis.com` / `fonts.gstatic.com`. If a target
  deployment blocks external fonts, the CSS will fall back to Roboto/system/Chinese
  fonts. Using Wiki.js head injection with preconnect links would improve loading
  performance but would add a second deliverable surface beyond `wiki.css`.

### 2026-06-22 - Sidebar Shortcut Row Height Alignment

Files changed:

- `wiki.css`
- `HANDOFF.md`

Runtime state changed, ignored by Git:

- Current `wiki.css` re-injected into Wiki.js theming `injectCSS`.
- Generated screenshot in ignored `verification/`.

Completed:

- Reduced the left sidebar Home/Browse shortcut row height so it aligns with the main
  breadcrumb toolbar.
- Changed the shortcut row from `10px` vertical padding and `44px` buttons to `6px`
  vertical padding, `36px` buttons, and a `48px` row minimum height.
- Reduced the Home shortcut button width from `52px` to `40px` and icon size from
  `24px` to `20px`.

Convergence checks:

- Left shortcut row height matches the main breadcrumb toolbar: Passed, measured left
  row `49px` and main toolbar `48px`.
- Shortcut buttons remain comfortably clickable: Passed, measured button `40px x 36px`.
- Visual separator line between sidebar and content remains aligned: Passed by
  screenshot.
- CSS remains valid by brace balance check: Passed, `183/183`.

Verification:

- Re-injected CSS into real Wiki.js through GraphQL `theming.setConfig`.
- Verified `http://127.0.0.1:3001/en/theme-preview` with Chrome DevTools Protocol.
- Captured screenshot:
  - `verification/wikijs-sidebar-toolbar-compact.png`

Known risks:

- If Wiki.js changes the left shortcut row class `.pa-3.d-flex.blue.darken-3`, this
  compact sizing selector will need to be revisited.

### 2026-06-22 - Sidebar And Breadcrumb Divider Consistency

Files changed:

- `wiki.css`
- `HANDOFF.md`

Runtime state changed, ignored by Git:

- Current `wiki.css` re-injected into Wiki.js theming `injectCSS`.
- Generated screenshot in ignored `verification/`.

Completed:

- Unified the bottom divider under the left Home/Browse shortcut row and the main
  breadcrumb toolbar.
- Added a scoped rule for the real Wiki.js breadcrumb toolbar under `.v-main` so its
  divider uses the same subtle border token as the sidebar shortcut row.
- Corrected the selector after verifying the toolbar is under `.v-main__wrap`, not a
  direct child of `.v-main`.

Convergence checks:

- Left shortcut row divider: Passed, `1px solid rgb(215, 220, 227)`.
- Main breadcrumb toolbar divider: Passed, `1px solid rgb(215, 220, 227)`.
- Both toolbar shadows are disabled: Passed, `box-shadow: none`.
- CSS remains valid by brace balance check: Passed, `184/184`.

Verification:

- Re-injected CSS into real Wiki.js through GraphQL `theming.setConfig`.
- Verified `http://127.0.0.1:3001/en/theme-preview` with Chrome DevTools Protocol.
- Captured screenshot:
  - `verification/wikijs-toolbar-divider-unified.png`

Known risks:

- The main toolbar selector depends on Wiki.js/Vuetify classes
  `.v-toolbar.v-toolbar--dense` and `.grey.lighten-3`; if Wiki.js changes that
  breadcrumb toolbar markup, this alignment rule should be revisited.

### 2026-06-22 - Right Rail Frame Regression Fix

Files changed:

- `wiki.css`
- `HANDOFF.md`

Runtime state changed, ignored by Git:

- Current `wiki.css` re-injected into Wiki.js theming `injectCSS`.
- Generated screenshots in ignored `verification/`.

Completed:

- Fixed a regression where the right rail Talk card picked up the main Comments
  area border styling because both use `.page-comments-card`.
- Scoped the main Comments card border to `.page-comments-card:has(#discussion)` so
  it targets the actual discussion section, not the right rail Talk shortcut card.
- Removed the frame from the right rail Talk card and kept its View Discussion button
  as a light outlined action, matching the earlier screenshot.
- Lightened the right rail share/print shortcuts from large square joined buttons to
  compact `32px` icon buttons.
- Fixed a second regression where the global breadcrumb toolbar divider rule applied
  to the right rail shortcut toolbar, creating an unwanted bottom line.

Convergence checks:

- Right rail Talk card has no outer border: Passed, computed border `0px none`.
- Right rail shortcut card has no outer border: Passed, computed border `0px none`.
- Right rail shortcut toolbar has no bottom long line: Passed, computed
  `border-bottom: 0px none`.
- Shortcut buttons remain visible and clickable: Passed, measured `32px x 32px`.
- CSS remains valid by brace balance check: Passed, `190/190`.

Verification:

- Re-injected CSS into real Wiki.js through GraphQL `theming.setConfig`.
- Verified `http://127.0.0.1:3001/en/theme-preview` with Chrome DevTools Protocol.
- Captured screenshots:
  - `verification/wikijs-right-rail-unframed.png`
  - `verification/wikijs-right-rail-shortcuts-no-line.png`

Known risks:

- The main Comments scoping uses `:has(#discussion)`. It is verified in the local
  Chrome/Edge target; older browsers without `:has()` will not receive the main
  Comments card border refinement, but the right rail no longer depends on that rule.

### 2026-06-22 - Header Strip, Heading Anchor, And List Marker Polish

Files changed:

- `wiki.css`
- `HANDOFF.md`

Runtime state changed, ignored by Git:

- Current `wiki.css` re-injected into Wiki.js theming `injectCSS`.
- Generated screenshots in ignored `verification/`.

Completed:

- Hid the Wiki.js shell page header strip `.page-header-section`, leaving the article
  content heading visible.
- Removed card-like rounded corners from the breadcrumb toolbar and kept its subtle
  bottom divider.
- Hid Wiki.js generated heading anchor glyphs (`¶`) via scoped `.contents h* >
  .toc-anchor` rules.
- Changed article unordered lists from triangle markers to standard disc bullets and
  suppressed Wiki.js' extra `li::before` triangle pseudo-marker.

Convergence checks:

- Shell page header strip is hidden: Passed, computed display `none` and height `0`.
- Article H1/H2 remain visible: Passed.
- Breadcrumb toolbar has no radius: Passed, computed `border-radius: 0px`.
- Heading anchor glyph is hidden: Passed, `.toc-anchor` computed display `none` and
  width `0`.
- Article unordered list marker is a round bullet without overlaid triangle: Passed,
  computed `list-style-type: disc`, `li::before` display `none`, marker color
  `rgb(107, 110, 118)`.
- CSS remains valid by brace balance check: Passed, `193/193`.

Verification:

- Re-injected CSS into real Wiki.js through GraphQL `theming.setConfig`.
- Verified `http://127.0.0.1:3001/en/theme-preview` with Chrome DevTools Protocol.
- Captured screenshots:
  - `verification/wikijs-page-header-hidden.png`
  - `verification/wikijs-page-header-hidden-breadcrumb-square.png`
  - `verification/wikijs-heading-anchor-hidden.png`
  - `verification/wikijs-content-list-disc.png`
  - `verification/wikijs-content-list-disc-only.png`

Known risks:

- Hiding `.toc-anchor` removes the visible paragraph-link glyph, but the generated
  heading IDs and right-side Page Contents navigation remain available.

### 2026-06-22 - Code Block Text Selection Fix

Files changed:

- `wiki.css`
- `HANDOFF.md`

Runtime state changed, ignored by Git:

- Current `wiki.css` re-injected into Wiki.js theming `injectCSS`.
- Generated screenshot in ignored `verification/`.

Completed:

- Made code block text explicitly selectable by setting `user-select: text` on
  `.contents pre`, `.contents .prismjs`, nested `code`, and token children.
- Set code text cursor to `text`.
- Hid Prism line-number rows and reset line-number padding in toolbar code blocks,
  because the line-number layer caused visible text ghosting and blocked practical
  drag selection.
- Applied the same clarity direction to Comments code blocks: stronger text color,
  normal font weight, no text-shadow, monospace sizing, and selectable text.

Convergence checks:

- Code block `pre` and `code` compute to `user-select: text`: Passed.
- Prism line-number rows no longer render over code text: Passed, computed
  `.line-numbers-rows` display `none`.
- Toolbar code block padding is reset after hiding line numbers: Passed, computed
  left padding `16px`.
- Simulated drag selection inside the real Wiki.js code block produces cross-line
  selected text: Passed, selected text length `76`.
- CSS remains valid by brace balance check: Passed, `198/198`.

Verification:

- Re-injected CSS into real Wiki.js through GraphQL `theming.setConfig`.
- Verified `http://127.0.0.1:3001/en/theme-preview` with Chrome DevTools Protocol.
- Captured screenshot:
  - `verification/wikijs-code-selectable.png`
  - `verification/wikijs-code-selectable-no-line-numbers.png`

Known risks:

- The line-number selector assumes Prism's common `.line-numbers-rows` markup. If a
  future highlighter changes line-number markup, the text selection rule may need a
  small adjustment.
- The Comments code block CSS is present, but the latest focused runtime check did
  not find a mounted comment code block in the active page state. It should be
  visually rechecked when a comment with a code block is visible.

### 2026-06-22 - Code Block Drag, Syntax Highlighting, Comments Boundary, And Callout Spacing

Files changed:

- `wiki.css`
- `HANDOFF.md`

Runtime state changed, ignored by Git:

- Current `wiki.css` re-injected into Wiki.js theming `injectCSS`.
- Generated screenshots in ignored `verification/`.

Completed:

- Fixed the remaining real-browser code block drag issue by keeping the Prism toolbar
  layer non-interactive and setting `-webkit-user-drag: none` on article code blocks,
  token spans, the Prism toolbar, and the native Copy button.
- Kept the Copy icon visible on hover/focus while preventing the toolbar overlay from
  hijacking text selection.
- Restored stronger Prism token colors in article code blocks:
  comments muted gray, selectors/strings green, punctuation amber, properties red,
  keywords blue, and functions purple.
- Scoped the same token color rules to `.comments-post-content .token` for safety if
  Wiki.js ever emits Prism tokens in comments.
- Verified the current Wiki.js Comments renderer outputs plain
  `.comments-post-content pre > code.language-bash` for comment code blocks, with no
  `div.code-toolbar`, no `.toolbar`, no native Copy button, and no Prism token spans.
- Did not create a fake Comments copy icon, because CSS-only cannot add clipboard
  behavior or a real button where Wiki.js does not render one.
- Adjusted callout `blockquote` spacing so single-line callouts have equal top/bottom
  padding, zero first/last child margins, and stable vertical centering.

Convergence checks:

- Article code text hit-test starts on `.token` / `code`, not the toolbar: Passed.
- Simulated drag selection in the real Wiki.js article code block selects text:
  Passed, selected text length `117`.
- No `dragstart` fired during article code block text selection: Passed.
- Article Copy button remains available and computes `display: inline-flex`,
  `pointer-events: auto`, and `-webkit-user-drag: none`: Passed.
- Article Prism token colors are visibly distinct: Passed, computed examples include
  selector `rgb(0, 135, 90)`, property `rgb(201, 55, 44)`, function
  `rgb(101, 84, 192)`, and keyword blue via the updated token rules.
- Comments code block exists and remains readable/selectable: Passed, computed
  background `rgb(247, 248, 249)` and text `rgb(15, 23, 42)`.
- Comments native Copy control exists: Failed by design/DOM boundary, verified
  `0` copy candidates under `.comments-post-content`.
- Comments Prism token spans exist: Failed by current Wiki.js renderer boundary,
  verified `0` `.comments-post-content .token` nodes.
- Callout top/bottom padding is equal: Passed, computed `14px` / `14px`.
- Callout child first/last margins are removed: Passed, computed `0px` top and
  bottom margins for the inner paragraph.
- CSS remains valid by brace balance check: Passed, `200/200`.
- Deliverable remains Wiki.js custom CSS only: Passed.

Verification:

- Used sub-agent `Harvey` for read-only CodeBlock drag/toolbar investigation.
- Used sub-agent `Godel` for read-only article-vs-comments code block DOM
  investigation.
- Re-injected CSS into real Wiki.js through GraphQL `theming.setConfig`.
- Verified `http://127.0.0.1:3001/en/theme-preview` with Chrome DevTools Protocol.
- Queried Wiki.js GraphQL comments list for `/en/theme-preview`; confirmed comment
  `id=1` renders a fenced bash code block.
- Captured screenshots:
  - `verification/wikijs-code-highlight-restored.png`
  - `verification/wikijs-comments-codeblock-no-copy-native.png`
  - `verification/wikijs-comments-codeblock-visible.png`
  - `verification/wikijs-callout-spacing-even.png`

Known risks:

- Manual browser selection should be checked by the user in their normal/private
  window after a hard refresh, because CDP can verify DOM hit testing and selection
  behavior but cannot perfectly represent every hand drag path.
- Comments copy icon/functionality would require Wiki.js to render a native copy
  control or an approved JavaScript/source change. It is intentionally not faked in
  `wiki.css`.
- Comments code highlighting is limited by current Wiki.js rendered markup. The CSS
  is ready for token spans if they appear, but current comments render plain code.

## Active Notes

### 2026-06-22 - Selector Pollution Reduction And Callout Paragraph Spacing

Files changed:

- `wiki.css`
- `preview.html`
- `HANDOFF.md`

Runtime state changed, ignored by Git:

- Current `wiki.css` re-injected into Wiki.js theming `injectCSS`.

Completed:

- Updated Callout paragraph spacing to match the user's clarified intent:
  `blockquote > p` now keeps `margin: 8px 0 !important`, so single-paragraph
  callouts retain balanced top/bottom breathing room and multi-paragraph callouts do
  not collapse into a single block.
- Reduced real Wiki.js layout pollution from preview-oriented Vuetify primitives:
  global `.v-card` / `.v-sheet` rules are now scoped to `.v-main .contents`.
- Replaced global app-wide `.v-btn` / `.v-icon` styling with an explicit target
  whitelist covering known surfaces: nav header, navigation drawer, article contents,
  right rail/page cards, comments, editor toolbar, and speed dial.
- Scoped the dense toolbar divider rule to `.v-main .v-main__wrap > .v-toolbar...`
  instead of every dense toolbar under `.v-main`.
- Namespaced `preview.html` structure/helper CSS under `.preview-shell`, so local
  preview scaffolding no longer masks real `wiki.css` selector collisions.

Convergence checks:

- Callout paragraph rule preserves top and bottom margin: Passed by source check,
  `margin: 8px 0 !important`.
- CSS brace balance remains valid: Passed, `205/205`.
- Preview helper CSS no longer has bare `.v-card`, `.v-btn`, `.v-icon`, `.v-main`,
  `.v-row`, or similar Vuetify structure selectors: Passed by `rg` check.
- `wiki.css` no longer has bare global `.v-btn`, `.v-icon`, `.v-card`, or `.v-sheet`
  rules: Passed by `rg` check.
- Latest CSS was accepted by Wiki.js theming GraphQL mutation: Passed,
  `Theme config updated`.
- Deliverable remains Wiki.js custom CSS only: Passed.

Verification:

- Used sub-agent `Poincare` for read-only preview-vs-real-selector pollution review.
- Re-injected CSS into real Wiki.js through GraphQL `theming.setConfig`.
- Static checks performed with `rg` and brace-count checks.

Known risks:

- Button styling is now intentionally scoped by known Wiki.js surface. If a future
  page introduces a new button surface outside the whitelist, it may need a targeted
  selector instead of restoring global `.v-btn` styling.
- `preview.html` is closer to a validation harness after namespacing, but it still
  cannot fully represent every real Wiki.js Vuetify state.

### 2026-06-22 - Real Wiki.js Code Block Drag Selection Fix

Files changed:

- `wiki.css`
- `HANDOFF.md`

Runtime state changed, ignored by Git:

- Current `wiki.css` re-injected into Wiki.js theming `injectCSS`.

Completed:

- Rechecked CodeBlock selection against the real Wiki.js page
  `http://127.0.0.1:3001/en/theme-preview`, not `preview.html`.
- Found that the visually hidden Prism Copy button still had a clickable hit-test
  area before hover/focus. That invisible button could intercept manual drag paths
  near the top-right of the code block and show a blocked cursor.
- Added `cursor: text` to article code blocks.
- Made Prism toolbar children and the Copy button non-interactive by default, then
  restored Copy button `pointer-events: auto` only when the code block is
  `:hover` or `:focus-within`.
- Added a `pre:active ~ .toolbar` / `.prismjs:active ~ .toolbar` guard so a drag
  that starts from code text keeps the Copy overlay non-interactive while the mouse
  button is held down.
- After the user's manual test still failed in real Wiki.js, changed article code
  blocks to reserve a `48px` top toolbar area. This physically separates the Copy
  button from the first line of code text instead of relying only on pointer-events
  state during drag.
- After the user reported the reserved toolbar area made the layout worse and still
  did not fix manual selection, reverted the code block padding back to the compact
  `18px 48px 18px 16px` layout.
- Disabled CodeBlock Copy toolbar mouse hit-testing completely with
  `pointer-events: none !important`, prioritizing native text selection over CSS-only
  Copy button clickability.
- Updated `preview.html` CodeBlock to use static Prism-like token spans
  (`.token.comment`, `.token.selector`, `.token.property`, etc.) so the preview can
  exercise syntax highlight colors without adding a runtime highlighter.

Convergence checks:

- Real Wiki.js code block is `div.code-toolbar > pre.prismjs.line-numbers > code`:
  Passed.
- Hidden toolbar computes `opacity: 0` and `pointer-events: none`: Passed.
- Hidden Copy button now computes `pointer-events: none` before hover: Passed.
- The former Copy hot area now hit-tests the `pre`, not the invisible button:
  Passed.
- Copy button remains clickable when intentionally hovered: Passed, hover hit-test
  finds the `BUTTON` and button computes `pointer-events: auto`.
- Copy button no longer overlaps first code token in real Wiki.js: Passed, button
  rect `y=178-208` and first token starts at `y=219`.
- Compact CodeBlock layout restored: Passed, real `pre` padding computes to
  `18px 48px 18px 16px`.
- Copy toolbar and button no longer receive mouse events: Passed, real Copy button
  computes `pointer-events: none`.
- Former Copy area now hit-tests the `pre` element with `cursor: text` and
  `user-select: text`: Passed.
- Simulated drag selection in the real Wiki.js article code block creates text
  selection even when the drag path goes near the Copy overlay: Passed, selected
  text length `132`.
- Preview CodeBlock contains static Prism token markup: Passed by source check.
- CSS brace balance remains valid: Passed, `207/207`.
- Latest CSS was accepted by Wiki.js theming GraphQL mutation: Passed,
  `Theme config updated`.

Verification:

- Used Chrome DevTools Protocol against the real Wiki.js tab on `127.0.0.1:3001`.
- Re-injected CSS into real Wiki.js through GraphQL `theming.setConfig`.
- Used sub-agent `Galileo` for read-only investigation; it confirmed the real code
  text was selectable and the remaining blocker was the Copy overlay area.

Known risks:

- The Copy button intentionally becomes clickable only after hover/focus makes the
  toolbar visible. This preserves copy functionality while avoiding an invisible
  hit-test target over selectable text.

### 2026-06-22 - Content Preview Button Regression Fix

Files changed:

- `wiki.css`
- `HANDOFF.md`

Runtime state changed, ignored by Git:

- Current `wiki.css` re-injected into Wiki.js theming `injectCSS`.

Completed:

- Restored scoped component scaffolding for the content-area sample card/buttons after
  global Vuetify selector reduction made real Wiki.js render the page-content
  examples as small text chips.
- Added `.v-main .contents`-scoped card padding/margin/title/subtitle rules.
- Added `.v-main .contents`-scoped `.v-btn` box-model rules so Wiki.js-rendered
  anchor buttons (`<a class="v-btn ...">`) regain inline-flex layout, height, padding,
  and spacing.
- Added `.v-main .contents`-scoped `.editor-markdown-toolbar` sample layout rules so
  the sample toolbar retains a proper row, gap, and button sizing without restoring
  app-wide `.v-btn` pollution.

Convergence checks:

- CSS brace balance remains valid: Passed, `212/212`.
- Latest CSS was accepted by Wiki.js theming GraphQL mutation: Passed,
  `Theme config updated`.
- Real Wiki.js card buttons under `/en/theme-preview` render as `inline-flex` with
  `34px` height and `0px 14px` padding: Passed.
- Real Wiki.js primary/danger content buttons keep readable white foreground:
  Passed.
- Real Wiki.js editor toolbar sample renders as a flex row with `8px` gap and `34px`
  buttons: Passed.
- Rules remain scoped under `.v-main .contents`: Passed.

Verification:

- Used Chrome DevTools Protocol against the real Wiki.js tab on `127.0.0.1:3001`.
- Re-injected CSS into real Wiki.js through GraphQL `theming.setConfig`.

Known risks:

- These rules intentionally style demo/sample Vuetify-like markup when it appears
  inside article `.contents`. They do not restore global `.v-btn` styling.

### 2026-06-22 - Right Rail Tags Color Alignment

Files changed:

- `wiki.css`
- `HANDOFF.md`

Runtime state changed, ignored by Git:

- Current `wiki.css` re-injected into Wiki.js theming `injectCSS`.

Completed:

- Recolored the right-rail Wiki.js Tags card from default teal/green to the same
  shallow blue family used for active TOC/navigation surfaces.
- Scoped the override to `.page-col-sd .page-tags-card` so it does not affect Prism
  `.token.tag`, article content, or other Vuetify chips elsewhere.
- Overrode Wiki.js default `teal lighten-5` chip background and `teal--text`
  icon/text color.

Convergence checks:

- CSS brace balance remains valid: Passed, `216/216`.
- Latest CSS was accepted by Wiki.js theming GraphQL mutation: Passed,
  `Theme config updated`.
- Real Wiki.js Tags label computes to primary blue: Passed,
  `rgb(24, 104, 219)`.
- Real Wiki.js tag chip background computes to pale blue: Passed,
  `rgb(233, 242, 255)`.
- Real Wiki.js tag icon/text computes to primary blue: Passed.

Verification:

- Used Chrome DevTools Protocol with a wide viewport against the real Wiki.js tab on
  `127.0.0.1:3001`.
- Re-injected CSS into real Wiki.js through GraphQL `theming.setConfig`.

Known risks:

- The selector assumes Wiki.js keeps the right rail tag container class
  `.page-tags-card` and Vuetify chip markup. If Wiki.js changes this DOM, retarget the
  scoped tag rules.

### 2026-06-22 - Content Secondary Button Border Fix

Files changed:

- `wiki.css`
- `HANDOFF.md`

Runtime state changed, ignored by Git:

- Current `wiki.css` re-injected into Wiki.js theming `injectCSS`.

Completed:

- Added a neutral button style for `.v-main .contents` buttons that are not primary,
  blue, deep-purple, red, icon, or FAB buttons.
- The content-area Secondary button now has a white surface, subtle gray border, and
  hover border/background treatment instead of looking like plain text.

Convergence checks:

- CSS brace balance remains valid: Passed, `219/219`.
- Latest CSS was accepted by Wiki.js theming GraphQL mutation: Passed,
  `Theme config updated`.
- Real Wiki.js Secondary button computes to `inline-flex`, height `34px`, padding
  `0px 14px`, background `rgb(255, 255, 255)`, and border
  `1px rgb(215, 220, 227)`: Passed.
- Rule remains scoped to `.v-main .contents`: Passed.

Verification:

- Used Chrome DevTools Protocol against the real Wiki.js tab on `127.0.0.1:3001`.
- Re-injected CSS into real Wiki.js through GraphQL `theming.setConfig`.

### 2026-06-22 - Content Button Hover Behavior Fix

Files changed:

- `wiki.css`
- `HANDOFF.md`

Runtime state changed, ignored by Git:

- Current `wiki.css` re-injected into Wiki.js theming `injectCSS`.

Completed:

- Made article content `.v-btn` controls use `cursor: pointer`.
- Disabled inherited article-link hover underline on content buttons, so button links
  behave visually like buttons rather than text links.

Convergence checks:

- CSS brace balance remains valid: Passed, `220/220`.
- Latest CSS was accepted by Wiki.js theming GraphQL mutation: Passed,
  `Theme config updated`.
- Real Wiki.js content button hover computes `cursor: pointer`: Passed.
- Real Wiki.js content button hover computes `text-decoration: none`: Passed.

Verification:

- Used Chrome DevTools Protocol against the real Wiki.js tab on `127.0.0.1:3001`.
- Re-injected CSS into real Wiki.js through GraphQL `theming.setConfig`.

### 2026-06-22 - Editor Toolbar Sample Save Contrast Fix

Files changed:

- `wiki.css`
- `HANDOFF.md`

Runtime state changed, ignored by Git:

- Current `wiki.css` re-injected into Wiki.js theming `injectCSS`.

Completed:

- Fixed the primary Save button foreground in the article editor-toolbar sample and
  the real Markdown editor toolbar.
- Added scoped rules so `.editor-markdown-toolbar .v-btn.primary` and its content
  use the inverse/white foreground, while neutral toolbar buttons remain dark.

Convergence checks:

- CSS brace balance remains valid: Passed, `222/222`.
- Latest CSS was accepted by Wiki.js theming GraphQL mutation: Passed,
  `Theme config updated`.
- Real Wiki.js editor toolbar sample Save button background computes to blue and text
  computes to white: Passed, `rgb(24, 104, 219)` / `rgb(255, 255, 255)`.

Verification:

- Used Chrome DevTools Protocol against the real Wiki.js tab on `127.0.0.1:3001`.
- Re-injected CSS into real Wiki.js through GraphQL `theming.setConfig`.

### 2026-06-22 - Content Button Row Spacing Fix

Files changed:

- `wiki.css`
- `HANDOFF.md`

Runtime state changed, ignored by Git:

- Current `wiki.css` re-injected into Wiki.js theming `injectCSS`.

Completed:

- Added scoped margin to card paragraph buttons in `.v-main .contents`, because real
  Wiki.js renders the sample button row as inline anchor buttons inside a paragraph
  rather than the static preview's `.button-row` flex container.
- The row now has breathing room between adjacent buttons and wraps with bottom
  spacing.

Convergence checks:

- CSS brace balance remains valid: Passed, `223/223`.
- Latest CSS was accepted by Wiki.js theming GraphQL mutation: Passed,
  `Theme config updated`.
- Real Wiki.js card buttons compute `margin: 0px 4px 8px 0px`: Passed.

Verification:

- Used Chrome DevTools Protocol against the real Wiki.js tab on `127.0.0.1:3001`.
- Re-injected CSS into real Wiki.js through GraphQL `theming.setConfig`.

### 2026-06-22 - Restore CodeBlock Copy Button Function

Files changed:

- `wiki.css`
- `HANDOFF.md`

Runtime state changed, ignored by Git:

- Current `wiki.css` re-injected into Wiki.js theming `injectCSS`.

Completed:

- Reverted the last-resort rule that globally forced CodeBlock Copy controls to
  `pointer-events: none !important`.
- Restored the intended behavior: hidden toolbar does not take events, but when the
  CodeBlock is hovered/focused, the real Prism Copy button becomes clickable.
- Left the manual text-selection issue open for separate investigation instead of
  continuing blind CSS changes.

Convergence checks:

- CSS brace balance remains valid: Passed, `222/222`.
- Latest CSS was accepted by Wiki.js theming GraphQL mutation: Passed,
  `Theme config updated`.
- Real Wiki.js Copy button computes `pointer-events: auto`, `cursor: pointer`, and
  `display: inline-flex` when hovered: Passed.
- Real Wiki.js hit-test on the Copy icon area finds the real `BUTTON`: Passed.

Verification:

- Used Chrome DevTools Protocol against the real Wiki.js tab on `127.0.0.1:3001`.
- Re-injected CSS into real Wiki.js through GraphQL `theming.setConfig`.

- `wiki.css` must be treated as a selector map, not a design source.
- Red line from user: generated deliverables must strictly follow Wiki.js custom CSS
  usage. Do not hallucinate unsupported Wiki.js theme/package/plugin/config mechanisms.
- Official boundary: deliver `wiki.css` as CSS override plus local preview support, not
  a custom theme package or source-code patch.
- `preview.html` is only for local validation and must not become a runtime requirement.
- Keep main context clean by delegating independent investigation or verification work.
- Investigation default is now stricter: broad audits, runtime source exploration,
  visual reference analysis, and open-ended verification should go to sub-agents; main
  thread keeps only integration decisions and concise verification summaries.
- Update this file after every meaningful task state change.

### 2026-06-22 - Code Selection Visibility And FAB Contrast

Files changed:

- `wiki.css`
- `HANDOFF.md`

Runtime state changed, ignored by Git:

- Current `wiki.css` re-injected into Wiki.js theming `injectCSS`.

Completed:

- Confirmed the CodeBlock text-selection problem was visual feedback, not selection
  mechanics.
- Added scoped `::selection` / `::-moz-selection` rules for article CodeBlocks and
  comment CodeBlocks so Prism token colors cannot hide the selected range.
- Tried system `Highlight` / `HighlightText` colors, but they stayed blue when the
  browser lost focus and looked too different from normal inactive selection.
- Settled on a neutral gray CodeBlock selection token so selected code stays visible
  without the earlier heavy blue active-state mismatch.
- Fixed right-bottom speed-dial secondary FABs by giving default white FABs a dark icon
  color, while keeping the blue edit FAB and red destructive FAB on white foregrounds.

Convergence checks:

- CSS brace balance remains valid: Passed, `225/225`.
- `git diff --check`: Passed.
- Latest CSS was accepted by Wiki.js theming GraphQL mutation: Passed,
  `Theme config updated`.
- Change remains CSS-only under Wiki.js custom CSS selectors: Passed.

Verification:

- Re-injected CSS into real Wiki.js through GraphQL `theming.setConfig`.
- Manual visual verification accepted the neutral gray selection as usable, while not
  perfectly matching the browser's native active/inactive selection behavior.

### 2026-06-23 - Visual Editor Contrast Audit

Files changed:

- `wiki.css`
- `HANDOFF.md`

Runtime state changed, ignored by Git:

- Current `wiki.css` re-injected into Wiki.js theming `injectCSS`.
- Created or reused local Wiki.js validation page
  `/en/visual-editor-contrast-test` with the `ckeditor` editor for real Visual Editor
  checks.

Completed:

- Investigated the Visual Editor screenshot issue against Wiki.js runtime source and
  real DOM instead of guessing from the static preview.
- Confirmed the editor shell hard-codes right-side action labels as `.white--text`
  inside a white top nav after our theme override, making labels such as `Create`,
  `Page`, and `Close` disappear.
- Added editor-shell-scoped nav action overrides under
  `#root .v-application.editor .nav-header` so green, blue, amber, red, disabled, and
  hard-coded `.white--text` action labels/icons keep readable foreground colors on the
  white editor header.
- Confirmed Wiki.js' bundled Visual Editor CSS sets the CKEditor toolbar to
  `background-color: #e0e0e0; color: #fff`, which is a second contrast risk.
- Added Visual Editor / CKEditor toolbar overrides under `.editor-ckeditor` so the
  toolbar uses the theme's light gray surface with dark text/icons, readable hover
  states, and muted disabled controls.
- Used sub-agent `Dewey` for a read-only contrast audit. Its main finding was that
  editor toolbar and colored editor buttons needed late, scoped foreground repair;
  this was integrated with the runtime source finding for the Visual Editor shell.

Convergence checks:

- CSS brace balance remains valid: Passed, `238/238`.
- `git diff --check`: Passed.
- Latest CSS was accepted by Wiki.js theming GraphQL mutation: Passed,
  `Theme config updated`.
- Real Visual Editor page loads: Passed,
  `http://127.0.0.1:3001/e/en/visual-editor-contrast-test`.
- Real Visual Editor top action labels are readable: Passed by CDP computed styles:
  `Saved` text/icon `rgb(33, 110, 78)`, `Page` text/icon `rgb(24, 104, 219)`,
  `Close` text/icon `rgb(174, 42, 25)`.
- Real CKEditor toolbar is readable: Passed by CDP computed styles, toolbar background
  `rgb(241, 242, 244)`, default button text `rgb(41, 42, 46)`, active button text
  `rgb(23, 43, 77)`.
- Change remains CSS-only under Wiki.js custom CSS selectors: Passed.

Verification:

- Re-injected CSS into real Wiki.js through GraphQL `theming.setConfig`.
- Used Chrome DevTools Protocol against the local Wiki.js instance on
  `127.0.0.1:3001` to inspect the real Visual Editor DOM and computed styles.

Notes:

- The direct root cause for the screenshot was Wiki.js editor shell markup using
  `.white--text` for labels while our theme makes `.nav-header` white.
- The broader contrast audit found another concrete Visual Editor issue in bundled
  `.editor-ckeditor .ck.ck-toolbar` default styling. No unsupported theme package,
  plugin, or runtime JS mechanism was introduced.
