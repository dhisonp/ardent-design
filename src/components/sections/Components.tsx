import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Divider } from "@/components/ui/Divider";

export function Components() {
  return (
    <section id="components" className="section lane" data-screen-label="07 Components">
      <header className="section-head">
        <span className="num">§07</span>
        <span className="rule"></span>
        <span className="meta">COMPONENTS · 6 PRIMITIVES</span>
      </header>

      <h2 className="section-title">A small kit, used precisely.</h2>
      <p className="section-lede">
        The component surface is intentionally narrow. Each primitive does one thing. Composition
        does the rest.
      </p>

      {/* BUTTON */}
      <div className="comp-row">
        <div className="ttl">
          <strong>Button</strong>
          <p>Three variants. Hairline border, no radius, sans medium, uppercase tracking.</p>
        </div>
        <div className="body">
          <div className="label" style={{ marginBottom: "8px" }}>
            Primary — emerald.400 / emerald.500 on hover
          </div>
          <div className="btn-group" style={{ marginBottom: "16px" }}>
            <Button variant="primary">Confirm action</Button>
            <Button variant="primary">Save</Button>
            <Button variant="primary">Deploy build</Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
          </div>
          <div className="label" style={{ marginBottom: "8px" }}>
            Secondary — goldenrod.500 outline
          </div>
          <div className="btn-group" style={{ marginBottom: "16px" }}>
            <Button variant="secondary">Review changes</Button>
            <Button variant="secondary">Edit</Button>
            <Button variant="secondary">Configure</Button>
          </div>
          <div className="label" style={{ marginBottom: "8px" }}>
            Ghost — transparent / gray.100 on hover
          </div>
          <div className="btn-group">
            <Button variant="ghost">Cancel</Button>
            <Button variant="ghost">Back</Button>
            <Button variant="ghost">Dismiss</Button>
          </div>
        </div>
      </div>

      {/* LINK */}
      <div className="comp-row">
        <div className="ttl">
          <strong>Link</strong>
          <p>Ocean.600, underlined. Hover → gray.600. Arrow glyphs for direction.</p>
        </div>
        <div className="body link-line">
          <ul className="link-list">
            <li>
              <a href="#">Inline link in body copy</a> within a sentence, like this.
            </li>
            <li>
              <a href="#">
                Navigation link <span className="arrow">→</span>
              </a>
            </li>
            <li>
              <a href="#">
                External resource <span className="arrow">↗</span>
              </a>
            </li>
            <li>
              <a href="#">
                Back to index <span className="arrow">←</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* CARD */}
      <div className="comp-row">
        <div className="ttl">
          <strong>Card</strong>
          <p>Hairline black border on gray.50. No shadow, no radius. Internal padding 1.25rem.</p>
        </div>
        <div className="body">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0" }}>
            <Card className="card-ex">
              <span className="label">SPEC · 04.A</span>
              <h4 className="ttl">Hairline-bordered card</h4>
              <p className="body">
                The flat surface treatment. Hierarchy comes from spacing, type weight, and the
                border itself — never from elevation.
              </p>
              <div className="meta">
                <span>UPDATED 2026.05.20</span>
                <span>DRAFT</span>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* INPUT */}
      <div className="comp-row">
        <div className="ttl">
          <strong>Input</strong>
          <p>
            Hairline gray.900 border, no radius. Sans-serif label above, padding 0.625rem ×
            0.375rem.
          </p>
        </div>
        <div className="body">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "14px",
              maxWidth: "380px",
            }}
          >
            <div className="field">
              <label htmlFor="ix-1">PROJECT NAME</label>
              <Input id="ix-1" type="text" defaultValue="ardent" />
              <span className="hint">Lowercase, hyphen-separated.</span>
            </div>
            <div className="field">
              <label htmlFor="ix-2">RUNTIME</label>
              <select
                id="ix-2"
                className="border border-gray-900 bg-white font-sans text-xs px-2.5 py-1.5 focus:border-black focus:outline-none rounded-none"
              >
                <option>Node 22 · LTS</option>
                <option>Bun 1.2</option>
                <option>Deno 2</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="ix-3">DESCRIPTION</label>
              <Input id="ix-3" type="text" placeholder="Optional — one line" />
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER & LABEL */}
      <div className="comp-row">
        <div className="ttl">
          <strong>Divider &amp; Label</strong>
          <p>Section boundaries. Uppercase mono label, hairline rule. The system&apos;s tell.</p>
        </div>
        <div className="body">
          <div>
            <div className="label-row strong">
              <span className="label">REVISION HISTORY</span>
            </div>
            <p className="body" style={{ marginBottom: "24px" }}>
              Default labels pair an uppercase mono caption with a hairline black rule. Used at
              every section boundary.
            </p>

            <div className="label-row">
              <span className="label">RELATED ARTIFACTS</span>
            </div>
            <p className="body" style={{ marginBottom: "24px" }}>
              Use the muted variant (gray.300 rule) for secondary groupings.
            </p>

            <Divider variant="strong" className="my-4" />
            <p className="t-caption muted">
              Above: <code>&lt;hr className=&quot;divider strong&quot;&gt;</code> — 2 px black
            </p>
            <Divider variant="muted" className="my-4" />
            <p className="t-caption muted">
              Above: <code>&lt;hr className=&quot;divider muted&quot;&gt;</code> — 1 px gray.200
            </p>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="comp-row">
        <div className="ttl">
          <strong>Table</strong>
          <p>
            Mono throughout. Header is uppercase metadata, body is tabular-nums, hairline row
            dividers.
          </p>
        </div>
        <div className="body">
          <table className="spec">
            <thead>
              <tr>
                <th>Build</th>
                <th>Channel</th>
                <th>Status</th>
                <th className="num-col">Δ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="token">0.1.1</td>
                <td>stable</td>
                <td>
                  <span style={{ color: "var(--emerald-600)" }}>live</span>
                </td>
                <td className="num-col">+12</td>
              </tr>
              <tr>
                <td className="token">0.1.0</td>
                <td>stable</td>
                <td>
                  <span className="muted text-gray-400">superseded</span>
                </td>
                <td className="num-col">+98</td>
              </tr>
              <tr>
                <td className="token">0.0.9</td>
                <td>beta</td>
                <td>
                  <span style={{ color: "var(--goldenrod-700)" }}>deprecated</span>
                </td>
                <td className="num-col">+4</td>
              </tr>
              <tr>
                <td className="token">0.0.8</td>
                <td>internal</td>
                <td>
                  <span style={{ color: "var(--red-600)" }}>withdrawn</span>
                </td>
                <td className="num-col">−2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
