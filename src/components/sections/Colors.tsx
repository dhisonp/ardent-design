import { cn } from "@/lib/cn";

const SCALES = [
  {
    name: "Gray",
    desc: "Surfaces · text · borders",
    swatches: [
      { label: "50", bgClass: "bg-gray-50", textClass: "text-black", hex: "#FAFAFA" },
      { label: "100", bgClass: "bg-gray-100", textClass: "text-black", hex: "#F5F5F5" },
      { label: "200", bgClass: "bg-gray-200", textClass: "text-black", hex: "#E5E5E5" },
      { label: "300", bgClass: "bg-gray-300", textClass: "text-black", hex: "#D4D4D4" },
      { label: "400", bgClass: "bg-gray-400", textClass: "text-black", hex: "#A3A3A3" },
      { label: "500", bgClass: "bg-gray-500", textClass: "text-white", hex: "#737373" },
      { label: "600", bgClass: "bg-gray-600", textClass: "text-white", hex: "#525252" },
      { label: "700", bgClass: "bg-gray-700", textClass: "text-white", hex: "#404040" },
      { label: "800", bgClass: "bg-gray-800", textClass: "text-white", hex: "#262626" },
      { label: "900 / 950", bgClass: "bg-gray-900", textClass: "text-white", hex: "#0A0A0A" },
    ],
  },
  {
    name: "Emerald",
    desc: "Success · confirm\npositive actions",
    swatches: [
      { label: "50", bgClass: "bg-emerald-50", textClass: "text-black", hex: "#E6F6EC" },
      { label: "100", bgClass: "bg-emerald-100", textClass: "text-black", hex: "#C3E9D2" },
      { label: "200", bgClass: "bg-emerald-200", textClass: "text-black", hex: "#8FD5AC" },
      { label: "300", bgClass: "bg-emerald-300", textClass: "text-black", hex: "#58C084" },
      {
        label: "400",
        bgClass: "bg-emerald-400",
        textClass: "text-black",
        hex: "#26AB62",
        primary: true,
      },
      { label: "500", bgClass: "bg-emerald-500", textClass: "text-white", hex: "#009148" },
      { label: "600", bgClass: "bg-emerald-600", textClass: "text-white", hex: "#007038" },
      { label: "700", bgClass: "bg-emerald-700", textClass: "text-white", hex: "#00562B" },
      { label: "800", bgClass: "bg-emerald-800", textClass: "text-white", hex: "#003F20" },
      { label: "900", bgClass: "bg-emerald-900", textClass: "text-white", hex: "#002915" },
    ],
  },
  {
    name: "Goldenrod",
    desc: "Warning · caution\nattention required",
    swatches: [
      { label: "50", bgClass: "bg-goldenrod-50", textClass: "text-black", hex: "#FFFAEB" },
      { label: "100", bgClass: "bg-goldenrod-100", textClass: "text-black", hex: "#FFF0C2" },
      { label: "200", bgClass: "bg-goldenrod-200", textClass: "text-black", hex: "#FFE285" },
      { label: "300", bgClass: "bg-goldenrod-300", textClass: "text-black", hex: "#FFD147" },
      { label: "400", bgClass: "bg-goldenrod-400", textClass: "text-black", hex: "#FFC01F" },
      {
        label: "500",
        bgClass: "bg-goldenrod-500",
        textClass: "text-black",
        hex: "#FDB515",
        primary: true,
      },
      { label: "600", bgClass: "bg-goldenrod-600", textClass: "text-white", hex: "#C78D0A" },
      { label: "700", bgClass: "bg-goldenrod-700", textClass: "text-white", hex: "#946805" },
      { label: "800", bgClass: "bg-goldenrod-800", textClass: "text-white", hex: "#634503" },
      { label: "900", bgClass: "bg-goldenrod-900", textClass: "text-white", hex: "#332301" },
    ],
  },
  {
    name: "Ocean",
    desc: "Link · informational\nsecondary actions",
    swatches: [
      { label: "50", bgClass: "bg-ocean-50", textClass: "text-black", hex: "#E0F2F7" },
      { label: "100", bgClass: "bg-ocean-100", textClass: "text-black", hex: "#B3DFF0" },
      { label: "200", bgClass: "bg-ocean-200", textClass: "text-black", hex: "#80C2E8" },
      { label: "300", bgClass: "bg-ocean-300", textClass: "text-black", hex: "#4DA1DE" },
      { label: "400", bgClass: "bg-ocean-400", textClass: "text-white", hex: "#2680D0" },
      {
        label: "500",
        bgClass: "bg-ocean-500",
        textClass: "text-white",
        hex: "#0060BF",
        primary: true,
      },
      { label: "600", bgClass: "bg-ocean-600", textClass: "text-white", hex: "#004A94" },
      { label: "700", bgClass: "bg-ocean-700", textClass: "text-white", hex: "#00366E" },
      { label: "800", bgClass: "bg-ocean-800", textClass: "text-white", hex: "#002447" },
      { label: "900", bgClass: "bg-ocean-900", textClass: "text-white", hex: "#001224" },
    ],
  },
  {
    name: "Red",
    desc: "Error · destructive\ncritical alerts",
    swatches: [
      { label: "50", bgClass: "bg-red-50", textClass: "text-black", hex: "#FEF2F2" },
      { label: "100", bgClass: "bg-red-100", textClass: "text-black", hex: "#FEE2E2" },
      { label: "200", bgClass: "bg-red-200", textClass: "text-black", hex: "#FECACA" },
      { label: "300", bgClass: "bg-red-300", textClass: "text-black", hex: "#FCA5A5" },
      { label: "400", bgClass: "bg-red-400", textClass: "text-black", hex: "#F87171" },
      {
        label: "500",
        bgClass: "bg-red-500",
        textClass: "text-white",
        hex: "#DC2626",
        primary: true,
      },
      { label: "600", bgClass: "bg-red-600", textClass: "text-white", hex: "#B91C1C" },
      { label: "700", bgClass: "bg-red-700", textClass: "text-white", hex: "#991B1B" },
      { label: "800", bgClass: "bg-red-800", textClass: "text-white", hex: "#7F1D1D" },
      { label: "900", bgClass: "bg-red-900", textClass: "text-white", hex: "#450A0A" },
    ],
  },
];

export function Colors() {
  return (
    <section id="color" className="section" data-screen-label="04 Color">
      <div className="lane">
        <header className="section-head">
          <span className="num">§04</span>
          <span className="rule"></span>
          <span className="meta">COLOR · 5 SCALES · 4 SEMANTIC</span>
        </header>

        <h2 className="section-title">Color is semantic.</h2>
        <p className="section-lede">
          Harsh black, harsh white. Four accents: emerald for go, red for stop, ocean for inform,
          goldenrod for caution. Each carries a full 50–900 scale; the 500 step is the primary
          signal unless otherwise stated.
        </p>

        <div className="label-row strong">
          <span className="label">Neutral — gray</span>
        </div>
      </div>

      {SCALES.map((scale) => {
        const isAccentHeader = scale.name === "Emerald";
        return (
          <div key={scale.name}>
            {isAccentHeader && (
              <div className="lane" style={{ paddingTop: "32px", paddingBottom: "8px" }}>
                <div className="label-row strong">
                  <span className="label">Accents</span>
                </div>
              </div>
            )}
            <div className="scale">
              <div className="head">
                <span className="nm">{scale.name}</span>
                <span className="desc">
                  {scale.desc.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx < scale.desc.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </span>
              </div>
              <div className="swatches">
                {scale.swatches.map((swatch) => (
                  <div
                    key={swatch.label}
                    className={cn(
                      "sw",
                      swatch.bgClass,
                      swatch.textClass,
                      swatch.primary && "primary"
                    )}
                  >
                    <span className="w">{swatch.label}</span>
                    <span className="h">{swatch.hex}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}

      {/* LIGHT / DARK THEME PAIR */}
      <div className="lane" style={{ paddingTop: "32px" }}>
        <div className="label-row strong">
          <span className="label">Theme — light / dark</span>
        </div>
      </div>
      <div className="theme-grid">
        <div className="theme-card light">
          <div className="label" style={{ marginBottom: "8px" }}>
            LIGHT MODE
          </div>
          <h3 className="t-h2" style={{ letterSpacing: "-0.02em", marginBottom: "8px" }}>
            A workbench, lit.
          </h3>
          <p className="t-body" style={{ maxWidth: "38ch" }}>
            White surface, black ink. Borders and dividers carry the structure. Accents are reserved
            for state.
          </p>
          <div className="swatch-stack">
            <div className="row">
              <span className="sw" style={{ background: "var(--white)" }}></span>
              <span>bg.primary</span>
              <span className="muted">#FFFFFF</span>
            </div>
            <div className="row">
              <span className="sw" style={{ background: "var(--gray-50)" }}></span>
              <span>bg.secondary</span>
              <span className="muted">gray.50</span>
            </div>
            <div className="row">
              <span className="sw" style={{ background: "var(--gray-100)" }}></span>
              <span>bg.tertiary</span>
              <span className="muted">gray.100</span>
            </div>
            <div className="row">
              <span className="sw" style={{ background: "var(--black)" }}></span>
              <span>text.primary</span>
              <span className="muted">#000000</span>
            </div>
            <div className="row">
              <span className="sw" style={{ background: "var(--gray-600)" }}></span>
              <span>text.secondary</span>
              <span className="muted">gray.600</span>
            </div>
            <div className="row">
              <span className="sw" style={{ background: "var(--ocean-600)" }}></span>
              <span>text.link</span>
              <span className="muted">ocean.600</span>
            </div>
          </div>
        </div>
        <div className="theme-card dark">
          <div className="label" style={{ marginBottom: "8px", color: "var(--gray-400)" }}>
            DARK MODE
          </div>
          <h3 className="t-h2" style={{ letterSpacing: "-0.02em", marginBottom: "8px" }}>
            A workbench, after hours.
          </h3>
          <p className="t-body" style={{ maxWidth: "38ch", color: "var(--gray-300)" }}>
            Black surface, white ink. The same architecture, inverted. Accents brighten one step
            (400) for legibility.
          </p>
          <div className="swatch-stack">
            <div className="row">
              <span
                className="sw"
                style={{ background: "var(--black)", borderColor: "var(--gray-600)" }}
              ></span>
              <span>bg.primary</span>
              <span className="dim">#000000</span>
            </div>
            <div className="row">
              <span
                className="sw"
                style={{ background: "var(--gray-950)", borderColor: "var(--gray-600)" }}
              ></span>
              <span>bg.secondary</span>
              <span className="dim">gray.950</span>
            </div>
            <div className="row">
              <span
                className="sw"
                style={{ background: "var(--gray-900)", borderColor: "var(--gray-600)" }}
              ></span>
              <span>bg.tertiary</span>
              <span className="dim">gray.900</span>
            </div>
            <div className="row">
              <span className="sw" style={{ background: "var(--white)" }}></span>
              <span>text.primary</span>
              <span className="dim">#FFFFFF</span>
            </div>
            <div className="row">
              <span className="sw" style={{ background: "var(--gray-400)" }}></span>
              <span>text.secondary</span>
              <span className="dim">gray.400</span>
            </div>
            <div className="row">
              <span className="sw" style={{ background: "var(--ocean-400)" }}></span>
              <span>text.link</span>
              <span className="dim">ocean.400</span>
            </div>
          </div>
        </div>
      </div>

      {/* SEMANTIC TABLE */}
      <div className="lane" style={{ paddingTop: "32px" }}>
        <div className="label-row strong">
          <span className="label">Semantic mappings · light mode</span>
        </div>
        <div className="semantic-grid">
          <div className="semantic-row head">
            <span></span>
            <span>Token</span>
            <span>References</span>
            <span>Usage</span>
          </div>

          <div className="semantic-row">
            <span className="sw" style={{ background: "var(--white)" }}></span>
            <span>bg.primary</span>
            <span className="ref">white</span>
            <span className="use">Page surface (harsh)</span>
          </div>
          <div className="semantic-row">
            <span className="sw" style={{ background: "var(--gray-50)" }}></span>
            <span>bg.secondary</span>
            <span className="ref">gray.50</span>
            <span className="use">Card / panel background</span>
          </div>
          <div className="semantic-row">
            <span className="sw" style={{ background: "var(--gray-100)" }}></span>
            <span>bg.tertiary</span>
            <span className="ref">gray.100</span>
            <span className="use">Hover, subtle fills, page surround</span>
          </div>
          <div className="semantic-row">
            <span className="sw" style={{ background: "var(--black)" }}></span>
            <span>bg.inverse</span>
            <span className="ref">black</span>
            <span className="use">Inverted surfaces, modals, terminals</span>
          </div>
          <div className="semantic-row">
            <span className="sw" style={{ background: "var(--emerald-500)" }}></span>
            <span>bg.accent</span>
            <span className="ref">emerald.500</span>
            <span className="use">Success states, confirmations</span>
          </div>
          <div className="semantic-row">
            <span className="sw" style={{ background: "var(--goldenrod-50)" }}></span>
            <span>bg.warning</span>
            <span className="ref">goldenrod.50</span>
            <span className="use">Warning backgrounds, this note</span>
          </div>
          <div className="semantic-row">
            <span className="sw" style={{ background: "var(--ocean-50)" }}></span>
            <span>bg.info</span>
            <span className="ref">ocean.50</span>
            <span className="use">Informational callouts</span>
          </div>
          <div className="semantic-row">
            <span className="sw" style={{ background: "var(--red-50)" }}></span>
            <span>bg.error</span>
            <span className="ref">red.50</span>
            <span className="use">Error containers</span>
          </div>

          <div className="semantic-row">
            <span className="sw" style={{ background: "var(--black)" }}></span>
            <span>text.primary</span>
            <span className="ref">black</span>
            <span className="use">Body, headings, primary ink</span>
          </div>
          <div className="semantic-row">
            <span className="sw" style={{ background: "var(--gray-600)" }}></span>
            <span>text.secondary</span>
            <span className="ref">gray.600</span>
            <span className="use">Labels, metadata, captions</span>
          </div>
          <div className="semantic-row">
            <span className="sw" style={{ background: "var(--gray-400)" }}></span>
            <span>text.muted</span>
            <span className="ref">gray.400</span>
            <span className="use">Disabled, placeholder, hint</span>
          </div>
          <div className="semantic-row">
            <span className="sw" style={{ background: "var(--ocean-600)" }}></span>
            <span>text.link</span>
            <span className="ref">ocean.600</span>
            <span className="use">Hyperlinks, link-styled actions</span>
          </div>
          <div className="semantic-row">
            <span className="sw" style={{ background: "var(--emerald-600)" }}></span>
            <span>text.accent</span>
            <span className="ref">emerald.600</span>
            <span className="use">Success text on light bg</span>
          </div>
          <div className="semantic-row">
            <span className="sw" style={{ background: "var(--goldenrod-700)" }}></span>
            <span>text.warning</span>
            <span className="ref">goldenrod.700</span>
            <span className="use">Warning text on light bg</span>
          </div>
          <div className="semantic-row">
            <span className="sw" style={{ background: "var(--red-600)" }}></span>
            <span>text.error</span>
            <span className="ref">red.600</span>
            <span className="use">Error text on light bg</span>
          </div>

          <div className="semantic-row">
            <span className="sw" style={{ background: "var(--black)" }}></span>
            <span>border.default</span>
            <span className="ref">black</span>
            <span className="use">Standard borders (harsh)</span>
          </div>
          <div className="semantic-row">
            <span className="sw" style={{ background: "var(--gray-200)" }}></span>
            <span>border.muted</span>
            <span className="ref">gray.200</span>
            <span className="use">Subtle dividers, row separators</span>
          </div>
        </div>
      </div>
    </section>
  );
}
