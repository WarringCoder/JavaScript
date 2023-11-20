var text = "";
var sayac = 0;

function asalhesaplama()
{
    let sayi = document.querySelector("#sayi").value
    for (i=2; i<sayi; i++)
    {
        if(sayi % i == 0)
        {
            sayac++;
        }
    }

    if(sayac == 0)
    {
        text = "Bu Sayı  ASAL  Bir Sayıdır";
    }
    else
    {
        text = "Asal DEĞİL! Bir ve Kendisi Hariç <strong>"+ sayac + "</strong> Böleni Vardır";
    }

    document.querySelector(".sonuc").innerHTML = text;
}

let button = document.querySelector("#event");
button.onclick = asalhesaplama;