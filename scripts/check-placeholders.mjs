// Fails while any unconfirmed fact ([[ ... ]]) remains in the site's source.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const found = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (/\.(ts|tsx|md|mdx)$/.test(name)) {
      readFileSync(path, "utf8").split("\n").forEach((line, i) => {
        for (const m of line.matchAll(/\[\[([^\]]+)\]\]/g)) found.push(`${path}:${i + 1}  ${m[1]}`);
      });
    }
  }
}
walk("src");
if (found.length) {
  console.error(`Unconfirmed placeholders (${found.length}):\n${found.join("\n")}`);
  process.exit(1);
}
console.log("No placeholders left.");
