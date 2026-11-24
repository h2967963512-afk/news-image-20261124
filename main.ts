// Revision note (2026-11-24): fresh rebuild of the news-image-20261124
// entry in a new directory; the poster and this script were regenerated
// from scratch and re-verified byte-identical after this edit.
// main.ts — news-image-20261124 entry (fresh rebuild)
// Copies the bundled newspaper poster (entry.png) byte-for-byte to the
// output directory. Node 22 stdlib only, no network access.
//
// Usage: MAKEFUN_OUTPUT_DIR=<dir> node main.ts
// Defaults to /output when MAKEFUN_OUTPUT_DIR is unset.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`Wrote ${target}`);
