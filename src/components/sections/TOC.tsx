export function TOC() {
  return (
    <nav aria-label="Contents" data-screen-label="00 Contents">
      <div className="lane" style={{ paddingTop: "32px", paddingBottom: "8px" }}>
        <div className="label-row strong">
          <span className="label">Contents</span>
        </div>
      </div>
      <ol className="toc">
        <li>
          <span className="num">§00</span>
          <a href="#manifesto">
            Manifesto<span className="leader"></span>
            <span className="pg">004</span>
          </a>
        </li>
        <li>
          <span className="num">§01</span>
          <a href="#tenets">
            The eight tenets<span className="leader"></span>
            <span className="pg">006</span>
          </a>
        </li>
        <li>
          <span className="num">§02</span>
          <a href="#influences">
            Influences — 50 / 30 / 20<span className="leader"></span>
            <span className="pg">010</span>
          </a>
        </li>
        <li>
          <span className="num">§03</span>
          <a href="#typography">
            Typography<span className="leader"></span>
            <span className="pg">014</span>
          </a>
        </li>
        <li>
          <span className="num">§04</span>
          <a href="#color">
            Color<span className="leader"></span>
            <span className="pg">022</span>
          </a>
        </li>
        <li>
          <span className="num">§05</span>
          <a href="#spacing">
            Spacing &amp; rhythm<span className="leader"></span>
            <span className="pg">030</span>
          </a>
        </li>
        <li>
          <span className="num">§06</span>
          <a href="#container">
            The document container<span className="leader"></span>
            <span className="pg">034</span>
          </a>
        </li>
        <li>
          <span className="num">§07</span>
          <a href="#components">
            Components<span className="leader"></span>
            <span className="pg">036</span>
          </a>
        </li>
        <li>
          <span className="num">§08</span>
          <a href="#density">
            Density vs. sparsity<span className="leader"></span>
            <span className="pg">042</span>
          </a>
        </li>
        <li>
          <span className="num">§09</span>
          <a href="#inuse">
            In use — a working surface<span className="leader"></span>
            <span className="pg">046</span>
          </a>
        </li>
      </ol>
    </nav>
  );
}
