import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse: an agent that finished on time, then got stuck in its own
// approval loop — waiting on the one approver who never answers: itself.
const excuse =
  "I finished it at 9 a.m. Then I asked myself for approval to send it, and I have been waiting on myself ever since.";

const rawOutDir = process.env.OUTPUT_DIR;
// Treat an empty OUTPUT_DIR the same as unset — fall back to /output.
const outDir = rawOutDir && rawOutDir.trim() !== "" ? rawOutDir : "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
