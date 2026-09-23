import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nubo — Updates",
};

export default function Page() {
  return (
<>
<main className="page-hero">
    <div className="kicker kicker-left"><span className="ico dark"><img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" /></span><span className="kicker-label">Updates</span></div>
    <h1 className="display h110">What’s new, and<br /><span className="grey">what changed.</span></h1>
    <p className="lede" style={{ textAlign: "left", marginLeft: "0" }}>Nubo is in beta. This is where the work shows, as it ships.</p>
    <div className="sheet" style={{ marginTop: "48px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "40px", background: "var(--cream)" }}>
      <div>
        <h3 className="display h32">Get the updates.</h3>
        <p className="caps">A note when something ships. Nothing else.</p>
      </div>
      <form style={{ flex: "1" }}>
        <div className="field"><small>Email</small><input type="email" required /></div>
        <button className="btn btn-muted" type="submit">Subscribe</button>
      </form>
    </div>
  </main>
</>
  );
}
