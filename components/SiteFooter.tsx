import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-foot">
      <div className="word-giant">
        <img className="word-bloom" src="/assets/I0IM9xzrz1Pwr8vHBfgEPDbj7LU.svg" alt="" aria-hidden="true" />
        <img className="word-core" src="/assets/I0IM9xzrz1Pwr8vHBfgEPDbj7LU.svg" alt="nubo" />
      </div>
      <div className="foot-body">
        <div className="foot-links">
          <div className="foot-col">
            <h5>Navigation</h5>
            <Link href="/">Home</Link>
            <Link href="/cases">Cases</Link>
            <Link href="/about">About</Link>
            <Link href="/#pricing">Pricing</Link>
            <Link href="/updates">Updates</Link>
            <Link href="/waitlist">Waitlist</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="foot-col">
            <h5>Legal</h5>
            <Link href="/legal/privacy">Privacy &amp; cookies</Link>
            <Link href="/legal/terms">Terms of service</Link>
            <Link href="/404">404</Link>
          </div>
          <div className="foot-col">
            <h5>Follow</h5>
            <a href="https://youtube.com">Youtube</a>
            <a href="https://tiktok.com">Tiktok</a>
            <a href="https://instagram.com">Instagram</a>
            <a href="https://x.com">X (Twitter)</a>
          </div>
        </div>
        <div className="news">
          <div className="kicker kicker-left">
            <span className="ico dark"><img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" /></span>
            <span className="kicker-label">Stay in the loop, gently.</span>
          </div>
          <h4 className="display">Nubo Newsletter</h4>
          <form id="news-form">
            <input type="text" name="Name" placeholder="YOUR NAME" />
            <input type="email" name="Email" placeholder="YOUR EMAIL" required />
            <div className="news-row">
              <button className="btn btn-muted" type="submit">
                SUBSCRIBE <span className="foot-chevron" aria-hidden="true" />
              </button>
              <span className="news-note">
                We respect your inbox.<br />No spam, just valuable updates.
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className="foot-bottom">
        <p className="copy">© 2026 NUBO ALL WORK, ALL RIGHTS.</p>
      </div>
    </footer>
  );
}
