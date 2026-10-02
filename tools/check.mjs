// Checks all chapter files for common mistakes.  Run:  node tools/check.mjs
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
const errors = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);

// 1. index.html must load every chapter file, and only files that exist
const html = read('index.html');
const loaded = [...html.matchAll(/<script src="(chapters\/[^"]+)"/g)].map(m => m[1]);
const onDisk = fs.readdirSync(path.join(root, 'chapters')).filter(f => f.endsWith('.js')).map(f => 'chapters/' + f);
for (const f of onDisk) if (!loaded.includes(f)) err('index.html', `${f} exists but is not loaded (add a <script> line)`);
for (const f of loaded) if (!onDisk.includes(f)) err('index.html', `loads ${f}, which does not exist`);

// 2. run lib.js + each chapter in a sandbox
const ctx = vm.createContext({ console, Math, String, Set });
vm.runInContext(read('js/lib.js') + '\n;globalThis.Book = Book;', ctx, { filename: 'js/lib.js' });
for (const f of loaded.filter(f => onDisk.includes(f))) {
  try { vm.runInContext(read(f), ctx, { filename: f }); }
  catch (e) { err(f, 'JavaScript error: ' + e.message); }
}
const chapters = ctx.Book.chapters;

// 3. HTML sanity: no "undefined", balanced common tags
function checkHtml(where, h) {
  if (typeof h !== 'string') return err(where, 'is missing or not text');
  if (/undefined|NaN|\[object Object\]/.test(h)) err(where, 'contains "undefined"/"NaN" – a helper got a wrong argument');
  for (const t of ['b', 'i', 'span', 'div', 'sup', 'sub', 'p', 'table']) {
    const open = (h.match(new RegExp(`<${t}[\\s>]`, 'g')) || []).length;
    const close = (h.match(new RegExp(`</${t}>`, 'g')) || []).length;
    if (open !== close) err(where, `<${t}> opened ${open} times but closed ${close} times`);
  }
}

const nums = new Set();
for (const ch of chapters) {
  const C = `Kafli ${ch.n}`;
  if (nums.has(ch.n)) err(C, 'chapter number used twice');
  nums.add(ch.n);
  if (!ch.title) err(C, 'missing title');
  for (const [k, t] of Object.entries(ch.theory || {})) { if (!t.t) err(`${C} theory.${k}`, 'missing t (title)'); checkHtml(`${C} theory.${k}`, t.h); }
  const exNums = new Set();
  (ch.exercises || []).forEach(e => {
    const E = `${C} verkefni ${e.n}`;
    if (exNums.has(e.n)) err(E, 'exercise number used twice');
    exNums.add(e.n);
    checkHtml(E + ' g', e.g);
    if (e.tip) checkHtml(E + ' tip', e.tip);
    for (const k of e.th || []) {
      const [n, key] = k.includes(':') ? k.split(':') : [ch.n, k];
      const other = chapters.find(c => c.n === +n);
      if (!other || !other.theory[key]) err(E, `th refers to "${k}", which does not exist`);
    }
    if (!Array.isArray(e.p) || !e.p.length) err(E, 'has no parts (p)');
    (e.p || []).forEach((p, i) => { checkHtml(`${E} (${p.l || i + 1}) q`, p.q); checkHtml(`${E} (${p.l || i + 1}) a`, p.a); });
  });
}

const total = chapters.reduce((s, c) => s + c.exercises.length, 0);
if (errors.length) { console.log(`✗ ${errors.length} problem(s):\n  ` + errors.join('\n  ')); process.exit(1); }
console.log(`✓ ${chapters.length} chapters, ${total} exercises – all OK`);
for (const c of chapters) console.log(`  Kafli ${c.n}: ${c.title} – ${c.exercises.length} verkefni, ${Object.keys(c.theory).length} útskýringar`);
