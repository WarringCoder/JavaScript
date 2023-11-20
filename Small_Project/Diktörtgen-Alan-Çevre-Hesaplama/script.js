function hesapla() {
  let KısaKenar = Number(document.querySelector("#kısa-kenar").value);
  let UzunKenar = Number(document.querySelector("#uzun-kenar").value);
  const sonuc_cevre = 2 * (KısaKenar + UzunKenar);
  const sonuc_alan = KısaKenar * UzunKenar;
  document.querySelector("#hesaplandı").innerHTML = `
                    <div class="sonuc-container mt-4">
                        <div class="sonuc-cevre"><span>Dikdörtgenin Çevresi: </span>${sonuc_cevre}</div>
                        <div class="sonuc-alan"><span>Dikdörtgenin Alanı: </span>${sonuc_alan}</div>
                    </div>
                `;
}
let button = document.querySelector(".btn");
button.onclick = hesapla;
