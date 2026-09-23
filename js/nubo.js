(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  $$(".scramble").forEach((btn) => {
    const label = btn.querySelector(".btn-label");
    if (!label) return;
    const text = label.textContent;
    label.innerHTML = "";
    [...text].forEach((ch, i) => {
      const wrap = document.createElement("span");
      wrap.className = "ch";
      wrap.style.transitionDelay = i * 12 + "ms";
      const inner = document.createElement("span");
      const a = document.createElement("i");
      const b = document.createElement("i");
      a.textContent = ch === " " ? "\u00a0" : ch;
      b.textContent = ch === " " ? "\u00a0" : ch;
      a.style.fontStyle = "normal";
      b.style.fontStyle = "normal";
      inner.append(a, b);
      wrap.append(inner);
      wrap.querySelector("span").style.transitionDelay = i * 12 + "ms";
      label.append(wrap);
    });
  });

  const nav = $(".nav");
  const toggle = $(".nav-toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Toggle menu");
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Toggle menu");
      }
    });
  }

  const launch = new Date("2026-12-24T00:00:00Z").getTime();
  function tick() {
    const t = Math.max(0, launch - Date.now());
    const d = Math.floor(t / 86400000);
    const h = Math.floor((t % 86400000) / 3600000);
    const m = Math.floor((t % 3600000) / 60000);
    const s = Math.floor((t % 60000) / 1000);
    const map = { days: d, hrs: h, min: m, sec: s };
    Object.entries(map).forEach(([k, v]) => {
      $$("[data-cd='" + k + "']").forEach((el) => {
        el.textContent = String(v).padStart(2, "0");
      });
    });
  }
  tick();
  setInterval(tick, 1000);

  function bindCarousel(root, radius, scale, speed) {
    const items = $$(root + " .logo-item");
    const track = $(root + " .logo-track");
    if (!items.length || !track) return;
    const n = items.length;
    let angle = 0;
    let last = performance.now();
    function place() {
      items.forEach((el, i) => {
        const local = (360 / n) * i;
        const world = ((local + angle) % 360 + 360) % 360;
        const rad = (world * Math.PI) / 180;
        const front = (1 - Math.cos(rad)) / 2;
        el.style.transform =
          "translate(-50%, -50%) rotateY(" +
          local +
          "deg) translateZ(" +
          -radius +
          "px) rotateY(180deg) scale(" +
          scale +
          ")";
        el.style.zIndex = String(Math.round(Math.cos(rad) * 100));
        el.style.filter = "blur(" + (1 - front) * 4.5 + "px)";
        el.style.opacity = String(0.3 + front * 0.7);
      });
      track.style.transform = "rotateY(" + angle + "deg)";
    }
    place();
    function tick(now) {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      angle += speed * dt;
      place();
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  bindCarousel(".hero .logo-carousel", 243, 0.75, 21.7);
  bindCarousel(".int-row .logo-carousel", 243, 0.75, 16);

  const slides = $$(".slideshow .slide");
  const dots = $$(".slideshow .dots button");
  let si = 0;
  let playing = true;
  function go(i) {
    if (!slides.length) return;
    si = (i + slides.length) % slides.length;
    const track = $(".slides");
    if (track && slides[0]) {
      const gap = 32;
      const w = slides[0].getBoundingClientRect().width + gap;
      track.style.transform = "translateX(" + -si * w + "px)";
      track.style.transition = "transform 0.7s cubic-bezier(0.22,1,0.36,1)";
    }
    dots.forEach((d, n) => d.classList.toggle("on", n === si));
    slides.forEach((s, n) => {
      const v = s.querySelector("video");
      if (v) n === si ? v.play().catch(() => {}) : v.pause();
    });
  }
  dots.forEach((d, i) => d.addEventListener("click", () => go(i)));
  const pauseBtn = $(".pause");
  if (pauseBtn) {
    pauseBtn.addEventListener("click", () => {
      playing = !playing;
      pauseBtn.classList.toggle("paused", !playing);
    });
  }
  if (slides.length) {
    go(0);
    setInterval(() => {
      if (playing) go(si + 1);
    }, 4200);
  }

  $$(".acc-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".acc-item");
      const open = item.classList.contains("open");
      item.parentElement.querySelectorAll(".acc-item").forEach((el) => {
        el.classList.remove("open");
        const g = el.querySelector(".acc-glyph");
        if (g && !g.querySelector("svg")) g.textContent = "⋮";
      });
      if (!open) {
        item.classList.add("open");
        const g = btn.querySelector(".acc-glyph");
        if (g && !g.querySelector("svg")) g.textContent = "•";
      }
    });
  });

  function spinOdo(el) {
    if (el.dataset.spun) return;
    el.dataset.spun = "1";
    const raw = el.getAttribute("data-value") || "0";
    el.textContent = "";
    [...raw].forEach((ch) => {
      if (ch === ".") {
        const d = document.createElement("span");
        d.className = "odo-dot";
        d.textContent = ".";
        el.append(d);
        return;
      }
      const wheel = document.createElement("span");
      wheel.className = "wheel";
      const strip = document.createElement("span");
      strip.className = "strip";
      for (let n = 0; n <= 9; n++) {
        const s = document.createElement("span");
        s.textContent = String(n);
        strip.append(s);
      }
      wheel.append(strip);
      el.append(wheel);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          strip.style.transform = "translateY(-" + parseInt(ch, 10) + "em)";
        });
      });
    });
  }

  const odoObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) spinOdo(en.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
  );
  $$(".odo").forEach((el) => odoObs.observe(el));

  const thumbs = $$(".thumbs img");
  const main = $(".mat-main");
  const bar = $(".progress span");
  thumbs.forEach((img, i) => {
    img.addEventListener("click", () => {
      thumbs.forEach((t) => t.classList.remove("on"));
      img.classList.add("on");
      if (main) main.src = img.src;
      if (bar) bar.style.width = ((i + 1) / thumbs.length) * 100 + "%";
    });
  });
  let ti = 0;
  if (thumbs.length) {
    setInterval(() => {
      ti = (ti + 1) % thumbs.length;
      thumbs[ti].click();
    }, 3800);
  }

  $$("[data-hash]").forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("data-hash");
      const t = document.getElementById(id);
      if (t) {
        e.preventDefault();
        t.scrollIntoView({ behavior: "smooth" });
        if (nav) {
          nav.classList.remove("open");
          if (toggle) {
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Toggle menu");
          }
        }
      }
    });
  });

  const news = $("#news-form");
  if (news) {
    news.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = news.querySelector("button");
      btn.textContent = "SENT";
    });
  }

  const footCols = $$(".foot-col");
  const colDelay = [0, 90, 180];
  footCols.forEach((col, ci) => {
    col.querySelectorAll("h5, a").forEach((el) => {
      const text = el.textContent;
      if (!text) return;
      el.setAttribute("aria-label", text.trim());
      el.textContent = "";
      [...text].forEach((ch, i) => {
        const span = document.createElement("span");
        span.className = "foot-ch";
        span.textContent = ch === " " ? "\u00a0" : ch;
        span.style.transitionDelay = colDelay[ci] + i * 18 + "ms";
        el.append(span);
      });
    });
  });
  if (footCols.length) {
    const footObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            footObs.unobserve(en.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px" }
    );
    footCols.forEach((col) => footObs.observe(col));
  }

  const heroH1 = $(".hero h1");
  const heroDesc = $(".hero-desc");
  const heroCtas = $(".hero-ctas");
  const heroKicker = $(".hero-kicker");
  const heroLogos = $(".hero .logo-parallax");
  const intro = $(".intro");
  const introBg = $(".intro-bg");
  const introCard = $(".intro-card");
  const introTitle = intro ? intro.querySelector("h2") : null;
  const introMark = $(".intro-mark");
  const ucards = $$(".athome .ucard");
  $$(".bento > .tile, .bento > .bento-stack").forEach((card) => {
    card.style.opacity = "";
    card.style.transform = "";
  });
  const heroPhoto = $(".bento > .tile-hero-photo");
  const heroMark = heroPhoto ? heroPhoto.querySelector(".mark") : null;
  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

  function onScroll() {
    const y = window.scrollY || 0;
    const vh = window.innerHeight || 900;
    const p = Math.min(y, vh);
    if (heroH1) heroH1.style.transform = "translateY(" + -p * 0.3 + "px)";
    if (heroLogos) heroLogos.style.transform = "translateY(" + -p * 0.2 + "px)";

    if (introBg) {
      const t = clamp((y - 300) / 200, 0, 1);
      const eased = 1 - (1 - t) * (1 - t);
      introBg.style.opacity = String(eased);
      const sc = 1.2 - 0.2 * eased;
      introBg.style.transform = "translate(-50%, -50%) scale(" + sc + ")";
      const uiOp = String(1 - eased);
      if (heroKicker) heroKicker.style.opacity = uiOp;
      if (heroDesc) heroDesc.style.opacity = uiOp;
      if (heroCtas) heroCtas.style.opacity = uiOp;
      if (heroLogos) heroLogos.style.opacity = uiOp;
      if (heroH1) heroH1.style.opacity = String(1 - clamp((y - 450) / 300, 0, 1));
    }

    if (introTitle) {
      const topOp = 1 - clamp((y - 700) / 250, 0, 0.62);
      introTitle.style.transform = "translateX(-50%)";
      introTitle.style.opacity = String(topOp);
    }

    if (intro && introCard) {
      const top = intro.getBoundingClientRect().top;
      const cs = 1 + 0.3 * clamp((top - 450) / 200, 0, 1);
      introCard.style.transform = "translateX(-50%) scale(" + cs + ")";
      if (introMark) {
        const m = clamp((500 - top) / 250, 0, 1);
        const rot = (1 - m) * 90;
        const ms = 0.4 + 0.6 * m;
        introMark.style.opacity = String(m);
        introMark.style.transform =
          "translate(-50%, -50%) rotate(" + rot + "deg) scale(" + ms + ")";
      }
    }

    ucards.forEach((card, i) => {
      const r = card.getBoundingClientRect();
      const leave = clamp((-40 - r.top) / (r.height * 0.55 + i * 40), 0, 1);
      const enter = clamp((vh + 40 - r.top) / (r.height * 0.35 + 80), 0, 1);
      if (leave === 0 && enter === 1) {
        card.style.opacity = "1";
        card.style.transform = "";
        return;
      }
      const op = (1 - leave) * enter;
      const ty = (1 - enter) * 36 + leave * (10 + i * 12);
      card.style.opacity = String(op);
      card.style.transform = "translateY(" + ty + "px)";
    });

    if (heroPhoto && heroMark) {
      const r = heroPhoto.getBoundingClientRect();
      const grow = clamp(-r.top / (r.height * 0.62), 0, 1);
      const eased = 1 - (1 - grow) * (1 - grow);
      const sc = 1 + eased * 5.4;
      heroMark.style.width = 72 * sc + "px";
      heroMark.style.height = 24 * sc + "px";
      heroMark.style.transform = "";
      heroMark.style.opacity = String(0.82 + eased * 0.14);
      heroPhoto.style.opacity = "1";
      heroPhoto.style.transform = "";
    }
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

(function neuralSphere() {
  const root = document.querySelector(".neural-field");
  if (!root) return;
  const N = 100;
  const R = 124;
  const CX = 146;
  const CY = 152;
  const pts = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2;
    const rad = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    const span = document.createElement("span");
    span.textContent =
      Math.random() < 0.32
        ? String(10 + ((i * 17) % 90))
        : String(i % 10);
    span.setAttribute("aria-hidden", "true");
    root.appendChild(span);
    pts.push({
      el: span,
      x: Math.cos(theta) * rad,
      y: y,
      z: Math.sin(theta) * rad,
    });
  }
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 280 280");
  const pairs = [
    [6, 18],
    [18, 32],
    [32, 48],
    [10, 44],
    [44, 6],
    [22, 58],
    [58, 72],
    [14, 80],
    [28, 64],
    [40, 88],
  ];
  const lines = pairs.map(() => {
    const line = document.createElementNS(svgNS, "line");
    line.setAttribute("stroke", "rgba(186, 186, 186, 0.5)");
    line.setAttribute("stroke-width", "1");
    line.setAttribute("stroke-linecap", "round");
    svg.appendChild(line);
    return line;
  });
  root.insertBefore(svg, root.firstChild);

  const tilt = 0.42;
  const cosT = Math.cos(tilt);
  const sinT = Math.sin(tilt);
  let angle = 0;
  let running = true;
  const io = new IntersectionObserver(
    (entries) => {
      running = entries.some((e) => e.isIntersecting);
    },
    { threshold: 0.05 }
  );
  io.observe(root.closest(".tile") || root);

  const projected = new Array(N);
  function frame() {
    if (running) {
      angle += 0.008;
      const c = Math.cos(angle);
      const s = Math.sin(angle);
      for (let i = 0; i < N; i++) {
        const p = pts[i];
        const x1 = p.x * c - p.z * s;
        const z1 = p.x * s + p.z * c;
        const y1 = p.y * cosT - z1 * sinT;
        const z2 = p.y * sinT + z1 * cosT;
        const depth = (z2 + 1) / 2;
        const f = 1.2 / (1.2 + z2 * 0.45);
        const x = CX + x1 * R * f;
        const y = CY + y1 * R * f;
        const sc = 0.42 + depth * depth * 3.15;
        const op = 0.28 + depth * depth * 0.72;
        p.el.style.transform =
          "translate(" + x + "px," + y + "px) translate(-50%,-50%) scale(" + sc + ")";
        p.el.style.opacity = String(op);
        p.el.style.zIndex = String(Math.round(depth * 100));
        p.el.style.color = depth > 0.88 ? "rgb(255,255,255)" : "rgb(109,109,109)";
        projected[i] = { x: x, y: y, z: z2, depth: depth };
      }
      pairs.forEach((pair, i) => {
        const a = projected[pair[0]];
        const b = projected[pair[1]];
        const line = lines[i];
        if (!a || !b) return;
        line.setAttribute("x1", a.x);
        line.setAttribute("y1", a.y);
        line.setAttribute("x2", b.x);
        line.setAttribute("y2", b.y);
        const vis = Math.max(0, Math.min(1, (a.depth + b.depth) / 2 - 0.25));
        line.style.opacity = String(vis * 0.55);
      });
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  const planCards = $$(".plan");
  planCards.forEach((plan) => {
    const video = plan.querySelector("video.plan-face");
    if (!video) return;
    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    video.addEventListener("loadeddata", () => {
      if (!plan.matches(":hover")) {
        video.pause();
        try {
          if (video.currentTime < 0.05) video.currentTime = 0.05;
        } catch (e) {}
      }
    });
  });
  function syncPlanHover() {
    planCards.forEach((plan) => {
      const video = plan.querySelector("video.plan-face");
      if (!video) return;
      const on = plan.matches(":hover");
      plan.classList.toggle("is-hover", on);
      if (on) {
        if (video.paused) video.play().catch(() => {});
      } else if (!video.paused) {
        video.pause();
      }
    });
    requestAnimationFrame(syncPlanHover);
  }
  requestAnimationFrame(syncPlanHover);
})();
