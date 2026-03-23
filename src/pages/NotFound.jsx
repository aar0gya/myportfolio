export const NotFound = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "24px",
      }}
    >
      <section
        style={{
          width: "min(560px, 100%)",
          padding: "32px",
          borderRadius: "28px",
          border: "1px solid rgba(255,255,255,0.12)",
          background: "rgba(7, 17, 31, 0.78)",
          backdropFilter: "blur(18px)",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0, color: "#9aa7bd", letterSpacing: "0.18em", textTransform: "uppercase" }}>
          404
        </p>
        <h1 style={{ margin: "14px 0 12px", fontSize: "clamp(2.4rem, 6vw, 4rem)" }}>Page not found</h1>
        <p style={{ margin: "0 0 24px", color: "#9aa7bd", lineHeight: 1.7 }}>
          The page you tried to open does not exist. Head back to the portfolio overview.
        </p>
        <a
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "48px",
            padding: "0 20px",
            borderRadius: "999px",
            background: "linear-gradient(135deg, #fb923c, #f97316)",
            color: "#1b1107",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Return home
        </a>
      </section>
    </main>
  );
};
