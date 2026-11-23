// One-Star Review entry: writes a single deadpan one-star review of sleep to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "Slept eight hours and woke up tired anyway. No refunds, no returns, and customer service has been asleep since birth.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
