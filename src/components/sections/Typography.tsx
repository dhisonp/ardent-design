export function Typography() {
  return (
    <section id="typography" className="section" data-screen-label="03 Typography">
      <div className="lane">
        <header className="section-head">
          <span className="num">§03</span>
          <span className="rule"></span>
          <span className="meta">TYPOGRAPHY · 3 FAMILIES · 13 ROLES</span>
        </header>

        <h2 className="section-title">Three families, three jobs.</h2>
        <p className="section-lede">
          Each family is assigned a strict semantic role. Sans is structure. Serif is reading. Mono
          is signal. They never trade places.
        </p>
      </div>

      {/* SANS specimen */}
      <div className="spec-glyph">
        <dl className="spec-meta">
          <div>
            <dt>Family</dt>
            <dd>Inter (var)</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>Headings · UI</dd>
          </div>
          <div>
            <dt>Fallback</dt>
            <dd>Helvetica Neue · Arial</dd>
          </div>
          <div>
            <dt>Designer</dt>
            <dd>R. Sharp · 2016</dd>
          </div>
        </dl>

        <div className="glyph-row sans">
          <span className="a">A</span>
          <span className="a">a</span>
          <span className="num">01</span>
          <span className="a">G</span>
          <span className="a">g</span>
        </div>

        <p className="specimen-pangram sans" style={{ fontWeight: 600 }}>
          Engineered, not decorated. Hierarchy through weight and scale.
        </p>

        <div className="specimen-set">
          <div className="row">
            <span className="l">DisplayLg · 8xl</span>
            <span className="v t-display">Ardent</span>
            <span className="v">700 · 1.00 · −0.05em</span>
          </div>
          <div className="row">
            <span className="l">Display · 6xl</span>
            <span className="v t-display">Ardent Design 0.1</span>
            <span className="v">700 · 1.10 · −0.025em</span>
          </div>
          <div className="row">
            <span className="l">H1 · 4xl</span>
            <span className="v t-h1">Section heading</span>
            <span className="v">700 · 1.10 · −0.025em</span>
          </div>
          <div className="row">
            <span className="l">H2 · 2xl</span>
            <span className="v t-h2">Subsection heading</span>
            <span className="v">700 · 1.25 · 0</span>
          </div>
          <div className="row">
            <span className="l">H3 · xl</span>
            <span className="v t-h3">Group heading</span>
            <span className="v">700 · 1.25 · 0</span>
          </div>
          <div className="row">
            <span className="l">H4 · lg</span>
            <span className="v t-h4">Inline heading</span>
            <span className="v">700 · 1.40 · 0</span>
          </div>
        </div>
      </div>

      {/* SERIF specimen */}
      <div className="spec-glyph" style={{ background: "var(--gray-50)" }}>
        <dl className="spec-meta">
          <div>
            <dt>Family</dt>
            <dd>Old Standard TT</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>Body · Reading</dd>
          </div>
          <div>
            <dt>Fallback</dt>
            <dd>Source Serif · Domine</dd>
          </div>
          <div>
            <dt>Voice</dt>
            <dd>Editorial · Technical</dd>
          </div>
        </dl>

        <div className="glyph-row serif">
          <span className="a">A</span>
          <span className="a">a</span>
          <span className="num">02</span>
          <span className="a">G</span>
          <span className="a">g</span>
        </div>

        <p className="specimen-pangram serif" style={{ maxWidth: "32ch" }}>
          The serif body provides a timeless, editorial quality — like reading a Bell Labs technical
          paper.
        </p>

        <div className="specimen-set">
          <div className="row">
            <span className="l">Body · base</span>
            <span className="v t-body">A tight 1.4 line-height for dense, compact reading.</span>
            <span className="v">400 · 1.40</span>
          </div>
          <div className="row">
            <span className="l">BodyLarge · lg</span>
            <span
              className="v"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.125rem",
                lineHeight: "1.5",
              }}
            >
              For ledes, opening paragraphs, and quiet moments that ask to breathe.
            </span>
            <span className="v">400 · 1.50</span>
          </div>
          <div className="row">
            <span className="l">BodySmall · sm</span>
            <span className="v t-bodySm">The system signals weight by virtue of being serif.</span>
            <span className="v">400 · 1.40</span>
          </div>
          <div className="row">
            <span className="l">Italic</span>
            <span className="v t-body" style={{ fontStyle: "italic" }}>
              For citations, titles, and emphasis — nothing else.
            </span>
            <span className="v">400 · italic</span>
          </div>
        </div>
      </div>

      {/* MONO specimen */}
      <div className="spec-glyph" style={{ background: "var(--black)", color: "var(--white)" }}>
        <dl className="spec-meta" style={{ color: "var(--gray-400)" }}>
          <div>
            <dt style={{ color: "var(--gray-600)" }}>Family</dt>
            <dd style={{ color: "var(--white)" }}>IBM Plex Mono</dd>
          </div>
          <div>
            <dt style={{ color: "var(--gray-600)" }}>Role</dt>
            <dd style={{ color: "var(--white)" }}>Labels · Metadata</dd>
          </div>
          <div>
            <dt style={{ color: "var(--gray-600)" }}>Fallback</dt>
            <dd style={{ color: "var(--white)" }}>Geist Mono · Fira Code</dd>
          </div>
          <div>
            <dt style={{ color: "var(--gray-600)" }}>Signal</dt>
            <dd style={{ color: "var(--white)" }}>&quot;This is system text&quot;</dd>
          </div>
        </dl>

        <div className="glyph-row mono" style={{ fontWeight: 500 }}>
          <span className="a">A</span>
          <span className="a">a</span>
          <span className="num">03</span>
          <span className="a">G</span>
          <span className="a">g</span>
        </div>

        <p
          className="specimen-pangram mono"
          style={{ fontSize: "clamp(16px, 2.4vw, 22px)", letterSpacing: "0.02em" }}
        >
          MACHINE-READABLE · CONTROL-PANEL · DATASHEET
          <br />
          <span style={{ color: "var(--gray-400)" }}>
            {"// distinguishes functional text from content"}
          </span>
        </p>

        <div className="specimen-set" style={{ borderTopColor: "var(--gray-800)" }}>
          <div className="row">
            <span className="l" style={{ color: "var(--gray-500)" }}>
              Label · xs
            </span>
            <span className="v t-label" style={{ color: "var(--white)" }}>
              SECTION DIVIDER
            </span>
            <span className="v" style={{ color: "var(--gray-500)" }}>
              500 · 0.05em
            </span>
          </div>
          <div className="row">
            <span className="l" style={{ color: "var(--gray-500)" }}>
              Code · sm
            </span>
            <span className="v t-code" style={{ color: "var(--white)" }}>
              const accent = emerald[400];
            </span>
            <span className="v" style={{ color: "var(--gray-500)" }}>
              400 · 0
            </span>
          </div>
          <div className="row">
            <span className="l" style={{ color: "var(--gray-500)" }}>
              Caption · xs
            </span>
            <span className="v t-caption" style={{ color: "var(--gray-300)" }}>
              Figure 3.1 — type specimens, 1:1 scale
            </span>
            <span className="v" style={{ color: "var(--gray-500)" }}>
              400 · 0.025em
            </span>
          </div>
          <div className="row">
            <span className="l" style={{ color: "var(--gray-500)" }}>
              Metadata · xs
            </span>
            <span className="v t-metadata" style={{ color: "var(--gray-300)" }}>
              2026-05-20T09:14:32Z · build 0.1.1
            </span>
            <span className="v" style={{ color: "var(--gray-500)" }}>
              400 · 1.20
            </span>
          </div>
        </div>
      </div>

      {/* Token table */}
      <div className="lane" style={{ paddingTop: "32px" }}>
        <div className="label-row strong">
          <span className="label">Typography tokens · semantic</span>
        </div>
        <table className="spec">
          <thead>
            <tr>
              <th>Role</th>
              <th>Family</th>
              <th>Size</th>
              <th>Weight</th>
              <th>Line height</th>
              <th>Letter spacing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="token">displayLg</td>
              <td>sans</td>
              <td>8xl · 6rem</td>
              <td>700</td>
              <td>1.00</td>
              <td>−0.05em</td>
            </tr>
            <tr>
              <td className="token">display</td>
              <td>sans</td>
              <td>6xl · 3.75rem</td>
              <td>700</td>
              <td>1.10</td>
              <td>−0.025em</td>
            </tr>
            <tr>
              <td className="token">heading1</td>
              <td>sans</td>
              <td>4xl · 2.25rem</td>
              <td>700</td>
              <td>1.10</td>
              <td>−0.025em</td>
            </tr>
            <tr>
              <td className="token">heading2</td>
              <td>sans</td>
              <td>2xl · 1.5rem</td>
              <td>700</td>
              <td>1.25</td>
              <td>0</td>
            </tr>
            <tr>
              <td className="token">heading3</td>
              <td>sans</td>
              <td>xl · 1.25rem</td>
              <td>700</td>
              <td>1.25</td>
              <td>0</td>
            </tr>
            <tr>
              <td className="token">heading4</td>
              <td>sans</td>
              <td>lg · 1.125rem</td>
              <td>700</td>
              <td>1.40</td>
              <td>0</td>
            </tr>
            <tr>
              <td className="token">body</td>
              <td>serif</td>
              <td>base · 1rem</td>
              <td>400</td>
              <td>1.40</td>
              <td>0</td>
            </tr>
            <tr>
              <td className="token">bodyLarge</td>
              <td>serif</td>
              <td>lg · 1.125rem</td>
              <td>400</td>
              <td>1.50</td>
              <td>0</td>
            </tr>
            <tr>
              <td className="token">bodySmall</td>
              <td>serif</td>
              <td>sm · 0.875rem</td>
              <td>400</td>
              <td>1.40</td>
              <td>0</td>
            </tr>
            <tr>
              <td className="token">label</td>
              <td>mono</td>
              <td>xs · 0.75rem</td>
              <td>500</td>
              <td>1.40</td>
              <td>0.05em</td>
            </tr>
            <tr>
              <td className="token">code</td>
              <td>mono</td>
              <td>sm · 0.875rem</td>
              <td>400</td>
              <td>1.40</td>
              <td>0</td>
            </tr>
            <tr>
              <td className="token">caption</td>
              <td>mono</td>
              <td>xs · 0.75rem</td>
              <td>400</td>
              <td>1.40</td>
              <td>0.025em</td>
            </tr>
            <tr>
              <td className="token">metadata</td>
              <td>mono</td>
              <td>xs · 0.75rem</td>
              <td>400</td>
              <td>1.20</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
