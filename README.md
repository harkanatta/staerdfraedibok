# Stærðfræði – eitt verkefni í einu

A small web app that shows a maths textbook **one exercise at a time**, made for a
student with low vision on a small screen. Each exercise has:

- the task, a short hint, and each part (a), (b), … with a **Sýna svar** button
- true/false parts with **Satt / Ósatt** buttons that say right away if the answer is right
- an **Útskýring** tab with the definitions and worked examples from the book that belong to it
- large text (adjustable 16–44 px), light / dark / yellow-on-black themes, big buttons

No build step, no framework, no dependencies – plain HTML, CSS and JavaScript.

## Structure

```
index.html          page shell; loads the files below in order
css/app.css         look and themes
js/lib.js           helpers for writing maths (M, F, RT, STEPS, nl, venn3, …)
js/app.js           the app itself (navigation, tabs, settings)
chapters/kafliN.js  one file per chapter – all the content lives here
tools/check.mjs     checks the chapter files for mistakes
netlify.toml        Netlify settings (runs the check before each deploy)
```

## Try it locally

Open `index.html` in a browser. That's it.
(Or run `python -m http.server` in this folder and go to http://localhost:8000.)

## Deploy (GitHub + Netlify)

1. Create an empty repository on GitHub (no README). **Make it private** unless you
   have permission to publish the book's content.
2. In this folder:
   ```bash
   git remote add origin https://github.com/<user>/staerdfraedibok.git
   git push -u origin main
   ```
3. On Netlify: **Add new site → Import an existing project → GitHub**, pick the repository.
   Leave the settings as they are (they come from `netlify.toml`) and deploy.

After that, every `git push` updates the site automatically. If `tools/check.mjs` finds
a problem, Netlify stops the deploy and the old version stays online.

Addresses can be bookmarked: `#/3/5` is chapter 3, exercise 5; `#/3/5/u` is its explanation.

## Adding a chapter

1. Create `chapters/kafli6.js` (copy the template below or an existing chapter).
2. Add one line to `index.html`, next to the other chapters:
   ```html
   <script src="chapters/kafli6.js"></script>
   ```
3. Run the check, then commit and push:
   ```bash
   node tools/check.mjs
   ```

### Template

```js
Book.add({
n: 6,
title: 'Heiti kaflans',
// draft: true,          // shows "drög" on the chapter list
theory: {
  // key: { t: 'Title shown in the Útskýring tab', h: `HTML content` }
  jofnur: { t: 'Annars stigs jöfnur', h: `
    ${DEF('Skilgreining 6.1: …', 'Texti …')}
    ${RULE('Regla 6.2', M('x = ...'))}
    ${EXMP('Dæmi 6.1', 'Spurning …', STEPS(M('2x = 6'), M('<b>x = 3</b>')))}
  `}
},
exercises: [
  { n: 1, s: '6.1',                 // exercise number and section ("Æfing 6.1")
    th: ['jofnur'],                 // explanations to show; '4:samok' = chapter 4's "samok"
    g: 'Leysið jöfnurnar.',         // the task text
    tip: 'Ábending …',              // optional hint
    p: P([                          // parts get letters (a), (b), … automatically
      { q: M('2x + 5 = -1'), a: STEPS(M('2x = -6'), M('<b>x = -3</b>')) },
      tf(M('2 ∈ ℕ'), true),         // true/false part
      tf(M('x^2 - 5x + 25'), false, 'skýring', ['Já', 'Nei'])  // own button labels
    ]) }
]
});
```

### Writing maths – helpers in `js/lib.js`

| Write | Shows |
|---|---|
| `M('3x^2 - 2ab^{-3}')` | 3*x*² − 2*ab*⁻³ (letters italic, `-` → −, `*` → ·, `^` superscript, `_` subscript, `<b>…</b>` allowed) |
| `F(1, 2)` | stacked fraction ½ (parts may be nested: `F(F(1,2), 3)`) |
| `MX(2, 1, 3)` | mixed number 2⅓ |
| `RT('7')`, `RT('8', 3)` | √7, ∛8 |
| `OV('A')` | A with a bar (complement) |
| `STEPS(line1, line2, …)` | calculation steps, one per line |
| `TB(head, rows)` | small table |
| `BL`, `SQ(BL)` | blank to fill in, blank squared |
| `DEF`, `RULE`, `ATH`, `EXMP` | definition / rule / note / worked example boxes |
| `nl(min, max, ticks, segs)` | number line, e.g. `nl(0, 9, [2, 7], [[2, 7, false, true]])` = ]2, 7] |
| `venn2(mode)`, `venn3({...})` | Venn diagrams |

Text inside `M('…')` is treated as maths, so keep ordinary words outside it:
`'Leysið ' + M('2x = 4')`.

## Corrections to the book

While transcribing, these mistakes in the book were found. The app shows the corrected
version (and says so where the student would notice):

| Where | Book says | Correct |
|---|---|---|
| 1, answer 1(d) | 14 | −4 by the book's own rule 1.1 (left to right). 14 only if read as 18·2:(3·2). Flagged in the app – ask the teacher. |
| 1, answer 4(g) | 602² · 3 · 5 | 60 = 2² · 3 · 5 |
| 2, Dæmi 2.1 | −29/7 on both sides | −29/2 |
| 3, answer 12(d) | ]1, ∞] | ]1, ∞[ |
| 5, Dæmi 5.2.3 | (py + 5)(py − 5) | (py + 5a)(py − 5a) |
| 5, Dæmi 5.6.2 | 3(ax − 4y)² | 3(ax − 4z)² |
| 5, answer 3(d) | (x + √3)(x − √3) | (a + √3)(a − √3) |
| 6, answer 5(h) | nefnari … (x² − 3x + 9) | (x² + 3x + 9) |
| 7, Dæmi 7.1 | x = 1 | x = −1 |
| 7, Dæmi 7.3 | L = [−2, ∞[ | ]−2, ∞[ (strict inequality) |

Chapters 6 (Bókstafabrot) and 7 (Jöfnur og ójöfnur) come from `Kafli 6.pdf` and `Kafli 7.pdf`; harder exercises are
marked * as in the book, and the worked steps under the answers are written for the app.

Chapter 5 is marked as a draft (*drög*) in the source PDF, and in the app.
