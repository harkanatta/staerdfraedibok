/* Shared helpers for writing chapter content.
   Every chapter file in chapters/ can use these. See README.md for examples. */

/* ---------- the book registry ---------- */
const Book = {
  chapters: [],
  add(ch) { this.chapters.push(ch); this.chapters.sort((a, b) => a.n - b.n); }
};

/* ---------- math formatting ---------- */

/* M('3x^2 - 2ab^{-3}')  → nicely formatted math.
   Letters become italic, - becomes a real minus sign, * becomes ·,
   ^x or ^{...} is a superscript, _x or _{...} is a subscript. */
function M(s) {
  let out = '';
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    // HTML tags like <b>…</b> and entities like &nbsp; are copied unchanged
    const tag = (c === '<' || c === '&') && s.slice(i).match(/^(<\/?(b|i|u|br|small|sup|sub|span)\b[^>]*>|&[a-z]+;)/);
    if (tag) { out += tag[0]; i += tag[0].length - 1; continue; }
    if (c === '^' || c === '_') {
      let exp = '';
      if (s[i + 1] === '{') {
        const end = s.indexOf('}', i + 2);
        exp = s.slice(i + 2, end); i = end;
      } else {
        let j = i + 1;
        if (s[j] === '-') j++;
        if (/[0-9]/.test(s[j])) { while (/[0-9]/.test(s[j] || '')) j++; }
        else j++;
        exp = s.slice(i + 1, j); i = j - 1;
      }
      const tag = c === '^' ? 'sup' : 'sub';
      out += `<${tag}>${M(exp)}</${tag}>`;
    } else if (/[a-zA-Z]/.test(c)) out += `<i>${c}</i>`;
    else if (c === '-') out += '−';
    else if (c === '*') out += '·';
    else if (c === '<') out += '&lt;';
    else if (c === '>') out += '&gt;';
    else out += c;
  }
  return `<span class="m">${out}</span>`;
}

/* Fraction: F(1, 2) shows ½ as a stacked fraction. Both parts may contain HTML. */
const F = (a, b) => `<span class="frac"><span class="n">${a}</span><span class="d">${b}</span></span>`;
/* Mixed number: MX(2, 1, 3) shows 2⅓ */
const MX = (w, a, b) => `<span class="nowrap">${w}${F(a, b)}</span>`;
/* Overline (complement of a set): OV('A') */
const OV = s => `<span class="ov">${s}</span>`;
/* Root: RT('x') = √x, RT('8', 3) = ∛8 */
const RT = (x, n) => `<span class="rt">${n ? `<sup class="ri">${n}</sup>` : ''}√<span class="rad">${x}</span></span>`;
/* Plain math span (no automatic formatting) */
const S = s => `<span class="m">${s}</span>`;
/* Italic variable */
const I = s => `<i>${s}</i>`;
const N = 'ℕ', Z = 'ℤ', Q = 'ℚ', R = 'ℝ';

/* A list of calculation steps, one per line: STEPS('a = b', '= c') */
const STEPS = (...lines) => `<div class="steps">${lines.map(l => `<div>${l}</div>`).join('')}</div>`;

/* Simple table: TB(['s','p','s + p'], [[1,6,7],[2,3,'5 ✓']]) */
const TB = (head, rows) =>
  `<div class="tblwrap"><table class="tbl"><thead><tr>${head.map(h => `<th>${h}</th>`).join('')}</tr></thead>` +
  `<tbody>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

/* Blank to fill in, and a squared blank: SQ(BL) */
const BL = '<span class="blank" aria-label="eyða"></span>';
const SQ = s => `${s}<sup>2</sup>`;

/* ---------- boxes used in explanations ---------- */
const DEF  = (tag, body) => `<div class="def"><div class="tag">${tag}</div>${body}</div>`;
const RULE = (tag, body) => `<div class="rule"><div class="tag">${tag}</div>${body}</div>`;
const ATH  = (body, tag = 'Ath!') => `<div class="ath"><div class="tag">${tag}</div>${body}</div>`;
/* Worked example. lausn is optional. */
const EXMP = (tag, body, lausn) =>
  `<div class="ex"><div class="tag">${tag}</div>${body}${lausn ? `<div class="lausn"><b>Lausn:</b> ${lausn}</div>` : ''}</div>`;

/* ---------- exercise parts ---------- */
const LETTERS = 'abcdefghijklmnopqrstuvwxyz';
/* P([{q, a}, ...]) gives each part its letter (a), (b), ... */
const P = arr => arr.map((p, i) => ({ l: LETTERS[i], ...p }));
/* True/false part: tf(question, true|false, optional explanation, optional button labels) */
const tf = (q, v, why, labels) => {
  const L = labels || ['Satt', 'Ósatt'];
  return { q, tf: v, labels: L, a: `<b>${v ? L[0] : L[1]}</b>` + (why ? ' — ' + why : '') };
};

/* ---------- figures ---------- */

/* Number line. segs = [[from, to, fromClosed, toClosed], ...]; from/to may be ±Infinity */
function nl(min, max, ticks, segs) {
  const W = 400, y = 40, x0 = 30, x1 = 356;
  const X = v => v === -Infinity ? 6 : v === Infinity ? 378 : x0 + (v - min) / (max - min) * (x1 - x0);
  const fmt = v => String(v).replace('-', '−');
  let s = `<svg class="fig" viewBox="0 0 ${W} 92" role="img" aria-label="Talnalína">`;
  s += `<line x1="4" y1="${y}" x2="380" y2="${y}" stroke="currentColor" stroke-width="2.5"/>`;
  s += `<polygon points="394,${y} 378,${y - 8} 378,${y + 8}" fill="currentColor"/>`;
  s += `<text x="388" y="${y + 42}" font-size="28" font-style="italic" fill="currentColor" text-anchor="middle">x</text>`;
  for (const t of ticks) {
    const xx = X(t);
    s += `<line x1="${xx}" y1="${y - 9}" x2="${xx}" y2="${y + 9}" stroke="currentColor" stroke-width="2"/>`;
    s += `<text x="${xx}" y="${y + 42}" font-size="28" font-weight="600" fill="currentColor" text-anchor="middle">${fmt(t)}</text>`;
  }
  for (const [a, b, ac, bc] of segs) {
    s += `<line x1="${X(a)}" y1="${y}" x2="${X(b)}" y2="${y}" stroke="currentColor" stroke-width="7"/>`;
    for (const [v, c] of [[a, ac], [b, bc]]) {
      if (!isFinite(v)) continue;
      s += `<circle cx="${X(v)}" cy="${y}" r="9" stroke="currentColor" stroke-width="3" fill="${c ? 'currentColor' : 'var(--card)'}"/>`;
    }
  }
  return s + '</svg>';
}

/* Two-set Venn diagram. mode = comp | union | inter | diff */
function venn2(mode) {
  const id = 'v' + mode + Math.random().toString(36).slice(2, 7);
  let s = `<svg class="fig" viewBox="0 0 320 200" role="img" aria-label="Venn mynd" style="max-width:18rem">
  <defs><clipPath id="${id}"><circle cx="125" cy="105" r="65"/></clipPath></defs>`;
  const A = `<circle cx="125" cy="105" r="65"`, B = `<circle cx="195" cy="105" r="65"`;
  if (mode === 'comp') s += `<rect x="2" y="2" width="316" height="196" fill="var(--shade)"/>${A} fill="var(--card)"/>`;
  else s += `<rect x="2" y="2" width="316" height="196" fill="var(--card)"/>`;
  if (mode === 'union') s += `${A} fill="var(--shade)"/>${B} fill="var(--shade)"/>`;
  if (mode === 'inter') s += `${B} fill="var(--shade)" clip-path="url(#${id})"/>`;
  if (mode === 'diff') s += `${A} fill="var(--shade)"/>${B} fill="var(--card)"/>`;
  s += `<rect x="2" y="2" width="316" height="196" fill="none" stroke="currentColor" stroke-width="2.5"/>`;
  s += `${A} fill="none" stroke="currentColor" stroke-width="2.5"/>`;
  if (mode !== 'comp') s += `${B} fill="none" stroke="currentColor" stroke-width="2.5"/>`;
  s += `<text x="16" y="30" font-size="24" font-style="italic" fill="currentColor">U</text>`;
  s += `<text x="115" y="114" font-size="26" font-style="italic" fill="currentColor">A</text>`;
  if (mode !== 'comp') s += `<text x="198" y="114" font-size="26" font-style="italic" fill="currentColor">B</text>`;
  else s += `<text x="240" y="114" font-size="26" font-style="italic" fill="currentColor" text-decoration="overline">A</text>`;
  return s + '</svg>';
}

/* Three-set Venn diagram with numbers. r = {a, b, c, ab, ac, bc, abc, out1, out2}, each an array of text lines */
function venn3(r) {
  const T = (x, y, t, sz = 21, it = false) =>
    `<text x="${x}" y="${y}" font-size="${sz}" ${it ? 'font-style="italic"' : ''} fill="currentColor" text-anchor="middle">${t}</text>`;
  const c = (x, y) => `<circle cx="${x}" cy="${y}" r="90" fill="none" stroke="currentColor" stroke-width="2.5"/>`;
  let s = `<svg class="fig" viewBox="0 0 380 340" role="img" aria-label="Venn mynd með þremur mengjum">
   <rect x="2" y="2" width="376" height="336" fill="var(--card)" stroke="currentColor" stroke-width="2.5"/>
   ${c(150, 130)}${c(230, 130)}${c(190, 225)}
   ${T(22, 30, 'U', 24, true)}${T(82, 152, 'A', 26, true)}${T(298, 152, 'B', 26, true)}${T(128, 272, 'C', 26, true)}`;
  const put = (x, y, lines) => (lines || []).forEach((l, i) => s += T(x, y + i * 23, l, 21));
  put(100, 110, r.a); put(280, 110, r.b); put(190, 78, r.ab); put(150, 215, r.ac);
  put(236, 212, r.bc); put(190, 178, r.abc); put(208, 288, r.c);
  put(45, 326, r.out1); put(330, 326, r.out2);
  return s + '</svg>';
}
