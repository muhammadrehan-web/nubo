import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nubo — Waitlist",
};

export default function Page() {
  return (
<>
<section className="wait">
    <img src="/assets/P5cy1VkhJ4S2KVDcitkQ4mJNRa8.jpg" alt="Nubo standing with arms crossed" />
    <div>
      <div className="kicker kicker-left">
        <span className="ico dark"><img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" /></span>
        <span className="kicker-label">Private beta &nbsp; Launching 2026</span>
      </div>
      <h1 className="display h60">Nubo is in beta.<br /><span className="grey">Ask for a place.</span></h1>
      <p className="lede" style={{ textAlign: "left", margin: "20px 0 32px" }}>We're inviting a small number of homes to live with Nubo before launch. Tell us a little about your home and we'll be in touch.</p>
      <form>
        <div className="field"><small>Name</small><input required /></div>
        <div className="field"><small>Email</small><input type="email" required /></div>
        <div className="field"><small>Address</small><input /></div>
        <div className="field"><small>City</small><input /></div>
        <div className="field"><small>Country</small><input /></div>
        <div className="news-row">
          <button className="btn btn-muted scramble" type="submit"><span className="btn-label">Request access</span></button>
          <span className="caps">No payment now. Beta places are offered in small batches; you'll hear from a person, not an autoresponder.</span>
        </div>
      </form>
    </div>
  </section>
</>
  );
}
