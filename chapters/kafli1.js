/* Kafli 1 – Grunnatriði í talnareikning og algebru
   Content transcribed from the book chapter (pages 2–13 + answer key). */
Book.add({
n: 1,
title: 'Grunnatriði í talnareikning og algebru',
theory: {

forgangur: { t: 'Forgangsröð aðgerða', h: `
<p>Þegar tölur og bókstafir eru tengdir saman með reikniaðgerðum er talað um <b>stæðu</b>.</p>
${RULE('Regla 1.1 (Forgangsröð aðgerða)', `<ol style="margin:.3rem 0;padding-left:1.4rem">
<li>Ef stæða inniheldur sviga skal byrja á að einfalda svigana fyrst. Byrjað er á <b>innsta</b> sviganum.</li>
<li>Plúsar og mínusar skipta stæðu í <b>liði</b>. Hver liður er reiknaður fyrst, frá vinstri til hægri, áður en lagt er saman eða dregið frá.</li>
<li>Margföldun og deiling skipta hverjum lið í <b>þætti</b>. Margföldunin eða deilingin á aðeins við um næstu tölu eða tákn á eftir.</li></ol>`)}
<p>Deilt er aðeins með næstu tölu á eftir deilingarmerkinu:<br>${M('6 : 3(1 + 1) = 6 : 3 · (1 + 1) = 6 : 3 · 2 = 2 · 2 = 4')}</p>
<p>Brotastrik skilur að teljara og nefnara eins og svigi. Teljari og nefnari eru því reiknaðir hvor í sínu lagi fyrst.</p>
${EXMP('Dæmi 1.1 · Forgangsröð aðgerða', STEPS(
  M('3(5 - 2) = 3 · 3 = <b>9</b>'),
  M('6 : (2 - 4) = 6 : (-2) = <b>-3</b>'),
  M('6 : 2 - 4 = 3 - 4 = <b>-1</b>'),
  M('3 · 2 - 3 · 4 = 6 - 12 = <b>-6</b>'),
  M('2(3 - 5) + 4 · 2 = 2(-2) + 8 = -4 + 8 = <b>4</b>')))}
${EXMP('Dæmi 1.2 · Reiknað í mörgum skrefum', `
<p><b>a)</b></p>${STEPS(M('10 : 2 · 3 - 4 · 3 : 6'), M('= 5 · 3 - 12 : 6'), M('= 15 - 2 = <b>13</b>'))}
<p><b>b)</b></p>${STEPS(M('6 : 2 - 3(4 + 2 : (6 + 3 - 7) · 3)'), M('= 3 - 3(4 + 2 : 2 · 3)'), M('= 3 - 3(4 + 1 · 3)'), M('= 3 - 3(4 + 3)'), M('= 3 - 3 · 7'), M('= 3 - 21 = <b>-18</b>'))}
<p><b>c)</b></p>${STEPS(F(M('6 - (2 - 5)'), M('6 - 2 - 5')) + ' = ' + F(M('6 - (-3)'), M('4 - 5')) + ' = ' + F(M('6 + 3'), M('-1')) + ' = ' + F('9', '−1') + ' = <b>−9</b>')}`)}
${EXMP('Dæmi 1.3 · Öll skref sýnd', `Reiknum ${M('6 · 3 - 2 · (5 · 8 : 2 - (6 + 12 : (-3)) + (8 + 10) : (8 - 10))')} án reiknivélar.`,
`Reiknum tvær tölur í einu. Byrjum á innsta sviganum.
${STEPS(M('= 18 - 2 · (40 : 2 - (6 - 4) + 18 : (-2))'), M('= 18 - 2 · (20 - 2 - 9)'), M('= 18 - 2 · 9'), M('= 18 - 18 = <b>0</b>'))}`)}`},

frumthattun: { t: 'Frumtölur og frumþáttun', h: `
${DEF('Skilgreining 1.2: Frumtala', '<b>Frumtala</b> er náttúrleg tala stærri en 1 sem hefur aðeins sjálfa sig og 1 fyrir jákvæða þætti.')}
${RULE('Regla 1.3 (Frumþáttun)', 'Sérhverja náttúrlega tölu stærri en 1 má rita sem margfeldi af frumtölum á nákvæmlega einn veg, burtséð frá röð.')}
<p>Tölur sem eru ekki frumtölur heita <b>samsettar tölur</b>. Til dæmis er ${M('12 = 2 · 2 · 3')}.</p>
${EXMP('Dæmi 1.4 · Frumþáttun tölu', 'Frumþáttum töluna 60.',
`Setjum 60 efst. Undir hana skrifum við frumtölu sem gengur upp í hana, t.d. 2. Þá er ${F(60, 2)} = 30 næsta tala. Höldum áfram þar til 1 er komin efst.
${TB(['60', '30', '15', '5', '1'], [['2', '2', '3', '5', '']])}
${M('60 = 2 · 2 · 3 · 5 = <b>2^2 · 3 · 5</b>')}
<p>Gott er að prófa frumtölurnar í stærðarröð (2, 3, 5, 7, 11, …) svo enginn þáttur gleymist.</p>`)}
${ATH(`<ul style="margin:.2rem 0;padding-left:1.2rem">
<li>Talan <b>2</b> gengur upp í allar sléttar tölur.</li>
<li>Talan <b>3</b> gengur upp í tölu ef 3 gengur upp í þversummu hennar (summu talnanna).</li>
<li>Talan <b>5</b> gengur upp í tölu sem endar á 0 eða 5.</li></ul>`)}
<p><b>Er talan frumtala?</b> Það nægir að prófa frumtölur upp að ferningsrót tölunnar. Dæmi: ${RT('433')} er rúmlega 20. Engin af frumtölunum 2, 3, 5, 7, 11, 13, 17 og 19 gengur upp í 433, svo 433 er frumtala.</p>
${RULE('Regla 1.4', 'Fjöldi frumtalna er óendanlegur.')}
${RULE('Regla 1.5', 'Sérhver samsett tala hefur frumþátt sem er minni en eða jafn ferningsrót hennar.')}`},

stytting: { t: 'Fullstytting brota', h: `
<p>Til að <b>fullstytta</b> brot frumþáttum við teljara og nefnara. Svo strikum við út þá þætti sem eru bæði í teljara og nefnara.</p>
${EXMP('Sýnidæmi', `Fullstyttum ${F(12, 18)}.`,
`${F(12, 18)} = ${F(M('2 · 2 · 3'), M('2 · 3 · 3'))} = <b>${F(2, 3)}</b><br>Þættirnir 2 og 3 eru bæði uppi og niðri og styttast út.`)}
<p>Regla 1.9: stærð brots breytist ekki við lengingu eða styttingu.</p>`},

ssd: { t: 'Stærsti samdeilir og minnsta samfeldi', h: `
${DEF('Skilgreining 1.6: Stærsti samdeilir', 'Stærsta náttúrlega talan sem gengur upp í heilu tölunum <i>a</i> og <i>b</i> nefnist <b>stærsti samdeilir</b> þeirra. Hún er rituð ' + M('ssd(a, b)') + '.')}
${DEF('Skilgreining 1.7: Ósamþátta', 'Heilu tölurnar <i>a</i> og <i>b</i> eru <b>ósamþátta</b> ef ' + M('ssd(a, b) = 1') + '.')}
${DEF('Skilgreining 1.8: Minnsta samfeldi', 'Minnsta náttúrlega talan sem <i>a</i> og <i>b</i> ganga báðar upp í nefnist <b>minnsta samfeldi</b> þeirra. Hún er rituð ' + M('msf(a, b)') + '.')}
${EXMP('Dæmi 1.5 · ssd og msf', 'Finnum stærsta samdeili og minnsta samfeldi talnanna 252 og 594.',
`${M('252 = 2^2 · 3^2 · 7')} og ${M('594 = 2 · 3^3 · 11')}
<p><b>ssd:</b> taka <u>sameiginlega</u> frumþætti, eins oft og þeir koma <u>sjaldnast</u> fyrir. Sameiginlegir þættir eru 2 og ${M('3^2')}.<br>${M('ssd(252, 594) = 2 · 3^2 = <b>18</b>')}</p>
<p><b>msf:</b> taka <u>alla</u> frumþætti, eins oft og þeir koma <u>oftast</u> fyrir: ${M('2^2')}, ${M('3^3')}, 7 og 11.<br>${M('msf(252, 594) = 2^2 · 3^3 · 7 · 11 = <b>8316</b>')}</p>`)}
<p>Minnsta samfeldi er það sama og <b>minnsti samnefnari</b>. Samnefnari tveggja brota með nefnarana <i>a</i> og <i>b</i> er ${M('msf(a, b)')}.</p>`},

brot: { t: 'Brotareikningur', h: `
${RULE('Regla 1.9 (Brotareikningur)', `<ol style="margin:.3rem 0;padding-left:1.4rem">
<li>Stærð almenns brots breytist ekki við lengingu eða styttingu.</li>
<li>Þegar brot eru margfölduð eru teljararnir margfaldaðir saman og nefnararnir margfaldaðir saman.</li>
<li>Deiling með broti er framkvæmd með því að margfalda með brotinu <b>viðsnúnu</b>.</li>
<li>Þegar brot eru lögð saman (eða dregin frá) þarf fyrst að <b>samnefna</b> brotin. Svo eru teljararnir lagðir saman (eða dregnir frá).</li></ol>`)}
<p>Reglur um forgangsröð aðgerða gilda líka í brotareikningi.</p>
${EXMP('Dæmi 1.6 · Brotareikningur (1)', F(F(3, 4) + ' : ' + F(1, 4), F(1, 3) + ' − ' + F(1, 9)),
STEPS('= ' + F(F(3, 4) + ' · ' + F(4, 1), F(3, 9) + ' − ' + F(1, 9)) + ' = ' + F(F(3, 1), F(2, 9)) + ' = ' + F(3, 1) + ' · ' + F(9, 2) + ' = <b>' + F(27, 2) + '</b>'))}
${EXMP('Dæmi 1.6 · Brotareikningur (2)', F('(' + F(5, 6) + ' − ' + F(1, 3) + ') · 0.4 + ' + F(1, 2), '(' + F(1, 3) + ' + ' + F(1, 4) + ') : ' + F(5, 6)),
STEPS(
 '= ' + F('(' + F(5, 6) + ' − ' + F(2, 6) + ') · ' + F(4, 10) + ' + ' + F(1, 2), '(' + F(4, 12) + ' + ' + F(3, 12) + ') · ' + F(6, 5)),
 '= ' + F(F(3, 6) + ' · ' + F(2, 5) + ' + ' + F(1, 2), F(7, 12) + ' · ' + F(6, 5)),
 '= ' + F(F(1, 5) + ' + ' + F(1, 2), F(7, 10)) + ' = ' + F(F(7, 10), F(7, 10)) + ' = <b>1</b>'))}`},

veldi: { t: 'Heil veldi og veldareglur', h: `
${DEF('Skilgreining 1.10: Heil veldi', `Talan <i>a</i> í veldinu <i>n</i> (<i>n</i> heil, ekki neikvæð) er<br>${M('a^n = 1 · a · a · … · a')}<br>þar sem <i>a</i> kemur <i>n</i> sinnum fyrir.<br>Ef ${M('a ≠ 0')} er ${M('a^{-n}')} = ${F('1', M('a^n'))}`)}
<p>Samkvæmt skilgreiningunni er ${M('a^0 = 1')}.</p>
${RULE('Regla 1.11 (Veldareglur)', STEPS(
 M('a^n · a^m = a^{n+m}') + ' &nbsp; (V1)',
 M('a^n : a^m = a^{n-m}') + ' &nbsp; (V2)',
 M('(ab)^n = a^n · b^n') + ' &nbsp; (V3)',
 M('a^n : b^n = (a : b)^n') + ' &nbsp; (V4)',
 M('(a^n)^m = a^{nm}') + ' &nbsp; (V5)'))}
${EXMP('Dæmi 1.7 · Veldareglur', STEPS(
 M('a^3 · a^4 = a^{3+4} = a^7'),
 M('b^6 : b^4 = b^6 · b^{-4} = b^{6-4} = b^2'),
 M('(xy)^2 = x^2 · y^2'),
 M('200^4 : 100^4 = (200 : 100)^4 = 2^4 = 16'),
 M('(x^3)^2 = x^{3·2} = x^6')))}`},

staedur: { t: 'Að einfalda stæður', h: `
<p>Plúsar og mínusar skipta stæðu í <b>liði</b>. Margföldun og deiling skipta lið í <b>þætti</b>.</p>
${RULE('Regla 1.12', STEPS(
 'Víxlregla, samlagning: ' + M('a + b = b + a'),
 'Víxlregla, margföldun: ' + M('ab = ba'),
 'Tengiregla, samlagning: ' + M('(a + b) + c = a + (b + c)'),
 'Tengiregla, margföldun: ' + M('(ab)c = a(bc)'),
 'Dreifiregla: ' + M('a(b + c) = ab + ac'),
 'Dreifiregla: ' + M('(a + b)(c + d) = ac + ad + bc + bd')))}
${ATH(`Ef ${M('a = -1')} í reglunni ${M('a(b + c) = ab + ac')} fæst ${M('-(b + c) = -b - c')}`)}
<p>Liðir eru <b>líkir</b> ef bókstafaþættir þeirra eru þeir sömu (sömu stafir í sömu veldum). Líka liði má draga saman með því að leggja saman tölurnar.</p>
${EXMP('Dæmi 1.8 · Einföldun stæðu', `Einföldum ${M('5ab^3 - 2b^3a')}`,
 STEPS(M('5ab^3 - 2b^3a'), M('= 5ab^3 - 2ab^3') + ' &nbsp; (röðum stöfum í stafrófsröð)', M('= <b>3ab^3</b>') + ' &nbsp; (báðir liðir innihalda ' + M('a') + ' og ' + M('b^3') + ')'))}
${EXMP('Dæmi 1.9 · Einföldun stæðu', `Einföldum ${M('2a + 2ab - a - 2a^2b - 3ba + ab^2')}`,
 STEPS(M('= 2a - a + 2ab - 3ab - 2a^2b + ab^2') + '<br>(víxlregla: breytum röð liða og stafa)', M('= <b>a - ab - 2a^2b + ab^2</b>') + '<br>Síðustu tveir liðirnir eru ekki líkir, því veldin eru ekki þau sömu.'))}`},

lidun: { t: 'Liðun (margfaldað upp úr svigum)', h: `
${ATH('<b>Liðun:</b> Að umrita stæðu sem er einn liður yfir í fleiri en einn lið. Stundum er sagt að margfalda upp úr svigum.')}
<p>Liðun notar dreifireglurnar. Eftir liðun er oft hægt að draga saman líka liði. Við einföldum alltaf svarið ef við getum.</p>
${EXMP('Dæmi 1.10 · Liðun', STEPS(
 M('-3(a - c) = -3a + 3c'),
 M('(c + 2)(a - c) = ca - c^2 + 2a - 2c'),
 M('(2a + b)(a + b) = 2a^2 + 2ab + ab + b^2 = 2a^2 + 3ab + b^2')))}
${EXMP('Dæmi 1.11 · Liðun og einföldun', `Einföldum ${M('2a - a(ab + 1)')}`,
 STEPS(M('= 2a - a^2b - a') + ' &nbsp; (dreifiregla)', M('= <b>a - a^2b</b>') + ' &nbsp; (fremsti og aftasti liðurinn eru líkir)'))}
${EXMP('Dæmi 1.12 · Liðun og einföldun', `Einföldum ${M('(a + b)(a + b) + (a - b)(a + b)')}`,
 STEPS(M('= a^2 + ab + ba + b^2 + a^2 + ab - ba - b^2'), M('= a^2 + a^2 + ab + ab + ab - ab + b^2 - b^2'), M('= <b>2a^2 + 2ab</b>')))}`}
},

exercises: [
{ n: 1, s: '1.1', th: ['forgangur'],
  g: 'Reiknið án reiknivélar og sýnið öll skref.',
  tip: 'Fyrst svigar (innsti fyrst). Svo margföldun og deiling frá vinstri til hægri. Síðast plús og mínus.',
  p: P([
  { q: M('28 + 32 : 8 - 4 · 4'), a: STEPS(M('= 28 + 4 - 16'), M('= <b>16</b>')) },
  { q: M('12 : 2 · 3 - 1'), a: STEPS(M('= 6 · 3 - 1'), M('= 18 - 1 = <b>17</b>')) },
  { q: M('8 - 5 · 2 + 1'), a: STEPS(M('= 8 - 10 + 1 = <b>-1</b>')) },
  { q: M('20 - 18 · 2 : 3 · 2'), a: STEPS(M('= 20 - 36 : 3 · 2'), M('= 20 - 12 · 2'), M('= 20 - 24 = <b>-4</b>')) +
    '<p><b>Ath:</b> Svarlykill bókarinnar segir <b>14</b>. Ef reiknað er frá vinstri til hægri eins og regla 1.1 segir fæst −4. Talan 14 fæst aðeins ef reiknað er ' + M('20 - 18 · 2 : (3 · 2)') + '. Spurðu kennarann hvort er rétt.</p>' },
  { q: M('2(20 + 10 : 2)'), a: STEPS(M('= 2(20 + 5)'), M('= 2 · 25 = <b>50</b>')) },
  { q: M('14 : 2 + 16 : (-4)'), a: STEPS(M('= 7 + (-4) = <b>3</b>')) },
  { q: M('5 + 2 - 8 · 2 + 5 + 13 · 2'), a: STEPS(M('= 5 + 2 - 16 + 5 + 26 = <b>22</b>')) },
  { q: M('10 + (3 - 2(1 - 4))'), a: STEPS(M('= 10 + (3 - 2(-3))'), M('= 10 + (3 + 6) = <b>19</b>')) },
  { q: M('(1 - 4) + 2 · (-6) + 9 : 3'), a: STEPS(M('= -3 - 12 + 3 = <b>-12</b>')) },
  { q: M('(2 - 13(-2)) + 11'), a: STEPS(M('= (2 + 26) + 11'), M('= 28 + 11 = <b>39</b>')) },
  { q: M('(6 - 10) · 5 - 4 · (6 + 14)'), a: STEPS(M('= -4 · 5 - 4 · 20'), M('= -20 - 80 = <b>-100</b>')) },
  { q: M('100 : 2 - (3 · 50 - 200)'), a: STEPS(M('= 50 - (150 - 200)'), M('= 50 - (-50) = <b>100</b>')) },
  { q: M('25 - (7 + 2 · (-10)) - 18'), a: STEPS(M('= 25 - (7 - 20) - 18'), M('= 25 + 13 - 18 = <b>20</b>')) },
  { q: M('2(10 - (12 - 2(3 · 5 - 2 · 4)))'), a: STEPS(M('= 2(10 - (12 - 2 · 7))'), M('= 2(10 - (-2))'), M('= 2 · 12 = <b>24</b>')) },
  { q: M('2(-3)(-2) : 6(-2(-3))'), a: STEPS(M('= 12 : 6 · 6'), M('= 2 · 6 = <b>12</b>')) },
  { q: M('12 - 8 : (3 + 2 · (3 - 2 · 2))'), a: STEPS(M('= 12 - 8 : (3 + 2 · (-1))'), M('= 12 - 8 : 1 = <b>4</b>')) },
  { q: M('6 : 2 - 2(4 : 2(3 - 5) : 4)'), a: STEPS(M('= 3 - 2(4 : 2 · (-2) : 4)'), M('= 3 - 2(2 · (-2) : 4)'), M('= 3 - 2(-1) = <b>5</b>')) },
  { q: M('10 - 2(1 + 2(12 : (5 - 2 · 4) · 2))'), a: STEPS(M('= 10 - 2(1 + 2(12 : (-3) · 2))'), M('= 10 - 2(1 + 2(-8))'), M('= 10 - 2(-15) = <b>40</b>')) },
  { q: M('2 + 2(3(7 - 3) + 6 : (1 - 4)) : 2 - 1'), a: STEPS(M('= 2 + 2(12 + 6 : (-3)) : 2 - 1'), M('= 2 + 2 · 10 : 2 - 1'), M('= 2 + 10 - 1 = <b>11</b>')) },
  { q: M('6 - 4(2 + 3(2 : (2 · 5 - 4 · 3) · 3))'), a: STEPS(M('= 6 - 4(2 + 3(2 : (-2) · 3))'), M('= 6 - 4(2 + 3(-3))'), M('= 6 - 4(-7) = <b>34</b>')) },
  { q: M('9 - 6 · (2(7 - 3) - 6) : (1 - 4) · 2'), a: STEPS(M('= 9 - 6 · 2 : (-3) · 2'), M('= 9 - (-4) · 2'), M('= 9 + 8 = <b>17</b>')) }
  ]) },
{ n: 2, s: '1.1', th: ['forgangur'],
  g: 'Reiknið.',
  tip: 'Brotastrik virkar eins og svigi: reiknaðu teljarann og nefnarann hvorn fyrir sig.',
  p: [{ q: F(M('2 + 3 · 4'), M('6 - 2 · 3')),
        a: F('14', '0') + ' — <b>Óskilgreind stærð</b>, því nefnarinn verður 0 og það má ekki deila með 0.' }] },
{ n: 3, s: '1.1', th: ['forgangur'],
  g: 'Reiknið án reiknivélar og sýnið öll skref.',
  tip: 'Byrjaðu á innstu svigunum. Mundu að reikna margföldun og deilingu frá vinstri til hægri.',
  p: [{ q: M('10 : 2 - 5((6 : 3 · 2 + 4 · 3) - (6 · 3 : 6 · 2))(1 - 2)'),
        a: STEPS(M('= 5 - 5((4 + 12) - (3 · 2))(-1)'), M('= 5 - 5(16 - 6)(-1)'), M('= 5 - 5 · 10 · (-1)'), M('= 5 + 50 = <b>55</b>')) }] },
{ n: 4, s: '1.2', th: ['frumthattun'],
  g: 'Frumþáttið tölurnar.',
  tip: 'Prófaðu frumtölurnar 2, 3, 5, 7, 11, 13, … í röð. Þú þarft aðeins að prófa upp að ferningsrót tölunnar.',
  p: P([
  { q: '256', a: M('256 = 2^8') },
  { q: '1155', a: M('1155 = 3 · 5 · 7 · 11') },
  { q: '360', a: M('360 = 2^3 · 3^2 · 5') },
  { q: '19', a: '19 er frumtala.' },
  { q: '6409', a: M('6409 = 13 · 17 · 29') },
  { q: '105', a: M('105 = 3 · 5 · 7') },
  { q: '60', a: M('60 = 2^2 · 3 · 5') + '<br><small>(Í svarlykli bókarinnar er prentvilla: þar stendur „602² · 3 · 5“.)</small>' },
  { q: '233', a: '233 er frumtala. (' + RT('233') + ' er rúmlega 15, og hvorki 2, 3, 5, 7, 11 né 13 ganga upp í 233.)' },
  { q: '972', a: M('972 = 2^2 · 3^5') },
  { q: '1617', a: M('1617 = 3 · 7^2 · 11') },
  { q: '396', a: M('396 = 2^2 · 3^2 · 11') }
  ]) },
{ n: 5, s: '1.2', th: ['stytting', 'frumthattun'],
  g: 'Fullstyttið brotin með því að frumþátta teljara og nefnara.',
  tip: 'Frumþáttaðu bæði teljara og nefnara og strikaðu út þættina sem eru á báðum stöðum.',
  p: P([
  { q: F(28, 70), a: F(M('2 · 2 · 7'), M('2 · 5 · 7')) + ' = <b>' + F(2, 5) + '</b>' },
  { q: F(50, 55), a: F(M('2 · 5 · 5'), M('5 · 11')) + ' = <b>' + F(10, 11) + '</b>' },
  { q: F(36, 18), a: F(M('2^2 · 3^2'), M('2 · 3^2')) + ' = <b>2</b>' },
  { q: F(440, 544), a: F(M('2^3 · 5 · 11'), M('2^5 · 17')) + ' = <b>' + F(55, 68) + '</b>' },
  { q: F(1080, 1800), a: F(M('2^3 · 3^3 · 5'), M('2^3 · 3^2 · 5^2')) + ' = <b>' + F(3, 5) + '</b>' }
  ]) },
{ n: 6, s: '1.3', th: ['ssd', 'frumthattun'],
  g: 'Finnið stærsta samdeili og minnsta samfeldi talnanna <i>a</i> og <i>b</i> ef',
  tip: 'Frumþáttaðu báðar tölurnar. ssd: sameiginlegir þættir, eins oft og þeir koma sjaldnast fyrir. msf: allir þættir, eins oft og þeir koma oftast fyrir.',
  p: P([
  { q: M('a = 4284') + ' og ' + M('b = 3192'), a: M('4284 = 2^2 · 3^2 · 7 · 17') + '<br>' + M('3192 = 2^3 · 3 · 7 · 19') + '<br>' + M('<b>ssd(a, b) = 84</b>') + ', ' + M('<b>msf(a, b) = 162792</b>') },
  { q: M('a = 588') + ' og ' + M('b = 540'), a: M('588 = 2^2 · 3 · 7^2') + '<br>' + M('540 = 2^2 · 3^3 · 5') + '<br>' + M('<b>ssd(a, b) = 12</b>') + ', ' + M('<b>msf(a, b) = 26460</b>') },
  { q: M('a = 72') + ' og ' + M('b = 750'), a: M('72 = 2^3 · 3^2') + '<br>' + M('750 = 2 · 3 · 5^3') + '<br>' + M('<b>ssd(a, b) = 6</b>') + ', ' + M('<b>msf(a, b) = 9000</b>') },
  { q: M('a = 819') + ' og ' + M('b = 1014'), a: M('819 = 3^2 · 7 · 13') + '<br>' + M('1014 = 2 · 3 · 13^2') + '<br>' + M('<b>ssd(a, b) = 39</b>') + ', ' + M('<b>msf(a, b) = 21294</b>') },
  { q: M('a = 3920') + ' og ' + M('b = 6174'), a: M('3920 = 2^4 · 5 · 7^2') + '<br>' + M('6174 = 2 · 3^2 · 7^3') + '<br>' + M('<b>ssd(a, b) = 98</b>') + ', ' + M('<b>msf(a, b) = 246960</b>') }
  ]) },
{ n: 7, s: '1.3', th: ['ssd', 'brot'],
  g: 'Finnið minnsta samnefnara brotanna.',
  tip: 'Minnsti samnefnari er minnsta samfeldi nefnaranna. Frumþáttaðu nefnarana.',
  p: P([
  { q: F(1, 6) + ', ' + F(1, 12) + ', ' + F(1, 36), a: M('6 = 2 · 3, 12 = 2^2 · 3, 36 = 2^2 · 3^2') + '<br>Samnefnari: ' + M('2^2 · 3^2 = <b>36</b>') },
  { q: F(1, 2) + ', ' + F(1, 4) + ', ' + F(1, 10) + ', ' + F(1, 8), a: M('2, 2^2, 2 · 5, 2^3') + '<br>Samnefnari: ' + M('2^3 · 5 = <b>40</b>') },
  { q: F(1, 8) + ', ' + F(1, 27) + ', ' + F(1, 36), a: M('2^3, 3^3, 2^2 · 3^2') + '<br>Samnefnari: ' + M('2^3 · 3^3 = <b>216</b>') }
  ]) },
{ n: 8, s: '1.4', th: ['brot', 'stytting'],
  g: 'Reiknið án reiknivélar og sýnið öll skref (notið frumþáttun til að stytta).',
  tip: 'Breyttu blönduðum tölum í almenn brot. Deiling með broti = margföldun með brotinu viðsnúnu.',
  p: P([
  { q: '3 · ' + F(5, 6) + ' · ' + F(1, 3), a: '= ' + F(M('3 · 5 · 1'), M('6 · 3')) + ' = <b>' + F(5, 6) + '</b>' },
  { q: F(3, 2) + ' : ' + F(9, 4), a: '= ' + F(3, 2) + ' · ' + F(4, 9) + ' = ' + F(12, 18) + ' = <b>' + F(2, 3) + '</b>' },
  { q: F(1, 2) + ' · ' + MX(2, 1, 8), a: '= ' + F(1, 2) + ' · ' + F(17, 8) + ' = <b>' + F(17, 16) + '</b>' },
  { q: '−' + F(3, 8) + ' : ' + F(6, 12), a: '= −' + F(3, 8) + ' · ' + F(12, 6) + ' = −' + F(3, 8) + ' · 2 = <b>−' + F(3, 4) + '</b>' },
  { q: F(3, 5) + ' : (−2) : ' + F(1, 5), a: '= ' + F(3, 5) + ' · (−' + F(1, 2) + ') · 5 = <b>−' + F(3, 2) + '</b>' },
  { q: '−' + F(3, 8) + ' : ' + F(1, 4) + ' · ' + F(2, 3) + ' : ' + F(6, 12), a: '= −' + F(3, 8) + ' · 4 · ' + F(2, 3) + ' · 2 = −' + F(3, 2) + ' · ' + F(4, 3) + ' = <b>−2</b>' },
  { q: '4 · ' + F(3, 4) + ' : ' + MX(3, 2, 3), a: '= 3 : ' + F(11, 3) + ' = 3 · ' + F(3, 11) + ' = <b>' + F(9, 11) + '</b>' },
  { q: MX(2, 3, 4) + ' − ' + F(1, 3), a: '= ' + F(33, 12) + ' − ' + F(4, 12) + ' = ' + F(29, 12) + ' = <b>' + MX(2, 5, 12) + '</b>' },
  { q: F(1, 2) + ' − ' + F(1, 3) + ' − ' + F(1, 6), a: '= ' + F(3, 6) + ' − ' + F(2, 6) + ' − ' + F(1, 6) + ' = <b>0</b>' },
  { q: F(2, 8) + ' + ' + MX(2, 1, 3) + ' − ' + MX(1, 3, 4), a: '= ' + F(3, 12) + ' + ' + F(28, 12) + ' − ' + F(21, 12) + ' = ' + F(10, 12) + ' = <b>' + F(5, 6) + '</b>' }
  ]) },
{ n: 9, s: '1.4', th: ['brot'],
  g: 'Reiknið án reiknivélar og sýnið öll skref.',
  tip: 'Reiknaðu teljarann og nefnarann hvorn fyrir sig. Deildu svo: margfaldaðu teljarann með nefnaranum viðsnúnum.',
  p: P([
  { q: F('14', F(7, 9)), a: '= 14 · ' + F(9, 7) + ' = <b>18</b>' },
  { q: F(F(3, 2) + ' − ' + F(2, 3), F(9, 4)), a: '= ' + F(5, 6) + ' · ' + F(4, 9) + ' = ' + F(20, 54) + ' = <b>' + F(10, 27) + '</b>' },
  { q: F(F(3, 4) + ' · ' + F(2, 9), F(2, 6)), a: '= ' + F(1, 6) + ' · ' + F(6, 2) + ' = <b>' + F(1, 2) + '</b>' },
  { q: F(F(1, 6) + ' − ' + F(1, 2), F(1, 3) + ' − ' + F(1, 9)), a: '= ' + F('−' + F(1, 3), F(2, 9)) + ' = −' + F(1, 3) + ' · ' + F(9, 2) + ' = <b>−' + F(3, 2) + '</b>' },
  { q: F(F(8, 3) + ' · ' + F(3, 15), '7 : ' + MX(2, 1, 3)), a: '= ' + F(F(8, 15), '7 · ' + F(3, 7)) + ' = ' + F(F(8, 15), '3') + ' = <b>' + F(8, 45) + '</b>' },
  { q: F(MX(2, 1, 4), MX(3, 3, 8) + ' − ' + MX(1, 1, 2)), a: '= ' + F(F(9, 4), F(27, 8) + ' − ' + F(12, 8)) + ' = ' + F(9, 4) + ' · ' + F(8, 15) + ' = <b>' + F(6, 5) + '</b>' }
  ]) },
{ n: 10, s: '1.4', th: ['brot', 'forgangur'],
  g: 'Reiknið án reiknivélar og sýnið öll skref.',
  tip: 'Reiknaðu stóra brotið fyrst (teljara og nefnara hvorn fyrir sig). Svo deilinguna, og síðast plús eða mínus.',
  p: P([
  { q: F(3, 7) + ' : ' + F(F(5, 7) + ' · ' + F(6, 15), F(3, 7) + ' − ' + F(2, 3) + ' : ' + F(7, 3)) + ' + ' + MX(1, 2, 7),
    a: STEPS('Teljari: ' + F(5, 7) + ' · ' + F(6, 15) + ' = ' + F(2, 7), 'Nefnari: ' + F(3, 7) + ' − ' + F(2, 7) + ' = ' + F(1, 7), 'Brotið: ' + F(2, 7) + ' : ' + F(1, 7) + ' = 2', F(3, 7) + ' : 2 + ' + F(9, 7) + ' = ' + F(3, 14) + ' + ' + F(18, 14) + ' = <b>' + F(3, 2) + '</b>') },
  { q: MX(2, 1, 5) + ' − ' + F(1, 5) + ' : ' + F(F(1, 4) + ' + ' + F(1, 8), F(3, 5) + ' : ' + F(1, 4) + ' + 1.1'),
    a: STEPS('Teljari: ' + F(2, 8) + ' + ' + F(1, 8) + ' = ' + F(3, 8), 'Nefnari: ' + F(12, 5) + ' + ' + F(11, 10) + ' = ' + F(35, 10) + ' = ' + F(7, 2), 'Brotið: ' + F(3, 8) + ' · ' + F(2, 7) + ' = ' + F(3, 28), F(1, 5) + ' : ' + F(3, 28) + ' = ' + F(28, 15), F(33, 15) + ' − ' + F(28, 15) + ' = ' + F(5, 15) + ' = <b>' + F(1, 3) + '</b>') },
  { q: F(2, 3) + ' − ' + F(1, 3) + ' : ' + F(F(4, 21) + ' : ' + F(2, 7), F(7, 2) + ' + ' + F(5, 3) + ' · ' + F(9, 10)),
    a: STEPS('Teljari: ' + F(4, 21) + ' · ' + F(7, 2) + ' = ' + F(2, 3), 'Nefnari: ' + F(7, 2) + ' + ' + F(3, 2) + ' = 5', 'Brotið: ' + F(2, 3) + ' : 5 = ' + F(2, 15), F(1, 3) + ' : ' + F(2, 15) + ' = ' + F(5, 2), F(2, 3) + ' − ' + F(5, 2) + ' = ' + F(4, 6) + ' − ' + F(15, 6) + ' = <b>−' + F(11, 6) + '</b>') },
  { q: MX(1, 1, 7) + ' − ' + F(1, 7) + ' : ' + F('(' + F(1, 3) + ' + ' + F(1, 7) + ') : ' + F(1, '2.1'), '1 − (' + F(5, 8) + ' − ' + F(1, 2) + ')'),
    a: STEPS('Teljari: ' + F(10, 21) + ' : ' + F(10, 21) + ' = 1 &nbsp; (því ' + F(1, '2.1') + ' = ' + F(10, 21) + ')', 'Nefnari: 1 − ' + F(1, 8) + ' = ' + F(7, 8), 'Brotið: 1 : ' + F(7, 8) + ' = ' + F(8, 7), F(1, 7) + ' : ' + F(8, 7) + ' = ' + F(1, 8), F(8, 7) + ' − ' + F(1, 8) + ' = ' + F(64, 56) + ' − ' + F(7, 56) + ' = <b>' + F(57, 56) + '</b>') }
  ]) },
{ n: 11, s: '1.5', th: ['veldi'],
  g: 'Einfaldið með veldareglum, án vasareiknis.',
  tip: 'Sama grunntala: leggðu saman veldin við margföldun og dragðu frá við deilingu.',
  p: P([
  { q: M('a^2 · a^3'), a: M('= a^{2+3} = <b>a^5</b>') },
  { q: M('a^2 · (-a)^3'), a: M('= a^2 · (-a^3) = <b>-a^5</b>') },
  { q: M('2^5 · 2^{-3}'), a: M('= 2^{5-3} = 2^2 = <b>4</b>') },
  { q: M('b^8 : b^3'), a: M('= b^{8-3} = <b>b^5</b>') },
  { q: M('b^8 : b^{-3}'), a: M('= b^{8-(-3)} = <b>b^{11}</b>') },
  { q: M('a^2 : b^{-3} · (ab)^3'), a: M('= a^2 b^3 · a^3 b^3 = <b>a^5 b^6</b>') },
  { q: M('(a^2 : b)^3'), a: M('= a^6 : b^3 = <b>a^6 b^{-3}</b>') },
  { q: M('4 · 8^{-1} · 16 : 32 : 64'), a: M('= 2^2 · 2^{-3} · 2^4 : 2^5 : 2^6 = 2^{2-3+4-5-6} = <b>2^{-8}</b>') }
  ]) },
{ n: 12, s: '1.5', th: ['staedur', 'lidun'],
  g: 'Einfaldið stæðurnar.',
  tip: 'Leystu upp sviga fyrst (mínus fyrir framan sviga breytir öllum formerkjum inni í honum). Dragðu svo saman líka liði.',
  p: P([
  { q: M('x - y + 2x + 4y'), a: M('<b>3x + 3y</b>') },
  { q: M('2ab + 4ba'), a: M('<b>6ab</b>') },
  { q: M('y - (5x + y) + 2y + x'), a: M('= y - 5x - y + 2y + x = <b>-4x + 2y</b>') },
  { q: M('2k - 2pk + 3p - 4kp'), a: M('<b>2k - 6pk + 3p</b>') },
  { q: M('2ak - 2pk + 3pa - 4kp'), a: M('<b>2ak - 6kp + 3ap</b>') },
  { q: M('2a^2 - 2a - 5a + 3a^2'), a: M('<b>5a^2 - 7a</b>') },
  { q: M('2a^2 + ab - 3b^2 + 4a^2 - b^2'), a: M('<b>6a^2 - 4b^2 + ab</b>') },
  { q: M('2xy + xy^2 - x^2y + y^2x - 2yx^2 + 4yx'), a: M('<b>-3x^2y + 2xy^2 + 6xy</b>') },
  { q: M('2 - (4x - 4) - (5 - 5x)'), a: M('= 2 - 4x + 4 - 5 + 5x = <b>x + 1</b>') },
  { q: M('a - (a - (b - 2a) - b)'), a: M('= a - (a - b + 2a - b) = a - 3a + 2b = <b>-2a + 2b</b>') }
  ]) },
{ n: 13, s: '1.5', th: ['lidun', 'staedur'],
  g: 'Liðið.',
  tip: 'Margfaldaðu hvern lið í einum sviga við hvern lið í hinum. Byrjaðu á innstu svigunum. Dragðu svo saman líka liði.',
  p: P([
  { q: M('-a(x + y)'), a: M('<b>-ax - ay</b>') },
  { q: M('-a - (3a + 2)'), a: M('<b>-4a - 2</b>') },
  { q: M('3ab^2(a^2 + bc)'), a: M('<b>3a^3b^2 + 3ab^3c</b>') },
  { q: M('x - (3z - (2x - (5z + 2x)))'), a: STEPS(M('2x - (5z + 2x) = -5z'), M('3z - (-5z) = 8z'), 'Svar: ' + M('<b>x - 8z</b>')) },
  { q: M('a(b - c(a - b)) - ab'), a: M('= ab - a^2c + abc - ab = <b>-a^2c + abc</b>') },
  { q: M('2a^2 + 3b^2 - a(b - a)'), a: M('<b>3a^2 + 3b^2 - ab</b>') },
  { q: M('(x + 1)(x - 3)'), a: M('<b>x^2 - 2x - 3</b>') },
  { q: M('(3x - 1)(2x + 1)'), a: M('= 6x^2 + 3x - 2x - 1 = <b>6x^2 + x - 1</b>') },
  { q: M('(x - 1)(y - 3)'), a: M('<b>xy - 3x - y + 3</b>') },
  { q: M('(x + 1)(x + 2)'), a: M('<b>x^2 + 3x + 2</b>') },
  { q: M('(x + 3)(x + 5)'), a: M('<b>x^2 + 8x + 15</b>') },
  { q: M('(x - 3)(x + 5)'), a: M('<b>x^2 + 2x - 15</b>') },
  { q: M('(x + 3)(x - 5)'), a: M('<b>x^2 - 2x - 15</b>') },
  { q: M('(x - 3)(x - 5)'), a: M('<b>x^2 - 8x + 15</b>') },
  { q: M('(x + 7)(x - 2)'), a: M('<b>x^2 + 5x - 14</b>') },
  { q: M('3(x + 1)(a + 1)'), a: M('<b>3xa + 3x + 3a + 3</b>') },
  { q: M('x - (2x + 3(4 - x(5 - x(x - 6))))'), a: STEPS(M('5 - x(x - 6) = 5 - x^2 + 6x'), M('4 - x(5 - x^2 + 6x) = 4 - 5x + x^3 - 6x^2'), M('2x + 3(…) = 3x^3 - 18x^2 - 13x + 12'), M('x - (…) = <b>-3x^3 + 18x^2 + 14x - 12</b>')) },
  { q: M('x - (x + 3)(x - 5)'), a: M('= x - (x^2 - 2x - 15) = <b>-x^2 + 3x + 15</b>') }
  ]) }
]
});
