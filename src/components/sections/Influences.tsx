export function Influences() {
  return (
    <section id="influences" className="section lane" data-screen-label="02 Influences">
      <header className="section-head">
        <span className="num">§02</span>
        <span className="rule"></span>
        <span className="meta">INFLUENCES · 3 SOURCES</span>
      </header>

      <h2 className="section-title">Influences — 50 / 30 / 20.</h2>
      <p className="section-lede">
        Ardent synthesizes three sources in approximate proportion. Aesthetic from the first,
        architecture from the second, humanity from the third.
      </p>

      <div className="influence-bar" aria-hidden="true">
        <div className="a">
          <span className="nm">U.S. Graphics Co.</span>
          <span className="pct">50%</span>
        </div>
        <div className="b">
          <span className="nm">IBM Carbon</span>
          <span className="pct">30%</span>
        </div>
        <div className="c">
          <span className="nm">Recursive / brutalism</span>
          <span className="pct">20%</span>
        </div>
      </div>

      <div className="influence-grid">
        <div className="influence-card">
          <h4>U.S. Graphics Co.</h4>
          <div className="role">50% · dominant aesthetic</div>
          <p>
            The golden era of computing. Control panels, machine-readable typefaces, terminal
            interfaces, technical documentation. Where the look comes from.
          </p>
          <ul className="attrs">
            <li>Monospace for system text</li>
            <li>Hairline borders, ruled dividers</li>
            <li>Harsh contrast (near-black on off-white)</li>
            <li>Flat, non-hierarchical surfaces</li>
            <li>Color as semantic, never decoration</li>
            <li>Dense information display</li>
          </ul>
        </div>

        <div className="influence-card">
          <h4>IBM Carbon</h4>
          <div className="role">30% · architecture</div>
          <p>
            Where USG is an aesthetic, Carbon is an architecture. The systematic rigor underneath
            the surface vocabulary.
          </p>
          <ul className="attrs">
            <li>Consistent spacing scale</li>
            <li>Modular, composable components</li>
            <li>Accessibility standards</li>
            <li>Primitives → semantics → components</li>
            <li>Professional doc practices</li>
          </ul>
        </div>

        <div className="influence-card">
          <h4>Recursive / brutalism</h4>
          <div className="role">20% · warmth</div>
          <p>
            Warmth within structure. Recursive&apos;s variable axes show that systematic design can
            still breathe. The soft end of brutalism.
          </p>
          <ul className="attrs">
            <li>Humanity within monospace</li>
            <li>Playfulness without sacrifice of function</li>
            <li>Ready for work, ready for play</li>
            <li>Structural but approachable</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
