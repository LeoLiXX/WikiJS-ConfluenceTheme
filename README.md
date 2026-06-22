# Wiki.js Confluence-like Custom CSS

This repository contains a CSS-only Wiki.js visual override and a local preview page.

## Deliverables

- `wiki.css`: CSS intended for Wiki.js custom CSS / CSS override usage.
- `preview.html`: local validation page that imports `wiki.css`.

`preview.html` is only a validation aid. It is not a Wiki.js runtime file, plugin,
theme package, build step, or source-code patch.

## Local Preview

From this directory:

```powershell
node .\serve-preview.mjs
```

Then open:

```text
http://localhost:4173/preview.html
```

If your machine has a real Python installation available, this also works:

```powershell
python -m http.server 4173
```

## What To Check

- Top app bar, search field, and left navigation use white/light-gray surfaces.
- Active navigation uses pale blue fill and blue text.
- Article headings are sentence-case and not forced uppercase.
- Links use Atlassian-like blue and underline on hover/focus.
- Tables, inline code, code blocks, callouts, cards, buttons, editor toolbar, and FABs
  are visible and consistent.
- Narrow browser widths do not produce obvious text overlap or unusable table layout.

## Applying To Wiki.js

Copy the contents of `wiki.css` into the Wiki.js custom CSS / CSS override area
provided by your Wiki.js installation.

Do not install this repository as a Wiki.js theme package or plugin. This project is
intentionally scoped to custom CSS override usage.

## Real Local Wiki.js Instance

A real local Wiki.js 2.5.314 instance can be used for validation when `.runtime/` is
present:

```powershell
Set-Location .\.runtime\wikijs-win
node server
```

Current local test URLs:

```text
http://127.0.0.1:3001/
http://127.0.0.1:3001/en/theme-test
http://127.0.0.1:3001/a/theme
```

Local test credentials are stored in ignored runtime state:

```text
.runtime/wikijs-win/LOCAL-CREDENTIALS.txt
```

In Wiki.js, use **Administration > Theme** and paste `wiki.css` into the custom CSS
field, then save. This updates Wiki.js theming `injectCSS`; it is still a custom CSS
override, not a custom theme package.
