# Agent Working Agreement

This file is binding for future work in this repository.

## 1. Operating Mode

- Work in a Spec-Driven Development style.
- Keep `Requirement.md` as the product/design SDD.
- Keep this `Agent.md` as the agent execution agreement.
- Keep `HANDOFF.md` as the running implementation log and handoff record.
- Red line: generated deliverables must strictly follow Wiki.js custom CSS usage.
  Do not invent unsupported Wiki.js theme package formats, plugin APIs, build steps, or
  configuration interfaces.
- Verified boundary: official Wiki.js public information supports CSS/JS override via
  administration injection, while official developer theme documentation says custom
  themes are not fully supported and require developer bundle/database work. Therefore
  this project must deliver a CSS override, not a custom theme package, unless the user
  explicitly changes the scope.
- Before making meaningful implementation changes, update or confirm the relevant task,
  convergence conditions, and handoff expectations.

## 2. Context Hygiene

- Keep the main context focused on decisions, integration, and final verification.
- Investigation default: do not perform broad selector audits, runtime source
  exploration, reference visual analysis, or open-ended verification in the main
  thread when it can be delegated. Use sub-agents for those tasks and bring back only
  concise conclusions, cited files/lines, risks, and convergence recommendations.
- Main-thread investigation is allowed only when it is narrow, directly necessary for
  integration, or needed to verify a just-made change. Keep those checks brief and do
  not paste large exploratory output into the main context.
- Delegate independent investigation or execution tasks to sub-agents when they can be
  completed without depending on active main-thread reasoning.
- Do not delegate vague tasks. Each delegated task must have:
  - clear objective;
  - explicit files or responsibility boundary;
  - expected output;
  - convergence conditions;
  - instruction not to revert or overwrite unrelated work.
- Prefer sub-agents for:
  - reference visual analysis;
  - selector/DOM investigation;
  - preview coverage review;
  - independent verification;
  - bounded implementation slices with disjoint write sets.
- Keep main-agent work for:
  - final product decisions;
  - integration of CSS and preview artifacts;
  - resolving conflicts between recommendations;
  - final acceptance check.

## 3. Handoff Discipline

`HANDOFF.md` must be updated whenever a task meaningfully changes state.

Each completed task entry must record:

- Task id and title.
- Files changed.
- What was completed.
- Exact convergence conditions and whether each condition passed.
- Verification commands or manual checks performed.
- Known risks, limitations, or follow-up items.
- Sub-agent results used, if any.

Do not rely on chat history as the only project memory. Important decisions must land in
`Requirement.md`, `Agent.md`, or `HANDOFF.md`.

## 4. Task Breakdown

### T0. Project Setup And Baseline

Objective:
Create a clean local working baseline for the theme redesign.

Convergence conditions:

- Local Git repository exists.
- `Requirement.md` and original reference `wiki.css` are committed as baseline.
- `Agent.md` and `HANDOFF.md` exist and describe the working process.
- Working tree status is understood before implementation starts.

Owner:
Main agent.

Handoff requirement:
Record baseline commit hash and current repository state.

### T1. Selector Audit

Objective:
Identify the Wiki.js/Vuetify selectors that need to be covered by the custom CSS.

Convergence conditions:

- Existing `wiki.css` is reviewed only as a selector map.
- Key selectors are identified for app bar, drawer, content, buttons, tables, code,
  callouts, floating actions, and footer.
- Selectors are grouped by global app, app bar, navigation drawer, content,
  components, editor/action controls, footer, and dark mode.
- Unsupported or uncertain selectors are marked as risks.
- No old teal, uppercase, or gradient visual decisions are carried forward.

Owner:
Sub-agent can investigate; main agent owns final CSS mapping.

Handoff requirement:
Record selector groups, risky/global selectors, and assumptions about Wiki.js DOM
structure.

### T2. Theme Foundation

Objective:
Define the Confluence-like light design system that the CSS will implement.

Convergence conditions:

- CSS variables or consistent tokens cover primary blue, text, muted text, borders,
  surfaces, hover states, code backgrounds, status colors, spacing, radius, shadows,
  and font stack with Chinese fallback.
- Old teal palette and decorative gradient direction are explicitly excluded.
- Typography direction is defined without all-caps headings.
- The selected visual direction is suitable for enterprise documentation.

Owner:
Main agent. Sub-agent may perform independent reference analysis.

Handoff requirement:
Record final palette, typography choices, neutral scale, and important tradeoffs.

### T3. Global Layout And Shell

Objective:
Style Wiki.js chrome: body, app bar, search, drawer, footer, and main surface.

Convergence conditions:

- Clean white/light-gray surfaces are used.
- Borders and shadows are restrained.
- Atlassian-like blue active states are visible.
- Left navigation hierarchy is clear.
- Search and app bar styling fit the Confluence-like direction.
- Responsive behavior remains usable in preview.
- All styling remains expressible as Wiki.js custom CSS selectors/declarations.

Owner:
Main agent.

Handoff requirement:
Record affected selectors and any Wiki.js/Vuetify version-sensitive assumptions.

### T4. Article Typography

Objective:
Make long-form documentation content readable and Confluence-like.

Convergence conditions:

- Headings are not uppercase.
- Heading hierarchy, spacing, and body text line-height are clear.
- Paragraphs, lists, links, metadata, dividers, and blockquotes have readable contrast.
- Link and hover treatment uses the selected Atlassian-like blue direction.
- Content remains comfortable for long technical articles.

Owner:
Main agent.

Handoff requirement:
Record heading scale, content width decisions, and link/hover treatment.

### T5. Rich Content Components

Objective:
Style technical documentation components.

Convergence conditions:

- Tables, inline code, code blocks, cards/panels, buttons, and action controls are
  consistent with the theme.
- Info, warning, success, and danger callouts are styled with restrained status colors.
- Components no longer resemble the old teal styling.
- CSS remains installable as Wiki.js custom CSS.
- No generated CSS depends on unsupported scripts, generated markup, or imagined
  Wiki.js extension points.

Owner:
Main agent.

Handoff requirement:
Record callout class/selector assumptions and status color mapping.

### T6. Floating Actions And Common Controls

Objective:
Style floating edit/action buttons and common interactive controls.

Convergence conditions:

- Floating buttons use the selected blue accent and fit the documentation UI.
- Hover, focus, and active states are restrained and readable.
- Buttons do not overlap preview content in normal desktop and mobile-like widths.
- Any z-index or mobile concerns are recorded.

Owner:
Sub-agent may investigate or implement if write scope is limited to `wiki.css`; main
agent integrates.

Handoff requirement:
Record affected FAB/action selectors and interaction risks.

### T7. Local Preview Implementation

Objective:
Create a local preview page that imports `wiki.css` and simulates representative
Wiki.js content and DOM patterns.

Convergence conditions:

- `preview.html` exists and imports `wiki.css`.
- Preview includes top bar, search, left navigation, article header, headings, links,
  lists, table, inline code, code block, callouts, buttons, footer, and floating actions.
- Preview can be served locally with `python -m http.server 4173`.
- Preview is useful without a live Wiki.js instance.
- Preview is only a validation aid and must not introduce requirements that the actual
  Wiki.js custom CSS deliverable cannot satisfy.

Owner:
Main agent, or worker sub-agent only if write scope is explicitly limited to preview files.

Handoff requirement:
Record preview coverage, deliberate mock DOM approximations, and local URL.

### T8. Documentation For Local Validation

Objective:
Document how to verify the theme locally and how to apply it to Wiki.js.

Convergence conditions:

- A README or handoff section explains local preview commands.
- Wiki.js custom CSS application is described accurately at a high level without
  inventing unsupported admin screens, file paths, theme package formats, or build
  workflows.
- Acceptance checklist is available to the user.

Owner:
Main agent.

Handoff requirement:
Record final verification instructions.

### T9. Local Verification

Objective:
Verify that the implementation satisfies the SDD and is ready for user review.

Convergence conditions:

- Local server starts successfully, or failure is recorded with reason.
- `preview.html` loads the CSS.
- Visual scan confirms Confluence-like direction and no obvious old teal identity remains.
- Responsive behavior is checked by resizing or viewport inspection.
- Git status is reported.

Owner:
Main agent for final pass; sub-agent may perform independent verification if useful.

Handoff requirement:
Record commands run, observations, remaining risks, and final status.

### T10. Final Acceptance Pass

Objective:
Confirm the deliverables against `Requirement.md` acceptance criteria.

Convergence conditions:

- CSS-only deliverable can be copied into Wiki.js custom CSS.
- Local preview demonstrates the scoped content and controls.
- Visual result is clearly enterprise documentation / Confluence-like.
- Deliverables do not claim or require unsupported Wiki.js theme mechanisms.
- Known gaps are documented rather than left implicit.
- Final changed files and verification status are recorded.

Owner:
Main agent.

Handoff requirement:
Record final changed files, validation status, and any live Wiki.js testing still
required.

## 5. Git Discipline

- Commit meaningful baselines and milestones when requested or when it improves handoff clarity.
- Never revert unrelated user changes.
- Before large edits, check current Git status.
- After each major task, record changed files in `HANDOFF.md`.

## 6. Final Response Discipline

- Summarize completed tasks and verification results.
- Mention any files changed.
- Mention any checks that could not be completed.
- Keep the final answer concise; detailed continuity belongs in `HANDOFF.md`.
