import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nubo — Use cases",
};

export default function Page() {
  return (
<>
<main className="page-hero">
    <div className="kicker kicker-left">
      <span className="ico dark"><img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" /></span>
      <span className="kicker-label">Use cases</span>
    </div>
    <h1 className="display h110">Where Nubo actually<br /><span className="grey">earns its keep.</span></h1>
    <p className="lede" style={{ marginLeft: "auto", maxWidth: "280px", textAlign: "right" }}>One room per entry. Add as many as you like — the layout keeps its rhythm.</p>
    <div className="cards-3" style={{ marginTop: "48px", padding: "0" }}>
      <article className="ucard">
        <div className="ucard-media"><img src="/assets/JMZeDArAPMmVlXUSb59AM4S6Y.jpeg" alt="" /><span className="ucard-tag">The kitchen</span></div>
        <div className="ucard-body"><h3 className="display">A second pair of hands at dinner.</h3></div>
        <div className="ucard-foot"><span>One less thing at 6pm</span><a href="/cases/kitchen">Read the kitchen story</a></div>
      </article>
      <article className="ucard">
        <div className="ucard-media"><img src="/assets/CVVlOgRCvoT9Fmob3rgBrs6XY.jpeg" alt="" /><span className="ucard-tag">The School Run</span></div>
        <div className="ucard-body"><h3 className="display">Gentle with the small ones.</h3></div>
        <div className="ucard-foot"><span>Out the door on time</span><a href="/cases/family">Read the family story</a></div>
      </article>
      <article className="ucard">
        <div className="ucard-media"><img src="/assets/Rp50382nl4MlTtEW6DKbCXt39uE.jpeg" alt="" /><span className="ucard-tag">The Front Door</span></div>
        <div className="ucard-body"><h3 className="display">Takes the parcel when you can't.</h3></div>
        <div className="ucard-foot"><span>Nothing missed</span><a href="/cases/daily-duties">Read the daily duties story</a></div>
      </article>
    </div>
  </main>
</>
  );
}
