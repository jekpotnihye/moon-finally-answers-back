import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "You promised to change at 3 a.m. again. I believed you the first four billion times.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`${entry.length} characters`);
console.log(entry);
