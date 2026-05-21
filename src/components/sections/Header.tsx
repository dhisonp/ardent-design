export function Header() {
  return (
    <>
      {/* ============================================================
           TOP META BAR  (machine-readable identity strip)
           ============================================================ */}
      <dl className="meta-bar">
        <div>
          <dt>SYSTEM</dt>
          <dd>ARDENT/DESIGN</dd>
        </div>
        <div>
          <dt>VERSION</dt>
          <dd>0.1.3</dd>
        </div>
        <div>
          <dt>BUILD</dt>
          <dd>2026.05.21</dd>
        </div>
        <div>
          <dt>STATUS</dt>
          <dd>LIVE · DRAFT</dd>
        </div>
      </dl>

      {/* ============================================================
           COVER  /  §00
           ============================================================ */}
      <header className="cover" data-screen-label="00 Cover">
        <div className="cover-eyebrow">
          <span className="left">DOC · ARDENT/SPEC/0.1.3</span>
          <span></span>
          <span className="right">D. Padma · PERSONAL</span>
        </div>

        <h1 className="cover-title">
          Ardent<span className="ampersand">,</span>
        </h1>
        <h1 className="cover-title">a&nbsp;design system.</h1>

        <p className="cover-sub">
          A philosophy and token specification for interfaces that are precise, intentional, and
          timeless. Built to span GUIs, TUIs and the web—one vocabulary across surfaces.
        </p>

        <dl className="cover-grid">
          <div>
            <dt>Author</dt>
            <dd>Dhison Padma</dd>
          </div>
          <div>
            <dt>Surface</dt>
            <dd>Web · TUI · GUI</dd>
          </div>
          <div>
            <dt>Influences</dt>
            <dd>USG · Carbon · Recursive</dd>
          </div>
          <div>
            <dt>License</dt>
            <dd>Personal — share-on-request</dd>
          </div>
          <div>
            <dt>Tokens</dt>
            <dd>57 primitive · 41 semantic</dd>
          </div>
          <div>
            <dt>Families</dt>
            <dd>3 (sans · serif · mono)</dd>
          </div>
          <div>
            <dt>Base unit</dt>
            <dd>4px / 0.25rem</dd>
          </div>
          <div>
            <dt>Radius</dt>
            <dd>0</dd>
          </div>
        </dl>
      </header>
    </>
  );
}
