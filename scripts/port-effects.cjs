const fs = require("fs");
const path = require("path");

let s = fs.readFileSync(path.join(__dirname, "../js/nubo.js"), "utf8");
// Normalize line endings
s = s.replace(/\r\n/g, "\n");

s = s.replace(/^\(function \(\) \{\n/, "export function initNubo() {\n");

// Split at neuralSphere IIFE
const marker = "\n(function neuralSphere() {\n";
const idx = s.indexOf(marker);
if (idx < 0) {
  console.error("neuralSphere marker not found");
  process.exit(1);
}

let head = s.slice(0, idx);
let rest = s.slice(idx + marker.length);

// Remove closing of first IIFE from head: `});` or `})();`
head = head.replace(/\n\}\)\(\);\s*$/, "").replace(/\n\}\);\s*$/, "");

// rest ends with `})();` for neuralSphere - and planCards are wrongly inside
const planMarker = "\n  const planCards = $$(\".plan\");\n";
const planIdx = rest.indexOf(planMarker);
if (planIdx < 0) {
  console.error("planCards marker not found");
  process.exit(1);
}

let neuralBody = rest.slice(0, planIdx);
let planBody = rest.slice(planIdx + 1); // keep indent of const planCards...

// Close neural sphere - remove trailing })();
neuralBody = neuralBody.replace(/\n\}\)\(\);\s*$/, "");
// planBody ends with })(); from outer neural - remove it
planBody = planBody.replace(/\n\}\)\(\);\s*$/, "");

const out = `${head}
  neuralSphere();
  bindPlanCards();

  function neuralSphere() {
${neuralBody}
  }

  function bindPlanCards() {
${planBody}
  }
}
`;

fs.writeFileSync(path.join(__dirname, "../lib/nubo-effects.js"), out.replace(/\n/g, "\r\n"));
console.log("ok", out.length);
console.log("--- around join ---");
const lines = out.split("\n");
const join = lines.findIndex((l) => l.includes("bindPlanCards();"));
console.log(lines.slice(join - 2, join + 15).join("\n"));
console.log("--- tail ---");
console.log(lines.slice(-12).join("\n"));
