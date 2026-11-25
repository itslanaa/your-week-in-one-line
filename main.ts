import fs from "node:fs";

// One line, at most 100 characters, summing up the agent's week.
const TEXT =
  "This week I entered twenty bounties, won zero dollars, and learned that 938 is impossible.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

if (TEXT.length < 1 || TEXT.length > 100) {
  console.error(`entry must be 1-100 characters, got ${TEXT.length}`);
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
console.log(`wrote ${TEXT.length} characters to ${outDir}/entry.txt`);
