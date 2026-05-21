export function SpacingSection() {
  return (
    <section id="spacing" className="section lane" data-screen-label="05 Spacing">
      <header className="section-head">
        <span className="num">§05</span>
        <span className="rule"></span>
        <span className="meta">SPACING · 4PX BASE · 20 STEPS · MONOTONIC</span>
      </header>

      <h2 className="section-title">Tight, consistent rhythm.</h2>
      <p className="section-lede">
        4px base. Biased toward compact layouts. Whitespace is structural — it creates rhythm and
        hierarchy — but emptiness for its own sake is waste.
      </p>

      <div className="space-stack">
        <div className="space-row">
          <span className="tok">space.1</span>
          <span className="val">4 px · 0.25rem</span>
          <span className="bar" style={{ width: "4px" }}></span>
        </div>
        <div className="space-row">
          <span className="tok">space.2</span>
          <span className="val">8 px · 0.5rem</span>
          <span className="bar" style={{ width: "8px" }}></span>
        </div>
        <div className="space-row">
          <span className="tok">space.3</span>
          <span className="val">12 px · 0.75rem</span>
          <span className="bar" style={{ width: "12px" }}></span>
        </div>
        <div className="space-row">
          <span className="tok">space.4</span>
          <span className="val">16 px · 1rem</span>
          <span className="bar" style={{ width: "16px" }}></span>
        </div>
        <div className="space-row">
          <span className="tok">space.5</span>
          <span className="val">20 px · 1.25rem</span>
          <span className="bar" style={{ width: "20px" }}></span>
        </div>
        <div className="space-row">
          <span className="tok">space.6</span>
          <span className="val">24 px · 1.5rem</span>
          <span className="bar" style={{ width: "24px" }}></span>
        </div>
        <div className="space-row">
          <span className="tok">space.7</span>
          <span className="val">28 px · 1.75rem</span>
          <span className="bar" style={{ width: "28px" }}></span>
        </div>
        <div className="space-row">
          <span className="tok">space.8</span>
          <span className="val">32 px · 2rem</span>
          <span className="bar" style={{ width: "32px" }}></span>
        </div>
        <div className="space-row">
          <span className="tok">space.10</span>
          <span className="val">40 px · 2.5rem</span>
          <span className="bar" style={{ width: "40px" }}></span>
        </div>
        <div className="space-row">
          <span className="tok">space.12</span>
          <span className="val">48 px · 3rem</span>
          <span className="bar" style={{ width: "48px" }}></span>
        </div>
        <div className="space-row">
          <span className="tok">space.14</span>
          <span className="val">56 px · 3.5rem</span>
          <span className="bar" style={{ width: "56px" }}></span>
        </div>
        <div className="space-row">
          <span className="tok">space.16</span>
          <span className="val">64 px · 4rem</span>
          <span className="bar" style={{ width: "64px" }}></span>
        </div>
        <div className="space-row">
          <span className="tok">space.20</span>
          <span className="val">80 px · 5rem</span>
          <span className="bar" style={{ width: "80px" }}></span>
        </div>
        <div className="space-row">
          <span className="tok">space.24</span>
          <span className="val">96 px · 6rem</span>
          <span className="bar" style={{ width: "96px" }}></span>
        </div>
      </div>

      <div className="label-row strong" style={{ marginTop: "32px" }}>
        <span className="label">Semantic spacing — in context</span>
      </div>
      <div className="semantic-space-grid">
        <div>
          <div>
            <span className="tok">spacing.page.margin</span>
            <span className="val">1.25rem</span>
          </div>
          <p className="ctx">Mobile body padding</p>
        </div>
        <div>
          <div>
            <span className="tok">spacing.page.marginLg</span>
            <span className="val">3rem</span>
          </div>
          <p className="ctx">Desktop body padding</p>
        </div>
        <div>
          <div>
            <span className="tok">spacing.page.maxWidth</span>
            <span className="val">42.375rem</span>
          </div>
          <p className="ctx">Reading container (678 px)</p>
        </div>
        <div>
          <div>
            <span className="tok">spacing.page.maxWidthDoc</span>
            <span className="val">47.5rem</span>
          </div>
          <p className="ctx">Spec-grade container (760 px)</p>
        </div>
        <div>
          <div>
            <span className="tok">spacing.section.gap</span>
            <span className="val">3.5rem</span>
          </div>
          <p className="ctx">Between major sections</p>
        </div>
        <div>
          <div>
            <span className="tok">spacing.section.gapSm</span>
            <span className="val">2rem</span>
          </div>
          <p className="ctx">Between minor groups</p>
        </div>
        <div>
          <div>
            <span className="tok">spacing.card.padding</span>
            <span className="val">1.25rem</span>
          </div>
          <p className="ctx">Card internal padding</p>
        </div>
        <div>
          <div>
            <span className="tok">spacing.card.gap</span>
            <span className="val">0.75rem</span>
          </div>
          <p className="ctx">Stack inside cards</p>
        </div>
        <div>
          <div>
            <span className="tok">spacing.inline.gap</span>
            <span className="val">0.375rem</span>
          </div>
          <p className="ctx">Chip / tag spacing</p>
        </div>
        <div>
          <div>
            <span className="tok">spacing.inline.gapLg</span>
            <span className="val">0.75rem</span>
          </div>
          <p className="ctx">Toolbar / nav spacing</p>
        </div>
        <div>
          <div>
            <span className="tok">spacing.control.paddingX</span>
            <span className="val">0.75rem</span>
          </div>
          <p className="ctx">Button / input horizontal</p>
        </div>
        <div>
          <div>
            <span className="tok">spacing.control.paddingY</span>
            <span className="val">0.375rem</span>
          </div>
          <p className="ctx">Button / input vertical</p>
        </div>
      </div>

      <div className="label-row strong" style={{ marginTop: "32px" }}>
        <span className="label">Borders, radius, motion &amp; focus</span>
      </div>
      <table className="spec" style={{ marginTop: "8px" }}>
        <thead>
          <tr>
            <th>Token</th>
            <th>Value</th>
            <th>Used by</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="token">borderWidth.hairline</td>
            <td>1 px</td>
            <td>Cards · inputs · buttons · dividers</td>
          </tr>
          <tr>
            <td className="token">borderWidth.default</td>
            <td>2 px</td>
            <td>Emphasized dividers · focus rings</td>
          </tr>
          <tr>
            <td className="token">borderWidth.thick</td>
            <td>4 px</td>
            <td className="muted">Reserved — not currently consumed</td>
          </tr>
          <tr>
            <td className="token">borderRadius.none</td>
            <td>0</td>
            <td>
              <strong>The only radius.</strong> All components.
            </td>
          </tr>
          <tr>
            <td className="token">motion.duration.*</td>
            <td>0 ms</td>
            <td>All transitions · &quot;no animation&quot; is the value</td>
          </tr>
          <tr>
            <td className="token">motion.easing.*</td>
            <td>linear</td>
            <td>Pinned alongside duration</td>
          </tr>
          <tr>
            <td className="token">focus.width</td>
            <td>2 px</td>
            <td>All focusable elements</td>
          </tr>
          <tr>
            <td className="token">focus.offset</td>
            <td>0.125 rem</td>
            <td>Outline gap from element</td>
          </tr>
          <tr>
            <td className="token">focus.color</td>
            <td>black</td>
            <td>Light mode · inverts to white in dark</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
