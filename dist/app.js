const steps = [
['İslami usullere uygun kesim','Kurban kesimi, dini hassasiyetler gözetilerek İslami usullere uygun şekilde gerçekleştirilir.','Dini hassasiyet · Özenli hizmet'],
['Parçalama ve kemikten ayırma','Kesilen hayvanların etleri parçalanır ve kemiklerinden ayrılarak hisselemeye hazır hale getirilir.','Profesyonel kasap ekibi · Hijyenik işlem'],
['Eşit tartım, adil hisse dağılımı','Büyükbaş kurban etleri, 7 kollu terazi ile 7 hisseye eşit şekilde tartılır.','Hassas tartım · Eşit bölüşüm'],
['Frigolu araçlarla kapınıza teslim','Etler hijyenik şekilde paketlenir; soğuk zincir korunarak frigolu araçlarla adresinize ulaştırılır. Teslimat bölgesi ve planı için bizimle görüşebilirsiniz.','Hijyenik paketleme · Soğuk zincir'],
['Süreç boyunca online bilgilendirme','Kesim, parçalama, tartım ve teslimat süreçleri hakkında hisse sahiplerine online bilgi verilir. Bilgilendirme detaylarını ekibimizden öğrenebilirsiniz.','Süreç bilgisi · Kolay iletişim']
];
document.getElementById('steps').innerHTML = steps.map((s,i)=>`<article class="step" id="asama-${i+1}"><a class="poster" href="gorsel-${i+1}.png" target="_blank" rel="noopener" aria-label="${i+1}. aşama görselini büyüt"><img src="gorsel-${i+1}.png" alt="${i+1}. aşama: ${s[0]}" loading="lazy" width="1254" height="1254"></a><div class="step-copy"><span class="step-number">0${i+1}<small> / 05</small></span><h3>${s[0]}</h3><p>${s[1]}</p><div class="step-note">${s[2]}</div><a class="text-link" href="https://wa.me/905313267858" target="_blank" rel="noopener">Detaylı bilgi alın ↗</a></div></article>`).join('');
