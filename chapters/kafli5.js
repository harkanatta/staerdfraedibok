/* Kafli 5 – Þáttun (drög)
   Content transcribed from the draft chapter (pages 40–45 + answer key). */
Book.add({
n: 5,
title: 'Þáttun',
draft: true,
theory: {

thattun: { t: 'Grunnatriði um þáttun', h: `
${ATH('<b>Þáttun:</b> Að umrita stæðu sem er fleiri en einn liður yfir í einn lið.')}
<p>Þáttun er <b>gagnstæð</b> við liðun. Hún er mjög mikilvæg í eðlisfræði, stærðfræði og fleiri greinum.</p>
<p>Grunnurinn að þáttun er að taka sameiginlega stærðir út fyrir sviga:</p>
<ul style="padding-left:1.2rem"><li>Ef allir liðir stæðu innihalda sama þáttinn má taka hann út fyrir sviga.</li>
<li>Stundum getur verið gagnlegt að taka mínus út fyrir sviga.</li></ul>
${EXMP('Dæmi 5.1 · Þáttun með því að taka út fyrir sviga', STEPS(
 '1. ' + M('3x + 12 = 3x + 3 · 4 = <b>3(x + 4)</b>'),
 '2. ' + M('3x^2 + x = <b>x(3x + 1)</b>'),
 '3. ' + M('x^4 + x^3 = <b>x^3(x + 1)</b>'),
 '4. ' + M('25xy - 10y = 5 · 5 · x · y - 2 · 5 · y = <b>5y(5x - 2)</b>'),
 '5. ' + M('25x^2 - 5x = 5^2x^2 - 5x = <b>5x(5x - 1)</b>'),
 '6. ' + M('25ax^2b - 5axb = 5^2ax^2b - 5axb = <b>5axb(5x - 1)</b>')))}
<p>Þú getur alltaf prófað svarið: liðaðu það aftur og athugaðu hvort upphaflega stæðan kemur út.</p>`},

samok5: { t: 'Þáttun með samokareglunni', h: `
${RULE('Samokareglan', `<b>${M('a^2 - b^2 = (a + b)(a - b)')}</b>`)}
${EXMP('Dæmi 5.2 · Þáttun með samokareglunni', STEPS(
 '1. ' + M('x^2 - 4 = x^2 - 2^2 = <b>(x + 2)(x - 2)</b>'),
 '2. ' + M('y^2 - 16 = y^2 - 4^2 = <b>(y + 4)(y - 4)</b>'),
 '3. ' + M('p^2y^2 - 25a^2 = (py)^2 - (5a)^2 = <b>(py + 5a)(py - 5a)</b>'),
 '4. ' + M('k^2 - 5 = k^2 - ') + '(' + RT('5') + ')<sup>2</sup> = <b>' + M('(k + ') + RT('5') + M(')(k - ') + RT('5') + ')</b>',
 '5. ' + M('4x^2 - 17 = (2x)^2 - ') + '(' + RT('17') + ')<sup>2</sup> = <b>' + M('(2x + ') + RT('17') + M(')(2x - ') + RT('17') + ')</b>'))}
${EXMP('Dæmi 5.3 · Þáttun', `Þáttum ${M('a^4 - b^4')}`,
 STEPS(M('a^4 - b^4 = (a^2)^2 - (b^2)^2 = (a^2 + b^2)(a^2 - b^2)')) +
 `<p>Svigann ${M('a^2 - b^2')} má þátta aftur: ${M('(a + b)(a - b)')}. En ${M('a^2 + b^2')} er ekki hægt að þátta með samokareglunni (þar er plús á milli).</p>` +
 STEPS(M('a^4 - b^4 = <b>(a^2 + b^2)(a + b)(a - b)</b>')))}
${EXMP('Dæmi 5.4 · Þáttun', STEPS(
 '1. ' + M('a^3b^2 - 9ab^2 = ab^2(a^2 - 9) = ab^2(a^2 - 3^2) = <b>ab^2(a + 3)(a - 3)</b>'),
 '2. ' + M('4x^3 - 16x = 4x(x^2 - 4) = 4x(x^2 - 2^2) = <b>4x(x + 2)(x - 2)</b>')))}
<p><b>Ráð:</b> Taktu fyrst sameiginlega þætti út fyrir sviga, og athugaðu svo hvort svigann megi þátta með samokareglunni.</p>`},

ferning5: { t: 'Þáttun með ferningsreglum', h: `
${RULE('Ferningsreglurnar', `<b>${M('a^2 + 2 · a · b + b^2 = (a + b)^2')}</b><br><b>${M('a^2 - 2 · a · b + b^2 = (a - b)^2')}</b>`)}
<p>Að þátta með ferningsreglu felur í sér að finna <i>a</i> og <i>b</i>, sem geta verið tölur, tákn eða blanda af hvoru tveggja. Umritum liðina þrjá þannig að ferningsformið komi fram.</p>
${EXMP('Dæmi 5.5 · Þáttun með ferningsreglum', STEPS(
 '1. ' + M('x^2 + 4x + 4 = x^2 + 2 · 2 · x + 2^2 = <b>(x + 2)^2</b>'),
 '2. ' + M('x^2 - 10x + 25 = x^2 - 2 · 5 · x + 5^2 = <b>(x - 5)^2</b>'),
 '3. ' + M('a^2x^2 - 10ax + 25 = (ax)^2 - 2 · 5 · ax + 5^2 = <b>(ax - 5)^2</b>')))}
${EXMP('Dæmi 5.6 · Þáttun', STEPS(
 '1. ' + M('ax^2 + 10ax + 25a = a(x^2 + 10x + 25) = a(x^2 + 2 · 5 · x + 5^2) = <b>a(x + 5)^2</b>'),
 '2. ' + M('3a^2x^2 - 24axz + 48z^2 = 3(a^2x^2 - 8axz + 16z^2)') + '<br>' + M('= 3((ax)^2 - 2 · ax · 4z + (4z)^2) = <b>3(ax - 4z)^2</b>')))}
<p><b>Próf:</b> Stæða er ferningur ef fyrsti og síðasti liðurinn eru ferningar (${M('a^2')} og ${M('b^2')}) og miðliðurinn er nákvæmlega ${M('2 · a · b')}.</p>`},

agiskun: { t: 'Ágiskunaraðferðin', h: `
${RULE('Regla 5.1 (Ágiskunarreglan)', `Ef þátta á ${M('x^2 + bx + c')} þarf að finna tvær tölur, <i>s</i> og <i>p</i>, þannig að<br>${M('s · p = c')} og ${M('s + p = b')}.<br>Þá gildir ${M('x^2 + bx + c = (x + s)(x + p)')}.`)}
<p><b>Sönnun:</b> ${M('(x + s)(x + p) = x^2 + sx + px + s · p = x^2 + (s + p)x + s · p')}.</p>
${ATH('Tölurnar <i>s</i> og <i>p</i> geta verið neikvæðar, önnur eða báðar.')}
${EXMP('Dæmi 5.7 · Ágiskunaraðferðin', `Þáttum ${M('x^2 + 5x + 6')}`,
 `Finnum öll pör af heilum tölum með ${M('s · p = 6')} og athugum hvort ${M('s + p = 5')}.` +
 TB([I('s'), I('p'), M('s + p'), ''], [['1', '6', '7', ''], ['2', '3', '5', '✓']]) +
 M('x^2 + 5x + 6 = <b>(x + 2)(x + 3)</b>'))}
${EXMP('Dæmi 5.8 · Ágiskunaraðferðin', `Þáttum ${M('x^2 - 4x - 12')}`,
 'Aftasti liðurinn er neikvæður, svo önnur talan þarf að vera neikvæð.' +
 TB([I('s'), I('p'), M('s + p'), ''], [['1', '−12', '−11', ''], ['2', '−6', '−4', '✓'], ['3', '−4', '−1', ''], ['4', '−3', '1', ''], ['6', '−2', '4', ''], ['12', '−1', '11', '']]) +
 M('x^2 - 4x - 12 = <b>(x + 2)(x - 6)</b>'))}
${EXMP('Dæmi 5.9 · Ágiskunaraðferðin', `Þáttum ${M('x^2 - 12x + 32')}`,
 'Margfeldið á að vera jákvætt en summan neikvæð, svo báðar tölurnar eru neikvæðar.' +
 TB([I('s'), I('p'), M('s + p'), ''], [['−1', '−32', '−33', ''], ['−2', '−16', '−18', ''], ['−4', '−8', '−12', '✓']]) +
 M('x^2 - 12x + 32 = <b>(x - 4)(x - 8)</b>'))}
${EXMP('Dæmi 5.10 · Ágiskunaraðferðin', `Þáttum ${M('2ax^2 + 16ax - 40a')}`,
 'Byrjum á að taka út fyrir sviga og notum síðan ágiskunaraðferðina.' +
 TB([I('s'), I('p'), M('s + p'), ''], [['−1', '20', '19', ''], ['−2', '10', '8', '✓'], ['−4', '5', '1', ''], ['−5', '4', '−1', ''], ['−10', '2', '−8', ''], ['−20', '1', '−19', '']]) +
 STEPS(M('2ax^2 + 16ax - 40a = 2a(x^2 + 8x - 20)'), M('= <b>2a(x - 2)(x + 10)</b>')))}`}
},

exercises: [
{ n: 1, s: '5.1', th: ['thattun'],
  g: 'Þáttið stærðtáknin.',
  tip: 'Finndu það sem er í <b>öllum</b> liðunum (tölur og stafi) og taktu það út fyrir sviga.',
  p: P([
  { q: M('5x + 5'), a: M('<b>5(x + 1)</b>') },
  { q: 'Takið −5 út fyrir sviga: ' + M('-5x + 5'), a: M('<b>-5(x - 1)</b>') },
  { q: 'Takið −5 út fyrir sviga: ' + M('-5x - 5'), a: M('<b>-5(x + 1)</b>') },
  { q: 'Takið −5 út fyrir sviga: ' + M('5x - 5'), a: M('<b>-5(1 - x)</b>') + ' &nbsp; (eða ' + M('-5(-x + 1)') + ')' },
  { q: M('ay + by'), a: M('<b>y(a + b)</b>') },
  { q: M('3ayx - 6byx - 27ybcx'), a: M('<b>3yx(a - 2b - 9bc)</b>') },
  { q: M('x^{11} - x^8'), a: M('<b>x^8(x^3 - 1)</b>') },
  { q: M('x^5 + x^4'), a: M('<b>x^4(x + 1)</b>') },
  { q: M('3ay^2 - 6by'), a: M('<b>3y(ay - 2b)</b>') },
  { q: M('8a^3bc - 12a^2bc^2 + 4a^2c'), a: M('<b>4a^2c(2ab - 3bc + 1)</b>') },
  { q: M('8ab^3x - 2abx^2 + 6b^2x^2'), a: M('<b>2bx(4ab^2 - ax + 3bx)</b>') },
  { q: M('12a^2b^2c + 18ab^2c^2 - 6ab^2c'), a: M('<b>6ab^2c(2a + 3c - 1)</b>') }
  ]) },
{ n: 2, s: '5.2', th: ['samok5', 'thattun'],
  g: 'Þáttið með samokareglu.',
  tip: 'Skrifaðu báða liðina sem ferninga: ' + M('a^2 - b^2') + '. Svarið er ' + M('(a + b)(a - b)') + '.',
  p: P([
  { q: M('x^2 - 25'), a: M('= x^2 - 5^2 = <b>(x + 5)(x - 5)</b>') },
  { q: M('4x^2 - 1'), a: M('= (2x)^2 - 1^2 = <b>(2x + 1)(2x - 1)</b>') },
  { q: M('a^2b^2 - c^2'), a: M('= (ab)^2 - c^2 = <b>(ab + c)(ab - c)</b>') },
  { q: M('49z^2 - 81w^2'), a: M('= (7z)^2 - (9w)^2 = <b>(7z + 9w)(7z - 9w)</b>') },
  { q: M('x^2y^4z^2 - 36'), a: M('= (xy^2z)^2 - 6^2 = <b>(xy^2z + 6)(xy^2z - 6)</b>') },
  { q: M('x^2y^2 - 36z^2'), a: M('= (xy)^2 - (6z)^2 = <b>(xy + 6z)(xy - 6z)</b>') }
  ]) },
{ n: 3, s: '5.2', th: ['samok5', 'thattun'],
  g: 'Þáttið.',
  tip: 'Taktu fyrst sameiginlega þætti út fyrir sviga. Ef talan er ekki ferningur, t.d. 2, má skrifa hana sem ' + '(' + RT('2') + ')<sup>2</sup>.',
  p: P([
  { q: M('x^3 - 36x'), a: M('= x(x^2 - 36) = <b>x(x + 6)(x - 6)</b>') },
  { q: M('x^2 - 2'), a: M('= x^2 - ') + '(' + RT('2') + ')<sup>2</sup> = <b>' + M('(x + ') + RT('2') + M(')(x - ') + RT('2') + ')</b>' },
  { q: M('4a^3 - 36a'), a: M('= 4a(a^2 - 9) = <b>4a(a + 3)(a - 3)</b>') },
  { q: M('a^2 - 3'), a: '<b>' + M('(a + ') + RT('3') + M(')(a - ') + RT('3') + ')</b>' +
    '<br><small>(Í svarlykli bókarinnar stendur <i>x</i> í stað <i>a</i>; það er prentvilla.)</small>' },
  { q: M('x^4 - 1'), a: M('= (x^2 + 1)(x^2 - 1) = <b>(x^2 + 1)(x + 1)(x - 1)</b>') },
  { q: M('x^4 - 16'), a: M('= (x^2 + 4)(x^2 - 4) = <b>(x^2 + 4)(x + 2)(x - 2)</b>') },
  { q: M('a^4b^4 - c^4'), a: M('= (a^2b^2 + c^2)(a^2b^2 - c^2) = <b>(a^2b^2 + c^2)(ab + c)(ab - c)</b>') },
  { q: M('16a^4 - 81'), a: M('= (4a^2 + 9)(4a^2 - 9) = <b>(4a^2 + 9)(2a + 3)(2a - 3)</b>') }
  ]) },
{ n: 4, s: '5.3', th: ['ferning5'],
  g: 'Þáttið með ferningsreglum.',
  tip: 'Finndu <i>a</i> og <i>b</i> út frá fyrsta og síðasta liðnum. Athugaðu svo hvort miðliðurinn sé 2 · <i>a</i> · <i>b</i>. Röð liðanna getur verið önnur en venjulega.',
  p: P([
  { q: M('x^2 + 8x + 16'), a: M('= x^2 + 2 · 4 · x + 4^2 = <b>(x + 4)^2</b>') },
  { q: M('x^2 + 6x + 9'), a: M('= x^2 + 2 · 3 · x + 3^2 = <b>(x + 3)^2</b>') },
  { q: M('x^2 - 6x + 9'), a: M('= x^2 - 2 · 3 · x + 3^2 = <b>(x - 3)^2</b>') },
  { q: M('x^2 - 2x + 1'), a: M('= x^2 - 2 · 1 · x + 1^2 = <b>(x - 1)^2</b>') },
  { q: M('9x^2 + 12xy + 4y^2'), a: M('= (3x)^2 + 2 · 3x · 2y + (2y)^2 = <b>(3x + 2y)^2</b>') },
  { q: M('a^2x^2 - 2axby + b^2y^2'), a: M('= (ax)^2 - 2 · ax · by + (by)^2 = <b>(ax - by)^2</b>') },
  { q: M('x^2 + 36y^2 + 12xy'), a: M('= x^2 + 2 · x · 6y + (6y)^2 = <b>(x + 6y)^2</b>') },
  { q: M('16x^2y^2 + 49 - 56xy'), a: M('= (4xy)^2 - 2 · 4xy · 7 + 7^2 = <b>(4xy - 7)^2</b>') }
  ]) },
{ n: 5, s: '5.3', th: ['ferning5', 'thattun'],
  g: 'Þáttið.',
  tip: 'Taktu fyrst sameiginlega þætti út fyrir sviga. Þá kemur ferningsform í ljós inni í sviganum.',
  p: P([
  { q: M('ax^2 - 10ax + 25a'), a: M('= a(x^2 - 10x + 25) = <b>a(x - 5)^2</b>') },
  { q: M('8x^2 - 24x + 18'), a: M('= 2(4x^2 - 12x + 9) = <b>2(2x - 3)^2</b>') },
  { q: M('36a^3x^2 + 120a^2x^3 + 100ax^4'), a: M('= 4ax^2(9a^2 + 30ax + 25x^2) = <b>4ax^2(3a + 5x)^2</b>') },
  { q: M('25a^2x^6 - 40ax^4 + 16x^2'), a: M('= x^2(25a^2x^4 - 40ax^2 + 16) = <b>x^2(5ax^2 - 4)^2</b>') }
  ]) },
{ n: 6, s: '5.3', th: ['ferning5'],
  g: 'Hvert eftirfarandi stærðtákna er hægt að þátta með ferningsreglu?',
  tip: 'Finndu <i>a</i> og <i>b</i> úr fyrsta og síðasta liðnum og reiknaðu 2 · <i>a</i> · <i>b</i>. Ef það passar við miðliðinn er svarið já.',
  p: P([
  tf(M('x^2 - 5x + 25'), false, M('(x - 5)^2 = x^2 - 10x + 25') + ', en hér er miðliðurinn ' + M('-5x') + '.', ['Já', 'Nei']),
  tf(M('x^2 + 10x + 25'), true, M('= (x + 5)^2'), ['Já', 'Nei']),
  tf(M('4x^2 + 10 + 25'), false, 'það vantar <i>x</i> í miðliðinn. (Jafnvel ' + M('4x^2 + 10x + 25') + ' gengi ekki, því ' + M('(2x + 5)^2 = 4x^2 + 20x + 25') + '.)', ['Já', 'Nei']),
  tf(M('4x^2 - 20x + 25'), true, M('= (2x - 5)^2'), ['Já', 'Nei']),
  tf(M('4x^2 - 40x + 25'), false, M('(2x - 5)^2') + ' gefur ' + M('-20x') + ', ekki ' + M('-40x') + '.', ['Já', 'Nei']),
  tf(M('49x^2 + 15x + 64'), false, M('(7x + 8)^2') + ' gefur ' + M('112x') + ' í miðliðinn.', ['Já', 'Nei']),
  tf(M('49x^2 - 56x + 64'), false, M('(7x - 8)^2') + ' gefur ' + M('-112x') + ' í miðliðinn.', ['Já', 'Nei']),
  tf(M('49x^2 + 112x + 64'), true, M('= (7x + 8)^2'), ['Já', 'Nei'])
  ]) },
{ n: 7, s: '5.4', th: ['agiskun', 'thattun'],
  g: 'Þáttið með ágiskunaraðferðinni.',
  tip: 'Finndu tvær tölur <i>s</i> og <i>p</i> þar sem margfeldið er síðasta talan og summan er talan fyrir framan <i>x</i>. Ef allir liðir hafa sameiginlegan þátt, taktu hann fyrst út fyrir sviga.',
  p: P([
  { q: M('x^2 + 7x + 12'), a: M('s = 3, p = 4') + ' → ' + M('<b>(x + 3)(x + 4)</b>') },
  { q: M('y^2 - 7y + 12'), a: M('s = -3, p = -4') + ' → ' + M('<b>(y - 3)(y - 4)</b>') },
  { q: M('p^2 - p - 12'), a: '3 og −4 → ' + M('<b>(p + 3)(p - 4)</b>') },
  { q: M('b^2 + b - 12'), a: '−3 og 4 → ' + M('<b>(b - 3)(b + 4)</b>') },
  { q: M('x^2 + x - 20'), a: M('s = -4, p = 5') + ' → ' + M('<b>(x - 4)(x + 5)</b>') },
  { q: M('x^2 - 9x + 20'), a: M('s = -4, p = -5') + ' → ' + M('<b>(x - 4)(x - 5)</b>') },
  { q: M('x^2 + 8x - 20'), a: M('s = -2, p = 10') + ' → ' + M('<b>(x - 2)(x + 10)</b>') },
  { q: M('x^2 + 14x + 48'), a: M('s = 6, p = 8') + ' → ' + M('<b>(x + 6)(x + 8)</b>') },
  { q: M('ax^2 - 19ax + 48a'), a: M('= a(x^2 - 19x + 48)') + ', ' + M('s = -3, p = -16') + ' → ' + M('<b>a(x - 3)(x - 16)</b>') },
  { q: M('2x^2 + 32x + 96'), a: M('= 2(x^2 + 16x + 48)') + ', ' + M('s = 4, p = 12') + ' → ' + M('<b>2(x + 4)(x + 12)</b>') }
  ]) }
]
});
