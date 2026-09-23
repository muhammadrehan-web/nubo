const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

function fixHref(href) {
  if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#")) {
    return href;
  }
  let h = href.replace(/^\.\.\//, "");
  const map = [
    [/^index\.html$/, "/"],
    [/^index\.html#/, "/#"],
    [/\/index\.html$/, "/"],
    [/\/index\.html#/, "/#"],
    [/^cases\/index\.html$/, "/cases"],
    [/^cases\/kitchen\.html$/, "/cases/kitchen"],
    [/^cases\/family\.html$/, "/cases/family"],
    [/^cases\/daily-duties\.html$/, "/cases/daily-duties"],
    [/^kitchen\.html$/, "/cases/kitchen"],
    [/^family\.html$/, "/cases/family"],
    [/^daily-duties\.html$/, "/cases/daily-duties"],
    [/^about\.html$/, "/about"],
    [/^contact\.html$/, "/contact"],
    [/^waitlist\.html$/, "/waitlist"],
    [/^updates\.html$/, "/updates"],
    [/^legal\/privacy\.html$/, "/legal/privacy"],
    [/^legal\/terms\.html$/, "/legal/terms"],
    [/^404\.html$/, "/404"],
  ];
  for (const [re, to] of map) {
    if (re.test(h)) return h.replace(re, to);
  }
  if (!h.startsWith("/") && !h.startsWith("http") && !h.startsWith("#") && !h.startsWith("mailto:")) {
    h = "/" + h.replace(/\.html$/, "");
  }
  return h;
}

function fixSrc(src) {
  if (!src) return src;
  return src
    .replace(/^\.\.\/assets\//, "/assets/")
    .replace(/^assets\//, "/assets/");
}

function styleToJsx(style) {
  const obj = {};
  style.split(";").forEach((part) => {
    const i = part.indexOf(":");
    if (i < 0) return;
    let k = part.slice(0, i).trim();
    let v = part.slice(i + 1).trim();
    if (!k) return;
    if (k.startsWith("--")) {
      // keep CSS custom properties as quoted keys
    } else {
      k = k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    }
    obj[k] = v;
  });
  const entries = Object.entries(obj)
    .map(([k, v]) => (k.startsWith("--") ? `"${k}": ${JSON.stringify(v)}` : `${k}: ${JSON.stringify(v)}`))
    .join(", ");
  return `{{ ${entries} }}`;
}

function htmlToJsx(html) {
  let s = html;

  // strip scripts
  s = s.replace(/<script[\s\S]*?<\/script>/gi, "");

  // comments
  s = s.replace(/<!--([\s\S]*?)-->/g, "{/*$1*/}");

  // void tags self-close
  s = s.replace(
    /<(img|input|br|hr|meta|link|source|area|base|col|embed|param|track|wbr)([^>]*?)(?<!\/)\s*>/gi,
    (m, tag, attrs) => `<${tag}${attrs} />`
  );

  // class / for / etc
  s = s.replace(/\sclass=/g, " className=");
  s = s.replace(/\sfor=/g, " htmlFor=");
  s = s.replace(/\sstroke-width=/g, " strokeWidth=");
  s = s.replace(/\sstroke-linecap=/g, " strokeLinecap=");
  s = s.replace(/\sclip-path=/g, " clipPath=");
  s = s.replace(/\sfill-rule=/g, " fillRule=");
  s = s.replace(/\sclip-rule=/g, " clipRule=");
  s = s.replace(/\sviewbox=/gi, " viewBox=");
  s = s.replace(/\sautocomplete=/g, " autoComplete=");
  s = s.replace(/\splaysinline/gi, " playsInline");
  s = s.replace(/\sautoplay(?!=)/gi, " autoPlay");
  s = s.replace(/\sautoplay=/gi, " autoPlay=");
  s = s.replace(/\smuted(?!=)/gi, " muted");
  s = s.replace(/\sloop(?!=)/gi, " loop");
  s = s.replace(/\srequired(?!=)/gi, " required");
  s = s.replace(/\saria-hidden=/g, " aria-hidden=");
  s = s.replace(/\saria-label=/g, " aria-label=");
  s = s.replace(/\saria-expanded=/g, " aria-expanded=");
  s = s.replace(/\saria-live=/g, " aria-live=");
  s = s.replace(/\saria-atomic=/g, " aria-atomic=");
  s = s.replace(/\stabindex=/g, " tabIndex=");
  s = s.replace(/\scrossorigin=/g, " crossOrigin=");

  // href/src
  s = s.replace(/\shref="([^"]*)"/g, (_, h) => ` href="${fixHref(h)}"`);
  s = s.replace(/\ssrc="([^"]*)"/g, (_, u) => ` src="${fixSrc(u)}"`);
  s = s.replace(/\sposter="([^"]*)"/g, (_, u) => ` poster="${fixSrc(u)}"`);

  // style="a:b"
  s = s.replace(/\sstyle="([^"]*)"/g, (_, st) => ` style=${styleToJsx(st)}`);

  // onsubmit inline → remove (handled in client) or convert
  s = s.replace(/\sonsubmit="[^"]*"/gi, "");

  // bare ampersands in text that aren't entities — careful, leave &amp; etc

  return s.trim();
}

function extractBody(html) {
  const m = html.match(/<body([^>]*)>([\s\S]*)<\/body>/i);
  if (!m) throw new Error("no body");
  return { attrs: m[1] || "", body: m[2] };
}

function bodyAttrsToProps(attrs) {
  const classM = attrs.match(/class="([^"]*)"/);
  const styleM = attrs.match(/style="([^"]*)"/);
  const parts = [];
  if (classM) parts.push(`className=${JSON.stringify(classM[1])}`);
  if (styleM) parts.push(`style=${styleToJsx(styleM[1])}`);
  return parts.join(" ");
}

function stripNavFooter(bodyHtml) {
  // remove header.nav ... </header>
  let s = bodyHtml.replace(/<header[\s\S]*?<\/header>/i, "");
  // remove footer
  s = s.replace(/<footer[\s\S]*?<\/footer>/i, "");
  // remove hero-kicker (lives in layout for home only — keep for home page content)
  return s;
}

const pages = [
  {
    file: "index.html",
    out: "app/page.tsx",
    title: "Nubo — One product, done right.",
    keepKicker: true,
    wrap: "home",
  },
  {
    file: "about.html",
    out: "app/about/page.tsx",
    title: "Nubo — About",
  },
  {
    file: "contact.html",
    out: "app/contact/page.tsx",
    title: "Nubo — Contact",
  },
  {
    file: "waitlist.html",
    out: "app/waitlist/page.tsx",
    title: "Nubo — Waitlist",
  },
  {
    file: "updates.html",
    out: "app/updates/page.tsx",
    title: "Nubo — Updates",
  },
  {
    file: "404.html",
    out: "app/not-found.tsx",
    title: "Nubo — 404",
  },
  {
    file: "cases/index.html",
    out: "app/cases/page.tsx",
    title: "Nubo — Use cases",
  },
  {
    file: "cases/kitchen.html",
    out: "app/cases/kitchen/page.tsx",
    title: "Nubo — Kitchen",
  },
  {
    file: "cases/family.html",
    out: "app/cases/family/page.tsx",
    title: "Nubo — Family",
  },
  {
    file: "cases/daily-duties.html",
    out: "app/cases/daily-duties/page.tsx",
    title: "Nubo — Daily duties",
  },
  {
    file: "legal/privacy.html",
    out: "app/legal/privacy/page.tsx",
    title: "Nubo — Privacy",
  },
  {
    file: "legal/terms.html",
    out: "app/legal/terms/page.tsx",
    title: "Nubo — Terms",
  },
];

for (const p of pages) {
  const raw = fs.readFileSync(path.join(ROOT, p.file), "utf8");
  const { attrs, body } = extractBody(raw);
  let content = stripNavFooter(body);
  // remove trailing script already handled in htmlToJsx
  const jsx = htmlToJsx(content);
  const bodyProps = bodyAttrsToProps(attrs);

  const dir = path.dirname(path.join(ROOT, p.out));
  fs.mkdirSync(dir, { recursive: true });

  const isNotFound = p.out.includes("not-found");
  const meta = isNotFound
    ? ""
    : `import type { Metadata } from "next";\n\nexport const metadata: Metadata = {\n  title: ${JSON.stringify(p.title)},\n};\n\n`;

  // For body className pages, wrap in div
  let pageBody;
  if (bodyProps) {
    pageBody = `<div ${bodyProps}>\n${jsx}\n</div>`;
  } else {
    pageBody = `<>\n${jsx}\n</>`;
  }

  const file = `${meta}export default function Page() {\n  return (\n${pageBody}\n  );\n}\n`;
  fs.writeFileSync(path.join(ROOT, p.out), file);
  console.log("wrote", p.out);
}

console.log("done");
