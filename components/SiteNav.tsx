"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [cd, setCd] = useState({ days: "00", hrs: "00", min: "00", sec: "00" });

  useEffect(() => {
    const launch = new Date("2026-12-24T00:00:00Z").getTime();
    const tick = () => {
      const t = Math.max(0, launch - Date.now());
      const days = Math.floor(t / 86400000);
      const hrs = Math.floor((t % 86400000) / 3600000);
      const min = Math.floor((t % 3600000) / 60000);
      const sec = Math.floor((t % 60000) / 1000);
      setCd({
        days: String(days).padStart(2, "0"),
        hrs: String(hrs).padStart(2, "0"),
        min: String(min).padStart(2, "0"),
        sec: String(sec).padStart(2, "0"),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav${open ? " open" : ""}`} id="site-nav">
      <div className="nav-bar">
        <Link href="/" onClick={close}>
          <img className="nav-logo" src="/assets/I0IM9xzrz1Pwr8vHBfgEPDbj7LU.svg" alt="nubo" />
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Toggle menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
      <div className="nav-panel">
        <nav className="nav-links">
          <Link href="/cases" onClick={close}>Use cases</Link>
          <Link href="/#pricing" onClick={close}>Pricing</Link>
          <Link href="/about" onClick={close}>About</Link>
          <Link href="/updates" onClick={close}>Updates</Link>
          <Link href="/#reserve" onClick={close}>Reserve</Link>
          <Link href="/contact" onClick={close}>Contact</Link>
          <Link href="/waitlist" onClick={close}>Waitlist</Link>
        </nav>
        <Link className="nav-story" href="/about" onClick={close}>
          <img src="/assets/EpFSuh9uGp9ZiWbkJurEhsKJFk.jpg" alt="Our Story" />
          <span>Our Story</span>
        </Link>
        <div className="nav-foot">
          <p className="nav-tag">The helpful home robotics company.</p>
          <div className="countdown">
            <div className="cd-label">Time Until Launch</div>
            <div className="cd-row">
              <div className="cd-unit"><span className="cd-num">{cd.days}</span><span className="cd-lab">Days</span></div>
              <span className="cd-colon">:</span>
              <div className="cd-unit"><span className="cd-num">{cd.hrs}</span><span className="cd-lab">Hrs</span></div>
              <span className="cd-colon">:</span>
              <div className="cd-unit"><span className="cd-num">{cd.min}</span><span className="cd-lab">Min</span></div>
              <span className="cd-colon">:</span>
              <div className="cd-unit"><span className="cd-num">{cd.sec}</span><span className="cd-lab">Sec</span></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
