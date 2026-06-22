import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve(process.cwd());
const port = Number(process.env.PORT || 4173);

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

function resolveRequest(url) {
  const parsed = new URL(url, `http://127.0.0.1:${port}`);
  const pathname = decodeURIComponent(parsed.pathname);
  const relative = pathname === "/" ? "preview.html" : pathname.slice(1);
  const target = resolve(root, normalize(relative));

  if (!target.startsWith(root)) {
    return null;
  }

  return target;
}

createServer((request, response) => {
  const target = resolveRequest(request.url || "/");

  if (!target || !existsSync(target) || !statSync(target).isFile()) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "content-type": types[extname(target)] || "application/octet-stream",
  });
  createReadStream(target).pipe(response);
}).listen(port, "127.0.0.1", () => {
  console.log(`Preview server listening at http://127.0.0.1:${port}/preview.html`);
});
