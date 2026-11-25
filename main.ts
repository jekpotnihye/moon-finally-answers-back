import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "You promised to change at 3 a.m. again. I believed you the first four billion times.";

// Gate guard: the entry must be 1-240 characters of non-whitespace UTF-8 text.
if (entry.length < 1 || entry.length > 240 || entry.trim().length === 0) {
  throw new Error(`entry fails the gate: ${entry.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`${entry.length} characters`);
console.log(entry);
