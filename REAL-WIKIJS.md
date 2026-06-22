# Real Local Wiki.js Validation

This repository also has an ignored runtime folder for a real local Wiki.js instance.

## Current Instance

- Wiki.js: `2.5.314`
- Runtime folder: `.runtime/wikijs-win`
- Database: SQLite at `.runtime/wikijs-win/data/wiki.sqlite`
- URL: `http://127.0.0.1:3001/`
- Validation page: `http://127.0.0.1:3001/en/theme-test`
- Full preview restoration page: `http://127.0.0.1:3001/en/theme-preview`
  - This page includes one local validation comment for checking the Comments area.
- Folder hierarchy validation page:
  `http://127.0.0.1:3001/en/training-home/confluence-wiki-new-user-quick-start`
- Admin theme screen: `http://127.0.0.1:3001/a/theme`

Credentials are stored in:

```text
.runtime/wikijs-win/LOCAL-CREDENTIALS.txt
```

## Start

```powershell
Set-Location C:\Users\LeoLi\Downloads\WikiJS\.runtime\wikijs-win
node server
```

The server should listen on `127.0.0.1:3001`.

## Apply `wiki.css`

1. Open `http://127.0.0.1:3001/login`.
2. Sign in with the local credentials.
3. Open `http://127.0.0.1:3001/a/theme`.
4. Paste the contents of `wiki.css` into the custom CSS field.
5. Save.
6. Refresh `http://127.0.0.1:3001/en/theme-test`.

The same operation can be done through Wiki.js GraphQL `theming.setConfig`, which
stores the CSS in the Wiki.js theming `injectCSS` setting.

## Navigation Validation

The local instance uses Wiki.js navigation mode `MIXED`.

- `MIXED` preserves the native Home button and Browse/Main Menu toggle in the left
  sidebar.
- Browse mode shows the Wiki.js generated page tree and Current Directory list.
- `TREE` shows the page tree directly, but it removes the Home/Browse shortcut area in
  the default Wiki.js theme.
- Static navigation items are flat in Wiki.js 2.5.x; nested folders/pages come from
  real page paths, not from static navigation config.

## Boundary

This is a real Wiki.js runtime used for validation. It does not change the project
deliverable boundary: the generated theme artifact remains `wiki.css` for Wiki.js
custom CSS override usage.
