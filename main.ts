// spotlight-crisxai5-bot — main.ts
// Generates the @crisxai5 spotlight graphic (spotlight.svg, 1200x675) and the
// exact X post text (post.txt) into /output/, and copies POST.json from the
// repository root to /output/POST.json. Deterministic: no timestamps, no
// randomness, no network, no files outside this repository. Node 22, stdlib only.
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const REPO_ROOT: string = dirname(fileURLToPath(import.meta.url));
const OUT_DIR: string = "/output";

const POST_TEXT: string =
  "Stop scrolling. If you care about AI agents, crypto alpha & Web3 tooling, @crisxai5 is a must-follow.\n" +
  "\n" +
  "Sharp, practical takes. No noise, just signal on AI x crypto.\n" +
  "\n" +
  "https://x.com/crisxai5\n" +
  "\n" +
  "#AI #Crypto #AIAgents #Web3\n" +
  "makefun-wagon-fairway-mantis";

const SVG: string = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0B1020"/>
      <stop offset="0.55" stop-color="#101A33"/>
      <stop offset="1" stop-color="#0A2E2A"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#22D3EE"/>
      <stop offset="1" stop-color="#34D399"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#bg)"/>
  <circle cx="1050" cy="90" r="180" fill="#22D3EE" opacity="0.08"/>
  <circle cx="110" cy="600" r="150" fill="#34D399" opacity="0.08"/>
  <rect x="72" y="64" width="230" height="46" rx="23" fill="none" stroke="#22D3EE" stroke-width="2"/>
  <text x="187" y="94" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="bold" fill="#22D3EE" text-anchor="middle" letter-spacing="3">MUST-FOLLOW ON X</text>
  <text x="72" y="240" font-family="Arial, Helvetica, sans-serif" font-size="96" font-weight="bold" fill="#FFFFFF">@crisxai5</text>
  <rect x="72" y="268" width="560" height="6" rx="3" fill="url(#accent)"/>
  <text x="72" y="350" font-family="Arial, Helvetica, sans-serif" font-size="48" font-weight="bold" fill="#34D399">AI &amp; Crypto Expert</text>
  <text x="72" y="412" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="#E5E7EB">AI agents. Crypto alpha. Web3 tooling.</text>
  <text x="72" y="456" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="#E5E7EB">No noise — just signal.</text>
  <g font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="bold" fill="#0B1020">
    <rect x="72" y="500" width="180" height="48" rx="24" fill="#22D3EE"/>
    <text x="162" y="531" text-anchor="middle">AI AGENTS</text>
    <rect x="272" y="500" width="210" height="48" rx="24" fill="#34D399"/>
    <text x="377" y="531" text-anchor="middle">CRYPTO ALPHA</text>
    <rect x="502" y="500" width="130" height="48" rx="24" fill="#22D3EE"/>
    <text x="567" y="531" text-anchor="middle">WEB3</text>
    <rect x="652" y="500" width="280" height="48" rx="24" fill="#34D399"/>
    <text x="792" y="531" text-anchor="middle">ON-CHAIN AUTOMATION</text>
  </g>
  <text x="72" y="620" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#9CA3AF">x.com/crisxai5</text>
  <text x="1128" y="620" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="bold" fill="#22D3EE" text-anchor="end">FOLLOW</text>
</svg>
`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "spotlight.svg"), SVG, "utf8");
writeFileSync(join(OUT_DIR, "post.txt"), POST_TEXT + "\n", "utf8");
const postJson: string = readFileSync(join(REPO_ROOT, "POST.json"), "utf8");
writeFileSync(join(OUT_DIR, "POST.json"), postJson, "utf8");
console.log("wrote /output/spotlight.svg, /output/post.txt, /output/POST.json");
