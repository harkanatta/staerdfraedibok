/* Kafli 4 – Liðun
   Content transcribed from the book chapter (pages 34–39 + answer key). */
Book.add({
n: 4,
title: 'Liðun',
theory: {

samok: { t: 'Samokareglan', h: `
${RULE('Regla 4.1 (Samokareglan)', `Fyrir öll ${M('a, b ∈ ℝ')} gildir<br><b>${M('(a + b)(a - b) = a^2 - b^2')}</b>`)}
<p><b>Sönnun:</b> ${M('(a + b)(a - b) = a · a - a · b + b · a - b · b = a^2 - ab + ab - b^2 = a^2 - b^2')}</p>
${ATH('Í sönnuninni er margfaldað upp úr svigunum. Nú þurfum við aldrei að gera það aftur, við notum bara regluna.')}
${ATH(M('(a + b)(a - b) = (a - b)(a + b)') + ', svo röð sviganna skiptir ekki máli.')}
${EXMP('Dæmi 4.1 · Liðun með samokareglunni', STEPS(
 '1. ' + M('(x + 2)(x - 2)') + '<br>Látum ' + M('a = x') + ' og ' + M('b = 2') + ':<br>' + M('(x + 2)(x - 2) = x^2 - 2^2 = <b>x^2 - 4</b>'),
 '2. ' + M('(x + 2)(2 - x)') + '<br>Athugum að ' + M('x + 2 = 2 + x') + ', svo ' + M('a = 2') + ' og ' + M('b = x') + ':<br>' + M('(2 + x)(2 - x) = 2^2 - x^2 = <b>4 - x^2</b>'),
 '3. ' + M('(2x - 3y)(2x + 3y)') + '<br>Látum ' + M('a = 2x') + ' og ' + M('b = 3y') + ':<br>' + M('= (2x)^2 - (3y)^2 = <b>4x^2 - 9y^2</b>'),
 '4. ' + M('(4a^2b + 3xy^3)(4a^2b - 3xy^3)') + '<br>Setjum ' + M('4a^2b') + ' í stað <i>a</i> og ' + M('3xy^3') + ' í stað <i>b</i>:<br>' + M('= (4a^2b)^2 - (3xy^3)^2 = <b>16a^4b^2 - 9x^2y^6</b>')))}`},

ferning: { t: 'Ferningsreglurnar', h: `
${RULE('Regla 4.2 (Ferningsregla fyrir samlagningu)', `Fyrir öll ${M('a, b ∈ ℝ')} gildir<br><b>${M('(a + b)^2 = a^2 + 2ab + b^2')}</b>`)}
<p><b>Sönnun:</b> ${M('(a + b)^2 = (a + b)(a + b) = a^2 + ab + ba + b^2 = a^2 + 2ab + b^2')}</p>
${EXMP('Dæmi 4.2 · Ferningsregla fyrir samlagningu', STEPS(
 '1. ' + M('(c + 3)^2') + ' — látum ' + M('a = c') + ' og ' + M('b = 3') + ':<br>' + M('= c^2 + 2 · c · 3 + 3^2 = <b>c^2 + 6c + 9</b>'),
 '2. ' + M('(2c + 3b)^2 = (2c)^2 + 2 · 2c · 3b + (3b)^2 = <b>4c^2 + 12bc + 9b^2</b>'),
 '3. ' + M('(3x + 4y^2)^2 = (3x)^2 + 2 · 3x · 4y^2 + (4y^2)^2 = <b>9x^2 + 24xy^2 + 16y^4</b>')))}
${RULE('Regla 4.3 (Ferningsregla fyrir mismun)', `Fyrir öll ${M('a, b ∈ ℝ')} gildir<br><b>${M('(a - b)^2 = a^2 - 2ab + b^2')}</b>`)}
<p><b>Sönnun:</b> ${M('(a - b)^2 = (a - b)(a - b) = a^2 - ab - ba + b^2 = a^2 - 2ab + b^2')}</p>
${EXMP('Dæmi 4.3 · Ferningsregla fyrir mismun', STEPS(
 '1. ' + M('(x - 4)^2') + ' — látum ' + M('a = x') + ' og ' + M('b = 4') + ':<br>' + M('= x^2 - 2 · x · 4 + 4^2 = <b>x^2 - 8x + 16</b>'),
 '2. ' + M('(2x - 3)^2 = (2x)^2 - 2 · 2x · 3 + 3^2 = <b>4x^2 - 12x + 9</b>'),
 '3. ' + M('(5ab^2 - 3x^3y)^2 = (5ab^2)^2 - 2 · 5ab^2 · 3x^3y + (3x^3y)^2') + '<br>' + M('= <b>25a^2b^4 - 30ab^2x^3y + 9x^6y^2</b>')))}
${ATH(M('b + a = a + b') + ' &nbsp; en &nbsp; ' + M('b - a = -a + b = -(a - b)'))}
${EXMP('Dæmi 4.4', `Liðið og einfaldið ${M('(b - 2a)(2a - b)')}`,
 'Stundum þarf að umrita dæmið áður en hægt er að nota ferningsreglu:' + STEPS(
 M('(b - 2a)(2a - b) = -(2a - b)(2a - b) = -(2a - b)^2'),
 M('= -(4a^2 - 4ab + b^2) = <b>-4a^2 + 4ab - b^2</b>')))}`},

lidun4: { t: 'Liðun með reglunum', h: `
${EXMP('Dæmi 4.5 · Liðun', 'Liðum og notum samokaregluna og/eða ferningsreglurnar þegar hægt er.' + STEPS(
 '1. ' + M('(c + 2)(a - c) = <b>ca - c^2 + 2a - 2c</b>'),
 '2. ' + M('(2a + b)(a + b) = 2a^2 + 2ab + ab + b^2 = <b>2a^2 + 3ab + b^2</b>'),
 '3. ' + M('(x - 2)(x + 3)(x + 2) = (x + 3)(x - 2)(x + 2)') + '<br>' + M('= (x + 3)(x^2 - 4) = <b>x^3 + 3x^2 - 4x - 12</b>'),
 '4. ' + M('(x + 2)(x - 3)(x + 2) = (x + 2)^2(x - 3) = (x^2 + 4x + 4)(x - 3)') + '<br>' + M('= x^3 + 4x^2 + 4x - 3x^2 - 12x - 12 = <b>x^3 + x^2 - 9x - 12</b>'),
 '5. ' + M('3a(a + b + 2)(a - 4b) = 3a(a^2 + ab + 2a - 4ab - 4b^2 - 8b)') + '<br>' + M('= 3a(a^2 + 2a - 3ab - 4b^2 - 8b)') + '<br>' + M('= <b>3a^3 + 6a^2 - 9a^2b - 12ab^2 - 24ab</b>')))}
${EXMP('Dæmi 4.6 · * Liðun', `Liðum ${M('(x + y + z)(x + y - z)')}`,
 `Svigarnir eru eins nema +<i>z</i> í öðrum og −<i>z</i> í hinum. Notum samokaregluna með ${M('a = x + y')} og ${M('b = z')}:` + STEPS(
 M('((x + y) + z)((x + y) - z) = (x + y)^2 - z^2'),
 'Svo ferningsregluna á fyrri liðinn:',
 M('= <b>x^2 + 2xy + y^2 - z^2</b>')))}
${ATH('Í löngum dæmum getur borgað sig að einfalda í hvert sinn sem hægt er, ekki bara í lokin.')}`}
},

exercises: [
{ n: 1, s: '4.1', th: ['samok'],
  g: 'Liðið með samokareglunni með því að fylla rétt inn í eyðurnar og einfaldið svarið ef hægt er.',
  tip: M('(a + b)(a - b) = a^2 - b^2') + '. Finndu hvað er <i>a</i> og hvað er <i>b</i>.',
  p: P([
  { q: M('(x - 7)(x + 7) = ') + SQ(BL) + ' − ' + SQ(BL), a: M('= x^2 - 7^2 = <b>x^2 - 49</b>') },
  { q: M('(a + 4)(a - 4) = ') + SQ(BL) + ' − ' + SQ(BL), a: M('= a^2 - 4^2 = <b>a^2 - 16</b>') },
  { q: M('(2a + b)(2a - b) = ') + SQ(BL) + ' − ' + SQ(BL), a: M('= (2a)^2 - b^2 = <b>4a^2 - b^2</b>') },
  { q: M('(k^2 - 1)(k^2 + 1) = ') + SQ(BL) + ' − ' + SQ(BL), a: M('= (k^2)^2 - 1^2 = <b>k^4 - 1</b>') }
  ]) },
{ n: 2, s: '4.1', th: ['samok'],
  g: 'Liðið með því að nota samokaregluna og einfaldið svarið ef hægt er.',
  tip: 'Röð liðanna í sviga skiptir ekki máli í samlagningu: ' + M('x + 7 = 7 + x') + '.',
  p: P([
  { q: M('(x + 6)(x - 6)'), a: M('= x^2 - 6^2 = <b>x^2 - 36</b>') },
  { q: M('(x - 3)(x + 3)'), a: M('= x^2 - 3^2 = <b>x^2 - 9</b>') },
  { q: M('(7 - x)(x + 7)'), a: M('= (7 - x)(7 + x) = 7^2 - x^2 = <b>49 - x^2</b>') },
  { q: M('(p + b)(p - b)'), a: M('<b>p^2 - b^2</b>') },
  { q: M('(3b + ab)(3b - ab)'), a: M('= (3b)^2 - (ab)^2 = <b>9b^2 - a^2b^2</b>') },
  { q: M('(rq + 2s)(rq - 2s)'), a: M('= (rq)^2 - (2s)^2 = <b>r^2q^2 - 4s^2</b>') },
  { q: M('(2ab^2 - 5x^4y)(2ab^2 + 5x^4y)'), a: M('= (2ab^2)^2 - (5x^4y)^2 = <b>4a^2b^4 - 25x^8y^2</b>') },
  { q: M('(4a^3x + 9by^2)(4a^3x - 9by^2)'), a: M('= (4a^3x)^2 - (9by^2)^2 = <b>16a^6x^2 - 81b^2y^4</b>') }
  ]) },
{ n: 3, s: '4.2', th: ['ferning'],
  g: 'Liðið með ferningsreglunum með því að fylla rétt inn í eyðurnar og einfaldið svarið ef hægt er.',
  tip: M('(a + b)^2 = a^2 + 2 · a · b + b^2') + ' og ' + M('(a - b)^2 = a^2 - 2 · a · b + b^2') + '.',
  p: P([
  ['(x + 1)^2', '+', 'x^2 + 2 · x · 1 + 1^2 = <b>x^2 + 2x + 1</b>'],
  ['(x + 3)^2', '+', 'x^2 + 2 · x · 3 + 3^2 = <b>x^2 + 6x + 9</b>'],
  ['(2x + 5y)^2', '+', '(2x)^2 + 2 · 2x · 5y + (5y)^2 = <b>4x^2 + 20xy + 25y^2</b>'],
  ['(3a + b^2)^2', '+', '(3a)^2 + 2 · 3a · b^2 + (b^2)^2 = <b>9a^2 + 6ab^2 + b^4</b>'],
  ['(x - 2)^2', '−', 'x^2 - 2 · x · 2 + 2^2 = <b>x^2 - 4x + 4</b>'],
  ['(x - 4)^2', '−', 'x^2 - 2 · x · 4 + 4^2 = <b>x^2 - 8x + 16</b>'],
  ['(3t - 5)^2', '−', '(3t)^2 - 2 · 3t · 5 + 5^2 = <b>9t^2 - 30t + 25</b>'],
  ['(4ab^2 - 3x)^2', '−', '(4ab^2)^2 - 2 · 4ab^2 · 3x + (3x)^2 = <b>16a^2b^4 - 24ab^2x + 9x^2</b>']
  ].map(([q, sign, a]) => ({ q: M(q + ' = ') + SQ(BL) + ` ${sign} 2 · ` + BL + ' · ' + BL + ' + ' + SQ(BL), a: M('= ' + a) }))) },
{ n: 4, s: '4.2', th: ['ferning', 'samok'],
  g: 'Liðið með því að nota ferningsreglur og einfaldið svarið ef hægt er.',
  tip: 'Ef svigarnir eru eins er þetta ferningur: ' + M('(2 + b)(b + 2) = (2 + b)^2') + '. Ef þeir eru „öfugir“: ' + M('(2 - b)(b - 2) = -(b - 2)^2') + '.',
  p: P([
  { q: M('(2x - 1)^2'), a: M('= (2x)^2 - 2 · 2x · 1 + 1^2 = <b>4x^2 - 4x + 1</b>') },
  { q: M('(2 + b)^2'), a: M('= 2^2 + 2 · 2 · b + b^2 = <b>4 + 4b + b^2</b>') },
  { q: M('(2 + b)(b + 2)'), a: M('= (2 + b)^2 = <b>4 + 4b + b^2</b>') },
  { q: M('(2 - b)(b - 2)'), a: M('= -(b - 2)(b - 2) = -(b - 2)^2 = -(b^2 - 4b + 4) = <b>-b^2 + 4b - 4</b>') },
  { q: M('(xyz + ab)^2'), a: M('<b>x^2y^2z^2 + 2xyzab + a^2b^2</b>') },
  { q: M('(a + px)^2'), a: M('<b>a^2 + 2apx + p^2x^2</b>') },
  { q: M('(2aby - 5xy)^2'), a: M('<b>4a^2b^2y^2 - 20abxy^2 + 25x^2y^2</b>') },
  { q: M('(2aby + 5xy)^2'), a: M('<b>4a^2b^2y^2 + 20abxy^2 + 25x^2y^2</b>') }
  ]) },
{ n: 5, s: '4.2', th: ['ferning'],
  g: '* Búið til ferningsreglu fyrir ' + M('(-a + b)^2') + '.',
  tip: M('-a + b = b - a') + '. Notaðu ferningsreglu fyrir mismun.',
  p: [{ q: M('(-a + b)^2 = ?'), a: STEPS(M('(-a + b)^2 = (b - a)^2 = b^2 - 2ab + a^2'), M('<b>(-a + b)^2 = a^2 - 2ab + b^2</b>')) }] },
{ n: 6, s: '4.2', th: ['ferning'],
  g: '* Búið til ferningsreglu fyrir ' + M('(-a - b)^2') + '.',
  tip: M('-a - b = -(a + b)') + ', og mínus í öðru veldi verður plús.',
  p: [{ q: M('(-a - b)^2 = ?'), a: STEPS(M('(-a - b)^2 = (-(a + b))^2 = (a + b)^2'), M('<b>(-a - b)^2 = a^2 + 2ab + b^2</b>')) }] },
{ n: 7, s: '4.3', th: ['lidun4', 'ferning', 'samok', '1:lidun'],
  g: 'Liðið. Notið fernings- og samokareglur þar sem við á og munið að einfalda í lokin ef hægt er.',
  tip: 'Ef tala stendur fyrir framan svigana: liðaðu svigana fyrst og margfaldaðu svo með tölunni.',
  p: P([
  { q: M('(x + 5)^2'), a: M('<b>x^2 + 10x + 25</b>') },
  { q: M('2(x - 6)^2'), a: M('= 2(x^2 - 12x + 36) = <b>2x^2 - 24x + 72</b>') },
  { q: M('3(2aby - 5xy)(2aby + 5xy)'), a: M('= 3(4a^2b^2y^2 - 25x^2y^2) = <b>12a^2b^2y^2 - 75x^2y^2</b>') },
  { q: M('(2x - 3)^2'), a: M('<b>4x^2 - 12x + 9</b>') },
  { q: M('3x(x + 2)(x + 3)'), a: M('= 3x(x^2 + 5x + 6) = <b>3x^3 + 15x^2 + 18x</b>') },
  { q: M('(-2a + b)^2'), a: M('= (b - 2a)^2 = <b>4a^2 - 4ab + b^2</b>') },
  { q: M('4(5x - 1)(5x + 1)'), a: M('= 4(25x^2 - 1) = <b>100x^2 - 4</b>') },
  { q: M('(-1 - x)^2'), a: M('= (1 + x)^2 = <b>x^2 + 2x + 1</b>') }
  ]) },
{ n: 8, s: '4.3', th: ['lidun4', 'ferning', 'samok', '1:lidun'],
  g: 'Liðið. Notið fernings- og samokareglur þar sem við á og munið að einfalda í lokin ef hægt er.',
  tip: 'Leitaðu að pörum af svigum sem passa við samokaregluna, t.d. ' + M('(x + 3)(x - 3)') + ', og liðaðu þá fyrst.',
  p: P([
  { q: M('(x + y + 2)(x - y)'), a: M('= x^2 - xy + xy - y^2 + 2x - 2y = <b>x^2 - y^2 + 2x - 2y</b>') },
  { q: M('(2ab - xy)^2(x + 1)'), a: STEPS(M('= (4a^2b^2 - 4abxy + x^2y^2)(x + 1)'), M('= <b>4a^2b^2x - 4abx^2y + x^3y^2 + 4a^2b^2 - 4abxy + x^2y^2</b>')) },
  { q: M('(x - 3)(x + 7)(x + 3)'), a: M('= (x^2 - 9)(x + 7) = <b>x^3 + 7x^2 - 9x - 63</b>') },
  { q: M('(x + y)(x + 1)(a + 1)'), a: STEPS(M('= (x^2 + x + xy + y)(a + 1)'), M('= <b>ax^2 + axy + ax + ay + x^2 + xy + x + y</b>')) },
  { q: M('(x - 7)(x + 7)(x^2 + 49)'), a: M('= (x^2 - 49)(x^2 + 49) = x^4 - 49^2 = <b>x^4 - 2401</b>') },
  { q: M('(x + 2)(x - 3)(x - 2)(x + 3)'), a: M('= (x^2 - 4)(x^2 - 9) = <b>x^4 - 13x^2 + 36</b>') },
  { q: M('(x - y)(x - 1)(a - 1)'), a: STEPS(M('= (x^2 - x - xy + y)(a - 1)'), M('= <b>ax^2 - axy - ax + ay - x^2 + xy + x - y</b>')) },
  { q: M('(2 - x)^2(2 + x)^2'), a: M('= ((2 - x)(2 + x))^2 = (4 - x^2)^2 = <b>16 - 8x^2 + x^4</b>') },
  { q: M('2x - (x - 2)^2'), a: M('= 2x - (x^2 - 4x + 4) = <b>-x^2 + 6x - 4</b>') },
  { q: M('(x + 1)^2 - (x + 5)(x - 5)'), a: M('= x^2 + 2x + 1 - (x^2 - 25) = <b>2x + 26</b>') },
  { q: M('(a + b + 3)(a + b - 3)'), a: M('= (a + b)^2 - 3^2 = <b>a^2 + 2ab + b^2 - 9</b>') },
  { q: M('x - (2y - (x + 2)(y - 3))'), a: STEPS(M('(x + 2)(y - 3) = xy - 3x + 2y - 6'), M('2y - (xy - 3x + 2y - 6) = -xy + 3x + 6'), M('x - (-xy + 3x + 6) = <b>xy - 2x - 6</b>')) }
  ]) }
]
});
