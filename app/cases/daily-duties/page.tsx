import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nubo — Daily duties",
};

export default function Page() {
  return (
<>
<main className="page-hero">
    <div className="kicker kicker-left"><span className="ico dark"><img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" /></span><span className="kicker-label">Daily duties</span></div>
    <h1 className="display h110">Takes the parcel when<br />you can't.</h1>
    <div className="split-copy">
      <h2 className="display h32 grey">Nothing missed.</h2>
      <p className="caps">Greets the courier, signs for the box, sets it inside. You get a photo and a note — no missed-delivery card on the mat.</p>
    </div>
    <img src="/assets/Rp50382nl4MlTtEW6DKbCXt39uE.jpeg" alt="" style={{ width: "100%", borderRadius: "16px", marginTop: "48px", maxHeight: "640px", objectFit: "cover" }} />
  </main>
</>
  );
}
