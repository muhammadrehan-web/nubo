const fs = require("fs");
const path = require("path");
const p = path.join(__dirname, "../app/page.tsx");
let s = fs.readFileSync(p, "utf8");
if (!s.includes("import type { CSSProperties }") && !s.includes("React.CSSProperties")) {
  s = s.replace(
    'import type { Metadata } from "next";',
    'import type { Metadata } from "next";\nimport type { CSSProperties } from "react";'
  );
}
s = s.replace(
  /style=\{\{ "--cut": "([^"]+)" \}\}/g,
  'style={{ ["--cut"]: "$1" } as CSSProperties}'
);
fs.writeFileSync(p, s);
console.log("fixed", (s.match(/--cut/g) || []).length);
