export function DensitySection() {
  return (
    <section id="density" className="section" data-screen-label="08 Density">
      <div className="lane">
        <header className="section-head">
          <span className="num">§08</span>
          <span className="rule"></span>
          <span className="meta">CONTEXT · TWO MODES</span>
        </header>

        <h2 className="section-title">Sparse for doorways. Dense for workbenches.</h2>
        <p className="section-lede">
          The same system, two postures. Sparse when the user needs to orient. Dense when they need
          to scan, compare, or find. Both correct — if the decision is conscious.
        </p>
      </div>

      <div className="compare">
        <div className="sparse-demo">
          <div className="ttl-bar">
            <span>SPARSE · A DOORWAY</span>
            <span>LANDING · PORTFOLIO · ONBOARDING</span>
          </div>
          <h3>Build with intent.</h3>
          <p>
            One sentence. One action. The page does nothing else, because nothing else needs doing
            here.
          </p>
          <a href="#" className="btn">
            Begin <span style={{ marginLeft: "8px" }}>→</span>
          </a>
        </div>
        <div className="dense-demo">
          <div className="ttl-bar">
            <span>DENSE · A WORKBENCH</span>
            <span>DASHBOARD · TUI · ADMIN</span>
          </div>
          <div className="grid">
            <div>
              <span className="k">UPTIME</span>
              <span className="v">99.982%</span>
            </div>
            <div>
              <span className="k">P50</span>
              <span className="v">14ms</span>
            </div>
            <div>
              <span className="k">P99</span>
              <span className="v">142ms</span>
            </div>
            <div>
              <span className="k">RPS</span>
              <span className="v up">+8.4k</span>
            </div>
            <div>
              <span className="k">QUEUE</span>
              <span className="v">3,021</span>
            </div>
            <div>
              <span className="k">ERR/MIN</span>
              <span className="v dn">+12</span>
            </div>
            <div>
              <span className="k">CPU</span>
              <span className="v">62%</span>
            </div>
            <div>
              <span className="k">MEM</span>
              <span className="v">71%</span>
            </div>
            <div>
              <span className="k">CACHE</span>
              <span className="v">94%</span>
            </div>
            <div>
              <span className="k">FANOUT</span>
              <span className="v">1:12</span>
            </div>
          </div>
          <div className="log">
            <div className="row">
              <span className="t">09:14:32</span>
              <span className="lv ok">OK</span>
              <span>worker.A04 reconnected · session resumed</span>
            </div>
            <div className="row">
              <span className="t">09:14:28</span>
              <span className="lv wn">WARN</span>
              <span>queue depth &gt; 3,000 · scaling +2</span>
            </div>
            <div className="row">
              <span className="t">09:14:21</span>
              <span className="lv ok">OK</span>
              <span>migration 014_indexes complete (84 ms)</span>
            </div>
            <div className="row">
              <span className="t">09:14:14</span>
              <span className="lv er">ERR</span>
              <span>token expired for client 91a3 · re-auth</span>
            </div>
            <div className="row">
              <span className="t">09:14:02</span>
              <span className="lv ok">OK</span>
              <span>cache warm · 14,201 keys</span>
            </div>
          </div>
        </div>
      </div>

      <div className="lane" style={{ paddingTop: "32px" }}>
        <table className="spec">
          <thead>
            <tr>
              <th>Be sparse when…</th>
              <th>Be dense when…</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Landing pages, portfolios, marketing</td>
              <td>Dashboards, monitors, telemetry</td>
            </tr>
            <tr>
              <td>Onboarding flows</td>
              <td>Technical documentation, references</td>
            </tr>
            <tr>
              <td>Single-focus tasks</td>
              <td>Admin interfaces, configuration</td>
            </tr>
            <tr>
              <td>Orientation is the goal</td>
              <td>Scan, compare, find is the goal</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
