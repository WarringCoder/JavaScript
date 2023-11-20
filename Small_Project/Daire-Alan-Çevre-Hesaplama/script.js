let text1="";
let text2 = "";
function hesapla()
{
    let yarıcap = document.querySelector("#sayı").value;
    const alan_sonuc = (Math.PI * yarıcap);
    const cevre_sonuc = (2 * Math.PI * yarıcap);
    text1 = "Dairenin Alanı: " + alan_sonuc;
    text2 = "Dairenin Çevresi: " + cevre_sonuc;
    document.querySelector(
      "#sonuc"
    ).innerHTML = ` <div>${text1}</div> <div> ${text2}</div>`;
}
var button = document.querySelector("#btn");
button.onclick = hesapla;