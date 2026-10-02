/* Kafli 2 – Grunnatriði um lausnir jafna
   Content transcribed from the book chapter (pages 14–18 + answer key). */
Book.add({
n: 2,
title: 'Grunnatriði um lausnir jafna',
theory: {

jofnur: { t: 'Að leysa jöfnur', h: `
${RULE('Regla 2.1: Heimilt er að', `<ol style="margin:.3rem 0;padding-left:1.4rem">
<li>leggja sömu stærð við báðum megin jafnaðarmerkis.</li>
<li>draga sömu stærð frá báðum megin jafnaðarmerkis.</li>
<li>margfalda báðum megin jafnaðarmerkis með sömu stærð sem er ekki núll.</li>
<li>deila báðum megin jafnaðarmerkis með sömu stærð sem er ekki núll.</li></ol>`)}
<p>Markmiðið er að finna hvaða tala uppfyllir jöfnuna. Við <b>einangrum</b> óþekktu stærðina þannig að hún standi ein öðrum megin, en tölur og önnur tákn hinum megin.</p>
${EXMP('Dæmi 2.1 · Lausn jöfnu', `Leysum jöfnuna ${M('3x - 7 = 5x - 2')}.`, STEPS(
 M('3x - 7 + 2 = 5x - 2 + 2') + ' &nbsp; (bætum 2 við báðum megin)',
 M('3x - 5 = 5x'),
 M('3x - 5 - 3x = 5x - 3x') + ' &nbsp; (drögum 3' + I('x') + ' frá)',
 M('-5 = 2x'),
 F('−5', '2') + ' = ' + F(M('2x'), '2') + ' &nbsp; (deilum með 2)',
 M('<b>x = </b>') + '<b>−' + F(5, 2) + '</b>') +
 `<p>Prófun: ef ${M('x = ')}−${F(5, 2)} fæst −${F(29, 2)} báðum megin.</p>`)}
${EXMP('Dæmi 2.2 · Jafna án lausnar', `Leysum jöfnuna ${M('2x + 5 = 2x - 1')}.`, STEPS(
 M('2x + 5 - 2x - 5 = 2x - 1 - 2x - 5'),
 M('0x = -6')) + '<p>Engin tala uppfyllir þessa jöfnu, svo <b>jafnan hefur enga lausn</b>.</p>')}
${EXMP('Dæmi 2.3 · Jafna með brotum', `Leysum jöfnuna ${F(M('2x'), '3')} − 4 = ${M('2x')} − ${F(M('x + 3'), '2')}.`,
 `Minnsti samnefnari brotanna er ${M('2 · 3 = 6')}. Margföldum báðum megin með 6:` + STEPS(
 M('4x - 24 = 12x - 3(x + 3)'),
 M('4x - 24 = 12x - 3x - 9'),
 M('4x - 24 = 9x - 9'),
 M('4x - 9x = -9 + 24'),
 M('-5x = 15'),
 M('<b>x = -3</b>')))}`},

rot: { t: 'Rætur og veldajöfnur', h: `
<p>Stundum er óþekkta stærðin í veldi, t.d. ${M('x^3 = 8')}. Þar sem ${M('8 = 2^3')} er ${M('x = 2')}. <b>Rætur</b> hjálpa okkur að leysa slíkar jöfnur.</p>
${DEF('Skilgreining 2.2: Ferningsrót', `Ferningsrót tölunnar <i>a</i> (${M('a ≥ 0')}) er rituð ${RT(I('a'))}. Hún er sú tala, <b>ekki neikvæð</b>, sem í öðru veldi gefur <i>a</i>:<br>${RT(I('a'))} = ${M('x')}, ef ${M('x^2 = a')} og ${M('x ≥ 0')}`)}
${ATH(`Það er munur á jöfnunum ${M('x = ')}${RT('4')} og ${M('x^2 = 4')}:<br>
${M('x = ')}${RT('4')} gefur aðeins ${M('x = 2')} (ræturnar eru aldrei neikvæðar).<br>
${M('x^2 = 4')} gefur ${M('x = ±2')}, því ${M('2^2 = 4')} og ${M('(-2)^2 = 4')}.`)}
${DEF('Skilgreining 2.3: q-ta rót', `Látum <i>q</i> vera jákvæða heiltölu og <i>a</i> jákvæða tölu. <i>q</i>-ta rótin af <i>a</i>, táknuð ${RT(I('a'), I('q'))}, er sú tala, ekki neikvæð, sem í veldinu <i>q</i> gefur <i>a</i>:<br>${RT(I('a'), I('q'))} = ${M('x')}, ef ${M('x^q = a')} og ${M('x ≥ 0')}.`)}
${ATH(`Það er <b>enginn</b> munur á jöfnunum ${M('x = ')}${RT('8', 3)} og ${M('x^3 = 8')}. Báðar gefa ${M('x = 2')}, því ${M('2^3 = 8')} en ${M('(-2)^3 = -8')}.`)}
<p><b>Slétt eða odda veldi skiptir máli:</b><br>
${M('(-3)^4 = 81')}: slétt veldi gefur alltaf jákvæða tölu.<br>
${M('(-3)^3 = -27')}: oddatöluveldi getur gefið neikvæða tölu.<br>
Ef <i>q</i> er oddatala má því <i>a</i> og <i>x</i> vera neikvæðar tölur.</p>
${EXMP('Dæmi 2.4 · Rætur af neikvæðum tölum', `Leysum ${M('x^4 = -16')}.`, 'Jafnan hefur <b>enga lausn</b> (slétt veldi er aldrei neikvætt).')}
${EXMP('Dæmi 2.5 · Rætur af neikvæðum tölum', `Leysum ${M('x^5 = -16')}.`, `${M('x = ')}${RT('−16', 5)} = <b>−1.7411</b>`)}`},

einangrun: { t: 'Einangrun breytistærða', h: `
<p>Þegar við einangrum breytistærð erum við að leysa jöfnu fyrir eina stærð, en fleiri óþekktar stærðir eru í jöfnunni. Við megum:</p>
<ol style="padding-left:1.4rem">
<li>leggja sama stærðtákn við báðum megin.</li>
<li>draga sama stærðtákn frá báðum megin.</li>
<li>margfalda báðum megin með sama stærðtákni sem er ekki núll.</li>
<li>deila báðum megin með sama stærðtákni sem er ekki núll.</li></ol>
${EXMP('Dæmi 2.6 · Einangrun breytistærða', `Einangrum <i>v</i> úr jöfnunni ${M('av - 2k = 5')}.`, STEPS(
 M('av - 2k = 5'),
 M('av = 2k + 5'),
 'Ef ' + M('a ≠ 0') + ' má deila með <i>a</i>:',
 M('<b>v = </b>') + '<b>' + F(M('2k + 5'), I('a')) + '</b> &nbsp; þegar ' + M('a ≠ 0')))}`}
},

exercises: [
{ n: 1, s: '2.1', th: ['jofnur'],
  g: 'Leysið jöfnurnar.',
  tip: 'Safnaðu óþekktu stærðinni öðrum megin og tölunum hinum megin. Gerðu alltaf það sama báðum megin.',
  p: P([
  { q: M('2x + 5 = -1'), a: STEPS(M('2x = -6'), M('<b>x = -3</b>')) },
  { q: M('12x - 57 = 27'), a: STEPS(M('12x = 84'), M('<b>x = 7</b>')) },
  { q: M('2 - t = 5 - 7t'), a: STEPS(M('7t - t = 5 - 2'), M('6t = 3'), M('<b>t = </b>') + '<b>' + F(1, 2) + '</b>') },
  { q: M('2 - 3a = 4a + 7'), a: STEPS(M('-3a - 4a = 7 - 2'), M('-7a = 5'), M('<b>a = </b>') + '<b>−' + F(5, 7) + '</b>') },
  { q: M('x + 3 = x + 1'), a: STEPS(M('3 = 1') + ' — það er ósatt.') + '<b>Engin lausn.</b>' },
  { q: M('2x - 1 = 2 + 2x - 3'), a: STEPS(M('2x - 1 = 2x - 1') + ' — alltaf satt.') + '<b>Allar tölur eru lausn:</b> ' + M('x ∈ ℝ') }
  ]) },
{ n: 2, s: '2.1', th: ['jofnur'],
  g: 'Leysið jöfnurnar.',
  tip: 'Margfaldaðu báðum megin með samnefnara brotanna til að losna við brotin. Settu sviga utan um teljara þegar þú margfaldar.',
  p: P([
  { q: M('2 = ') + F(I('x'), '3') + ' + 7', a: STEPS(M('-5 = ') + F(I('x'), '3'), M('<b>x = -15</b>')) },
  { q: '4 − ' + F(M('x - 2'), '3') + M(' = x'), a: STEPS('Margföldum með 3:', M('12 - (x - 2) = 3x'), M('14 - x = 3x'), M('14 = 4x'), M('<b>x = </b>') + '<b>' + F(7, 2) + '</b>') },
  { q: F(I('x'), '3') + ' − ' + F(I('x'), '4') + ' = 1', a: STEPS('Margföldum með 12:', M('4x - 3x = 12'), M('<b>x = 12</b>')) },
  { q: F(I('x'), '3') + ' − ' + F(5, 6) + ' + ' + F(I('x'), '2') + ' = 4', a: STEPS('Margföldum með 6:', M('2x - 5 + 3x = 24'), M('5x = 29'), M('<b>x = </b>') + '<b>' + F(29, 5) + '</b>') },
  { q: '6 − ' + F(M('x - 3'), '2') + M(' = x'), a: STEPS('Margföldum með 2:', M('12 - (x - 3) = 2x'), M('15 - x = 2x'), M('15 = 3x'), M('<b>x = 5</b>')) },
  { q: M('x - ') + F(M('2x + 1'), '3') + ' = 4', a: STEPS('Margföldum með 3:', M('3x - (2x + 1) = 12'), M('x - 1 = 12'), M('<b>x = 13</b>')) },
  { q: F(M('x - 5'), '2') + ' + ' + F(M('x + 1'), '3') + ' = 2', a: STEPS('Margföldum með 6:', M('3(x - 5) + 2(x + 1) = 12'), M('3x - 15 + 2x + 2 = 12'), M('5x = 25'), M('<b>x = 5</b>')) },
  { q: F(M('x + 1'), '2') + ' − ' + F(M('x - 3'), '3') + ' = ' + F(M('2x + 1'), '6'), a: STEPS('Margföldum með 6:', M('3(x + 1) - 2(x - 3) = 2x + 1'), M('3x + 3 - 2x + 6 = 2x + 1'), M('x + 9 = 2x + 1'), M('<b>x = 8</b>')) }
  ]) },
{ n: 3, s: '2.2', th: ['rot'],
  g: 'Leysið jöfnurnar. Skilið svörum bæði með nákvæmum gildum og með fjórum aukastöfum ef nákvæma gildið er ekki heil tala.',
  tip: 'Slétt veldi (2, 4, 6) gefur tvær lausnir ±, en enga lausn ef hægri hliðin er neikvæð. Oddatöluveldi (3, 5, 7) gefur alltaf eina lausn.',
  p: P([
  { q: M('x^2 = 7'), a: M('x = ±') + RT('7') + M(' = <b>±2.6458</b>') },
  { q: M('x^2 = -7'), a: '<b>Engin lausn</b> (annað veldi er aldrei neikvætt).' },
  { q: M('x^3 = 7'), a: M('x = ') + RT('7', 3) + M(' = <b>1.9129</b>') },
  { q: M('x^3 = -7'), a: M('x = ') + RT('−7', 3) + M(' = <b>-1.9129</b>') },
  { q: M('x^7 = 128'), a: M('<b>x = 2</b>') + ' (því ' + M('2^7 = 128') + ')' },
  { q: M('x^7 = -128'), a: M('<b>x = -2</b>') },
  { q: M('x^6 = 4'), a: M('x = ±') + RT('4', 6) + M(' = <b>±1.2599</b>') },
  { q: M('x^6 = -4'), a: '<b>Engin lausn.</b>' },
  { q: M('x^4 = 16'), a: M('<b>x = ±2</b>') },
  { q: M('x = ') + RT('16', 4), a: M('<b>x = 2</b>') + ' (rót er aldrei neikvæð, svo −2 er ekki lausn hér)' }
  ]) },
{ n: 4, s: '2.3', th: ['einangrun', 'jofnur'],
  g: 'Einangrið breytistærðina.',
  tip: 'Farðu eins að og þegar þú leysir jöfnu. Mundu að segja hvaða stærð má ekki vera núll ef þú deilir með henni.',
  p: P([
  { q: '<i>a</i> úr jöfnunni ' + M('F = ma'), a: M('<b>a = </b>') + '<b>' + F(I('F'), I('m')) + '</b> (með ' + M('m ≠ 0') + ')' },
  { q: '<i>m</i> úr jöfnunni ' + M('F = ma'), a: M('<b>m = </b>') + '<b>' + F(I('F'), I('a')) + '</b> (með ' + M('a ≠ 0') + ')' },
  { q: '<i>U</i> úr jöfnunni ' + M('E = K + U'), a: M('<b>U = E - K</b>') },
  { q: '<i>C</i> úr jöfnunni ' + M('F = ') + F(9, 5) + M('C + 32'), a: STEPS(M('F - 32 = ') + F(9, 5) + M('C'), M('<b>C = </b>') + '<b>' + F(5, 9) + M('(F - 32)') + '</b>') },
  { q: '<i>V</i> úr jöfnunni ' + F(M('pV'), I('T')) + M(' = nR'), a: STEPS(M('pV = nRT'), M('<b>V = </b>') + '<b>' + F(M('nRT'), I('p')) + '</b> (með ' + M('p ≠ 0') + ')') },
  { q: '<i>T</i> úr jöfnunni ' + F(M('pV'), I('T')) + M(' = nR'), a: STEPS(M('pV = nRT'), M('<b>T = </b>') + '<b>' + F(M('pV'), M('nR')) + '</b> (með ' + M('nR ≠ 0') + ')') },
  { q: '<i>A</i> úr jöfnunni ' + M('p = ') + F(I('F'), I('A')), a: STEPS(M('pA = F'), M('<b>A = </b>') + '<b>' + F(I('F'), I('p')) + '</b> (með ' + M('p ≠ 0') + ')') },
  { q: '<i>a</i> úr jöfnunni ' + M('s = v_0t + ') + F(1, 2) + M('at^2'), a: STEPS(M('s - v_0t = ') + F(1, 2) + M('at^2'), M('2(s - v_0t) = at^2'), M('<b>a = </b>') + '<b>' + F(M('2(s - v_0t)'), M('t^2')) + '</b> (með ' + M('t ≠ 0') + ')') }
  ]) }
]
});
