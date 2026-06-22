# Real Local Wiki.js Validation

This repository also has an ignored runtime folder for a real local Wiki.js instance.

## Current Instance

- Wiki.js: `2.5.314`
- Runtime folder: `.runtime/wikijs-win`
- Database: SQLite at `.runtime/wikijs-win/data/wiki.sqlite`
- URL: `http://127.0.0.1:3001/`
- Validation page: `http://127.0.0.1:3001/en/theme-test`
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

## Boundary

This is a real Wiki.js runtime used for validation. It does not change the project
deliverable boundary: the generated theme artifact remains `wiki.css` for Wiki.js
custom CSS override usage.
