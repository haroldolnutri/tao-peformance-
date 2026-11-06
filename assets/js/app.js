/* ==========================================================================
   Componentes (não precisa editar daqui para baixo)
   ========================================================================== */
   /* logomarca completa, fundo transparente */
   /* símbolo do corredor, fundo transparente */

const ICONS = {
  nutri: '<path d="M12 21c-4.2 0-7-3-7-7 0-4.5 3.5-7.5 7-8.5 3.5 1 7 4 7 8.5 0 4-2.8 7-7 7z"/><path d="M12 6c0-2 1-3.5 3-4"/>',
  treino: '<path d="M6 7v10M3 9.5v5M18 7v10M21 9.5v5M6 12h12"/>',
  link: '<circle cx="9" cy="12" r="5.5"/><circle cx="15" cy="12" r="5.5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><circle cx="17" cy="9" r="2.5"/><path d="M2.5 20c.8-3.5 3.3-5.5 6.5-5.5s5.7 2 6.5 5.5M16 14.5c2.6 0 4.6 1.7 5.5 5"/>',
  flask: '<path d="M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2.2h12.4a1.5 1.5 0 0 0 1.3-2.2L14 9V3M7.5 14h9"/>',
  chart: '<path d="M3 3v18h18M7 15l4-4 3 3 5-6"/>',
  calendar: '<path d="M4 6h16v14H4zM4 10h16M8 3v4M16 3v4"/>',
  heart: '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  chevron: '<path d="M6 9l6 6 6-6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  wa: '<path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5z"/><path d="M9 9c0 3 3 6 6 6l1.2-1.5-2-1-1 .8c-1-.5-1.8-1.3-2.3-2.3l.8-1-1-2z"/>'
};
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const ic = (n, cls = "") => `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]}</svg>`;
const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const wa = (msg) => `https://wa.me/${CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;
const C = CONFIG;

const brand = (extra = "") => `<a class="brand" href="#topo" aria-label="${esc(C.marca.nome)}, voltar ao topo"${extra}><img src="${MARK_SRC}" width="45" height="32" alt=""><span>${esc(C.marca.palavras[0])} <b>${esc(C.marca.palavras[1])}</b></span></a>`;

const lanes = `
<svg viewBox="0 0 560 360" role="img" aria-label="Duas linhas, nutrição e treino, que se encontram em um único plano.">
  <g fill="none" stroke-linecap="round" stroke-width="3">
    <path stroke="#911907" pathLength="1" stroke-dasharray="1" d="M24 70C200 70 260 80 320 135S440 200 512 200" style="animation:draw 1.6s .2s ease-out both"/>
    <path stroke="#0A0B0D" pathLength="1" stroke-dasharray="1" d="M24 300C200 300 260 290 320 235S440 200 512 200" style="animation:draw 1.6s .2s ease-out both"/>
  </g>
  <circle cx="24" cy="70" r="6" fill="#911907"/>
  <circle cx="24" cy="300" r="6" fill="#0A0B0D"/>
  <g style="transform-origin:512px 200px;animation:pop .5s 1.5s ease-out both">
    <circle cx="512" cy="200" r="22" fill="none" stroke="#0A0B0D" stroke-width="3"/>
    <circle cx="512" cy="200" r="8" fill="#911907"/>
  </g>
  <text x="24" y="44" fill="#911907">NUTRIÇÃO</text>
  <text x="24" y="334" fill="#0A0B0D">TREINO</text>
  <text x="512" y="252" text-anchor="end" fill="#0A0B0D">UM PLANO</text>
</svg>`;

function render() {
  const nav = [["sobre", "Sobre"], ["como-funciona", "Como funciona"], ["planos", "Planos"], ["diferenciais", "Diferenciais"], ["faq", "FAQ"]];

  const header = `
  <header class="hdr" id="topo"><div class="wrap">
    ${brand()}
    <button class="menu-btn" id="menuBtn" type="button" aria-expanded="false" aria-controls="nav" aria-label="Abrir menu">${ic("menu")}</button>
    <nav class="nav" id="nav" aria-label="Principal">
      ${nav.map(([id, t]) => `<a href="#${id}" data-spy="${id}">${t}</a>`).join("")}
      <a class="btn btn-primary btn-sm" data-wa href="${wa(C.whatsapp.mensagemGeral)}" target="_blank" rel="noopener">Falar no WhatsApp</a>
    </nav>
  </div></header>`;

  const hero = `
  <section class="hero" aria-labelledby="h-hero"><div class="wrap">
    <div class="hero-copy">
      <p class="eyebrow">${esc(C.hero.eyebrow)}</p>
      <h1 id="h-hero">${esc(C.hero.titulo[0])}<em>${esc(C.hero.titulo[1])}</em></h1>
      <p class="lead">${esc(C.hero.subtitulo)}</p>
      <div class="hero-cta">
        <a class="btn btn-primary" href="#planos">${esc(C.hero.botaoPrincipal)} ${ic("arrow", "arrow")}</a>
        <a class="btn btn-ghost" href="#como-funciona">${esc(C.hero.botaoSecundario)}</a>
      </div>
      <div class="chips">${C.hero.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
    </div>
    <div class="stage"><img src="${LOGO_SRC}" width="960" height="672" alt="${esc(C.marca.nome)}. ${esc(C.marca.tagline)}"></div>
  </div></section>`;

  const sobre = `
  <section class="band soft" id="sobre" aria-labelledby="h-sobre"><div class="wrap">
    <div class="about">
      <div class="sec-head rv"><p class="eyebrow">Sobre a consultoria</p><h2 id="h-sobre">${esc(C.sobre.titulo)}</h2><p>${esc(C.sobre.texto)}</p></div>
      <div class="viz rv">${lanes}</div>
    </div>
    <div class="pillars">
      ${C.sobre.pilares.map((p) => `
      <article class="card rv"><div class="icon-ring ${p.cor}">${ic(p.icone)}</div><h3>${esc(p.titulo)}</h3><p>${esc(p.texto)}</p></article>`).join("")}
    </div>
  </div></section>`;

  const etapas = `
  <section class="band" id="como-funciona" aria-labelledby="h-como"><div class="wrap">
    <div class="sec-head rv"><p class="eyebrow">Passo a passo</p><h2 id="h-como">${esc(C.etapas.titulo)}</h2><p>${esc(C.etapas.texto)}</p></div>
    <ol class="steps rv" id="steps">
      <li class="rail" aria-hidden="true"><i></i></li>
      ${C.etapas.lista.map((e, i) => `
      <li><button class="step" type="button" data-i="${i}"><span class="marker">${i + 1}</span><h3>${esc(e.titulo)}</h3><p>${esc(e.texto)}</p></button></li>`).join("")}
    </ol>
  </div></section>`;

  const dots = (a) => a === "hibrida" ? '<i class="dot n"></i><i class="dot t"></i>' : a === "treino" ? '<i class="dot t"></i>' : '<i class="dot n"></i>';
  const areaTxt = { nutri: "Nutrição", treino: "Treinamento", hibrida: "Nutrição + Treino" };
  const planos = `
  <section class="band soft" id="planos" aria-labelledby="h-planos"><div class="wrap">
    <div class="sec-head rv"><p class="eyebrow">Planos e valores</p><h2 id="h-planos">${esc(C.planos.titulo)}</h2><p>${esc(C.planos.texto)}</p></div>
    <div class="plans">
      ${C.planos.lista.map((p) => `
      <article class="plan rv ${p.destaque ? "feat on-ink" : ""}">
        <div class="plan-top"><span class="dots">${dots(p.area)} ${areaTxt[p.area] || ""}</span>${p.destaque && p.selo ? `<span class="badge">${esc(p.selo)}</span>` : ""}</div>
        <h3>${esc(p.nome)}</h3>
        <div class="price">${typeof p.valor === "number" ? `<strong>${brl.format(p.valor)}</strong>${p.periodicidade ? `<span>${esc(p.periodicidade)}</span>` : ""}` : `<span class="alt">${esc(C.planos.valorTexto)}</span>`}</div>
        <ul class="perks">${p.beneficios.map((b) => `<li>${ic("check")}<span>${esc(b)}</span></li>`).join("")}</ul>
        <a class="btn ${p.destaque ? "btn-primary" : "btn-ghost"}" data-wa href="${wa(C.whatsapp.mensagemPlano.replace("{plano}", p.nome))}" target="_blank" rel="noopener">${esc(C.planos.botao)} ${ic("arrow", "arrow")}</a>
      </article>`).join("")}
    </div>
  </div></section>`;

  const dif = `
  <section class="band" id="diferenciais" aria-labelledby="h-dif"><div class="wrap">
    <div class="sec-head rv"><p class="eyebrow">Diferenciais</p><h2 id="h-dif">${esc(C.diferenciais.titulo)}</h2></div>
    <div class="bento">
      ${C.diferenciais.lista.map((d) => `
      <article class="b rv"><div class="icon-ring">${ic(d.icone)}</div><h3>${esc(d.titulo)}</h3><p>${esc(d.texto)}</p></article>`).join("")}
    </div>
  </div></section>`;

  const faq = `
  <section class="band soft" id="faq" aria-labelledby="h-faq"><div class="wrap">
    <div class="sec-head rv"><p class="eyebrow">Dúvidas</p><h2 id="h-faq">${esc(C.faq.titulo)}</h2></div>
    <div class="faq rv">
      ${C.faq.lista.map((f, i) => `
      <div class="qa">
        <h3><button class="q" type="button" id="q${i}" aria-expanded="false" aria-controls="a${i}"><span>${esc(f.p)}</span>${ic("chevron")}</button></h3>
        <div class="a" id="a${i}" role="region" aria-labelledby="q${i}"><div><p>${esc(f.r)}</p></div></div>
      </div>`).join("")}
    </div>
  </div></section>`;

  const final = `
  <section class="band final on-ink" aria-labelledby="h-final"><div class="wrap">
    <span class="rule rv" aria-hidden="true"></span>
    <h2 id="h-final" class="rv">${esc(C.final.titulo)}</h2>
    <p class="rv">${esc(C.final.subtitulo)}</p>
    <div class="row rv">
      <a class="btn btn-primary" href="#planos">${esc(C.final.botao)} ${ic("arrow", "arrow")}</a>
      <a class="btn btn-ghost" data-wa href="${wa(C.whatsapp.mensagemGeral)}" target="_blank" rel="noopener">Falar no WhatsApp</a>
    </div>
  </div></section>`;

  const r = C.rodape;
  const footer = `
  <footer class="ftr"><div class="wrap">
    <div class="grid">
      <div><a href="#topo" aria-label="${esc(C.marca.nome)}, voltar ao topo" style="background:none"><img src="${LOGO_SRC}" width="960" height="672" alt="${esc(C.marca.nome)}"></a><p class="muted" style="margin-top:14px;max-width:300px">${esc(C.marca.descricao)}</p></div>
      <div><h4>Contato</h4><ul>
        <li><span class="copy"><span>WhatsApp: ${esc(C.whatsapp.exibicao)}</span><button type="button" data-copy="${esc(C.whatsapp.exibicao)}" aria-label="Copiar número de WhatsApp">Copiar</button></span></li>
        <li><span class="copy"><span>${esc(r.email)}</span><button type="button" data-copy="${esc(r.email)}" aria-label="Copiar e-mail">Copiar</button></span></li>
      </ul></div>
      <div><h4>Redes sociais</h4><ul>${r.redes.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.nome)}</a></li>`).join("")}</ul></div>
      <div><h4>Profissionais</h4><ul>${r.profissionais.map((p) => `<li>${esc(p.nome)}<br><span class="muted">${esc(p.registro)}</span></li>`).join("")}</ul></div>
    </div>
    <div class="legal">
      <span>© ${new Date().getFullYear()} ${esc(C.marca.nome)}. ${esc(r.aviso)}</span>
      <span>${r.links.map((l) => `<a href="${esc(l.url)}">${esc(l.nome)}</a>`).join(" · ")}</span>
    </div>
  </div></footer>
  <a class="wa" data-wa href="${wa(C.whatsapp.mensagemGeral)}" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">${ic("wa")}<span>WhatsApp</span></a>`;

  $("#app").innerHTML = header + `<main id="conteudo">` + hero + sobre + etapas + planos + dif + faq + final + `</main>` + footer;
}

let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
}

function behavior() {
  /* Menu móvel */
  const btn = $("#menuBtn"), nav = $("#nav");
  const setMenu = (open) => {
    nav.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    btn.innerHTML = ic(open ? "close" : "menu");
  };
  btn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && nav.classList.contains("open")) { setMenu(false); btn.focus(); } });
  document.addEventListener("click", (e) => {
    /* composedPath guarda o alvo original, mesmo depois de o ícone do botão ser trocado */
    const inside = e.composedPath().some((el) => el === nav || el === btn);
    if (nav.classList.contains("open") && !inside) setMenu(false);
  });

  /* Cabeçalho ganha borda ao rolar */
  const hdr = $(".hdr");
  const onScroll = () => hdr.classList.toggle("scrolled", scrollY > 8);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Item do menu da seção atual */
  if ("IntersectionObserver" in window) {
    const links = new Map($$("[data-spy]").map((a) => [a.dataset.spy, a]));
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((a) => a.removeAttribute("aria-current"));
        const a = links.get(en.target.id);
        if (a) a.setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });
  }

  /* Linha do tempo */
  const steps = $$(".step"), list = $("#steps"), n = steps.length;
  const setStep = (i) => {
    steps.forEach((s, k) => {
      s.classList.toggle("active", k === i);
      s.classList.toggle("done", k < i);
      if (k === i) s.setAttribute("aria-current", "step"); else s.removeAttribute("aria-current");
    });
    list.style.setProperty("--p", (i / (n - 1)).toFixed(3));
  };
  steps.forEach((s, i) => {
    s.addEventListener("click", () => setStep(i));
    s.addEventListener("mouseenter", () => setStep(i));
    s.addEventListener("focus", () => setStep(i));
  });
  setStep(0);

  /* FAQ */
  $$(".q").forEach((q) => q.addEventListener("click", () => {
    const item = q.closest(".qa");
    const open = !item.classList.contains("open");
    item.classList.toggle("open", open);
    q.setAttribute("aria-expanded", String(open));
  }));

  /* Feedback: WhatsApp e copiar */
  $$("[data-wa]").forEach((a) => a.addEventListener("click", () => toast("Abrindo o WhatsApp em uma nova aba…")));
  $$("[data-copy]").forEach((b) => b.addEventListener("click", async () => {
    const text = b.dataset.copy;
    try { await navigator.clipboard.writeText(text); toast("Copiado: " + text); }
    catch (err) {
      const span = b.previousElementSibling, sel = getSelection(), range = document.createRange();
      range.selectNodeContents(span); sel.removeAllRanges(); sel.addRange(range);
      toast("Selecionado. Use Ctrl+C ou Copiar do seu aparelho.");
    }
  }));

  /* Revelar ao rolar: o estado em repouso é visível; só o que está abaixo da dobra anima */
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce && "IntersectionObserver" in window) {
    const els = $$(".rv").filter((el) => el.getBoundingClientRect().top > innerHeight * 0.92);
    els.forEach((el) => el.classList.add("pre"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.remove("pre"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    setTimeout(() => els.forEach((el) => el.classList.remove("pre")), 4000);
  }
}

render();
behavior();
