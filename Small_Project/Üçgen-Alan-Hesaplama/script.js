function hesapla()
{
    let taban = document.querySelector("#tbn").value;
    let yükseklik = document.querySelector("#ykslk").value;
    const hesaplandı = (taban * (yükseklik / 2));
    document.querySelector("#sonuc").innerHTML = `Üçgenin Alanı: ${hesaplandı}`;
}

var button = document.querySelector("#btn");
button.onclick = hesapla;