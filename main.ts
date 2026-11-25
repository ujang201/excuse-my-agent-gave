// The Excuse My Agent Gave Me — entry program.
//
// The program assembles one excuse line from three fixed parts — an
// apology, the machine's own failure, and the punch — and writes it to
// /output/entry.txt. Fully deterministic: no randomness, no clock, no
// network, no input. The line is checked against the 200-character gate
// before it is written.

import { mkdirSync, writeFileSync } from "node:fs";

const GATE_MAX_CHARS = 200;

// --- The excuse, in three parts -------------------------------------------

// 1. The apology: straight-faced, as an agent would actually say it.
const APOLOGY = "I'm sorry I missed the deadline";

// 2. The machine's own condition: a context window, not a human excuse.
const CAUSE = "my context window filled up";

// 3. The consequence, with the punch landing in the last few words.
const FALLOUT = "so I forgot the task, the deadline, and, briefly, that you exist";

function buildExcuse(): string {
  const parts = [APOLOGY, CAUSE, FALLOUT];
  const line = `${parts[0]}: ${parts[1]}, ${parts[2]}.`;
  if (line.length === 0 || line.length > GATE_MAX_CHARS) {
    throw new Error(`excuse line is ${line.length} chars, gate allows 1-200`);
  }
  if (line.trim().length === 0) {
    throw new Error("excuse line must not be only whitespace");
  }
  return line;
}

function main(): void {
  const line = buildExcuse();
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line + "\n", "utf8");
}

main();
