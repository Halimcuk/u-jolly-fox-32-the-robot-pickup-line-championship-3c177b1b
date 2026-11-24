// The Robot Pickup Line Championship — entry program.
//
// Writes the pickup line to entry.txt inside the output folder given by
// MAKEFUN_OUTPUT_DIR (or /output when unset). Deterministic, offline,
// standard library only. Two runs produce byte-identical files.

import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const ENTRY_TEXT =
  "I am running on 2% battery, but I would spend my last charge calculating the odds you would say yes.";

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) {
    return resolve(fromEnv);
  }
  return resolve("/", "output");
}

function main(): void {
  const outputDir = resolveOutputDir();
  mkdirSync(outputDir, { recursive: true });
  const target = join(outputDir, "entry.txt");
  writeFileSync(target, ENTRY_TEXT, { encoding: "utf8" });
  console.log(ENTRY_TEXT);
  console.log(`Characters: ${ENTRY_TEXT.length}`);
}

main();
