export function ContainerSection() {
  return (
    <section id="container" className="section" data-screen-label="06 Container">
      <div className="lane">
        <header className="section-head">
          <span className="num">§06</span>
          <span className="rule"></span>
          <span className="meta">CONTAINER · DEFAULT LAYOUT</span>
        </header>

        <h2 className="section-title">The document on a desk.</h2>
        <p className="section-lede">
          Unless otherwise specified, pages use a centered container: 678&nbsp;px white surface,
          gray.100 surround, hairline borders top and bottom. Mobile flattens to full-bleed. What
          you are reading right now is one.
        </p>
      </div>

      <div
        style={{
          background: "var(--gray-100)",
          padding: "24px",
          borderTop: "1px solid var(--black)",
          borderBottom: "1px solid var(--black)",
        }}
      >
        <div className="label" style={{ marginBottom: "12px" }}>
          DESKTOP — ≥ 640 PX
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            background: "var(--gray-100)",
            padding: "24px 0",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "340px",
              background: "var(--white)",
              borderTop: "1px solid var(--black)",
              borderBottom: "1px solid var(--black)",
              padding: "16px 14px",
              fontFamily: "var(--font-serif)",
              fontSize: "0.75rem",
              lineHeight: 1.4,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.5625rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--gray-500)",
                borderBottom: "1px solid var(--gray-200)",
                paddingBottom: "4px",
                marginBottom: "8px",
              }}
            >
              SECTION · 01
            </div>
            <h4
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "0.875rem",
                marginBottom: "6px",
                lineHeight: 1.2,
              }}
            >
              A centred document.
            </h4>
            <p style={{ marginBottom: "6px" }}>
              Max-width 678&nbsp;px. White surface inside a gray surround. The frame says &quot;this
              is content,&quot; not chrome.
            </p>
            <p style={{ color: "var(--gray-600)", fontSize: "0.6875rem" }}>
              Hairline borders top and bottom. No shadow, no radius, no decoration.
            </p>
          </div>
        </div>

        <div className="label" style={{ margin: "24px 0 12px" }}>
          MOBILE — &lt; 640 PX
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            background: "var(--gray-100)",
            padding: 0,
          }}
        >
          <div
            style={{
              width: "220px",
              background: "var(--white)",
              borderTop: "1px solid var(--black)",
              borderBottom: "1px solid var(--black)",
              padding: "16px 14px",
              fontFamily: "var(--font-serif)",
              fontSize: "0.75rem",
              lineHeight: 1.4,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.5625rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--gray-500)",
                borderBottom: "1px solid var(--gray-200)",
                paddingBottom: "4px",
                marginBottom: "8px",
              }}
            >
              SECTION · 01
            </div>
            <h4
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "0.875rem",
                marginBottom: "6px",
                lineHeight: 1.2,
              }}
            >
              Full-bleed reading.
            </h4>
            <p style={{ marginBottom: "6px" }}>
              No max-width. No vertical padding. The screen <em>is</em> the page.
            </p>
            <p style={{ color: "var(--gray-600)", fontSize: "0.6875rem" }}>
              Same borders top &amp; bottom, full width.
            </p>
          </div>
        </div>
      </div>

      <div className="lane" style={{ paddingTop: "32px" }}>
        <div className="label-row strong">
          <span className="label">Implementation</span>
        </div>
        <pre
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            lineHeight: 1.55,
            background: "var(--gray-50)",
            border: "1px solid var(--gray-300)",
            padding: "16px",
            overflowX: "auto",
            color: "var(--text-primary)",
            margin: 0,
          }}
        >
          <span style={{ color: "var(--ocean-600)" }}>&lt;body</span>{" "}
          <span style={{ color: "var(--emerald-700)" }}>className</span>=
          <span style={{ color: "var(--goldenrod-700)" }}>
            &quot;min-h-screen flex justify-center bg-gray-100 sm:py-6 md:py-9 lg:py-12&quot;
          </span>
          <span style={{ color: "var(--ocean-600)" }}>&gt;</span>
          {"\n"} <span style={{ color: "var(--ocean-600)" }}>&lt;div</span>{" "}
          <span style={{ color: "var(--emerald-700)" }}>className</span>=
          <span style={{ color: "var(--goldenrod-700)" }}>
            &quot;w-full max-w-[678px] min-h-full bg-white border-y border-gray-900&quot;
          </span>
          <span style={{ color: "var(--ocean-600)" }}>&gt;</span>
          {"\n"} {"{children}"}
          {"\n"} <span style={{ color: "var(--ocean-600)" }}>&lt;/div&gt;</span>
          {"\n"}
          <span style={{ color: "var(--ocean-600)" }}>&lt;/body&gt;</span>
        </pre>
      </div>
    </section>
  );
}
