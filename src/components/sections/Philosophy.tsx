export function Philosophy() {
  return (
    <>
      {/* ============================================================
           §00 — MANIFESTO
           ============================================================ */}
      <section id="manifesto" className="section lane" data-screen-label="00 Manifesto">
        <header className="section-head">
          <span className="num">§00</span>
          <span className="rule"></span>
          <span className="meta">MANIFESTO · 1 PAGE</span>
        </header>

        <p className="label" style={{ marginBottom: "24px" }}>
          CORE PRINCIPLE
        </p>

        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: "clamp(40px, 7vw, 76px)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            marginBottom: "32px",
            textWrap: "balance",
          }}
        >
          Intentionality
          <br />
          over style.
        </h2>

        <p className="lede" style={{ maxWidth: "54ch", marginBottom: "24px", textWrap: "pretty" }}>
          Ardent is neither minimalist nor maximalist. It is <em>intentional</em>. Sparse when focus
          is required. Dense when information rewards exploration. The context determines the
          approach; the sin is arbitrariness.
        </p>

        <p className="body" style={{ maxWidth: "54ch", marginBottom: "16px" }}>
          A portfolio landing page may be quiet and restrained — a doorway. A dashboard or technical
          document may be dense and layered — a workbench. Both are correct if the decision is
          conscious.
        </p>

        <p className="body" style={{ maxWidth: "54ch" }}>
          The name reflects the character: intense, passionate, and burning — but controlled. Every
          decision is deliberate. Every element earns its place.
        </p>
      </section>

      {/* ============================================================
           §01 — THE EIGHT TENETS
           ============================================================ */}
      <section id="tenets" className="section lane" data-screen-label="01 Tenets">
        <header className="section-head">
          <span className="num">§01</span>
          <span className="rule"></span>
          <span className="meta">TENETS · 8</span>
        </header>

        <h2 className="section-title">The eight tenets.</h2>
        <p className="section-lede">
          Operating principles. Apply them in order when forces conflict — intentionality before
          transparency, transparency before timelessness, and so on. They are not aesthetic
          preferences; they are decision rules.
        </p>

        <ol className="tenets">
          <li className="tenet">
            <span className="num">01</span>
            <div>
              <h3>Intentionality over style</h3>
              <p>
                Every decision requires a reason. Aesthetic choices are functional responses to
                context. If you cannot articulate why an element exists, reconsider it.
              </p>
            </div>
          </li>
          <li className="tenet">
            <span className="num">02</span>
            <div>
              <h3>Transparency</h3>
              <p>
                Expose state. Show the system. Don&apos;t hide the machine. Revealing inner workings
                builds trust and enables mastery.
              </p>
            </div>
          </li>
          <li className="tenet">
            <span className="num">03</span>
            <div>
              <h3>Timelessness</h3>
              <p>
                Ignore trends. Design for permanence. If it would look wrong printed in 1978 or
                displayed in 2045, reconsider it.
              </p>
            </div>
          </li>
          <li className="tenet">
            <span className="num">04</span>
            <div>
              <h3>Precision</h3>
              <p>
                Engineered, not decorated. Every element should feel <em>built</em>—considered,
                calibrated, placed. The aesthetic of control panels and datasheets.
              </p>
            </div>
          </li>
          <li className="tenet">
            <span className="num">05</span>
            <div>
              <h3>Functional density</h3>
              <p>
                As complex as it needs to be. No more, no less. Information is not the enemy.
                Whitespace is structural; emptiness for its own sake is waste.
              </p>
            </div>
          </li>
          <li className="tenet">
            <span className="num">06</span>
            <div>
              <h3>Warmth through craft</h3>
              <p>
                The human is visible in details. Precision is not cold. Care in typography, spacing,
                alignment—that is where warmth lives, not in whimsy.
              </p>
            </div>
          </li>
          <li className="tenet">
            <span className="num">07</span>
            <div>
              <h3>Performance is design</h3>
              <p>
                Fast, lightweight, no bloat. The experience of speed is part of the aesthetic. A
                slow interface cannot be beautiful.
              </p>
            </div>
          </li>
          <li className="tenet">
            <span className="num">08</span>
            <div>
              <h3>Respect for users</h3>
              <p>
                Don&apos;t infantilize. Users are capable adults. Be direct, clear, and explicit.
                Avoid soft language and false confirmation.
              </p>
            </div>
          </li>
        </ol>
      </section>
    </>
  );
}
