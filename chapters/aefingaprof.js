/* Æfingapróf úr köflum 5–8 (Þáttun 5.6–5.7, Bókstafabrot, Jöfnur og ójöfnur, Heil veldi 8.1).
   Every problem is taken from the book's exercises or worked examples (source given with each one);
   the final answers are the book's, the worked steps are written for the app.
   Points follow how much the book covers each section (pages and worked examples) – 100 in total.
   Chapter number 100 keeps it last in the list; the label replaces "Kafli 100" in the app. */
Book.add((() => {
const FM = (a, b) => F(M(a), M(b));
const X = s => `<span class="cancel">${s}</span>`;
const c = s => ` &nbsp;<small>${s}</small>`;
const B = s => `<b>${s}</b>`;
const SYS = (...eqs) => `<div class="steps">${eqs.map((e, i) => `<div>(${i + 1}) &nbsp; ${e}</div>`).join('')}</div>`;
/* task text with points and source: G(points, 'Æfing 5.6, dæmi 9', 'task') */
const G = (pts, src, text) => `${text}<br><small><b>${pts} stig</b> · ${src}</small>`;
/* part with its points shown after the question */
const Q = (q, pts, a) => ({ q: `${q} &nbsp;<small class="nowrap">(${pts} st.)</small>`, a });

const SECS = [
  ['5.6', 'Þriðjaveldisreglan', 2, 8], ['5.7', 'Sviga út fyrir sviga', 3, 10],
  ['6.1', 'Stytting, margföldun, deiling', 2, 10], ['6.2', 'Samlagning og frádráttur', 2, 10],
  ['7.1', 'Línulegar jöfnur', 2, 9], ['7.2', 'Ójöfnur', 2, 9], ['7.3', 'Einangrun breytistærða', 2, 6],
  ['7.4', 'Jöfnuhneppi', 4, 11], ['7.5', 'Annars stigs jöfnur', 7, 19], ['8.1', 'Heil veldi', 3, 8]];

return {
n: 100,
label: 'Æfingapróf',
title: 'Æfingapróf úr köflum 5–8',
theory: {
um: { t: 'Um prófið', h: `
<p>Prófið nær yfir 5.6–5.7, 6. kafla, 7. kafla og 8.1. Öll dæmin eru úr kennsluefninu (æfingum og sýnidæmum).
Reiknaðu fyrst á blað og opnaðu svo svarið. <b>Sýndu alltaf milliskref.</b></p>
<p>Stigin fylgja því hve mikið er fjallað um hvern undirkafla í bókinni. Alls eru <b>100 stig</b>.</p>
${TB(['Æfing', 'Efni', 'Sýnidæmi', 'Stig'], SECS.map(([s, nm, ex, p]) => [s, nm, ex, `<b>${p}</b>`]))}
<p>Dæmi merkt <b>*</b> eru erfiðari, eins og í bókinni.</p>`}
},

exercises: [
{ n: 1, s: '5.6', th: ['5:thridja', '5:samok5'],
  g: G(8, 'Æfing 5.6, dæmi 9 (c), (e), (h)', 'Þáttið með þriðjaveldisreglunni.'),
  p: P([
  Q(M('8a^3 - b^3'), 2, STEPS(M('= (2a)^3 - b^3'), M('= (2a - b)((2a)^2 + 2a * b + b^2)'), B(M('= (2a - b)(4a^2 + 2ab + b^2)')))),
  Q(M('343a^3 + 1'), 2, STEPS(M('= (7a)^3 + 1^3'), M('= (7a + 1)((7a)^2 - 7a * 1 + 1^2)'), B(M('= (7a + 1)(49a^2 - 7a + 1)')))),
  Q(M('64 - b^6'), 4, ATH('Ef bæði má nota samokareglu og þriðjaveldisreglu byrjum við á samokareglunni.') + STEPS(
    M('= 8^2 - (b^3)^2 = (8 + b^3)(8 - b^3)') + c('samokareglan'),
    M('= (2^3 + b^3)(2^3 - b^3)'),
    B(M('= (2 + b)(4 - 2b + b^2)(2 - b)(4 + 2b + b^2)')) + c('þriðjaveldisreglan á báða svigana')))
  ]) },

{ n: 2, s: '5.7', th: ['5:svigi', '5:samok5'],
  g: G(10, 'Æfing 5.7, dæmi 10 (d), (f), (j) og 11 (c), (a)', 'Þáttið með því að taka sviga út fyrir sviga.'),
  tip: 'Sýndu alltaf milliskrefið, þar sem sami sviginn sést í báðum liðum – annars færðu ekki full stig.',
  p: P([
  Q(M('(b + 2)x - b - 2'), 2, STEPS(M('= (b + 2)x - (b + 2)') + c('tökum mínus út fyrir sviga í seinni liðunum'), M('= (b + 2) * x - (b + 2) * 1'), B(M('= (b + 2)(x - 1)')))),
  Q(M('ax + ay - 2bx - 2by'), 2, STEPS(M('= a(x + y) - 2b(x + y)') + c('fyrstu tveir saman, seinni tveir saman'), B(M('= (a - 2b)(x + y)')))),
  Q(M('5xy - 7xy^2 - 5 + 7y'), 2, STEPS(M('= xy(5 - 7y) - (5 - 7y)'), M('= xy(5 - 7y) - 1 * (5 - 7y)'), B(M('= (5 - 7y)(xy - 1)')))),
  Q('<b>*</b> ' + M('3(x - 2)^3 - 4(x - 2)^2'), 2, STEPS(M('= 3(x - 2)^1 * (x - 2)^2 - 4(x - 2)^2') + c('tökum (x − 2)<sup>2</sup> út fyrir sviga'),
    M('= (x - 2)^2(3(x - 2) - 4)'), M('= (x - 2)^2(3x - 6 - 4)'), B(M('= (x - 2)^2(3x - 10)')))),
  Q('<b>*</b> ' + M('25x^2 - 9y^2 + 5x - 3y'), 2, STEPS(M('= (5x)^2 - (3y)^2 + 5x - 3y') + c('samokareglan á fyrstu tvo liðina'),
    M('= (5x + 3y)(5x - 3y) + (5x - 3y)'), M('= (5x - 3y)((5x + 3y) + 1)') + c('tökum (5x − 3y) út fyrir sviga'), B(M('= (5x - 3y)(5x + 3y + 1)'))))
  ]) },

{ n: 3, s: '6.1', th: ['6:stytting', '5:svigi'],
  g: G(7, 'Æfing 6.1, dæmi 2 (b), 1 (b) og 2 (c)', 'Fullstyttið brotin.'),
  p: P([
  Q(FM('x^2 - 4x', 'x^2 - 6x + 8'), 2, STEPS(`= ${FM('x(x - 4)', '(x - 2)(x - 4)')}` + c('þáttum teljara og nefnara'), B(`= ${FM('x', 'x - 2')}`))),
  Q(`Hér hefur reglum ekki verið fylgt. Finnið mistökin og leiðréttið: &nbsp;${FM('ax + 1', 'a')} = ${F(X(M('a')) + M('x + 1'), X(M('a')))} = ${M('x + 1')}`, 2,
    `Hér er <b>liður styttur á móti lið</b>. Aðeins má stytta þátt á móti þætti. Teljari og nefnari eru ósamþátta, svo brotið er þegar <b>fullstytt</b>: ${FM('ax + 1', 'a')}`),
  Q('<b>*</b> ' + FM('2a^4 + a^3 - 2a - 1', '3a^4 + a^3 - 3a - 1'), 3, STEPS(
    `Teljari: ${M('a^3(2a + 1) - (2a + 1) = (2a + 1)(a^3 - 1)')}` + c('sviga út fyrir sviga'),
    `Nefnari: ${M('a^3(3a + 1) - (3a + 1) = (3a + 1)(a^3 - 1)')}`,
    `${FM('(2a + 1)(a^3 - 1)', '(3a + 1)(a^3 - 1)')} = ${B(FM('2a + 1', '3a + 1'))}`))
  ]) },

{ n: 4, s: '6.1', th: ['6:stytting'],
  g: G(3, 'Æfing 6.1, dæmi 3', `Einfaldið &nbsp;${FM('x^2 + 18x + 80', 'x^2 + 5x - 50')} · ${FM('x^2 + 6x - 7', 'x^2 + 15x + 56')} : ${FM('x - 1', 'x - 5')}`),
  tip: 'Þáttaðu alla teljara og nefnara fyrst. Deiling er margföldun með umhverfunni.',
  p: [{ q: '', a: STEPS(
    `= ${FM('(x + 8)(x + 10)', '(x + 10)(x - 5)')} · ${FM('(x + 7)(x - 1)', '(x + 7)(x + 8)')} : ${FM('x - 1', 'x - 5')}` + c('þáttum allt'),
    `= ${FM('(x + 8)(x + 10)', '(x + 10)(x - 5)')} · ${FM('(x + 7)(x - 1)', '(x + 7)(x + 8)')} · ${FM('x - 5', 'x - 1')}` + c('deiling → margföldun með umhverfunni'),
    'Allir þættir styttast út: ' + B('= 1')) }] },

{ n: 5, s: '6.2', th: ['6:samlagning'],
  g: G(10, 'Æfing 6.2, dæmi 4 (b), 5 (d) og 5 (f)', 'Bókstafabrot – samnefnari.'),
  p: P([
  Q(`Finnið minnsta samnefnara: &nbsp;${FM('1', 'x - 2')}, ${FM('y^2', 'x^4 - 16')} og ${FM('x', 'x + 2')}`, 2,
    STEPS(M('x^4 - 16 = (x^2 + 4)(x^2 - 4) = (x^2 + 4)(x + 2)(x - 2)'), 'Minnsti samnefnari: ' + B(M('(x^2 + 4)(x + 2)(x - 2)')))),
  Q(`Einfaldið: &nbsp;${FM('1', 'a + b')} − ${FM('3', 'b')}`, 3,
    STEPS(`= ${FM('b', 'b(a + b)')} − ${FM('3(a + b)', 'b(a + b)')}` + c('samnefnum'), `= ${FM('b - 3a - 3b', 'b(a + b)')}`, B(`= ${FM('-3a - 2b', 'b(a + b)')}`))),
  Q(`Einfaldið: &nbsp;${FM('3x + 5', 'x^2 + 2x - 3')} − ${FM('2x + 5', 'x^2 + 5x + 6')}`, 5,
    STEPS(`= ${FM('3x + 5', '(x + 3)(x - 1)')} − ${FM('2x + 5', '(x + 2)(x + 3)')}` + c('þáttum nefnara'),
      `= ${FM('(3x + 5)(x + 2) - (2x + 5)(x - 1)', '(x + 3)(x - 1)(x + 2)')}` + c('samnefnum'),
      `= ${FM('3x^2 + 11x + 10 - (2x^2 + 3x - 5)', '(x + 3)(x - 1)(x + 2)')}`,
      `= ${FM('x^2 + 8x + 15', '(x + 3)(x - 1)(x + 2)')} = ${FM('(x + 3)(x + 5)', '(x + 3)(x - 1)(x + 2)')}` + c('þáttum teljara'),
      B(`= ${FM('x + 5', '(x - 1)(x + 2)')}`)))
  ]) },

{ n: 6, s: '7.1', th: ['7:linulegar'],
  g: G(9, 'Æfing 7.1, dæmi 1 (c), 1 (f) og 2 (d)', 'Leysið jöfnurnar.'),
  p: P([
  Q(`${FM('3', 'x + 1')} − 2 = ${F(2, 3)}`, 3, STEPS(`${FM('3', 'x + 1')} = ${F(8, 3)}`, M('9 = 8(x + 1)') + c('margföldum með 3(x + 1)'), M('9 = 8x + 8'), M('8x = 1'), B(M('x = ') + F(1, 8)))),
  Q(`${FM('2x', 'x + 2')} − ${FM('3', 'x - 3')} = 2`, 3, STEPS('Margföldum með ' + M('(x + 2)(x - 3)') + ':', M('2x(x - 3) - 3(x + 2) = 2(x + 2)(x - 3)'),
    M('2x^2 - 9x - 6 = 2x^2 - 2x - 12'), M('-7x = -6'), B(M('x = ') + F(6, 7)))),
  Q(`${FM('3x + 2', '4')} = 2 − ${F(M('x + ') + FM('x - 6', '2'), '3')}`, 3, STEPS('Margföldum með 12:', M('3(3x + 2) = 24 - 4x - 2(x - 6)'), M('9x + 6 = 36 - 6x'), M('15x = 30'), B(M('x = 2'))))
  ]) },

{ n: 7, s: '7.2', th: ['7:ojofnur'],
  g: G(9, 'Æfing 7.2, dæmi 3 (b), 4 (d) og 4 (c)', 'Leysið ójöfnurnar og ritið lausnarmengið sem bil.'),
  p: P([
  Q(M('2 - 4(2x - 3) ≤ 2x - 4'), 2, STEPS(M('2 - 8x + 12 ≤ 2x - 4'), M('-10x ≤ -18'), M('x ≥ ') + F(9, 5) + c('deilum með −10, merkið snýst við'), B(M('L') + ' = [' + F(9, 5) + ', ∞['))),
  Q(`${FM('x', '2')} − 3 ≤ 1 − ${FM('3x + 1', '4')} &lt; ${M('2 + x')}`, 4, STEPS(
    'Vinstri (×4): ' + M('2x - 12 ≤ 4 - 3x - 1') + ' ⇒ ' + M('5x ≤ 15') + ' ⇒ ' + M('x ≤ 3'),
    'Hægri (×4): ' + M('4 - 3x - 1 < 8 + 4x') + ' ⇒ ' + M('-7x < 5') + ' ⇒ ' + M('x > −') + F(5, 7),
    B(M('L') + ' = ]−' + F(5, 7) + ', 3]'))),
  Q(M('x + 7 ≤ 4x - 2 ≤ 8 - 2x'), 3, STEPS(M('x + 7 ≤ 4x - 2') + ' ⇒ ' + M('-3x ≤ -9') + ' ⇒ ' + M('x ≥ 3'),
    M('4x - 2 ≤ 8 - 2x') + ' ⇒ ' + M('6x ≤ 10') + ' ⇒ ' + M('x ≤ ') + F(5, 3),
    'Engin tala er bæði ≥ 3 og ≤ ' + F(5, 3) + ': ' + B(M('L') + ' = ∅')))
  ]) },

{ n: 8, s: '7.3', th: ['7:einangrun'],
  g: G(6, 'Æfing 7.3, dæmi 5 (c) og 5 (g)', 'Einangrið breytistærðina.'),
  p: P([
  Q(M('x') + ' úr jöfnunni ' + M('y = ') + FM('2x - 1', '3x + 2'), 3, STEPS(M('y(3x + 2) = 2x - 1'), M('3xy + 2y = 2x - 1'), M('3xy - 2x = -2y - 1'),
    M('x(3y - 2) = -(2y + 1)'), B(M('x = ') + FM('2y + 1', '2 - 3y')) + ' &nbsp;(með ' + M('y ≠ ') + F(2, 3) + ')')),
  Q(M('a') + ' úr jöfnunni ' + M('t = ') + FM('a + c', 'a + b'), 3, STEPS(M('t(a + b) = a + c'), M('at + bt = a + c'), M('at - a = c - bt'),
    M('a(t - 1) = c - bt'), B(M('a = ') + FM('c - bt', 't - 1')) + ' &nbsp;(með ' + M('t ≠ 1') + ')'))
  ]) },

{ n: 9, s: '7.4', th: ['7:hneppi'],
  g: G(11, 'Æfing 7.4, dæmi 6 (a), (i), (j) og sýnidæmi 7.9 og 7.10', 'Leysið jöfnuhneppin.'),
  tip: 'Notaðu eyðingaraðferðina eða innsetningaraðferðina. Prófaðu svo lausnina í báðum jöfnunum.',
  p: P([
  Q(SYS(M('3x - y = 11'), M('-x + 2y = 3')), 3, STEPS('Margföldum (1) með 2: ' + M('6x - 2y = 22'), 'Leggjum saman við (2): ' + M('5x = 25') + ', svo ' + M('x = 5'),
    'Inn í (1): ' + M('15 - y = 11') + ', svo ' + M('y = 4'), B(M('x = 5') + ' og ' + M('y = 4')))),
  Q(SYS(M('x = 2y - 3'), M('3x + 5y = 2')), 2, STEPS('Innsetning: ' + M('3(2y - 3) + 5y = 2'), M('11y - 9 = 2') + ', svo ' + M('y = 1'),
    M('x = 2 * 1 - 3 = -1'), B(M('x = -1') + ' og ' + M('y = 1')))),
  Q(SYS(M('3y + 4 = 2x + 5'), M('4x + 2y + 5 = 2 - 3y')), 3, STEPS('Umritum: ' + M('-2x + 3y = 1') + ' og ' + M('4x + 5y = -3'),
    'Margföldum (1) með 2 og leggjum saman: ' + M('11y = -1') + ', svo ' + M('y = −') + F(1, 11),
    M('-2x = 1 - 3y = 1 + ') + F(3, 11) + ' = ' + F(14, 11) + ', svo ' + M('x = −') + F(7, 11),
    B(M('x = −') + F(7, 11) + ' og ' + M('y = −') + F(1, 11)))),
  Q('Hve margar lausnir hefur hvort hneppi? (i) ' + SYS(M('2x - 6y = 3'), M('-x + 3y = -1')) + '(ii) ' + SYS(M('3x - 2y = -2'), M('6x - 4y = -4')), 3,
    STEPS('(i) Margföldum (2) með 2 og leggjum saman: ' + M('0 = 1') + ', sem er aldrei satt: ' + B('engin lausn.'),
      '(ii) (1) sinnum 2 gefur (2) – sama jafnan tvisvar: ' + B('óendanlega margar lausnir') + ', ' + M('y = ') + F(3, 2) + M('x + 1') + '.'))
  ]) },

{ n: 10, s: '7.5', th: ['7:annars', '7:formula'],
  g: G(11, 'Æfing 7.5, dæmi 8 (a), (b), (c), (f), (h)', 'Finnið lausnir jafnanna.'),
  tip: `Reiknaðu aðgreininn ${M('D = B^2 - 4AC')} fyrst. Sumar má líka þátta beint.`,
  p: P([
  Q(M('x^2 + 3x + 2 = 0'), 2, STEPS(M('(x + 1)(x + 2) = 0') + c('1 · 2 = 2 og 1 + 2 = 3'), B(M('x = -1') + ' eða ' + M('x = -2')))),
  Q(M('2x^2 - 3x - 1 = 0'), 3, STEPS(M('A = 2, B = -3, C = -1'), M('D = (-3)^2 - 4 * 2 * (-1) = 9 + 8 = 17 > 0'), B(M('x = ') + F(M('3 ± ') + RT('17'), '4')))),
  Q(M('3x^2 + x + 10 = 0'), 2, STEPS(M('D = 1^2 - 4 * 3 * 10 = -119 < 0'), B('Engin lausn'))),
  Q(M('4x^2 - 48 = 0'), 2, STEPS(M('4x^2 = 48') + ', ' + M('x^2 = 12'), M('x = ±') + RT('12') + ' = ' + M('±') + RT('4 · 3'), B(M('x = ±2') + RT('3')))),
  Q(M('7x^2 + 5x = 0'), 2, STEPS(M('x(7x + 5) = 0'), B(M('x = 0') + ' eða ' + M('x = −') + F(5, 7))))
  ]) },

{ n: 11, s: '7.5', th: ['7:umritun', '7:formula'],
  g: G(6, 'Æfing 7.5, dæmi 9 (a), (c), (b)', 'Finnið lausnir jafnanna (umritið fyrst).'),
  p: P([
  Q(M('x^3 + 2x^2 - 3x = 0'), 2, STEPS(M('x(x^2 + 2x - 3) = 0'), M('x(x + 3)(x - 1) = 0'), B(M('x = -3') + ', ' + M('x = 0') + ' eða ' + M('x = 1')))),
  Q(M('2x^4 + 5x^2 - 7 = 0'), 2, STEPS('Setjum ' + M('t = x^2') + ': ' + M('2t^2 + 5t - 7 = 0'), M('D = 25 + 56 = 81') + ', ' + M('t = ') + FM('-5 ± 9', '4'),
    M('t = 1') + ' gefur ' + M('x = ±1') + '; ' + M('t = −') + F(7, 2) + ' gefur enga lausn.', B(M('x = ±1')))),
  Q(M('2x^2 + x - 4 = 3x^2 - 6'), 2, STEPS(M('0 = x^2 - x - 2') + c('færum allt yfir til hægri'), M('0 = (x - 2)(x + 1)'), B(M('x = -1') + ' eða ' + M('x = 2'))))
  ]) },

{ n: 12, s: '7.5', th: ['7:formula'],
  g: G(2, 'Æfing 7.5, dæmi 13', `<b>*</b> Fyrir hvaða gildi á ${M('B')} hefur jafnan ${M('x^2 + Bx + 6 = 0')} einungis eina lausn?`),
  tip: `Ein lausn þýðir að ${M('D = 0')}.`,
  p: [{ q: '', a: STEPS(M('D = B^2 - 4 * 1 * 6 = B^2 - 24 = 0'), M('B = ±') + RT('24') + ' = ' + M('±') + RT('4 · 6'),
    B(M('B = -2') + RT('6') + ' og ' + M('B = 2') + RT('6'))) }] },

{ n: 13, s: '8.1', th: ['8:heil'],
  g: G(8, 'Æfing 8.1, dæmi 1 (a), (b), (c), (h)', 'Einfaldið með veldareglum án vasareiknis.'),
  tip: 'Frumþáttaðu tölurnar, breyttu deilingu í margföldun (veldið skiptir um formerki), eyddu svigum og leggðu saman veldin.',
  p: P([
  Q(M('a^2 : b^{-3} * (ab)^3'), 2, STEPS(M('= a^2 * b^3 * a^3 * b^3') + c('deiling → margföldun, veldið skiptir um formerki'), M('= a^{2+3} * b^{3+3}'), B(M('= a^5b^6')))),
  Q(M('8x^3 : (4x^{-1} : 2 * x^2)^2'), 2, STEPS('Fyrst svigann: ' + M('4x^{-1} : 2 * x^2 = 2^2 * 2^{-1} * x^{-1} * x^2 = 2x'), M('8x^3 : (2x)^2 = 2^3x^3 * 2^{-2}x^{-2}'), B(M('= 2x')))),
  Q(M('(30x^2y)^3 : (5y^2 : x)^2 * (6x)^{-3}'), 2, STEPS(M('= (2 * 3 * 5)^3x^6y^3 * 5^{-2}y^{-4}x^2 * 2^{-3}3^{-3}x^{-3}'),
    M('= 2^{3-3} * 3^{3-3} * 5^{3-2} * x^{6+2-3} * y^{3-4}'), B(M('= 5x^5y^{-1}') + ' = ' + FM('5x^5', 'y')))),
  Q(M('(2a)^3 * (8x^2a)^{-1} : (3a^3 : x)'), 2, STEPS(M('= 2^3a^3 * 2^{-3}x^{-2}a^{-1} * 3^{-1}a^{-3}x'),
    M('= 2^0 * 3^{-1} * a^{3-1-3} * x^{-2+1}'), B(M('= 3^{-1}a^{-1}x^{-1}') + ' = ' + FM('1', '3ax'))))
  ]) }
]
};
})());
