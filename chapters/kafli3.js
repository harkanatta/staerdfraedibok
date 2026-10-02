/* Kafli 3 – Mengi og talnalínan
   Content transcribed from the book chapter (pages 19–36). */
Book.add({
n: 3,
title: 'Mengi og talnalínan',
theory: {
mengi:{t:'Mengi og stök',h:`
<div class="def"><div class="tag">Skilgreining 3.1: Mengi</div><b>Mengi</b> er safn hluta eða hugtaka sem kallast <b>stök</b> mengisins.</div>
<p>Mengi eru táknuð með stórum staf og sett fram með slaufusvigum, t.d. ${S('<i>A</i> = {1, 2, 3}')}. Í því eru þrjú stök: 1, 2 og 3.</p>
<p>Mengi getur haft ekkert stak, fá stök, mörg stök eða óendanlega mörg stök.</p>
<p>${S('3 ∈ <i>A</i>')} er lesið „þrír er stak í <i>A</i>“.<br>${S('4 ∉ <i>A</i>')} er lesið „fjórir er ekki stak í <i>A</i>“.</p>
<p>Táknið ∈ á <b>aðeins</b> við milli <b>staks</b> og <b>mengis</b>.</p>
<p>Tvö mengi eru jöfn ef í þeim eru sömu stök. Röðin skiptir ekki máli og sama stak má koma oft fyrir:<br>${S('{1, 2, 3} = {3, 1, 2, √4, 3}')}</p>`},

hlutmengi:{t:'Hlutmengi (⊆)',h:`
<div class="def"><div class="tag">Skilgreining 3.2: Hlutmengi</div>Mengi <i>A</i> er <b>hlutmengi</b> í <i>B</i> ef sérhvert stak í <i>A</i> er einnig stak í <i>B</i>. Táknað ${S('<i>A</i> ⊆ <i>B</i>')}.<br>Ef til er stak í <i>A</i> sem er ekki í <i>B</i> er ritað ${S('<i>A</i> ⊄ <i>B</i>')}.</div>
<div class="ex"><div class="tag">Dæmi 3.1 · Hlutmengi</div>
${S('<i>A</i> = {−5, 6, 13}')}, ${S('<i>B</i> = {−10, −5, 0, 6, 8, 13}')}, ${S('<i>C</i> = {6, 7, 13}')}. Er ${S('<i>A</i> ⊆ <i>B</i>')}? Er ${S('<i>A</i> ⊆ <i>C</i>')}?
<div class="lausn"><b>Lausn:</b> Öll stök í <i>A</i> finnast í <i>B</i>, svo ${S('<i>A</i> ⊆ <i>B</i>')}.<br>
Stakið −5 er í <i>A</i> en ekki í <i>C</i>. Því er ${S('<i>A</i> ⊄ <i>C</i>')}.<br>
Ath: ${S('<i>B</i> ⊄ <i>A</i>')} því til eru stök í <i>B</i> sem eru ekki í <i>A</i>.</div></div>
<div class="ath"><div class="tag">Ath!</div>Ekki rugla saman ∈ og ⊆.<br>
${S('<i>a</i> ∈ <i>A</i>')}: <i>a</i> er <b>stak</b> í menginu <i>A</i>.<br>
${S('<i>A</i> ⊆ <i>B</i>')}: mengið <i>A</i> er <b>hlutmengi</b> í <i>B</i>.<br>
<i>a</i> er stak en {<i>a</i>} er mengi.</div>
<div class="ex"><div class="tag">Dæmi 3.2 · Satt eða ósatt</div>
<div class="steps">
<div>1. ${S('0.5 ∈ {−3, 0, '+F(1,2)+', 2}')} — <b>Satt</b>, því 0.5 = ${F(1,2)}.</div>
<div>2. ${S('−1 ∈ {0, 1, 2, 3}')} — <b>Ósatt</b>, −1 er ekki stak í menginu.</div>
<div>3. ${S('{3} ∈ {1, 2, 3}')} — <b>Ósatt</b>, stökin eru tölur, ekki mengið {3}.</div>
<div>4. ${S('{3} ⊆ {1, 2, 3}')} — <b>Satt</b>, talan 3 er líka í seinna menginu.</div>
<div>5. ${S('3 ⊆ {1, 2, 3}')} — <b>Ósatt</b>, tala getur ekki verið hlutmengi.</div>
</div></div>`},

grunn:{t:'Grunnmengi og tómamengi',h:`
<p><b>Grunnmengi</b> er mengið sem liggur til grundvallar í verkefninu. Öll önnur mengi í verkefninu eru hlutmengi í því. Það er táknað <i>U</i>.</p>
<p><b>Tómamengið</b> inniheldur engin stök. Það er táknað ∅. Tómamengið er hlutmengi í öllum mengjum.</p>`},

adgerdir:{t:'Mengjaaðgerðir (∪ ∩ \\ og strik yfir)',h:`
<div class="def"><div class="tag">Skilgreining 3.3: Fyllimengi</div><b>Fyllimengi</b> mengisins <i>A</i>, táknað ${OV('<i>A</i>')}, inniheldur öll stök sem eru í grunnmenginu <i>U</i> en <b>ekki</b> í <i>A</i>.</div>
${venn2('comp')}
<p>Fyllimengi fyllimengisins er mengið sjálft.</p>
<div class="def"><div class="tag">Skilgreining 3.4: Sammengi</div><b>Sammengi</b> ${S('<i>A</i> ∪ <i>B</i>')} inniheldur öll stökin úr <i>A</i> og öll stökin úr <i>B</i>.</div>
${venn2('union')}
<p>${S('<i>A</i> ∪ <i>B</i> = <i>B</i> ∪ <i>A</i>')}</p>
<div class="def"><div class="tag">Skilgreining 3.5: Sniðmengi</div><b>Sniðmengi</b> ${S('<i>A</i> ∩ <i>B</i>')} inniheldur þau stök sem eru <b>bæði</b> í <i>A</i> og <i>B</i>.</div>
${venn2('inter')}
<p>${S('<i>A</i> ∩ <i>B</i> = <i>B</i> ∩ <i>A</i>')}</p>
<div class="def"><div class="tag">Skilgreining 3.6: Mismengi</div><b>Mismengi</b> ${S('<i>A</i> \\ <i>B</i>')} eru öll stök sem eru í <i>A</i> en <b>ekki</b> í <i>B</i>.</div>
${venn2('diff')}
<p>Athugið: ${S('<i>A</i> \\ <i>B</i>')} er yfirleitt <b>ekki</b> það sama og ${S('<i>B</i> \\ <i>A</i>')}.</p>
<div class="def"><div class="tag">Skilgreining 3.7: Sundurlæg mengi</div><i>A</i> og <i>B</i> eru sundurlæg ef ${S('<i>A</i> ∩ <i>B</i> = ∅')}.</div>
<div class="ath"><div class="tag">Forgangsröð</div>Í mengjareikningi er <b>engin</b> forgangsröð. Svigar segja í hvaða röð á að reikna. Reiknaðu alltaf fyrst inni í svigunum.</div>`},

daemi33:{t:'Sýnidæmi 3.3 (þrjú mengi)',h:`
<div class="ex"><div class="tag">Dæmi 3.3 · Mengjaaðgerðir</div>
<i>U</i> eru allar heilar tölur frá −5 til 5. <i>A</i> = sléttar tölur, <i>B</i> = neikvæðar tölur, <i>C</i> = frumtölur í <i>U</i>.
<div class="lausn">
<p>${S('<i>A</i> = {−4, −2, 0, 2, 4}')}<br>${S('<i>B</i> = {−5, −4, −3, −2, −1}')}<br>${S('<i>C</i> = {2, 3, 5}')}</p>
${venn3({a:['0  4'],b:['−1  −5','−3'],ab:['−2  −4'],ac:['2'],bc:[],abc:[],c:['3  5'],out2:['1']})}<p><b>Aðeins í A:</b> 0, 4 · <b>A og B:</b> −2, −4 · <b>A og C:</b> 2 · <b>Aðeins í B:</b> −1, −3, −5 · <b>Aðeins í C:</b> 3, 5 · <b>Utan við:</b> 1</p>
<div class="steps">
<div>${S('<i>A</i> ∪ <i>C</i> = {−4, −2, 0, 2, 3, 4, 5}')}</div>
<div>${S('<i>A</i> ∩ <i>C</i> = {2}')}</div>
<div>${S('<i>A</i> \\ <i>C</i> = {−4, −2, 0, 4}')}</div>
<div>${S('<i>C</i> \\ <i>A</i> = {3, 5}')}</div>
<div>${S('(<i>B</i> \\ <i>A</i>) ∪ <i>C</i>')} = ${S('{−5, −3, −1} ∪ <i>C</i>')} = ${S('{−5, −3, −1, 2, 3, 5}')}</div>
<div>${S('<i>B</i> \\ (<i>A</i> ∪ <i>C</i>)')} = ${S('{−5, −3, −1}')}</div>
<div>${S('<i>B</i> ∩ <i>C</i> = ∅')}</div>
</div>
<p><b>Frumtala</b> er heil jákvæð tala stærri en 1 sem hefur enga jákvæða þætti nema sjálfa sig og 1. Hún getur ekki verið neikvæð.</p>
</div></div>`},

talnamengi:{t:'Sérstök talnamengi (ℕ ℤ ℚ ℝ)',h:`
<p><b>ℕ — náttúrlegar tölur:</b> ${S('{1, 2, 3, 4, …}')}</p>
<p><b>ℤ — heilar tölur:</b> ${S('{…, −2, −1, 0, 1, 2, …}')}</p>
<p><b>ℚ — ræðar tölur:</b> allar tölur sem má skrifa sem heiltölubrot, t.d. ${F(19,2)}, −${F(3,7)}, ${F(4,2)}.</p>
<p><b>ℝ — rauntölur:</b> ræðar tölur ásamt <b>óræðum</b> tölum eins og π og √2.</p>
<p>Formerki sýnir aðeins jákvæða eða neikvæða hlutann: ℤ₊, ℤ₋, ℚ₊, ℚ₋, ℝ₊, ℝ₋.<br><b>Núll er hvorki jákvætt né neikvætt.</b></p>
<div class="rule">${S('ℕ ⊆ ℤ ⊆ ℚ ⊆ ℝ')}</div>
<p>Öll stök í þessum mengjum eru <b>tölur</b>.</p>`},

setning:{t:'Mengjasetningar {x ∈ … | …}',h:`
<p>Mengjasetning hefur tvo hluta innan slaufusviga, aðskilda með lóðréttu striki:</p>
<div class="rule">${S('{ <i>x</i> ∈ grunnmengi | skilyrði }')}</div>
<p>Fyrir framan strikið er grunnmengið. Fyrir aftan strikið er skilyrðið sem stökin þurfa að uppfylla.</p>
<div class="ex"><div class="tag">Dæmi 3.4 · Mengjasetningar</div>
<div class="steps">
<div>1. ${S('<i>A</i> = {<i>x</i> ∈ ℕ | <i>x</i> &lt; 3}')}<br>Náttúrlegar tölur minni en 3: ${S('<i>A</i> = {1, 2}')}</div>
<div>2. ${S('<i>B</i> = {<i>x</i> ∈ ℤ | −2 ≤ <i>x</i> &lt; 4}')}<br>Heilar tölur frá og með −2, minni en 4: ${S('<i>B</i> = {−2, −1, 0, 1, 2, 3}')}</div>
<div>3. ${S('<i>C</i> = {<i>x</i> ∈ ℚ | <i>x</i>² = 4}')}<br>Leysum fyrst jöfnuna: <i>x</i>² = 4 gefur <i>x</i> = ±2. Báðar eru í ℚ. ${S('<i>C</i> = {−2, 2}')}</div>
</div></div>`},

bil:{t:'Bil á talnalínunni',h:`
<p>Bil frá <i>a</i> til <i>b</i> inniheldur <b>allar</b> rauntölur á milli <i>a</i> og <i>b</i>, líka brot og óræðar tölur.</p>
<div class="def"><div class="tag">Skilgreining 3.8: Lokað bil</div>${S('[<i>a</i>, <i>b</i>] = {<i>x</i> ∈ ℝ | <i>a</i> ≤ <i>x</i> ≤ <i>b</i>}')}<br>Báðir endapunktar eru <b>með</b>.</div>
<div class="def"><div class="tag">Skilgreining 3.9: Opið bil</div>${S(']<i>a</i>, <i>b</i>[ = {<i>x</i> ∈ ℝ | <i>a</i> &lt; <i>x</i> &lt; <i>b</i>}')}<br>Báðir endapunktar eru <b>ekki með</b>.</div>
<div class="ath"><div class="tag">Ath!</div>Munurinn á lokuðu og opnu bili er hvort endapunktarnir eru með eða ekki.</div>
<p><b>Hálfopið bil:</b><br>${S('[<i>a</i>, <i>b</i>[ = {<i>x</i> ∈ ℝ | <i>a</i> ≤ <i>x</i> &lt; <i>b</i>}')}<br>${S(']<i>a</i>, <i>b</i>] = {<i>x</i> ∈ ℝ | <i>a</i> &lt; <i>x</i> ≤ <i>b</i>}')}</p>
<p><b>Óendanleg bil:</b><br>${S('[<i>a</i>, ∞[ = {<i>x</i> ∈ ℝ | <i>a</i> ≤ <i>x</i>}')}<br>${S(']−∞, <i>b</i>[ = {<i>x</i> ∈ ℝ | <i>x</i> &lt; <i>b</i>}')}</p>
<div class="ath"><div class="tag">Rétt táknmál</div>(1, 2) er punktur í hnitakerfi.<br>{1, 2} er mengi með stökunum 1 og 2.<br>[1, 2] eru allar rauntölur frá 1 til 2.</div>`},

bilsyn:{t:'Þrjár leiðir til að sýna bil',h:`
<p><b>1. Með mynd:</b></p>
${nl(-2.5,4.5,[-1.5,3.2],[[-1.5,3.2,true,false]])}
<p><b>Fylltur</b> hringur: talan er <b>með</b>. <b>Tómur</b> hringur: talan er <b>ekki með</b>. Hér er −1.5 með en 3.2 ekki.</p>
<p><b>2. Með hornklofum:</b> ${S('[−1.5, 3.2[')}</p>
<p>Lægri talan er alltaf vinstra megin. Hornklofi sem snýr <b>að</b> tölunni: talan er með. Hornklofi sem snýr <b>frá</b> tölunni: talan er ekki með. Við −∞ og ∞ snýr hornklofinn alltaf frá.</p>
<p><b>3. Með mengjasetningu:</b> ${S('{<i>x</i> ∈ ℝ | −1.5 ≤ <i>x</i> &lt; 3.2}')}</p>
<div class="ex"><div class="tag">Dæmi 3.5 · Bil á talnalínunni</div>
<p>1. <i>x</i> &lt; 5 &nbsp;→&nbsp; ${S(']−∞, 5[')}</p>${nl(0,8,[5],[[-Infinity,5,false,false]])}
<p>2. ${S('7 &lt; <i>x</i> ≤ 11')} &nbsp;→&nbsp; ${S(']7, 11]')}</p>${nl(5,13,[7,11],[[7,11,false,true]])}
<p>3. ${S('14 ≤ <i>x</i>')} &nbsp;→&nbsp; ${S('[14, ∞[')}</p>${nl(11,19,[14],[[14,Infinity,true,false]])}
<p>4. <i>x</i> ≠ −2 &nbsp;→&nbsp; ${S(']−∞, −2[ ∪ ]−2, ∞[')}, líka ritað ${S('ℝ \\ {−2}')}</p>${nl(-5,1,[-2],[[-Infinity,-2,false,false],[-2,Infinity,false,false]])}
</div>`},

faersla:{t:'Færsla á talnalínu (Δx)',h:`
<div class="def"><div class="tag">Skilgreining 3.10: Færsla</div><b>Færslan</b> frá <i>x</i>₁ til <i>x</i>₂ er<div class="rule" style="margin:.4rem 0">${S('Δ<i>x</i> = <i>x</i>₂ − <i>x</i>₁')}</div>(endapunktur mínus upphafspunktur)</div>
<p>Færslan er <b>jákvæð</b> ef farið er til hægri (<i>x</i>₂ &gt; <i>x</i>₁) en <b>neikvæð</b> ef farið er til vinstri.</p>
<div class="ex"><div class="tag">Dæmi 3.6 · Færsla</div>Finnum færsluna frá 7 til −2.
<div class="lausn"><b>Lausn:</b> ${S('Δ<i>x</i> = −2 − 7 = <b>−9</b>')}<br>Farið er frá stærri tölu til minni, svo færslan er neikvæð.</div></div>
<div class="ex"><div class="tag">Dæmi 3.7 · Færsla</div>Finnum <i>x</i> ef færslan frá <i>x</i> til ${F(7,3)} er ${F(3,5)}.
<div class="lausn"><b>Lausn:</b> Setjum Δ<i>x</i> = ${F(3,5)} og <i>x</i>₂ = ${F(7,3)} inn:
<div class="steps"><div>${F(7,3)} − <i>x</i> = ${F(3,5)}</div><div>${F(7,3)} − ${F(3,5)} = <i>x</i></div><div><i>x</i> = ${F('35 − 9',15)} = ${F(26,15)} = <b>${MX(1,11,15)}</b></div></div></div></div>`},

algildi:{t:'Algildi og algildisjöfnur',h:`
<div class="def"><div class="tag">Skilgreining 3.11: Algildi</div>Algildi tölunnar <i>a</i> er ritað |<i>a</i>|:<br>
|<i>a</i>| = <i>a</i> ef <i>a</i> ≥ 0<br>|<i>a</i>| = −<i>a</i> ef <i>a</i> &lt; 0<br>Algildi er aldrei neikvætt.</div>
<div class="ex"><div class="tag">Dæmi 3.8 · Algildi</div>Reiknum ${S('|−3| − |4 − 8| + 2|−3|')}
<div class="lausn"><b>Lausn:</b> ${S('= 3 − |−4| + 2 · 3')} ${S('= 3 − 4 + 6 = <b>5</b>')}</div></div>
<div class="ex"><div class="tag">Dæmi 3.9 · Algildisjafna</div>Finnum <i>x</i> ef ${S('|<i>x</i>| = 5')}.
<div class="lausn"><b>Lausn:</b> <i>x</i> = 5 eða <i>x</i> = −5, því |5| = 5 og |−5| = 5. Svar: <b><i>x</i> = ±5</b></div></div>
<div class="ex"><div class="tag">Dæmi 3.10 · Algildisjafna</div>Finnum <i>x</i> ef ${S('|<i>x</i> − 7| = 3')}.
<div class="lausn"><b>Lausn:</b> Tvær jöfnur:
<div class="steps"><div>${S('<i>x</i> − 7 = 3')} → <b><i>x</i> = 10</b></div><div>eða ${S('<i>x</i> − 7 = −3')} → <b><i>x</i> = 4</b></div></div></div></div>
<div class="ex"><div class="tag">Dæmi 3.11 · Algildisjafna</div>Finnum <i>x</i> ef ${S('|2<i>x</i> + 1| = |<i>x</i> − 3|')}.
<div class="lausn"><b>Lausn:</b>
<div class="steps"><div>${S('2<i>x</i> + 1 = <i>x</i> − 3')} → <b><i>x</i> = −4</b></div>
<div>eða ${S('2<i>x</i> + 1 = −(<i>x</i> − 3)')}</div><div>${S('2<i>x</i> + 1 = −<i>x</i> + 3')}</div><div>${S('3<i>x</i> = 2')} → <b><i>x</i> = ${F(2,3)}</b></div></div></div></div>
<div class="rule"><b>Regla:</b> |<i>u</i>| = <i>k</i> gefur <i>u</i> = <i>k</i> eða <i>u</i> = −<i>k</i>.<br>|<i>u</i>| = |<i>v</i>| gefur <i>u</i> = <i>v</i> eða <i>u</i> = −<i>v</i>.</div>`},

fjarlaegd:{t:'Fjarlægð á talnalínu',h:`
<div class="def"><div class="tag">Skilgreining 3.12: Fjarlægð</div><b>Fjarlægðin</b> <i>f</i> milli <i>x</i>₁ og <i>x</i>₂ er lengd striksins á milli þeirra, þ.e. algildi færslunnar:<div class="rule" style="margin:.4rem 0">${S('<i>f</i> = |<i>x</i>₂ − <i>x</i>₁|')}</div></div>
<div class="ex"><div class="tag">Dæmi 3.12 · Fjarlægð</div>Finnum fjarlægðina milli −3 og −${MX(5,1,7)}.
<div class="lausn"><b>Lausn:</b> <i>f</i> = |−${MX(5,1,7)} − (−3)| = |−${F(36,7)} + ${F(21,7)}| = |−${F(15,7)}| = <b>${MX(2,1,7)}</b></div></div>
<div class="ex"><div class="tag">Dæmi 3.13 · Fjarlægð</div>Finnum <i>x</i> ef fjarlægðin milli 7 og <i>x</i> er 11.
<div class="lausn"><b>Lausn:</b> ${S('|<i>x</i> − 7| = 11')}
<div class="steps"><div>${S('<i>x</i> − 7 = 11')} → <b><i>x</i> = 18</b></div><div>eða ${S('<i>x</i> − 7 = −11')} → <b><i>x</i> = −4</b></div></div></div></div>
<div class="ex"><div class="tag">Dæmi 3.14 · Fjarlægð</div>Finnum <i>x</i> ef fjarlægðin milli <i>x</i> og 9 er jöfn þrefaldri fjarlægð <i>x</i> frá −1.
<div class="lausn"><b>Lausn:</b> ${S('|9 − <i>x</i>| = 3|−1 − <i>x</i>|')}
<div class="steps"><div>${S('9 − <i>x</i> = 3(−1 − <i>x</i>)')}</div><div>${S('9 − <i>x</i> = −3 − 3<i>x</i>')}</div><div>${S('2<i>x</i> = −12')} → <b><i>x</i> = −6</b></div>
<div style="margin-top:.5rem">eða ${S('9 − <i>x</i> = −3(−1 − <i>x</i>)')}</div><div>${S('9 − <i>x</i> = 3 + 3<i>x</i>')}</div><div>${S('4<i>x</i> = 6')} → <b><i>x</i> = ${F(3,2)}</b></div></div></div></div>`},

midpunktur:{t:'Miðpunktur',h:`
<div class="def"><div class="tag">Skilgreining 3.13: Miðpunktur</div>Punkturinn <i>x</i><sub>m</sub> er <b>miðpunktur</b> milli <i>x</i>₁ og <i>x</i>₂ ef hann er jafnlangt frá þeim báðum.</div>
<div class="rule"><div class="tag">Regla 3.14</div><i>x</i><sub>m</sub> = ${F('<i>x</i>₁ + <i>x</i>₂',2)}<br>(meðaltal talnanna)</div>
<div class="ex"><div class="tag">Dæmi 3.15 · Miðpunktur</div>Finnum miðpunktinn milli ${F(4,3)} og ${MX(1,5,6)}.
<div class="lausn"><b>Lausn:</b> <i>x</i><sub>m</sub> = (${F(8,6)} + ${F(11,6)}) : 2 = ${F(19,6)} · ${F(1,2)} = ${F(19,12)} = <b>${MX(1,7,12)}</b></div></div>
<div class="ex"><div class="tag">Dæmi 3.16 · Miðpunktur</div>Finnum <i>x</i> ef miðpunktur milli <i>x</i> og 8 er 11.
<div class="lausn"><b>Lausn:</b><div class="steps"><div>11 = ${F('<i>x</i> + 8',2)}</div><div>22 = <i>x</i> + 8</div><div><b><i>x</i> = 14</b></div></div></div></div>`}
},
exercises: [
{n:1,s:'3.1',th:['grunn','adgerdir'],
 g:`Grunnmengið er ${S('<i>U</i> = {1, 2, 3, 4, 5}')}.<br>${S('<i>A</i> = {1, 2, 3, 4}')}<br>${S('<i>B</i> = {1, 3, 5}')}<br>Finnið eftirfarandi mengi.`,
 tip:`Fyllimengi ${OV('<i>A</i>')} eru stökin í <i>U</i> sem eru <b>ekki</b> í <i>A</i>.`,
 p:P([{q:OV(I('A')),a:'{5}'},{q:OV(I('B')),a:'{2, 4}'},{q:S('<i>A</i> ∪ <i>B</i>'),a:'{1, 2, 3, 4, 5}'},
 {q:S('<i>A</i> ∩ <i>B</i>'),a:'{1, 3}'},{q:S('<i>A</i> \\ <i>B</i>'),a:'{2, 4}'},{q:S('<i>B</i> \\ <i>A</i>'),a:'{5}'},
 {q:S('<i>A</i> ∪ '+OV(I('B'))),a:'{1, 2, 3, 4}'},{q:S('<i>A</i> ∩ '+OV(I('B'))),a:'{2, 4}'}])},
{n:2,s:'3.1',th:['adgerdir','grunn'],
 g:`${S('<i>U</i> = {1, 2, 3, 4, 5, 6, 7, 8}')}<br>${S('<i>A</i> = {1, 2, 5, 6, 7, 8}')}<br>${S('<i>B</i> = {2, 3, 6}')}<br>${S('<i>C</i> = {4, 5, 6, 7}')}<br>Finnið eftirfarandi mengi.`,
 tip:`Reiknaðu alltaf fyrst inni í svigunum. Strik yfir heilli segð þýðir fyllimengi af niðurstöðunni.`,
 p:P([{q:S('<i>A</i> ∩ <i>C</i>'),a:'{5, 6, 7}'},{q:S('<i>B</i> ∪ <i>C</i>'),a:'{2, 3, 4, 5, 6, 7}'},{q:S('<i>A</i> \\ <i>B</i>'),a:'{1, 5, 7, 8}'},
 {q:S('<i>A</i> \\ <i>C</i>'),a:'{1, 2, 8}'},{q:S('(<i>B</i> ∪ <i>C</i>) \\ <i>A</i>'),a:'{3, 4}'},{q:S('(<i>B</i> ∩ <i>C</i>) \\ <i>A</i>'),a:'∅'},
 {q:S('(<i>A</i> \\ <i>C</i>) ∩ <i>B</i>'),a:'{2}'},{q:S(OV(I('A'))+' ∪ '+OV(I('B'))),a:'{1, 3, 4, 5, 7, 8}'},{q:OV('<i>A</i> ∪ <i>B</i>'),a:'{4}'},
 {q:S('(<i>A</i> ∩ <i>B</i>) ∪ <i>C</i>'),a:'{2, 4, 5, 6, 7}'},{q:S('<i>A</i> ∩ (<i>B</i> ∪ <i>C</i>)'),a:'{2, 5, 6, 7}'},{q:S('<i>C</i> \\ (<i>A</i> ∩ <i>B</i>)'),a:'{4, 5, 7}'},
 {q:S('<i>A</i> \\ (<i>C</i> \\ <i>B</i>)'),a:'{1, 2, 6, 8}'},{q:S('(<i>A</i> ∩ <i>B</i>) ∪ (<i>A</i> ∩ <i>C</i>)'),a:'{2, 5, 6, 7}'}])},
{n:3,s:'3.1',th:['daemi33','adgerdir'],
 g:`<i>U</i> er mengi allra náttúrlegra talna undir 20.<br><i>A</i> = frumtölur í <i>U</i>.<br><i>B</i> = oddatölur í <i>U</i>.<br><i>C</i> = tölur í <i>U</i> sem eru heilt margfeldi af 3.`,
 tip:`Frumtala er heil tala stærri en 1 sem hefur enga þætti nema sjálfa sig og 1. Talan 1 er <b>ekki</b> frumtala.`,
 p:P([{q:'Skrifið mengin <i>A</i>, <i>B</i> og <i>C</i> með slaufusvigum.',a:`${S('<i>A</i> = {2, 3, 5, 7, 11, 13, 17, 19}')}<br>${S('<i>B</i> = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19}')}<br>${S('<i>C</i> = {3, 6, 9, 12, 15, 18}')}`},
 {q:'Teiknið Venn-mynd. Merkið öll stök inn á rétta staði.',a:venn3({a:['2'],b:['1'],ab:['5  7','11  13','17  19'],ac:[],bc:['9  15'],abc:['3'],c:['6  12  18'],out1:['4  8'],out2:['10 14 16']})+`<p><b>Aðeins í A:</b> 2<br><b>Aðeins í B:</b> 1<br><b>Aðeins í C:</b> 6, 12, 18<br><b>Í A og B (ekki C):</b> 5, 7, 11, 13, 17, 19<br><b>Í B og C (ekki A):</b> 9, 15<br><b>Í öllum þremur:</b> 3<br><b>Utan við öll:</b> 4, 8, 10, 14, 16</p>`},
 {q:`Finnið ${S('<i>A</i> ∪ <i>B</i>')}, ${S('<i>B</i> \\ <i>C</i>')} og ${S('(<i>A</i> ∪ <i>B</i>) ∩ <i>C</i>')}.`,a:`${S('<i>A</i> ∪ <i>B</i> = {1, 2, 3, 5, 7, 9, 11, 13, 15, 17, 19}')}<br>${S('<i>B</i> \\ <i>C</i> = {1, 5, 7, 11, 13, 17, 19}')}<br>${S('(<i>A</i> ∪ <i>B</i>) ∩ <i>C</i> = {3, 9, 15}')}`},
 {q:'Búið til tákn fyrir hlutmengið „sléttar tölur sem eru heilt margfeldi af 3“.',a:`${S('<i>C</i> \\ <i>B</i>')} eða ${S(OV(I('B'))+' ∩ <i>C</i>')}`}])},
{n:4,s:'3.1',th:['mengi','hlutmengi'],
 g:`Segið til um hvort fullyrðingarnar séu sannar (S) eða ósannar (Ó).`,
 tip:`∈ tengir <b>stak</b> og mengi. ⊆ tengir <b>tvö mengi</b>. Reiknaðu tölur eins og √9 og 2⁰ fyrst.`,
 p:P([tf(S('3 ∈ {1, 2, 3, 4}'),true),tf(S('2 ∈ {1, 3, 5}'),false),tf(S('2 ∉ {1, 3, 5}'),true),
 tf(S('3 ∈ {0, π, 5, 6, √9}'),true,'√9 = 3'),tf(S('{2} ∈ {0, 1, 2, 3, 4}'),false,'{2} er mengi, ekki stak'),
 tf(S('{2, 3} ⊆ {2, 4, 6, 8}'),false,'3 er ekki í seinna menginu'),tf(S('{1, 2} ⊆ {0, 2⁰, 3², '+F(1,2)+', √4}'),true,'2⁰ = 1 og √4 = 2'),
 tf(S('{2, 4} ⊄ {0, 1, 2}'),true,'4 er ekki í seinna menginu'),tf(S('∅ ⊆ {1, 2, 3}'),true,'tómamengið er hlutmengi í öllum mengjum'),
 tf(S('2 ⊆ {0, 1, 2}'),false,'tala getur ekki verið hlutmengi')])},
{n:5,s:'3.2',th:['talnamengi','hlutmengi'],
 g:`Segið til um hvort fullyrðingarnar séu sannar (S) eða ósannar (Ó).`,
 tip:`${S('ℕ ⊆ ℤ ⊆ ℚ ⊆ ℝ')}. Núll er hvorki jákvætt né neikvætt.`,
 p:P([tf(S(F(1,2)+' ∈ ℕ'),false),tf(S('0 ∈ ℝ₊'),false,'0 er ekki jákvætt'),tf(S('2 ∈ ℚ'),true),tf(S('√3 ∈ ℚ'),false,'√3 er óræð'),
 tf(S('−√4 ∈ ℤ'),true,'−√4 = −2'),tf(S('ℝ ⊆ ℤ'),false),tf(S('ℕ ⊆ ℤ₊'),true),tf(S('ℚ₋ ⊆ ℝ'),true),tf(S('ℚ ⊆ ℤ'),false),
 tf(S('ℕ ⊆ ℤ₋'),false),tf(S('ℤ ⊆ ℕ'),false),tf(S('ℕ ⊆ ℝ'),true),tf(S('ℕ ⊆ ℚ'),true),tf(S('ℤ₊ ⊆ ℝ₊'),true),
 tf(S('ℤ₋ ⊆ ℚ'),true),tf(S('0 ∈ ℤ₊'),false),tf(S('0 ∈ ℚ₋'),false)])},
{n:6,s:'3.2',th:['setning','talnamengi'],
 g:`Segið til um hvort fullyrðingarnar séu sannar (S) eða ósannar (Ó).`,
 tip:`Lestu fyrst grunnmengið (fyrir framan strikið). Leystu svo skilyrðið og haltu aðeins lausnum sem eru í grunnmenginu.`,
 p:P([tf(S('{<i>x</i> ∈ ℕ | <i>x</i> &lt; 5} = {1, 2, 3, 4, 5}')),tf(S('{<i>x</i> ∈ ℤ₋ | <i>x</i> &gt; −3} = {−1, −2}'),true),
 tf(S('{<i>x</i> ∈ ℚ | <i>x</i>² = 9} = {3}'),false,'það vantar −3'),tf(S('{<i>x</i> ∈ ℚ | 9<i>x</i>² = 1} = {'+F(1,3)+', −'+F(1,3)+'}'),true),
 tf(S('{<i>x</i> ∈ ℤ₋ | 9<i>x</i>² = 1} = {−'+F(1,3)+'}'),false,'ℤ inniheldur engin brot')]).map((p,i)=>i===0?{...p,tf:false,a:'<b>Ósatt</b> — 5 á ekki að vera í seinna menginu (5 er ekki minna en 5)'}:p)},
{n:7,s:'3.2',th:['setning','talnamengi'],
 g:`Gerið grein fyrir mengjunum (skrifið stökin upp).`,
 tip:`Leystu skilyrðið fyrir aftan strikið og athugaðu svo hvaða lausnir eru í grunnmenginu.`,
 p:P([{q:S('{<i>x</i> ∈ ℕ | <i>x</i> &lt; 1}'),a:'∅ (engin náttúrleg tala er minni en 1)'},{q:S('{<i>x</i> ∈ ℤ | <i>x</i> + 1 = 3}'),a:'{2}'},
 {q:S('{<i>x</i> ∈ ℚ | <i>x</i>² = 9}'),a:'{−3, 3}'},{q:S('{<i>x</i> ∈ ℚ₊ | <i>x</i>² = 9}'),a:'{3}'},{q:S('{<i>x</i> ∈ ℚ₋ | <i>x</i>² = 9}'),a:'{−3}'},
 {q:S('{<i>x</i> ∈ ℕ | sléttar tölur lægri en 8}'),a:'{2, 4, 6}'},{q:S('{<i>x</i> ∈ ℤ₋ | −3 ≤ <i>x</i> &lt; 5}'),a:'{−3, −2, −1}'},{q:S('{<i>x</i> ∈ ℤ₋ | −3 &lt; <i>x</i> &lt; 5}'),a:'{−2, −1}'}])},
{n:8,s:'3.2',th:['setning','talnamengi'],
 g:`Ritið með mengjasetningu.`,
 tip:`Veldu fyrst grunnmengi (t.d. ℤ₊ fyrir jákvæðar heilar tölur) og skrifaðu svo skilyrðið með ójöfnu.`,
 p:P([{q:'Jákvæðar heilar tölur minni en 20.',a:S('{<i>x</i> ∈ ℤ₊ | <i>x</i> &lt; 20}')},{q:'Neikvæðar heilar tölur stærri en −10.',a:S('{<i>x</i> ∈ ℤ₋ | <i>x</i> &gt; −10}')},
 {q:'Heilar tölur stærri en −5 og minni en 20.',a:S('{<i>x</i> ∈ ℤ | −5 &lt; <i>x</i> &lt; 20}')}])},
{n:9,s:'3.3',th:['bil','setning'],
 g:`Segið til um hvort fullyrðingarnar séu sannar (S) eða ósannar (Ó).`,
 tip:`Bil inniheldur <b>allar</b> rauntölur, líka brot. ℕ inniheldur aðeins heilar jákvæðar tölur.`,
 p:P([tf(S(']1, 4] = [2, 4]'),false,'t.d. 1.5 er í fyrra bilinu en ekki í því seinna'),tf(S('{<i>x</i> ∈ ℕ | 1 &lt; <i>x</i> ≤ 4} = ]1, 4]'),false,S('{<i>x</i> ∈ ℕ | 1 &lt; <i>x</i> ≤ 4} = {2, 3, 4}')+' sem eru bara þrjár tölur')])},
{n:10,s:'3.3',th:['bilsyn','bil'],
 g:`Sýnið bilin (eða sammengi bilanna) á talnalínunni. Teiknið á blað, berið svo saman við svarið.`,
 tip:`Fylltur hringur = talan er með. Tómur hringur = talan er ekki með.`,
 p:P([{q:'[3, 8]',a:nl(1,10,[3,8],[[3,8,true,true]])},{q:S(']−∞, 2]'),a:nl(-2,6,[2],[[-Infinity,2,false,true]])},
 {q:']2, 7]',a:nl(0,9,[2,7],[[2,7,false,true]])},{q:S('{<i>x</i> ∈ ℝ | <i>x</i> &gt; 5}'),a:nl(2,9,[5],[[5,Infinity,false,false]])},
 {q:S('{<i>x</i> ∈ ℝ | −2 &lt; <i>x</i> ≤ 5}'),a:nl(-4,7,[-2,5],[[-2,5,false,true]])},{q:S('{<i>x</i> ∈ ℝ | 2 ≤ <i>x</i> &lt; 5 eða <i>x</i> ≥ 7}'),a:nl(0,9,[2,5,7],[[2,5,true,false],[7,Infinity,true,false]])}])},
{n:11,s:'3.3',th:['bilsyn','bil'],
 g:`Ritið bilin (eða sammengi bilanna) með mengjasetningu.`,
 tip:`Fylltur hringur eða hornklofi að tölunni gefur ≤ eða ≥. Tómur hringur eða hornklofi frá tölunni gefur &lt; eða &gt;.`,
 p:P([{q:'[3, 8]',a:S('{<i>x</i> ∈ ℝ | 3 ≤ <i>x</i> ≤ 8}')},{q:S(']−∞, 2]'),a:S('{<i>x</i> ∈ ℝ | <i>x</i> ≤ 2}')},{q:']2, 7]',a:S('{<i>x</i> ∈ ℝ | 2 &lt; <i>x</i> ≤ 7}')},
 {q:nl(1.5,5.5,[2.3,4.7],[[2.3,4.7,false,true]]),a:S('{<i>x</i> ∈ ℝ | 2.3 &lt; <i>x</i> ≤ 4.7}')},
 {q:nl(9,15,[11.5],[[11.5,Infinity,true,false]]),a:S('{<i>x</i> ∈ ℝ | <i>x</i> ≥ 11.5}')},
 {q:nl(-7,5,[-5,1,3],[[-Infinity,-5,false,true],[1,3,true,false]]),a:S('{<i>x</i> ∈ ℝ | <i>x</i> ≤ −5 eða 1 ≤ <i>x</i> &lt; 3}')}])},
{n:12,s:'3.3',th:['bilsyn','bil'],
 g:`Ritið bilin (eða sammengi bilanna) með hornklofum.`,
 tip:`Hornklofi <b>að</b> tölunni = talan er með. Við ∞ og −∞ snýr hornklofinn alltaf <b>frá</b>.`,
 p:P([{q:S('{<i>x</i> ∈ ℝ | −1 ≤ <i>x</i> &lt; 4}'),a:'[−1, 4['},{q:S('{<i>x</i> ∈ ℝ | <i>x</i> &gt; −3}'),a:S(']−3, ∞[')},{q:S('{<i>x</i> ∈ ℝ | <i>x</i> ≤ 5.3}'),a:S(']−∞, 5.3]')},
 {q:S('{<i>x</i> ∈ ℝ | −2 ≤ <i>x</i> &lt; 0 eða 1 &lt; <i>x</i>}'),a:S('[−2, 0[ ∪ ]1, ∞[')},
 {q:nl(-5,6,[-3.1,4],[[-3.1,4,true,false]]),a:'[−3.1, 4['},{q:nl(-104,-94,[-100],[[-100,Infinity,false,false]]),a:S(']−100, ∞[')},
 {q:nl(3,10,[7],[[-Infinity,7,false,true]]),a:S(']−∞, 7]')},{q:nl(-12,12,[-10,-2,2,10],[[-10,-2,true,true],[2,10,false,false]]),a:S('[−10, −2] ∪ ]2, 10[')}])},
{n:13,s:'3.3',th:['bilsyn','adgerdir','bil'],
 g:`Finnið bilin (eða sammengi bilanna) og ritið þau með hornklofum.`,
 tip:`Teiknaðu bæði bilin á sömu talnalínu og lestu niðurstöðuna af myndinni.`,
 p:P([{q:S('[2, 4] ∪ [3, 7]'),a:'[2, 7]'},{q:S('[−3, 2] ∩ ]0, 8['),a:']0, 2]'},{q:S(']−2, 3] \\ ]−1, 6['),a:']−2, −1]'},
 {q:S(']−1, 7[ \\ [2, 5]'),a:S(']−1, 2[ ∪ ]5, 7[')},{q:S('[0, 8] \\ ]1, 4['),a:S('[0, 1] ∪ [4, 8]')},{q:S('[−3.2, 5.1[ \\ ]0.1, 3]'),a:S('[−3.2, 0.1] ∪ ]3, 5.1[')}])},
{n:14,s:'3.4',th:['faersla'],
 g:`Finnið færsluna frá:`,
 tip:`${S('Δ<i>x</i> = <i>x</i>₂ − <i>x</i>₁')}: seinni talan mínus fyrri talan.`,
 p:P([{q:'3 til 8',a:'8 − 3 = <b>5</b>'},{q:'7 til 2',a:'2 − 7 = <b>−5</b>'},{q:'−25 til 78',a:'78 − (−25) = <b>103</b>'},{q:'61 til −3',a:'−3 − 61 = <b>−64</b>'}])},
{n:15,s:'3.4',th:['faersla'],
 g:`Finnið <i>x</i> ef`,
 tip:`Settu upp jöfnuna ${S('Δ<i>x</i> = <i>x</i>₂ − <i>x</i>₁')} og leystu fyrir <i>x</i>.`,
 p:P([{q:'færslan frá 7 til <i>x</i> er 11.',a:`${S('<i>x</i> − 7 = 11')} → <b><i>x</i> = 18</b>`},
 {q:'færslan frá <i>x</i> til 11 er −3.',a:`${S('11 − <i>x</i> = −3')} → <b><i>x</i> = 14</b>`},
 {q:'þreföld færslan frá <i>x</i> til 7 er 8.',a:`${S('3(7 − <i>x</i>) = 8')} → ${S('7 − <i>x</i> = '+F(8,3))} → <b><i>x</i> = ${MX(4,1,3)}</b>`},
 {q:'færslan frá 9 til <i>x</i> er jöfn fjórfaldri færslunni frá <i>x</i> til 11.',a:`${S('<i>x</i> − 9 = 4(11 − <i>x</i>)')} → ${S('5<i>x</i> = 53')} → <b><i>x</i> = 10.6</b>`}])},
{n:16,s:'3.5',th:['algildi'],
 g:`Reiknið.`,
 tip:`Algildi er aldrei neikvætt. Reiknaðu fyrst inni í algildismerkjunum.`,
 p:P([{q:'|7|',a:'<b>7</b>'},{q:'|−13|',a:'<b>13</b>'},{q:S('|7| + |−13|'),a:'7 + 13 = <b>20</b>'},{q:S('|7 − 13|'),a:'|−6| = <b>6</b>'}])},
{n:17,s:'3.5',th:['algildi'],
 g:`Leysið jöfnurnar.`,
 tip:`|<i>u</i>| = <i>k</i> gefur tvær jöfnur: <i>u</i> = <i>k</i> eða <i>u</i> = −<i>k</i>.`,
 p:P([{q:'|<i>x</i>| = 7',a:'<b><i>x</i> = 7</b> eða <b><i>x</i> = −7</b>'},
 {q:S('|<i>x</i> + 3| = 5'),a:`${S('<i>x</i> + 3 = 5')} → <b><i>x</i> = 2</b><br>${S('<i>x</i> + 3 = −5')} → <b><i>x</i> = −8</b>`},
 {q:S('|4 − <i>x</i>| = 6'),a:`${S('4 − <i>x</i> = 6')} → <b><i>x</i> = −2</b><br>${S('4 − <i>x</i> = −6')} → <b><i>x</i> = 10</b>`},
 {q:S('3|<i>x</i> + 1| = 13'),a:`${S('|<i>x</i> + 1| = '+F(13,3))}<br><i>x</i> + 1 = ${F(13,3)} → <b><i>x</i> = ${MX(3,1,3)}</b><br><i>x</i> + 1 = −${F(13,3)} → <b><i>x</i> = −${MX(5,1,3)}</b>`},
 {q:S('|<i>x</i> − 1| = |2<i>x</i> + 1|'),a:`${S('<i>x</i> − 1 = 2<i>x</i> + 1')} → <b><i>x</i> = −2</b><br>${S('<i>x</i> − 1 = −(2<i>x</i> + 1)')} → ${S('3<i>x</i> = 0')} → <b><i>x</i> = 0</b>`},
 {q:S('3|<i>x</i> + 1| = |4 − <i>x</i>|'),a:`${S('3<i>x</i> + 3 = 4 − <i>x</i>')} → ${S('4<i>x</i> = 1')} → <b><i>x</i> = ${F(1,4)}</b><br>${S('3<i>x</i> + 3 = −(4 − <i>x</i>)')} → ${S('2<i>x</i> = −7')} → <b><i>x</i> = −${MX(3,1,2)}</b>`}])},
{n:18,s:'3.5',th:['fjarlaegd','algildi'],
 g:`Finnið fjarlægðina milli`,
 tip:`${S('<i>f</i> = |<i>x</i>₂ − <i>x</i>₁|')}. Breyttu blönduðum tölum í almenn brot fyrst.`,
 p:P([{q:S('<i>x</i>₁ = −4 og <i>x</i>₂ = 8'),a:'|8 − (−4)| = <b>12</b>'},
 {q:`<i>x</i>₁ = ${F(2,3)} og <i>x</i>₂ = −${F(1,2)}`,a:`|−${F(3,6)} − ${F(4,6)}| = ${F(7,6)} = <b>${MX(1,1,6)}</b>`},
 {q:`<i>x</i>₁ = −${MX(2,2,7)} og <i>x</i>₂ = −${F(1,5)}`,a:`|−${F(7,35)} + ${F(80,35)}| = ${F(73,35)} = <b>${MX(2,3,35)}</b>`}])},
{n:19,s:'3.5',th:['fjarlaegd','algildi'],
 g:`Finnið <i>x</i> ef`,
 tip:`Fjarlægð <i>x</i> frá <i>a</i> er |<i>x</i> − <i>a</i>|. Settu upp algildisjöfnu og leystu hana.`,
 p:P([{q:'fjarlægð <i>x</i> frá 9 er 11.',a:`${S('|<i>x</i> − 9| = 11')} → <b><i>x</i> = 20</b> eða <b><i>x</i> = −2</b>`},
 {q:'fjarlægð <i>x</i> frá −1 er jöfn fjarlægð <i>x</i> frá 7.',a:`${S('|<i>x</i> + 1| = |<i>x</i> − 7|')}<br>${S('<i>x</i> + 1 = <i>x</i> − 7')} hefur enga lausn.<br>${S('<i>x</i> + 1 = −(<i>x</i> − 7)')} → ${S('2<i>x</i> = 6')} → <b><i>x</i> = 3</b>`},
 {q:`tvöföld fjarlægð <i>x</i> frá −${MX(1,3,4)} er jöfn þrefaldri fjarlægð ${MX(2,1,3)} frá <i>x</i>.`,a:`${S('2|<i>x</i> + 1.75| = 3|'+F(7,3)+' − <i>x</i>|')}<br>${S('2<i>x</i> + 3.5 = 7 − 3<i>x</i>')} → <b><i>x</i> = 0.7</b><br>${S('2<i>x</i> + 3.5 = 3<i>x</i> − 7')} → <b><i>x</i> = 10.5</b>`}])},
{n:20,s:'3.6',th:['midpunktur'],
 g:`Finnið miðpunktinn milli:`,
 tip:`Miðpunktur er meðaltal talnanna: (<i>x</i>₁ + <i>x</i>₂) : 2.`,
 p:P([{q:'3 og 8',a:'11 : 2 = <b>5.5</b>'},{q:'−7 og 2',a:'−5 : 2 = <b>−2.5</b>'},{q:'−25 og −78',a:'−103 : 2 = <b>−51.5</b>'},
 {q:`${F(5,6)} og −${F(1,4)}`,a:`(${F(10,12)} − ${F(3,12)}) : 2 = ${F(7,12)} : 2 = <b>${F(7,24)}</b>`}])},
{n:21,s:'3.6',th:['midpunktur'],
 g:`Finnið <i>x</i> ef`,
 tip:`Settu inn í ${S('<i>x</i><sub>m</sub> = (<i>x</i>₁ + <i>x</i>₂) : 2')}, margfaldaðu báðar hliðar með 2 og leystu fyrir <i>x</i>.`,
 p:P([{q:'miðpunkturinn milli 7 og <i>x</i> er 10.',a:`${S('7 + <i>x</i> = 20')} → <b><i>x</i> = 13</b>`},
 {q:'miðpunkturinn milli <i>x</i> og −7 er 5.',a:`${S('<i>x</i> − 7 = 10')} → <b><i>x</i> = 17</b>`},
 {q:'miðpunkturinn milli 3 og <i>x</i> er −7.',a:`${S('3 + <i>x</i> = −14')} → <b><i>x</i> = −17</b>`},
 {q:`miðpunkturinn milli ${F(2,3)} og <i>x</i> er 1.2.`,a:`${F(2,3)} + <i>x</i> = 2.4 → <i>x</i> = ${F(36,15)} − ${F(10,15)} = ${F(26,15)} → <b><i>x</i> = ${MX(1,11,15)}</b>`}])}
]
});
