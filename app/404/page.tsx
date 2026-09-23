export default function NotFoundPage() {
  return (
    <main
      className="page-hero"
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h1 className="display h110">404</h1>
        <p className="lede">This room isn&apos;t on the map.</p>
        <a className="btn btn-fill" href="/" style={{ marginTop: "24px" }}>
          Back home
        </a>
      </div>
    </main>
  );
}
