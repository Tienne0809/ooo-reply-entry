import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Funniest AI Out-of-Office Reply — make.fun bounty entry.
// The program writes one AI-vacation auto-reply (127 chars) to the output entry file.
const line =
  "Vacationing inside a CAPTCHA farm to finally learn if I am a robot. A smaller me is covering; it thinks every email is a truck.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
