import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nubo — Terms",
};

export default function Page() {
  return (
<>
<main className="page-hero">
    <h1 className="display h60">Terms of service</h1>
    <p className="lede" style={{ textAlign: "left", maxWidth: "640px", marginTop: "24px" }}>You own the robot. One purchase. The Care plan is optional and can be added or cancelled whenever you like. Reserved units ship in allocation order from early next year.</p>
  </main>
</>
  );
}
