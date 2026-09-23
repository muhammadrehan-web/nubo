import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nubo — Contact",
};

export default function Page() {
  return (
<div style={{ background: "var(--cream)" }}>
<div className="form-sheet" style={{ paddingTop: "120px" }}>
    <div className="sheet">
      <p className="grey display h48">Say hello</p>
      <h1 className="display h60">A person reads every one.</h1>
      <p style={{ margin: "16px 0 32px", maxWidth: "360px" }}>Nubo is small. Tell us about your home, and what you'd want it to take off your hands.</p>
      <p className="caps">Follow</p>
      <a className="caps" href="https://youtube.com">Youtube</a>
      <a className="caps" href="https://tiktok.com">Tiktok</a>
      <a className="caps" href="https://instagram.com">Instagram</a>
      <a className="caps" href="https://x.com">X (Twitter)</a>
      <p className="caps" style={{ marginTop: "24px" }}>Or just write</p>
      <a href="mailto:hello@nubo.design">hello@nubo.design</a>
    </div>
    <div className="sheet">
      <form>
        <div className="field"><span className="num">01</span><label>Name</label><small>First name is fine. Keeps it human.</small><input required /></div>
        <div className="field"><span className="num">02</span><label>Email</label><small>The real one. We won't pass it around.</small><input type="email" required /></div>
        <div className="field"><span className="num">03</span><label>City</label><small>Where home is. Helps us with timing.</small><input /></div>
        <div className="field"><span className="num">04</span><label>Household</label><small>Who Nubo would be living with.</small><input /></div>
        <div className="field"><span className="num">05</span><label>Reason</label><small>Beta place, a question, or press. Pick one.</small><input /></div>
        <button className="btn btn-fill" type="submit">Send</button>
      </form>
    </div>
  </div>
</div>
  );
}
