import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nubo — Kitchen",
};

export default function Page() {
  return (
<>
<main className="page-hero">
    <div className="kicker kicker-left"><span className="ico dark"><img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" /></span><span className="kicker-label">Kitchen</span></div>
    <h1 className="display h110">A second pair of<br />hands at dinner.</h1>
    <div className="split-copy">
      <h2 className="display h32 grey">The loudest hour of the day, made calmer.</h2>
      <p className="caps">Dinner is six small jobs at once, and usually one person doing all of them. Nubo takes the ones that don't need you. Clearing, setting, carrying, so the hour belongs to the people at the table.</p>
    </div>
    <img src="/assets/JMZeDArAPMmVlXUSb59AM4S6Y.jpeg" alt="" style={{ width: "100%", borderRadius: "16px", marginTop: "48px", maxHeight: "640px", objectFit: "cover" }} />
  </main>
</>
  );
}
