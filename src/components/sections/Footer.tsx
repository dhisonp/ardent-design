export function Footer() {
  return (
    <footer>
      <div className="colophon">
        <div className="grid">
          <div>
            <h4>About this document</h4>
            <p>
              Single-page documentation site for Ardent Design v0.1.1. Built as an Ardent artifact —
              the system applied to itself.
            </p>
          </div>
          <div>
            <h4>Source files</h4>
            <ul>
              <li>
                ·{" "}
                <a
                  href="/ARDENT_DESIGN.md"
                  style={{ color: "var(--text-link)", textDecoration: "underline" }}
                >
                  ARDENT_DESIGN.md
                </a>
              </li>
              <li>
                ·{" "}
                <a
                  href="/tokens.json"
                  style={{ color: "var(--text-link)", textDecoration: "underline" }}
                >
                  tokens.json
                </a>{" "}
                · v0.1.3
              </li>
              <li>
                ·{" "}
                <a
                  href="/AGENTS.md"
                  style={{ color: "var(--text-link)", textDecoration: "underline" }}
                >
                  AGENTS.md
                </a>
              </li>
              <li>
                ·{" "}
                <a
                  href="/globals.css"
                  style={{ color: "var(--text-link)", textDecoration: "underline" }}
                >
                  styles.css
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Closing</h4>
            <p>Simple complexity. Ridding the spaces between aesthetics and function.</p>
          </div>
        </div>
      </div>

      <dl className="meta-bar bottom">
        <div>
          <dt>END</dt>
          <dd>OF DOCUMENT</dd>
        </div>
        <div>
          <dt>SECTIONS</dt>
          <dd>10</dd>
        </div>
        <div>
          <dt>SET</dt>
          <dd>INTER · OST · IBM PLEX MONO</dd>
        </div>
        <div>
          <dt>©</dt>
          <dd>D. Padma · 2026 · v0.1.3</dd>
        </div>
      </dl>
    </footer>
  );
}
