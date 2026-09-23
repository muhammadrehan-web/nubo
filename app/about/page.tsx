import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nubo — About",
};

export default function Page() {
  return (
<div className="page-about">
<section className="page-hero photo">
    <img src="/assets/7zvJcZFEoNeRM7azD4VctYeHHk8.jpeg" alt="" />
    <h1 className="display h110">The Nubo Story</h1>
  </section>
  <section className="page-hero" style={{ minHeight: "auto", paddingTop: "80px" }}>
    <h2 className="display h60">We would rather get one thing right.</h2>
    <p className="lede" style={{ textAlign: "left", maxWidth: "640px", margin: "24px 0 0" }}>Nubo is a small company making one home robot. Not a platform. Not a line of gadgets. One product, done quietly, in Como knit, for rooms that already have enough noise.</p>
  </section>
</div>
  );
}
