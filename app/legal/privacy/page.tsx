import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nubo — Privacy",
};

export default function Page() {
  return (
<>
<main className="page-hero">
    <h1 className="display h60">Privacy &amp; cookies</h1>
    <p className="lede" style={{ textAlign: "left", maxWidth: "640px", marginTop: "24px" }}>Nubo keeps household data on the robot. No cloud footage, no remote access, no third parties. If you sell or return Nubo, one press wipes everything it ever learned.</p>
  </main>
</>
  );
}
