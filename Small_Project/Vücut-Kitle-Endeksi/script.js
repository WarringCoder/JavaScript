function hesapla()
{
    var text = "";
    let boy = Number(document.querySelector("#boy-veri").value);
    let kilo = Number(document.querySelector("#kg-veri").value);
    let boy_metre = boy / 100;
    var kitle_endeksi = parseInt(kilo / (boy_metre * boy_metre));

    if( kitle_endeksi < 18)
    {
        text = "ZAYIF";
    }
    else if (18 <= kitle_endeksi && kitle_endeksi < 25)
    {
        text = "NORMAL";
    }
    else if (25 <= kitle_endeksi && kitle_endeksi< 30)
    {
        text = "KİLOLU";
    }
    else if (30 <= kitle_endeksi && kitle_endeksi< 35)
    {
        text = "1. DERECE OBEZİTE";
    }
    else if (35 <= kitle_endeksi && kitle_endeksi< 40)
    {
        text = "2. DERECE OBEZİTE";
    }
    else if (40 <= kitle_endeksi)
    {
        text = "3. DERECE OBEZİTE";
    }

    document.querySelector(
      "#sonuc"
    ).innerHTML = ` <div class="son"><p><strong>Kilo Kategorim:  </strong> ${text}</p> <p><strong>Vücut Kitle Endeksim:  </strong> ${kitle_endeksi}</p> <p><strong>Boyum:  </strong> ${boy}cm</p><p><strong>Kilom:  </strong> ${kilo}cm</p></div>`;
}

document.querySelector("#button").onclick = hesapla;