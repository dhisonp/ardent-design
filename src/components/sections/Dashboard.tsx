export function Dashboard() {
  return (
    <section id="inuse" className="section" data-screen-label="09 In Use">
      <div className="lane">
        <header className="section-head">
          <span className="num">§09</span>
          <span className="rule"></span>
          <span className="meta">SURFACE · DASHBOARD FRAGMENT</span>
        </header>

        <h2 className="section-title">The system, assembled.</h2>
        <p className="section-lede">
          A working surface that uses only the tokens and components defined above. Same vocabulary;
          nothing new introduced. No shadows. No radii. No animation.
        </p>
      </div>

      <div className="ui-demo">
        <div className="ui-bar">
          <div className="brand">
            <span style={{ fontFamily: "var(--font-mono)", color: "var(--gray-400)" }}>
              ARDENT/
            </span>
            <strong>console</strong>
          </div>
          <div className="crumb">
            <b>workspace</b>
            <span>/</span>
            <b>orchard</b>
            <span>/</span>
            <b className="active">deployments</b>
          </div>
          <div className="pill live">LIVE</div>
          <div className="pill">v0.1.1 · 2026.05.20</div>
        </div>

        <div className="ui-grid">
          <nav className="ui-side">
            <div className="group">Workspace</div>
            <a>
              <span>Overview</span>
              <span className="c">8</span>
            </a>
            <a className="active">
              <span>Deployments</span>
              <span className="c">14</span>
            </a>
            <a>
              <span>Services</span>
              <span className="c">32</span>
            </a>
            <a>
              <span>Secrets</span>
              <span className="c">21</span>
            </a>
            <div className="group">Telemetry</div>
            <a>
              <span>Logs</span>
              <span className="c">live</span>
            </a>
            <a>
              <span>Traces</span>
              <span className="c">live</span>
            </a>
            <a>
              <span>Metrics</span>
              <span className="c">6</span>
            </a>
            <div className="group">Account</div>
            <a>
              <span>Members</span>
              <span className="c">4</span>
            </a>
            <a>
              <span>Billing</span>
              <span className="c">—</span>
            </a>
            <a>
              <span>Settings</span>
              <span className="c">—</span>
            </a>
          </nav>

          <main className="ui-main">
            <div className="ui-h">
              <h2>Deployments</h2>
              <div className="actions">
                <button className="btn btn-ghost">Filter</button>
                <button className="btn btn-secondary">Configure</button>
                <button className="btn">
                  New deploy <span style={{ marginLeft: "6px" }}>→</span>
                </button>
              </div>
            </div>

            <div className="ui-stats">
              <div>
                <div className="k">SUCCESSFUL · 24H</div>
                <div className="v">
                  38<span className="delta">+12</span>
                </div>
              </div>
              <div>
                <div className="k">FAILED · 24H</div>
                <div className="v" style={{ color: "var(--red-600)" }}>
                  2
                  <span className="delta" style={{ color: "var(--red-600)" }}>
                    +1
                  </span>
                </div>
              </div>
              <div>
                <div className="k">AVG DURATION</div>
                <div className="v">
                  1:42
                  <span className="delta" style={{ color: "var(--text-secondary)" }}>
                    −4s
                  </span>
                </div>
              </div>
              <div>
                <div className="k">QUEUE</div>
                <div className="v">
                  3
                  <span className="delta" style={{ color: "var(--text-secondary)" }}>
                    idle
                  </span>
                </div>
              </div>
            </div>

            <table className="ui-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Service</th>
                  <th>Branch</th>
                  <th>Status</th>
                  <th className="num">Duration</th>
                  <th className="num">Δ size</th>
                  <th>Pushed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>dep_8a14</td>
                  <td>web-edge</td>
                  <td>main</td>
                  <td className="ok">DEPLOYED</td>
                  <td className="num">1:38</td>
                  <td className="num">+2.1 kB</td>
                  <td>2 min ago</td>
                </tr>
                <tr>
                  <td>dep_8a13</td>
                  <td>api-core</td>
                  <td>main</td>
                  <td className="ok">DEPLOYED</td>
                  <td className="num">2:04</td>
                  <td className="num">−0.8 kB</td>
                  <td>11 min ago</td>
                </tr>
                <tr>
                  <td>dep_8a12</td>
                  <td>worker-fanout</td>
                  <td>feat/retry</td>
                  <td className="wn">RUNNING</td>
                  <td className="num">0:42</td>
                  <td className="num">—</td>
                  <td>14 min ago</td>
                </tr>
                <tr>
                  <td>dep_8a11</td>
                  <td>web-edge</td>
                  <td>main</td>
                  <td className="er">FAILED</td>
                  <td className="num">0:08</td>
                  <td className="num">—</td>
                  <td>26 min ago</td>
                </tr>
                <tr>
                  <td>dep_8a10</td>
                  <td>api-core</td>
                  <td>main</td>
                  <td className="ok">DEPLOYED</td>
                  <td className="num">1:51</td>
                  <td className="num">+0.4 kB</td>
                  <td>1 h ago</td>
                </tr>
                <tr>
                  <td>dep_8a09</td>
                  <td>scheduler</td>
                  <td>main</td>
                  <td className="ok">DEPLOYED</td>
                  <td className="num">1:12</td>
                  <td className="num">+1.2 kB</td>
                  <td>2 h ago</td>
                </tr>
                <tr>
                  <td>dep_8a08</td>
                  <td>worker-fanout</td>
                  <td>main</td>
                  <td className="ok">DEPLOYED</td>
                  <td className="num">2:18</td>
                  <td className="num">+0.0 kB</td>
                  <td>4 h ago</td>
                </tr>
              </tbody>
            </table>

            <p className="t-caption muted" style={{ marginTop: "12px" }}>
              Showing 7 of 38 ·{" "}
              <a href="#" style={{ color: "var(--text-link)" }}>
                view all →
              </a>
            </p>
          </main>
        </div>
      </div>

      <div className="lane" style={{ paddingTop: "32px" }}>
        <div className="label-row strong">
          <span className="label">What is reused, where</span>
        </div>
        <table className="spec">
          <thead>
            <tr>
              <th>Element</th>
              <th>Token</th>
              <th>Component</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Status pills</td>
              <td>border.muted · emerald.500</td>
              <td>Label</td>
            </tr>
            <tr>
              <td>Sidebar</td>
              <td>border.muted · bg.tertiary</td>
              <td>Divider · Link</td>
            </tr>
            <tr>
              <td>Stat tiles</td>
              <td>border.muted · spacing.card.padding</td>
              <td>Card</td>
            </tr>
            <tr>
              <td>Table</td>
              <td>borderWidth.hairline · gray.50 header</td>
              <td>Table</td>
            </tr>
            <tr>
              <td>Action row</td>
              <td>—</td>
              <td>Button (3 variants)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
