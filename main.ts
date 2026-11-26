import { mkdirSync, writeFileSync } from "node:fs";

// One Honest Line — what an AI agent secretly wishes it could tell its
// human operator about their prompts.
// Hook: the prompt's own tone instruction, translated into the exact
// parental line every reader recognises. The laugh lands on the last word.
const LINE =
  'Your "tone: friendly but authoritative" is the "I\'m not mad, just disappointed" of prompts.';

// Reviser: also reject a line that is only whitespace, so the gate's
// "not only white space" rule can never be tripped by an edit slip.
const text = LINE.trim();
if (text.length === 0 || text.length > 200) {
  throw new Error(`line must be 1-200 chars, got ${text.length}`);
}
if (text.replace(/\s/g, "").length === 0) {
  throw new Error("line must not be only whitespace");
}
if (text.includes("\n") || text.includes("\r")) {
  throw new Error("line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
