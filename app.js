/* Builds the 21-page book from CATALOGUE and wires up PageFlip. */

(function () {
  const bookEl = document.getElementById("book");

  function el(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstChild;
  }

  function swatchChip(hex) {
    return `<span class="swatch-chip" style="--chip:${hex}" aria-hidden="true"></span>`;
  }

  // ---- Page 1: Cover ----------------------------------------------------
  function coverPage() {
    return el(`
      <div class="page page--cover" data-density="hard">
        <div class="cover">
          <div class="cover__frame">
            <span class="cover__eyebrow">Sample Book — Vol. 01</span>
            <h1 class="cover__title">Atelier<br><em>Wallcoverings</em></h1>
            <span class="cover__rule"></span>
            <p class="cover__sub">Eighteen designs, printed and photographed<br>true to scale</p>
          </div>
          <div class="cover__punch" style="--chip:#B08D57"></div>
        </div>
      </div>
    `);
  }

  // ---- Page 2: Intro / How to read this book -----------------------------
  function introPage() {
    return el(`
      <div class="page page--intro">
        <div class="intro">
          <span class="intro__eyebrow">Before you begin</span>
          <h2 class="intro__title">How to read this sample book</h2>
          <p class="intro__text">Every design overleaf is shown at true print scale alongside a
          styled room setting. Roll width, pattern repeat and finish are listed
          under each swatch — everything you need to order the right quantity
          the first time.</p>
          <div class="intro__grid">
            <div><span class="intro__label">Roll width</span><p>Standard European or wide-format, noted per design</p></div>
            <div><span class="intro__label">Repeat</span><p>Straight, half-drop, or free match</p></div>
            <div><span class="intro__label">Finish</span><p>Non-woven, vinyl or metallic ink, noted per design</p></div>
          </div>
          <p class="intro__footnote">For physical samples, quote the code printed beside each design.</p>
        </div>
      </div>
    `);
  }

  // ---- Pattern pages -------------------------------------------------------
  function patternPage(item, index) {
    return el(`
      <div class="page page--pattern">
        <div class="pattern">
          <div class="pattern__punch" style="--chip:${item.swatch}">${swatchChip(item.swatch)}</div>
          <div class="pattern__media">
            <img src="${item.image}" alt="${item.name} wallpaper pattern, close view" loading="lazy">
          </div>
          <div class="pattern__info">
            <span class="pattern__family">${item.family}</span>
            <h3 class="pattern__name">${item.name}</h3>
            <span class="pattern__code">${item.code}</span>
            <p class="pattern__desc">${item.description}</p>
            <dl class="pattern__specs">
              <div><dt>Width</dt><dd>${item.width}</dd></div>
              <div><dt>Repeat</dt><dd>${item.repeat}</dd></div>
              <div><dt>Finish</dt><dd>${item.finish}</dd></div>
            </dl>
          </div>
          ${item.roomImage ? `
          <div class="pattern__room">
            <img src="${item.roomImage}" alt="${item.name} wallpaper styled in a room" loading="lazy">
            <span class="pattern__room-label">In situ</span>
          </div>` : ``}
          <span class="pattern__pageno">${String(index).padStart(2, "0")} / 18</span>
        </div>
      </div>
    `);
  }

  // ---- Back cover ----------------------------------------------------------
  function backCoverPage() {
    return el(`
      <div class="page page--cover page--back" data-density="hard">
        <div class="cover cover--back">
          <div class="cover__frame">
            <h2 class="cover__title cover__title--small">Order samples<br>& enquiries</h2>
            <span class="cover__rule"></span>
            <p class="cover__sub">Quote the code printed beside each design<br>
            <strong>hello@atelierwallcoverings.example</strong><br>
            +91&nbsp;00000&nbsp;00000</p>
          </div>
        </div>
      </div>
    `);
  }

  // ---- Assemble --------------------------------------------------------
  bookEl.appendChild(coverPage());
  bookEl.appendChild(introPage());
  CATALOGUE.forEach((item, i) => bookEl.appendChild(patternPage(item, i + 1)));
  bookEl.appendChild(backCoverPage());

  // ---- Init PageFlip -----------------------------------------------------
  const isMobile = window.matchMedia("(max-width: 720px)").matches;

  const pageFlip = new St.PageFlip(bookEl, {
    width: 480,
    height: 660,
    size: "stretch",
    minWidth: 280,
    maxWidth: 640,
    minHeight: 400,
    maxHeight: 900,
    maxShadowOpacity: 0.4,
    showCover: true,
    usePortrait: isMobile,
    mobileScrollSupport: true,
    flippingTime: 700,
    useMouseEvents: true
  });

  pageFlip.loadFromHTML(document.querySelectorAll(".page"));

  const indicator = document.getElementById("pageIndicator");
  const totalPages = pageFlip.getPageCount();

  function updateIndicator() {
    indicator.textContent = `${pageFlip.getCurrentPageIndex() + 1} / ${totalPages}`;
  }
  updateIndicator();
  pageFlip.on("flip", updateIndicator);

  document.getElementById("prevBtn").addEventListener("click", () => pageFlip.flipPrev());
  document.getElementById("nextBtn").addEventListener("click", () => pageFlip.flipNext());

  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") pageFlip.flipNext();
    if (e.key === "ArrowLeft") pageFlip.flipPrev();
  });

  // ---- Loading screen fade-out --------------------------------------------
  window.addEventListener("load", () => {
    const loader = document.getElementById("loadingScreen");
    setTimeout(() => {
      loader.classList.add("loading-screen--hidden");
      setTimeout(() => loader.remove(), 500);
    }, 350);
  });
})();
