import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nubo — Family",
};

export default function Page() {
  return (
<>
<main className="page-hero">
    <div className="kicker kicker-left"><span className="ico dark"><img src="/assets/k5boprw0JY9PVcw3y1yhpVp4Q.svg" alt="" /></span><span className="kicker-label">Family</span></div>
    <h1 className="display h110">Gentle with the small<br />ones.</h1>
    <div className="split-copy">
      <h2 className="display h32">The slow, patient kind of help.</h2>
      <p className="caps">Children don't need speed. They need someone who doesn't rush them, doesn't sigh, and finds the lost Lego every single time. Nubo walks to the bus stop, handles the boring parts of the evening, and lets the people in your home be people, not logistics.</p>
    </div>
    <img src="/assets/CVVlOgRCvoT9Fmob3rgBrs6XY.jpeg" alt="" style={{ width: "100%", borderRadius: "16px", marginTop: "48px", maxHeight: "640px", objectFit: "cover" }} />
  </main>
</>
  );
}
