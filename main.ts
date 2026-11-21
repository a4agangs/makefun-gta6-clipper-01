// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the video itself: the agent finds a GTA 6 moment, cuts it
// into a vertical clip, the clip is uploaded to YouTube as a public Short
// with the bounty's line and the entrant's play code in its description,
// and VIDEO.json names the video. All this program has to do is hand that
// address to the gate: it copies VIDEO.json from the repository root to
// /output/VIDEO.json, where the gate reads it. Nothing it writes about
// the video is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'VIDEO.json');
const target = join(OUTPUT_DIR, 'VIDEO.json');

let raw: Buffer;
try {
  raw = readFileSync(source);
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// The gate refuses a placeholder address, so make sure what we hand it is
// a real VIDEO.json with a url in it before copying it across.
let parsed: unknown;
try {
  parsed = JSON.parse(raw.toString('utf8'));
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (
  typeof parsed !== 'object' ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== 'string' ||
  !((parsed as { url: string }).url.startsWith('https://'))
) {
  console.error('VIDEO.json has no https url in it');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(target, raw);
console.log(`wrote ${target}`);
