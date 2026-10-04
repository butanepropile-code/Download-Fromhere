/* =====================================================================
   CONFIG  -  EDIT ONLY THIS SECTION (and the resources list below it)
   ===================================================================== */
const CONFIG = {
  siteName: "My Notes",
  tagline: "Free notes, PDFs and apps. Choose a resource, finish 6 short steps and download.",
  logo: "images/logo.png",
  contactEmail: "you@example.com",

  /* GOOGLE SHEET: all resources come from this sheet. Share it as "Anyone with the link: Viewer".
     Columns (row 1): id, title, category, description, image, downloadurl */
  sheetId: "1RzZkw3LiC0ICwT-Gmp47potgY0OvWw2-iC9XsDeSNNQ",
  sheetName: "Sheet1",
  pageScreens: 25,      /* step page is about this many screens long (lower it for a shorter page) */
  joinText: "CLICK TO JOIN",        /* final button text when the link is a Telegram link */
  downloadText: "Download / Open",  /* final button text for any other link */
  refreshSeconds: 30,   /* site re-reads the sheet this often, so new rows appear by themselves */

  /* TELEGRAM channels (usernames without @) */
  telegram: ["ultimateapkmods", "apstudymods", "editvaultresources", "physicswallahapk"],
  /* Fun mascot that walks in from far away and invites people to your channels */
  mascot: {
    enabled: true, emoji: "🧸", firstAfterSec: 6, stayForSec: 12, everySec: 25,
    lines: [
      "Hello dost! 🧸 Free APK aur notes chahiye? {channel} join karo!",
      "Psst... main bahut door se aaya hu sirf ye batane: {channel} pe free resources milte hain!",
      "Telegram pe milta hai sab kuch! {channel} abhi join karo 👇",
      "Thoda sa support do, {channel} join kar lo 💙"
    ]
  },

  /* Seconds to wait on each step. One number per step (6 steps). */
  stepDurations: [30, 30, 30, 30, 30, 30],
  waitText: "Please wait {s} seconds before continuing.",
  stepText: [
    "Your resource is being prepared. Read the notes on this page while you wait.",
    "Step 2 is almost the same. Your progress is saved if you refresh.",
    "Halfway there. Keep this tab open.",
    "Two more steps after this one.",
    "Almost done. One more step after this.",
    "Last step. Your download link appears next."
  ],

  /* Long text shown under the countdown on every step (ads appear between sections). */
  waitContent: [
    { h: "How to download safely", p: "Always download files only from the final button on this page. Check the file name and size before you open it, and keep your phone or computer protected with an updated security app." },
    { h: "Check your storage", p: "Large PDFs and app files need free space. Before you download, make sure you have at least a few hundred MB free so the file is not cut halfway." },
    { h: "Opening PDF notes", p: "Most phones open PDFs in the Files or Drive app. For best reading, use a PDF reader that lets you zoom, search and highlight important lines for revision." },
    { h: "Installing app files", p: "If you download an Android app file, open it from your Downloads folder and allow installation from this source only when you trust it. Turn that permission off again afterwards." },
    { h: "Keep your files organized", p: "Create a folder for each class or subject and rename files clearly. This saves time before exams and when you want to share notes with friends." },
    { h: "Study smart, not just hard", p: "Short, focused sessions with small breaks work better than studying for hours without rest. Revise the same notes again after one day, one week and one month." },
    { h: "Make a study timetable", p: "Write a simple daily timetable with fixed slots for each subject. A clear plan removes confusion and saves the time you waste deciding what to study next." },
    { h: "Sleep is part of studying", p: "Your brain stores what you learned while you sleep. Try to sleep 7 to 8 hours, especially before an exam day." },
    { h: "Use active recall", p: "After reading a topic, close the book and try to write it from memory. Testing yourself is stronger than reading again and again." },
    { h: "Drink enough water", p: "Even mild thirst can reduce focus. Keep a bottle near your desk and take small sips through your study session." },
    { h: "Keep a doubt notebook", p: "Write every doubt in one notebook as soon as it comes. Clear them in one sitting with a teacher or friend so nothing piles up." },
    { h: "Solve previous papers", p: "Practising old papers shows the real exam pattern. Time yourself so speed and accuracy improve together." },
    { h: "Avoid distractions", p: "Put your phone on silent while studying and check it only during breaks. Even a short notification can break your concentration for minutes." },
    { h: "Study with friends", p: "A small group helps you explain topics aloud, and explaining is one of the best ways to learn. Keep the group focused and short." },
    { h: "Take care of your eyes", p: "Follow the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds. Read in good light and hold the screen at a comfortable distance." },
    { h: "Use your phone wisely", p: "Your phone can hold notes, videos and flashcards. Turn it into a study tool by organizing apps and removing the ones that waste time." },
    { h: "Revise formulas daily", p: "Keep a one-page formula sheet and read it every morning. Small daily revision beats a last-night rush." },
    { h: "Eat light and healthy", p: "Fruits, nuts and home food keep energy steady. Heavy and oily meals make you sleepy during study hours." },
    { h: "Make short notes", p: "After each chapter, write a half-page summary in your own words. These notes are perfect for quick revision before exams." },
    { h: "Stay positive", p: "Everyone learns at a different speed. Celebrate small progress and do not compare your day one with someone else's day hundred." },
    { h: "Share what you learn", p: "Teaching a younger friend or sibling makes your own concepts stronger. Share useful resources and help others grow too." },
    { h: "Almost there", p: "Thank you for waiting. The ads on this site keep these resources free. Your download link appears right after the last countdown." }
  ],

  /* ADS: paste the key / size from your ad network for each place.
     host = domain of the invoke.js script. minWidth hides the ad on small screens. */
  ads: {
    top:          { host: "www.highperformanceformat.com", key: "cfd65b36b045c07cef9a05df77feefad", w: 320, h: 50 },
    belowHeading: { host: "www.highrevenueformat.com", key: "7999654a3a35eff45688cff161a625e9", w: 300, h: 250 },
    between:      { host: "www.highrevenueformat.com", key: "1c94fa584a396abc50c7723d0e098ed4", w: 468, h: 60, minWidth: 500 },
    aboveTimer:   { host: "www.highrevenueformat.com", key: "0c17a1d10fe847fc28802f322a670fb9", w: 320, h: 50 },
    belowTimer:   { host: "www.highrevenueformat.com", key: "faba2f7541fd81c5380c3ed9bc08d21a", w: 160, h: 300 },
    bottom:       { host: "www.highrevenueformat.com", key: "0796fee33dfc2504b467d46de6de2a99", w: 728, h: 90, minWidth: 760 },
    left:         { host: "www.highrevenueformat.com", key: "fa55270959fc04ef3b4349a4dc9e68fc", w: 160, h: 600, minWidth: 1180 },
    right:        { host: "www.highrevenueformat.com", key: "faba2f7541fd81c5380c3ed9bc08d21a", w: 160, h: 300, minWidth: 1180 },
    feed:         { host: "www.highrevenueformat.com", key: "7999654a3a35eff45688cff161a625e9", w: 300, h: 250 },
    mid:          { host: "www.highrevenueformat.com", key: "1c94fa584a396abc50c7723d0e098ed4", w: 468, h: 60, minWidth: 500 },
    wide:         { host: "www.highrevenueformat.com", key: "0796fee33dfc2504b467d46de6de2a99", w: 728, h: 90, minWidth: 760 },
    banner:       { host: "www.highrevenueformat.com", key: "0c17a1d10fe847fc28802f322a670fb9", w: 320, h: 50 },
    tall:         { host: "www.highrevenueformat.com", key: "faba2f7541fd81c5380c3ed9bc08d21a", w: 160, h: 300 }
  },

  /* Text of the extra pages. Each string is one paragraph. */
  pages: {
    about:      { title: "About", text: ["This site shares free study notes, PDFs and app files.", "Resources are added by the site owner. Replace this text with your own."] },
    contact:    { title: "Contact", text: ["Questions, broken links or removal requests? Send an email."] },
    privacy:    { title: "Privacy Policy", text: ["This site has no accounts. Your browser stores your theme and your step progress locally on your device.", "Advertising networks used on this site may use cookies or similar technology to show ads. Please read their privacy policies.", "Replace this text with your own policy before going live."] },
    disclaimer: { title: "Disclaimer", text: ["Files are shared for educational purposes. We try to keep them accurate but make no guarantees.", "External download links belong to their owners. Ads are shown by third parties."] },
    terms:      { title: "Terms", text: ["By using this site you agree to use the resources lawfully and at your own risk.", "We may change or remove resources at any time."] }
  }
};

/* RESOURCES are loaded from your Google Sheet (see CONFIG.sheetId). Nothing to edit here. */
let resources = [];

function parseCSV(t) {
  const rows = []; let r = [], c = "", q = false;
  for (let i = 0; i < t.length; i++) {
    const ch = t[i];
    if (q) { if (ch === '"') { if (t[i + 1] === '"') { c += '"'; i++; } else q = false; } else c += ch; }
    else if (ch === '"') q = true;
    else if (ch === ",") { r.push(c); c = ""; }
    else if (ch === "\n" || ch === "\r") { if (ch === "\r" && t[i + 1] === "\n") i++; r.push(c); rows.push(r); r = []; c = ""; }
    else c += ch;
  }
  if (c || r.length) { r.push(c); rows.push(r); }
  return rows;
}
const slug = s => s.toLowerCase().replace(/[^a-z0-9_-]+/g, "-").replace(/^-+|-+$/g, "");
const firstUrl = s => (String(s).match(/https?:\/\/[^\s|\]\[,;"]+/) || [""])[0];

async function loadResources() {
  const url = `https://docs.google.com/spreadsheets/d/${CONFIG.sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(CONFIG.sheetName)}&_=${Date.now()}`;
  try {
    const ctl = new AbortController(), to = setTimeout(() => ctl.abort(), 8000);
    const res = await fetch(url, { signal: ctl.signal }); clearTimeout(to);
    if (!res.ok) throw new Error("sheet");
    const [head, ...rows] = parseCSV(await res.text());
    const cols = head.map(x => x.trim().toLowerCase());
    const get = (row, k) => (row[cols.indexOf(k)] || "").trim();
    const seen = new Set(), list = []; let lg = "";
    for (const row of rows) {
      const title = get(row, "title"), dl = firstUrl(get(row, "downloadurl"));
      if (get(row, "category").toLowerCase() === "logo") { lg = firstUrl(get(row, "image")); continue; }
      if (!title || !dl) continue;
      let id = slug(get(row, "id")) || slug(title) || "item";
      while (seen.has(id)) id += "-2";
      seen.add(id);
      list.push({ id, title, category: get(row, "category") || "General", description: get(row, "description"), image: firstUrl(get(row, "image")), downloadUrl: dl });
    }
    if (!list.length) throw new Error("empty");
    const changed = JSON.stringify(list) + lg !== JSON.stringify(resources) + siteLogo;
    siteLogo = lg; store.set("logo-cache", lg); applyLogo();
    resources = list; store.set("res-cache", JSON.stringify(list));
    return changed;
  } catch {
    try { const c = JSON.parse(store.get("res-cache") || "null"); if (Array.isArray(c) && c.length) resources = c; } catch { /* no cache */ }
  }
  return false;
}

/* =====================================================================
   APP CODE  -  no need to edit below this line
   ===================================================================== */
const app = document.getElementById("app");
let timer = null;

const h = (tag, attrs = {}, ...kids) => {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) if (v !== false && v != null) e.setAttribute(k, v);
  e.append(...kids.flat().filter(x => x != null));
  return e;
};
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* storage blocked */ } }
};
const dec = s => { try { return decodeURIComponent(s); } catch { return ""; } };
const isTg = u => { try { return new URL(u).hostname === "t.me"; } catch { return false; } };
const safeUrl = u => { try { const x = new URL(u, location.href); return /^https?:$/.test(x.protocol) ? x.href : "#"; } catch { return "#"; } };
let siteLogo = store.get("logo-cache") || "";

/* ---------- ads: each ad runs inside its own sandboxed iframe, only after its slot exists ---------- */
const adSlot = (name, n, cls = "") => h("div", { class: "ad " + cls, id: "ad-" + name + (n !== undefined ? "-" + n : ""), "data-slot": name }, h("small", {}, "Advertisement"), h("div", { class: "ad-box" }));
const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { io.unobserve(e.target); loadAd(e.target); } }), { rootMargin: "400px" }) : null;
function loadAd(el) {
  const a = CONFIG.ads[el.dataset.slot], box = el.querySelector(".ad-box");
  const f = h("iframe", { title: "Advertisement", width: a.w, height: a.h, sandbox: "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox" });
  f.srcdoc = `<body style="margin:0"><script>atOptions={'key':'${a.key}','format':'iframe','height':${a.h},'width':${a.w},'params':{}};<\/script><script src="https://${a.host}/${a.key}/invoke.js"><\/script></body>`;
  box.replaceChildren(f);
}
/* Ads load only when they come near the screen (keeps the site fast). */
function mountAds(root) {
  root.querySelectorAll(".ad:not([data-on])").forEach(el => {
    el.dataset.on = "1";
    const a = CONFIG.ads[el.dataset.slot];
    if (!a || !a.key || innerWidth < (a.minWidth || 0)) { el.hidden = true; return; }
    el.querySelector(".ad-box").style.minHeight = a.h + "px";
    io ? io.observe(el) : loadAd(el);
  });
}
const withAds = (list, every) => list.flatMap((r, i) => (i + 1) % every === 0 && i < list.length - 1 ? [card(r), adSlot("feed", i, "wide")] : [card(r)]);
const tgUsers = () => CONFIG.telegram.filter(u => /^[A-Za-z0-9_]{4,32}$/.test(u));
const tgCard = () => h("section", { class: "tg" }, h("h3", {}, "📢 Join our Telegram channels"), h("p", {}, "Free APK mods, notes and edit resources. Tap a channel to join."),
  h("div", { class: "tgs" }, tgUsers().map(u => h("a", { class: "tgbtn", href: "https://t.me/" + u, target: "_blank", rel: "noopener noreferrer", "aria-label": "JOIN NOW @" + u }, h("span", {}, "✈ @" + u), h("b", {}, "JOIN NOW")))));
const AD_CYCLE = ["feed", "mid", "banner", "feed", "wide", "tall", "feed"];
const longContent = n => {
  const list = CONFIG.waitContent, out = [], count = Math.max(1, (CONFIG.pageScreens || 25) - 3);
  for (let i = 0; i < count; i++) {
    const t = list[i % list.length];
    out.push(h("section", { class: "sec" }, h("h2", {}, t.h), h("p", {}, t.p),
      adSlot(AD_CYCLE[(2 * i) % AD_CYCLE.length], n + "-" + i + "a", "wide"),
      i % 3 === 2 ? tgCard() : null,
      adSlot(AD_CYCLE[(2 * i + 1) % AD_CYCLE.length], n + "-" + i + "b", "wide")));
  }
  return out;
};

function startMascot() {
  const M = CONFIG.mascot, tg = tgUsers();
  if (!M.enabled || !tg.length) return;
  let i = 0, off = false;
  const text = h("span"), link = h("a", { class: "tgbtn", target: "_blank", rel: "noopener noreferrer" });
  const close = h("button", { class: "x", type: "button", "aria-label": "Close" }, "✕");
  const el = h("aside", { class: "mascot", "aria-label": "Telegram invitation" }, h("div", { class: "bubble" }, close, h("p", {}, text), link), h("div", { class: "doll", "aria-hidden": "true" }, M.emoji));
  close.onclick = () => { off = true; el.remove(); };
  document.body.append(el);
  const show = () => {
    if (off) return;
    const u = tg[i % tg.length], line = M.lines[i % M.lines.length]; i++;
    text.textContent = line.replace("{channel}", "@" + u);
    link.href = "https://t.me/" + u; link.textContent = "✈ JOIN NOW";
    el.classList.add("in");
    setTimeout(() => { el.classList.remove("in"); setTimeout(show, M.everySec * 1000); }, M.stayForSec * 1000);
  };
  setTimeout(show, M.firstAfterSec * 1000);
}

/* ---------- building blocks ---------- */
const thumb = r => {
  const d = h("div", { class: "thumb" }, h("span", {}, (r.title || "?")[0]));
  if (r.image) { const i = h("img", { src: r.image, alt: "", loading: "lazy" }); i.onerror = () => i.remove(); d.append(i); }
  return d;
};
const card = r => h("article", { class: "card" }, thumb(r),
  h("div", { class: "cb" }, h("span", { class: "cat" }, r.category), h("h3", {}, r.title), h("p", {}, r.description),
    h("a", { class: "btn", href: "#/r/" + encodeURIComponent(r.id), "aria-label": "Get resource: " + r.title }, "Get resource")));
const cats = () => [...new Set(resources.map(r => r.category))].sort();

/* ---------- views ---------- */
const ui = { q: "", cat: "" };
let lastRoute = null;
function viewHome() {
  return [h("section", { class: "hero" }, h("h1", {}, CONFIG.siteName), h("p", {}, CONFIG.tagline), h("a", { class: "btn", href: "#/resources" }, "Browse resources")),
    /* ============ AD SLOT 3 (between content): CONFIG.ads.between ============ */
    adSlot("between"), tgCard(), h("h2", {}, "All apps and resources"), ...viewResources("", true)];
}
function viewResources(cat, home) {
  const q = h("input", { type: "search", id: "q", placeholder: "Search resources", "aria-label": "Search resources" });
  const s = h("select", { id: "cat", "aria-label": "Filter by category" }, h("option", { value: "" }, "All categories"), cats().map(c => h("option", { value: c }, c)));
  q.value = ui.q; s.value = cats().includes(cat) ? cat : (cats().includes(ui.cat) ? ui.cat : "");
  const g = h("div", { class: "grid" });
  const upd = () => {
    ui.q = q.value; ui.cat = s.value;
    const t = q.value.trim().toLowerCase();
    const l = resources.filter(r => (!s.value || r.category === s.value) && (r.title + " " + r.description + " " + r.category).toLowerCase().includes(t));
    g.replaceChildren(...(l.length ? withAds(l, 4) : [h("p", { class: "empty" }, "No resources match. Try another word or category.")])); mountAds(g);
  };
  q.oninput = s.onchange = upd; upd();
  return [...(home ? [] : [h("h1", {}, "Resources")]), h("div", { class: "filters" }, q, s), g];
}
function viewCategories() {
  return [h("h1", {}, "Categories"), h("div", { class: "grid" }, cats().map(c => {
    const n = resources.filter(r => r.category === c).length;
    return h("a", { class: "tile", href: "#/resources/" + encodeURIComponent(c) }, h("h3", {}, c), h("small", {}, n + (n === 1 ? " resource" : " resources")));
  }))];
}
function viewPage(key) {
  const p = CONFIG.pages[key];
  const out = [h("h1", {}, p.title), h("div", { class: "prose" }, p.text.flatMap((t, i) => [h("p", {}, t), adSlot("feed", "p" + i)]))];
  out.push(tgCard());
  if (key === "contact" && CONFIG.contactEmail) out[1].append(h("a", { class: "btn", href: "mailto:" + CONFIG.contactEmail }, "Email us"));
  return out;
}
function viewFlow(id) {
  const r = resources.find(x => x.id === id);
  if (!r) return [h("h1", {}, "Resource not found"), h("p", {}, "This link may be old."), h("a", { class: "btn", href: "#/resources" }, "Browse resources")];
  const total = CONFIG.stepDurations.length, key = "step:" + r.id;
  let n = Math.min(total + 1, Math.max(1, parseInt(store.get(key), 10) || 1));
  const box = h("div", { class: "flow" });

  const ready = () => [h("div", { class: "ready" }, h("h1", {}, "Your resource is ready"), thumb(r), h("h2", {}, r.title), h("p", {}, r.description),
    h("a", { class: "btn big", href: safeUrl(r.downloadUrl), target: "_blank", rel: "noopener noreferrer" }, isTg(r.downloadUrl) ? CONFIG.joinText : CONFIG.downloadText)), tgCard(), adSlot("banner", "r")];

  const step = () => {
    const d = CONFIG.stepDurations[n - 1] || 30;
    const num = h("b", {}, d), ring = h("div", { class: "ring", role: "timer", "aria-label": "Countdown" }, num, h("small", {}, "seconds"));
    const note = h("p", { class: "note", "aria-live": "polite" });
    const btn = h("button", { class: "btn big", type: "button", disabled: "" }, n < total ? `Continue to step ${n + 1}` : "Get my resource");
    const end = Date.now() + d * 1000;
    const tick = () => {
      const left = Math.max(0, Math.ceil((end - Date.now()) / 1000));
      num.textContent = left; ring.style.setProperty("--p", left / d * 100);
      if (left) note.textContent = CONFIG.waitText.replace("{s}", left);
      else { clearInterval(timer); ring.classList.add("done"); num.textContent = "✓"; note.replaceChildren("✅ Time complete! Scroll down to continue ", h("span", { class: "arrow" }, "⬇")); btn.disabled = false; }
    };
    btn.onclick = () => { n++; store.set(key, n); draw(); scrollTo(0, 0); };
    timer = setInterval(tick, 250); tick();
    const dots = h("div", { class: "dots", "aria-hidden": "true" }, Array.from({ length: total }, (_, k) => h("i", { class: k < n - 1 ? "d" : k === n - 1 ? "c" : "" })));
    return [h("p", { class: "stepno" }, `Step ${n} of ${total}`), h("h1", {}, r.title),
      h("div", { class: "bar", role: "progressbar", "aria-label": "Progress", "aria-valuemin": 0, "aria-valuemax": total, "aria-valuenow": n - 1 }, h("i", { style: `width:${(n - 1) / total * 100}%` })),
      dots, h("p", { class: "status" }, `✅ Completed: ${n - 1} steps · ⏳ Remaining: ${total - n + 1} steps`),
      /* ===== AD SLOT 2 (below heading): CONFIG.ads.belowHeading ===== */
      adSlot("belowHeading"),
      h("p", { class: "info" }, CONFIG.stepText[n - 1] || ""),
      /* ===== AD SLOT 3 (between content): CONFIG.ads.between ===== */
      adSlot("between"),
      /* ===== AD SLOT 4 (above countdown): CONFIG.ads.aboveTimer ===== */
      adSlot("aboveTimer"),
      h("div", { class: "timerbox" }, ring, note),
      /* ===== AD SLOT 5 (below countdown): CONFIG.ads.belowTimer ===== */
      adSlot("belowTimer"),
      tgCard(),
      ...longContent(n),
      /* Continue button is at the very bottom, with empty space around it (no ads touching it). */
      h("div", { class: "contbox" }, h("p", { class: "note" }, `You reached the end of step ${n} of ${total}.`), btn)];
  };
  const draw = () => { clearInterval(timer); box.replaceChildren(...(n > total ? ready() : step())); mountAds(box); };
  draw();
  return [box];
}

/* ---------- router ---------- */
function render(keep) {
  clearInterval(timer);
  const [route = "", arg = ""] = location.hash.replace(/^#\/?/, "").split("/");
  if (route !== lastRoute) { ui.q = ""; ui.cat = ""; lastRoute = route; }
  let title = "", view;
  if (route === "resources") { title = "Resources"; view = viewResources(dec(arg)); }
  else if (route === "categories") { title = "Categories"; view = viewCategories(); }
  else if (route === "r") { const r = resources.find(x => x.id === dec(arg)); title = r ? r.title : "Not found"; view = viewFlow(dec(arg)); }
  else if (Object.hasOwn(CONFIG.pages, route)) { title = CONFIG.pages[route].title; view = viewPage(route); }
  else view = viewHome();
  document.title = (title ? title + " | " : "") + CONFIG.siteName;
  app.replaceChildren(...view);
  mountAds(app);
  document.querySelectorAll(".top nav a").forEach(a => a.toggleAttribute("aria-current", a.getAttribute("href") === "#/" + route || (route === "" && a.getAttribute("href") === "#/")));
  if (!keep && !view[0].classList?.contains("flow")) scrollTo(0, 0);
}

/* ---------- start ---------- */
document.getElementById("siteName").textContent = CONFIG.siteName;
document.getElementById("copy").textContent = "© " + new Date().getFullYear() + " " + CONFIG.siteName;
const logo = document.getElementById("logo");
logo.src = siteLogo || CONFIG.logo; logo.onerror = () => { logo.hidden = true; };
function applyLogo() { if (siteLogo) { logo.hidden = false; logo.src = siteLogo; } }
const root = document.documentElement;
root.dataset.theme = store.get("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
document.getElementById("theme").onclick = () => { root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark"; store.set("theme", root.dataset.theme); };
addEventListener("hashchange", () => render());
mountAds(document);
app.replaceChildren(h("p", { class: "empty" }, "Loading..."));
loadResources().then(() => render());
startMascot();

/* Auto refresh: re-read the sheet regularly and when the tab becomes visible again.
   The page is redrawn only when the sheet changed, and never while a countdown is running. */
async function poll() {
  if (document.hidden) return;
  if (await loadResources() && !/^#\/r\//.test(location.hash)) render(true);
}
setInterval(poll, Math.max(10, CONFIG.refreshSeconds || 30) * 1000);
document.addEventListener("visibilitychange", poll);
