/* Kafli 8 – Veldi og rætur. Transcribed from "Kafli 8.pdf" (pages 72–78 of the book, answers on p. 78).
   Worked steps under the answers are written for the app; the final answers are the book's.
   Dæmi 8.8 (2) in the book ends with a^(4/15); the right answer is a^(−4/15) (see README.md). */
Book.add((() => {
const FM = (a, b) => F(M(a), M(b));
/* power with an HTML base and HTML exponent: X(M('a'), F(1, 3)) = a^(1/3) */
const X = (b, e) => `${b}<sup>${e}</sup>`;
/* same, but the base is written in M() notation: V('(2x)', F(1, 2)) */
const V = (b, e) => X(M(b), e);
/* negative fraction exponent: −p/q */
const nq = (p, q) => `−${F(p, q)}`;
/* root of something written in M() notation: R('a^3') = √a³, R('x^2', 3) = ∛x² */
const R = (x, n) => RT(M(x), n);
const c = s => ` &nbsp;<small>${s}</small>`;

return {
n: 8,
title: 'Veldi og rætur',
theory: {

heil: { t: '8.1 Heil veldi', h: `
${ATH(`${M('a^n = 1 * a * a * ... * a')} &nbsp; þar sem ${M('a')} kemur ${M('n')} sinnum fyrir.
<div class="steps">
<div>${M('a^{-n} = ')}${FM('1', 'a^n')}${M(' = 1 : a^n')} &nbsp;&nbsp;&nbsp; ${M('a^0 = 1')}</div>
<div>${M('a^n * a^m = a^{n+m}')} &nbsp;&nbsp;&nbsp; ${M('a^n : a^m = a^{n-m}')}</div>
<div>${M('(ab)^n = a^n * b^n')} &nbsp;&nbsp;&nbsp; ${M('a^n : b^n = (a : b)^n')}</div>
<div>${M('(a^n)^m = a^{nm}')}</div></div>`, 'Ath! · Upprifjun úr kafla 1.5')}
${EXMP('Dæmi 8.1 · Veldareglur', 'Einfaldið með veldareglum:', STEPS(
  '1. ' + M('200^4 : 100^4 = (200 : 100)^4 = 2^4 = 16'),
  '2. ' + M('(a^4bc^3)^6 = a^{4*6} * b^{1*6} * c^{3*6} = a^{24}b^6c^{18}')))}
<p>Ef um marga þætti er að ræða eru margar leiðir færar við einföldun stæða.
Takmarkið er að hver þáttur komi aðeins einu sinni fyrir. Þá er ágætt að fylgja eftirfarandi skrefum.</p>
<ol><li>Frumþátta tölur og skrifa margföldunarmerkin.</li>
<li>Breyta deilingu í margföldun en það mun breyta formerki á því veldi sem deilingin á við um.</li>
<li>Eyðum svigum.</li>
<li>Leggjum saman veldin á eins þáttum.</li></ol>
${EXMP('Dæmi 8.2 · Veldareglur', `Einfaldið ${M('12x : y^5 : (6y^{-2} : x^4)')} með veldareglum án þess að nota vasareikni.`, STEPS(
  M('12x : y^5 : (6y^{-2} : x^4)'),
  M('= 2^2 * 3 * x : y^5 : (2 * 3 * y^{-2} : x^4)') + c('Frumþáttum tölur'),
  M('= 2^2 * 3^1 * x^1 * y^{-5} * (2^1 * 3^1 * y^{-2} * x^{-4})^{-1}') + c('Breytum deilingu í margföldun'),
  M('= 2^2 * 3^1 * x^1 * y^{-5} * 2^{-1} * 3^{-1} * y^2 * x^4') + c('Eyðum svigum'),
  M('= 2^{2-1} * 3^{1-1} * x^{1+4} * y^{-5+2}') + c('Drögum saman eins þætti'),
  M('= 2 * 3^0 * x^5 * y^{-3}') + c('Einföldum'),
  `<b>${M('= 2x^5y^{-3}')}</b>`))}
${EXMP('Dæmi 8.3 · Veldareglur', `Einfaldið ${M('6a^2b^{-3} : (2c^2b^2 : a^3)^{-2} : 3')} með veldareglum án þess að nota vasareikni.`, STEPS(
  M('6a^2b^{-3} : (2c^2b^2 : a^3)^{-2} : 3'),
  M('= 2 * 3 * a^2 * b^{-3} * (2 * c^2 * b^2 * a^{-3})^2 * 3^{-1}'),
  M('= 2 * 3 * a^2 * b^{-3} * 2^2 * c^4 * b^4 * a^{-6} * 3^{-1}'),
  M('= 2^{1+2} * 3^{1-1} * a^{2-6} * b^{-3+4} * c^4'),
  M('= 2^3 * 3^0 * a^{-4} * b^1 * c^4'),
  `<b>${M('= 2^3 * a^{-4} * b * c^4')}</b>`))}`},

raetur: { t: '8.2 Rætur', h: `
${ATH(`Látum ${M('a')} vera ekki neikvæða tölu og ${M('q')} vera jákvæða heiltölu. Þá er
<div class="steps"><div>${R('a')} = ${M('x')}, &nbsp; ef ${M('x^2 = a')} og ${M('x ≥ 0')}</div>
<div>${RT(M('a'), I('q'))} = ${M('x')}, &nbsp; ef ${M('x^q = a')} og ${M('x ≥ 0')}</div></div>
Ef ${M('a')} er neikvæð og ${M('q')} er oddatala þá fæst einnig að ${RT(M('a'), I('q'))} = ${M('x')} ef ${M('x^q = a')}.`, 'Ath! · Upprifjun úr kafla 2.2')}
<p>Að einfalda stærðir undir rót felur í sér að umrita þannig að stærðin undir rót sé rituð með öðru veldi.</p>
${EXMP('Dæmi 8.4 · Ferningsrót', 'Reiknið/einfaldið:', STEPS(
  `1. ${R('9')} = ${R('3^2')} = 3`,
  `2. ${R('25 * 16')} = ${R('5^2 * 4^2')} = ${R('(5 * 4)^2')} = 5 · 4 = 20`,
  `3. ${R('a * a^3')} = ${R('a^4')} = ${R('(a^2)^2')} = ${M('a^2')}`))}
<p>Í sumum tilfellum er ómögulegt að rita stærð undir rót sem eina stærð í öðru veldi. Þá eru til tvær reglur sem beita má.</p>
${RULE('Regla 8.1 · Reglur fyrir ferningsrót', `<div class="steps">
<div>${R('a')} · ${R('b')} = ${R('ab')} &nbsp;&nbsp; (R1)</div>
<div>${R('a')} : ${R('b')} = ${R('a : b')} &nbsp;&nbsp; (R2)</div></div>`)}
<p>Athugið að oft þarf að beita reglunum í báðar áttir. Það er að segja við getum sameinað rætur fyrst,
einfaldað stærðina undir rót og skilið í sundur aftur.</p>
${EXMP('Dæmi 8.5 · Rótarreglur með ferningsrót', 'Einfaldið með rótar- og veldareglum:', STEPS(
  `1. ${R('6')} · ${R('24')} = ${R('6 * 24')} = ${R('2 * 3 * 2^2 * 2 * 3')}`,
  `&nbsp;&nbsp;&nbsp; = ${R('2^2 * 2^2 * 3^2')} = ${R('2^2')} · ${R('2^2')} · ${R('3^2')} = 2 · 2 · 3 = 12`,
  `2. ${R('32')} = ${R('2^5')} = ${R('2^2 * 2^2 * 2')} = ${R('2^2')} · ${R('2^2')} · ${R('2')} = 2 · 2 · ${R('2')} = 4${R('2')}`,
  '<small>Hér endar tvistur undir rót. Venja er að taka það sem hægt er út fyrir rót svo stærðin undir rót sé eins lítil og hægt er.</small>',
  `3. ${R('y^7')} = ${R('y^6 * y')} = ${R('(y^3)^2 * y')} = ${R('(y^3)^2')} · ${R('y')} = ${M('y^3')}${R('y')}`,
  `4. ${R('72')} : ${R('2')} = ${R('72 : 2')} = ${R('36')} = ${R('6^2')} = 6`,
  `5. ${R('b^5')} : ${R('b^{-1}')} = ${R('b^5 : b^{-1}')} = ${R('b^5 * b^1')} = ${R('b^6')} = ${R('b^2 * b^2 * b^2')} = ${M('b * b * b = b^3')}`,
  '<small>Athugið að ýmsar leiðir eru færar enda eru reglurnar margar. Leysum aftur liðinn hér að ofan.</small>',
  `6. ${R('b^5')} : ${R('b^{-1}')} = ${R('b^5 : b^{-1}')} = ${R('b^5 * b^1')} = ${R('b^6')} = ${R('(b^3)^2')} = ${M('b^3')}`,
  `7. ${RT(F(25, 4))} = ${F(R('25'), R('4'))} = ${F(R('5^2'), R('2^2'))} = ${F(5, 2)}`))}`},

summur: { t: 'Rætur af summum og q-tu rætur', h: `
<p>Gætið þess að reglurnar eiga aðeins við um <b>margföldun og deilingu</b>. Ef um liði er að ræða þarf að
einfalda hverja rót fyrir sig og draga svo saman.</p>
${ATH(`<div class="steps"><b>${R('a')} + ${R('b')} ≠ ${R('a + b')}</b></div>
T.d. er ${R('9')} + ${R('16')} = 3 + 4 = 7 &nbsp; en &nbsp; ${R('9 + 16')} = ${R('25')} = 5, &nbsp;
svo ${R('9')} + ${R('16')} ≠ ${R('9 + 16')}.`)}
${EXMP('Dæmi 8.6 · Einföldun róta', 'Einfaldið eins og hægt er.', STEPS(
  `1. ${R('18')} + ${R('8')} = ${R('3^2 * 2')} + ${R('2^2 * 2')} = 3${R('2')} + 2${R('2')} = 5${R('2')}`,
  `2. ${F(`${R('75')} − ${R('27')}`, R('12'))} = ${F(`${R('5^2 * 3')} − ${R('3^2 * 3')}`, R('2^2 * 3'))}
   = ${F(`5${R('3')} − 3${R('3')}`, `2${R('3')}`)} = ${F(`2${R('3')}`, `2${R('3')}`)} = 1`))}
<p>Rótarreglur 1 og 2 gilda einnig um ${M('q')}-tu rætur. Beita má þeim reglum þegar þættir hafa sömu rót.</p>
${EXMP('Dæmi 8.7 · Rótarreglur', 'Einfaldið með róta- og veldareglum:', STEPS(
  `1. ${R('6', 3)} · ${R('36', 3)} = ${R('2 * 3 * 2^2 * 3^2', 3)} = ${R('2^3 * 3^3', 3)} = ${R('2^3', 3)} · ${R('3^3', 3)} = 2 · 3 = 6`,
  `2. ${R('a^7', 4)} : ${R('a^3', 4)} = ${R('a^7 : a^3', 4)} = ${R('a^4', 4)} = ${M('a')}`,
  `3. ${R('81', 3)} + ${R('24', 3)} = ${R('3^4', 3)} + ${R('2^3 * 3', 3)} = ${R('3^3', 3)} · ${R('3', 3)} + ${R('2^3', 3)} · ${R('3', 3)}
   = 3${R('3', 3)} + 2${R('3', 3)} = 5${R('3', 3)}`))}`},

brotin: { t: '8.3 Brotin veldi', h: `
<p>Til eru fleiri rótareglur til að einfalda stæður þegar þættir hafa mismunandi rótarvísi, en með skilgreiningu á
brotnu veldi hér að neðan verður hægt að beita veldareglum til að einfalda.</p>
${DEF('Skilgreining 8.2: Brotin veldi', `Ef ${M('q')} ∈ ℤ<sub>+</sub>, ${M('p')} ∈ ℤ og ${M('a')} ∈ ℝ<sub>+</sub> þá er
<div class="steps"><b>${RT(M('a^p'), I('q'))} = ${X(M('a'), F(I('p'), I('q')))}</b></div>
Til dæmis er ${R('a')} = ${X(M('a'), F(1, 2))} og ${R('a^2', 3)} = ${X(M('a'), F(2, 3))}.`)}
${RULE('Regla 8.3', '<i>Reglur um heil veldi gilda einnig um brotin veldi.</i>')}
<p>Þegar einfalda á stærri stæður sem innihalda veldi og blandaðar rætur er gott að beita sömu skrefum og í
fyrri kafla en bætum inn einu skrefi.</p>
<ol><li>Frumþáttum tölur og skrifum margföldunarmerkin.</li>
<li><b>Breytum rót í veldi.</b></li>
<li>Breyta deilingu í margföldun.</li>
<li>Eyðum svigum.</li>
<li>Leggjum saman veldin á eins þáttum (sýnum brotareikninginn).</li></ol>
${EXMP('Dæmi 8.8 · Rætur og brotin veldi', 'Einfaldið með veldareglum:', STEPS(
  `1. ${R('27', 3)} = ${V('(3^3)', F(1, 3))} = ${X('3', F(3, 3))} = 3`,
  `2. ${R('a^2', 5)} : ${R('a^2', 3)} = ${V('(a)', F(2, 5))} : ${V('(a)', F(2, 3))} = ${V('(a)', F(2, 5))} · ${V('(a)', nq(2, 3))}`,
  `&nbsp;&nbsp;&nbsp; = ${V('a', `${F(2, 5)} − ${F(2, 3)}`)} = ${V('a', `${F('2·3', '5·3')} − ${F('2·5', '3·5')}`)} = ${V('a', F('6 − 10', 15))} = <b>${V('a', nq(4, 15))}</b>`,
  `<small>(Í bókinni stendur ${V('a', F(4, 15))} í lokin, en 6 − 10 = −4.)</small>`))}`},

brotindaemi: { t: 'Fleiri dæmi um brotin veldi', h: `
${EXMP('Dæmi 8.9 · Rætur og brotin veldi', `Einfaldið ${R('a : b^2', 3)} : ${R('ab', 5)} · ${V('b', nq(2, 15))} · ${V('a', F(3, 15))}`, STEPS(
  `${R('a : b^2', 3)} : ${R('a * b', 5)} · ${V('b', nq(2, 15))} · ${V('a', F(3, 15))}`,
  `= ${V('(a : b^2)', F(1, 3))} : ${V('(a * b)', F(1, 5))} · ${V('b', nq(2, 15))} · ${V('a', F(3, 15))}` + c('breytum rót í veldi'),
  `= ${V('(a * b^{-2})', F(1, 3))} · ${V('(a * b)', nq(1, 5))} · ${V('b', nq(2, 15))} · ${V('a', F(3, 15))}` + c('breytum deilingu í margföldun'),
  `= ${V('a', F(1, 3))} · ${V('b', nq(2, 3))} · ${V('a', nq(1, 5))} · ${V('b', nq(1, 5))} · ${V('b', nq(2, 15))} · ${V('a', F(3, 15))}` + c('leysum upp sviga'),
  `= ${V('a', `${F(1, 3)} − ${F(1, 5)} + ${F(3, 15)}`)} · ${V('b', `${nq(2, 3)} − ${F(1, 5)} − ${F(2, 15)}`)}` + c('leggjum saman veldi á eins þáttum'),
  `= ${V('a', `${F(1, 3)} − ${F(1, 5)} + ${F(1, 5)}`)} · ${V('b', F('−10 − 3 − 2', 15))} = ${V('a', F(1, 3))} · ${V('b', F('−15', 15))}`,
  `<b>= ${V('a', F(1, 3))} · ${M('b^{-1}')}</b>` + c('einföldum veldin')))}
${EXMP('Dæmi 8.10 · Rætur og brotin veldi', `Einfaldið ${F(`${V('(4x)', F(1, 3))} : ${R('8x^{-1} : y')}`, `${R('2y^2', 3)} : ${V('(2xy)', F(1, 6))}`)} án vasareiknis.`, STEPS(
  `= ${F(`${V('(2^2 * x)', F(1, 3))} · ${V('(2^3 * x^{-1} * y^{-1})', nq(1, 2))}`, `${V('(2 * y^2)', F(1, 3))} · ${V('(2 * x * y)', nq(1, 6))}`)}`,
  `= ${F(`${X('2', F(2, 3))} · ${V('x', F(1, 3))} · ${X('2', nq(3, 2))} · ${V('x', F(1, 2))} · ${V('y', F(1, 2))}`,
         `${X('2', F(1, 3))} · ${V('y', F(2, 3))} · ${X('2', nq(1, 6))} · ${V('x', nq(1, 6))} · ${V('y', nq(1, 6))}`)}`,
  `= ${X('2', F(2, 3))} · ${V('x', F(1, 3))} · ${X('2', nq(3, 2))} · ${V('x', F(1, 2))} · ${V('y', F(1, 2))} · ${X('2', nq(1, 3))} · ${V('y', nq(2, 3))} · ${X('2', F(1, 6))} · ${V('x', F(1, 6))} · ${V('y', F(1, 6))}`,
  `= ${X('2', `${F(2, 3)} − ${F(3, 2)} − ${F(1, 3)} + ${F(1, 6)}`)} · ${V('x', `${F(1, 3)} + ${F(1, 2)} + ${F(1, 6)}`)} · ${V('y', `${F(1, 2)} − ${F(2, 3)} + ${F(1, 6)}`)}`,
  `= ${X('2', `${F(4, 6)} − ${F(9, 6)} − ${F(2, 6)} + ${F(1, 6)}`)} · ${V('x', `${F(2, 6)} + ${F(3, 6)} + ${F(1, 6)}`)} · ${V('y', `${F(3, 6)} − ${F(4, 6)} + ${F(1, 6)}`)}`,
  `= ${X('2', nq(6, 6))} · ${V('x', F(6, 6))} · ${V('y', F(0, 6))} = ${M('2^{-1} * x^1 * y^0')} = <b>${F(1, 2)}${M('x')}</b>`))}`}
},

exercises: [
  { n: 1, s: '8.1', th: ['heil', '1:veldi'], g: 'Einfaldið með veldareglum án vasareiknis.',
    tip: 'Frumþáttaðu tölurnar, breyttu deilingu í margföldun (veldið skiptir um formerki), eyddu svigum og leggðu saman veldin.',
    p: P([
      { q: M('a^2 : b^{-3} * (ab)^3'),
        a: STEPS(M('= a^2 * b^3 * a^3 * b^3'), M('= a^{2+3} * b^{3+3}'), `<b>${M('= a^5b^6')}</b>`) },
      { q: M('8x^3 : (4x^{-1} : 2 * x^2)^2'),
        a: STEPS(`Fyrst svigann: ${M('4x^{-1} : 2 * x^2 = 2 * x^{-1} * x^2 = 2x')}`,
          M('8x^3 : (2x)^2 = 2^3x^3 * 2^{-2}x^{-2}'), `<b>${M('= 2x')}</b>`) },
      { q: M('(30x^2y)^3 : (5y^2 : x)^2 * (6x)^{-3}'),
        a: STEPS(M('= (2 * 3 * 5)^3x^6y^3 * 5^{-2}y^{-4}x^2 * 2^{-3}3^{-3}x^{-3}'),
          M('= 2^{3-3} * 3^{3-3} * 5^{3-2} * x^{6+2-3} * y^{3-4}'),
          `<b>${M('= 5x^5y^{-1}')} = ${FM('5x^5', 'y')}</b>`) },
      { q: M('(12a^2b^2)^2 * b^{-1} : (6a^2 : b)^2'),
        a: STEPS(M('= 2^4 * 3^2 * a^4b^4 * b^{-1} * (2 * 3 * a^2b^{-1})^{-2}'),
          M('= 2^4 * 3^2 * a^4b^3 * 2^{-2} * 3^{-2} * a^{-4}b^2'),
          M('= 2^2 * 3^0 * a^0 * b^5'), `<b>${M('= 2^2b^5 = 4b^5')}</b>`) },
      { q: M('6^2xy^3 : (8x^2 : y^{-3})^2'),
        a: STEPS(`Fyrst svigann: ${M('8x^2 : y^{-3} = 2^3x^2y^3')}`,
          M('= 2^2 * 3^2 * xy^3 * 2^{-6}x^{-4}y^{-6}'),
          `<b>${M('= 2^{-4}3^2x^{-3}y^{-3}')} = ${F('9', M('16x^3y^3'))}</b>`) },
      { q: M('25^{-1}b : 3 * a^{-2} : (15ab)^{-2}'),
        a: STEPS(M('= 5^{-2} * b * 3^{-1} * a^{-2} * (3 * 5 * ab)^2'),
          M('= 5^{-2} * b * 3^{-1} * a^{-2} * 3^2 * 5^2 * a^2b^2'),
          M('= 3^1 * 5^0 * a^0 * b^3'), `<b>${M('= 3b^3')}</b>`) },
      { q: M('18(2y)^2 : (6y^3 : 3 * y^{-2})^3'),
        a: STEPS(`Fyrst svigann: ${M('6y^3 : 3 * y^{-2} = 2y^{3-2} = 2y')}`,
          M('18 * (2y)^2 : (2y)^3 = 2 * 3^2 * 2^2y^2 * 2^{-3}y^{-3}'),
          `<b>${M('= 3^2y^{-1}')} = ${FM('9', 'y')}</b>`) },
      { q: M('(2a)^3 * (8x^2a)^{-1} : (3a^3 : x)'),
        a: STEPS(M('= 2^3a^3 * 2^{-3}x^{-2}a^{-1} * 3^{-1}a^{-3}x'),
          M('= 2^0 * 3^{-1} * a^{3-1-3} * x^{-2+1}'),
          `<b>${M('= 3^{-1}a^{-1}x^{-1}')} = ${FM('1', '3ax')}</b>`) }
    ]) },

  { n: 2, s: '8.2', th: ['raetur'], g: 'Einfaldið með róta- og veldareglum.',
    tip: `Sameinaðu ræturnar í eina rót með (R1) og (R2), einfaldaðu undir rótinni og taktu ferninga út fyrir rót.`,
    p: P([
      { q: `${R('2')} · ${R('8')}`, a: STEPS(`= ${R('2 * 8')} = ${R('16')}`, '<b>= 4</b>') },
      { q: `${R('27')} : ${R('3')}`, a: STEPS(`= ${R('27 : 3')} = ${R('9')}`, '<b>= 3</b>') },
      { q: `${R('a')} · ${R('a^3')}`, a: STEPS(`= ${R('a * a^3')} = ${R('a^4')} = ${R('(a^2)^2')}`, `<b>${M('= a^2')}</b>`) },
      { q: `${R('a')} : ${R('a^3')}`, a: STEPS(`= ${R('a : a^3')} = ${R('a^{-2}')} = ${R('(a^{-1})^2')}`, `<b>${M('= a^{-1}')} = ${FM('1', 'a')}</b>`) },
      { q: R('325'), a: STEPS(`= ${R('5^2 * 13')} = ${R('5^2')} · ${R('13')}`, `<b>= 5${R('13')}</b>`) },
      { q: R('48a^5'), a: STEPS(`= ${R('4^2 * 3 * a^4 * a')} = ${R('4^2 * a^4')} · ${R('3a')}`, `<b>${M('= 4a^2')}${R('3a')}</b>`) },
      { q: `${R('2')} · ${R('27')} · ${R('6')}`, a: STEPS(`= ${R('2 * 3^3 * 2 * 3')} = ${R('2^2 * 3^4')} = 2 · 3<sup>2</sup>`, '<b>= 18</b>') },
      { q: `${R('54')} · ${R('60')} : ${R('10')}`, a: STEPS(`= ${R('54 * 60 : 10')} = ${R('54 * 6')} = ${R('324')} = ${R('18^2')}`, '<b>= 18</b>') },
      { q: `${R('27a^3')} · ${R('ba^5')} : ${R('3b')}`, a: STEPS(`= ${R('27a^3 * ba^5 : 3b')} = ${R('9a^8')} = ${R('(3a^4)^2')}`, `<b>${M('= 3a^4')}</b>`) },
      { q: `${R('a^2b')} · ${R('(ab)^3')} : ${R('ab^3')}`, a: STEPS(`= ${R('a^2b * a^3b^3 : ab^3')} = ${R('a^4b')} = ${R('a^4')} · ${R('b')}`, `<b>${M('= a^2')}${R('b')}</b>`) }
    ]) },

  { n: 3, s: '8.2', th: ['summur', 'raetur'], g: 'Einfaldið með rótar- og veldareglum.',
    tip: `Reglurnar gilda ekki um summur: einfaldaðu hverja rót fyrir sig (t.d. ${R('28')} = ${R('2^2 * 7')} = 2${R('7')}) og dragðu svo saman.`,
    p: P([
      { q: `${R('28')} + ${R('7')}`, a: STEPS(`= ${R('2^2 * 7')} + ${R('7')} = 2${R('7')} + ${R('7')}`, `<b>= 3${R('7')}</b>`) },
      { q: `${R('28')} − ${R('63')}`, a: STEPS(`= ${R('2^2 * 7')} − ${R('3^2 * 7')} = 2${R('7')} − 3${R('7')}`, `<b>= −${R('7')}</b>`) },
      { q: F(`${R('28')} + ${R('7')}`, '3'), a: STEPS(`= ${F(`2${R('7')} + ${R('7')}`, '3')} = ${F(`3${R('7')}`, '3')}`, `<b>= ${R('7')}</b>`) },
      { q: F(`${R('28')} + ${R('63')}`, R('7')), a: STEPS(`= ${F(`2${R('7')} + 3${R('7')}`, R('7'))} = ${F(`5${R('7')}`, R('7'))}`, '<b>= 5</b>') },
      { q: F(`${R('28')} + ${R('63')}`, `${R('12')} + ${R('27')}`),
        a: STEPS(`= ${F(`2${R('7')} + 3${R('7')}`, `2${R('3')} + 3${R('3')}`)} = ${F(`5${R('7')}`, `5${R('3')}`)}`, `<b>= ${F(R('7'), R('3'))}</b>`) },
      { q: `${R('200000')} + ${R('50000')}`,
        a: STEPS(`= ${R('100^2 * 20')} + ${R('100^2 * 5')} = 100${R('20')} + 100${R('5')}`, `= 100 · 2${R('5')} + 100${R('5')}`, `<b>= 300${R('5')}</b>`) },
      { q: `${R('54', 3)} + ${R('16', 3)}`, a: STEPS(`= ${R('3^3 * 2', 3)} + ${R('2^3 * 2', 3)} = 3${R('2', 3)} + 2${R('2', 3)}`, `<b>= 5${R('2', 3)}</b>`) },
      { q: `${R('2', 4)} + ${R('32', 4)}`, a: STEPS(`= ${R('2', 4)} + ${R('2^4 * 2', 4)} = ${R('2', 4)} + 2${R('2', 4)}`, `<b>= 3${R('2', 4)}</b>`) }
    ]) },

  { n: 4, s: '8.3', th: ['brotin', 'brotindaemi'], g: 'Einfaldið með rótar- og veldareglum án vasareiknis.',
    tip: `Breyttu rótum í veldi (${RT(M('a^p'), I('q'))} = ${X(M('a'), F(I('p'), I('q')))}), frumþáttaðu tölurnar og leggðu saman veldin á eins þáttum.`,
    p: P([
      { q: `${R('6xy^3')} : ${V('(18x^{-1})', F(1, 3))}`,
        a: STEPS(`= ${V('(2 * 3 * x * y^3)', F(1, 2))} · ${V('(2 * 3^2 * x^{-1})', nq(1, 3))}`,
          `= ${X('2', F(1, 2))} · ${X('3', F(1, 2))} · ${V('x', F(1, 2))} · ${V('y', F(3, 2))} · ${X('2', nq(1, 3))} · ${X('3', nq(2, 3))} · ${V('x', F(1, 3))}`,
          `= ${X('2', `${F(1, 2)} − ${F(1, 3)}`)} · ${X('3', `${F(1, 2)} − ${F(2, 3)}`)} · ${V('x', `${F(1, 2)} + ${F(1, 3)}`)} · ${V('y', F(3, 2))}`,
          `<b>= ${X('2', F(1, 6))} · ${X('3', nq(1, 6))} · ${V('x', F(5, 6))} · ${V('y', F(3, 2))} = ${F(`${R('2x^5', 6)} · ${M('y')}${R('y')}`, R('3', 6))}</b>`) },
      { q: `${V('(8x^3)', F(1, 6))} : ${RT(M('27') + R('x'), 3)}`,
        a: STEPS(`= ${V('(2^3 * x^3)', F(1, 6))} · ${X(`(${M('3^3')} · ${V('x', F(1, 2))})`, nq(1, 3))}`,
          `= ${X('2', F(1, 2))} · ${V('x', F(1, 2))} · ${M('3^{-1}')} · ${V('x', nq(1, 6))}`,
          `= ${X('2', F(1, 2))} · ${M('3^{-1}')} · ${V('x', `${F(1, 2)} − ${F(1, 6)}`)}`,
          `<b>= ${X('2', F(1, 2))} · ${M('3^{-1}')} · ${V('x', F(1, 3))} = ${F(`${R('2')} · ${R('x', 3)}`, '3')}</b>`) },
      { q: `${V('x', F(2, 12))} · ${V('y', F(1, 12))} : ${R('y^{-1}x^{-2}', 4)} : ${R('x^2', 3)}`,
        a: STEPS(`= ${V('x', F(1, 6))} · ${V('y', F(1, 12))} · ${V('(y^{-1}x^{-2})', nq(1, 4))} · ${V('x', nq(2, 3))}`,
          `= ${V('x', F(1, 6))} · ${V('y', F(1, 12))} · ${V('y', F(1, 4))} · ${V('x', F(1, 2))} · ${V('x', nq(2, 3))}`,
          `= ${V('x', `${F(1, 6)} + ${F(1, 2)} − ${F(2, 3)}`)} · ${V('y', `${F(1, 12)} + ${F(1, 4)}`)} = ${V('x', F('1 + 3 − 4', 6))} · ${V('y', F('1 + 3', 12))}`,
          `<b>= ${V('y', F(1, 3))} = ${R('y', 3)}</b>`) },
      { q: `${R('2x')} · ${V('(xy)', F(1, 3))} : ${X('4', F(1, 4))} : (${M('y * ')}${R('x^{-1}y^{-4}', 6)})`,
        a: STEPS(`= ${X('2', F(1, 2))} · ${V('x', F(1, 2))} · ${V('x', F(1, 3))} · ${V('y', F(1, 3))} · ${V('(2^2)', nq(1, 4))} · ${M('y^{-1}')} · ${V('(x^{-1}y^{-4})', nq(1, 6))}`,
          `= ${X('2', F(1, 2))} · ${V('x', F(1, 2))} · ${V('x', F(1, 3))} · ${V('y', F(1, 3))} · ${X('2', nq(1, 2))} · ${M('y^{-1}')} · ${V('x', F(1, 6))} · ${V('y', F(2, 3))}`,
          `= ${X('2', `${F(1, 2)} − ${F(1, 2)}`)} · ${V('x', `${F(1, 2)} + ${F(1, 3)} + ${F(1, 6)}`)} · ${V('y', `${F(1, 3)} − 1 + ${F(2, 3)}`)} = ${M('2^0 * x^1 * y^0')}`,
          `<b>${M('= x')}</b>`) },
      { q: F(`${V('(16x^3)', F(1, 5))} : ${R('4x^2', 3)}`, R('x^{-1}', 5)),
        a: STEPS(`= ${V('(2^4x^3)', F(1, 5))} · ${V('(2^2x^2)', nq(1, 3))} · ${V('(x^{-1})', nq(1, 5))}`,
          `= ${X('2', F(4, 5))} · ${V('x', F(3, 5))} · ${X('2', nq(2, 3))} · ${V('x', nq(2, 3))} · ${V('x', F(1, 5))}`,
          `= ${X('2', `${F(4, 5)} − ${F(2, 3)}`)} · ${V('x', `${F(3, 5)} − ${F(2, 3)} + ${F(1, 5)}`)} = ${X('2', F('12 − 10', 15))} · ${V('x', F('9 − 10 + 3', 15))}`,
          `<b>= ${X('2', F(2, 15))}${V('x', F(2, 15))} = ${V('(2x)', F(2, 15))} = ${R('4x^2', 15)}</b>`) },
      { q: `${F(`${R('4xy^2', 3)} : ${V('(2x)', F(1, 2))}`, `${R('8y')} : ${R('x^2', 3)}`)} · ${R('2y', 3)}`,
        a: STEPS(`Teljari: ${X('2', F(2, 3))} · ${V('x', F(1, 3))} · ${V('y', F(2, 3))} · ${X('2', nq(1, 2))} · ${V('x', nq(1, 2))}`,
          `Nefnari: ${X('2', F(3, 2))} · ${V('y', F(1, 2))} · ${V('x', nq(2, 3))}; hann fer upp sem ${X('2', nq(3, 2))} · ${V('y', nq(1, 2))} · ${V('x', F(2, 3))}`,
          `Og ${R('2y', 3)} = ${X('2', F(1, 3))} · ${V('y', F(1, 3))}`,
          `2: ${F(2, 3)} − ${F(1, 2)} − ${F(3, 2)} + ${F(1, 3)} = −1 &nbsp;&nbsp; ${M('x')}: ${F(1, 3)} − ${F(1, 2)} + ${F(2, 3)} = ${F(1, 2)} &nbsp;&nbsp; ${M('y')}: ${F(2, 3)} − ${F(1, 2)} + ${F(1, 3)} = ${F(1, 2)}`,
          `<b>= ${M('2^{-1}')} · ${V('(xy)', F(1, 2))} = ${F(R('xy'), '2')}</b>`) },
      { q: F(`${R('ab^2', 3)} : ${R('a^2b', 4)}`, `${R('(a^{-2}b^{-1})^7', 12)} · ${M('a')}`),
        a: STEPS(`Teljari: ${V('a', F(1, 3))} · ${V('b', F(2, 3))} · ${V('a', nq(1, 2))} · ${V('b', nq(1, 4))} = ${V('a', nq(1, 6))} · ${V('b', F(5, 12))}`,
          `Nefnari: ${V('a', nq(14, 12))} · ${V('b', nq(7, 12))} · ${V('a', F(12, 12))} = ${V('a', nq(1, 6))} · ${V('b', nq(7, 12))}`,
          `= ${V('a', `${nq(1, 6)} + ${F(1, 6)}`)} · ${V('b', `${F(5, 12)} + ${F(7, 12)}`)} = ${M('a^0 * b^1')}`,
          `<b>${M('= b')}</b>`) }
    ]) }
]
};
})());
