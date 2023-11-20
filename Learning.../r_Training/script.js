// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.

function Training1(kelime, adet) {
  for (let i = 0; i < adet; i++) {
    console.log(kelime);
  }
}

Training1("SAVAŞYORUM", 17);

// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.
function Training2 (UzunKenar, KısaKenar)
{
    let Alan = UzunKenar * KısaKenar; 
    let Çevre = (2* (UzunKenar + KısaKenar));
    console.log("Uzunluklarını Girdiğiniz Dikdörtgenin ALANI: " + Alan)
    console.log("Uzunluklarını Girdiğiniz Dikdörtgenin ÇEVRESİ: " + Çevre);
}

Training2(42, 13);

// 3- Yazı tura uygulamasını fonksiyon kullanarak yapınız.
function Training3() {
  let random = Math.random(); // 0-1

  if (random < 0.5) {
    console.log("yazı");
  } else {
    console.log("tura");
  }
  console.log(random);
}
Training3();


// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.
function Training4(sayi) {
    let sayilar = [];

    for(let i=1; i <= sayi; i++) {
        if(sayi % i == 0) {
            sayilar.push(i);
        }
    }

    return sayilar;
}


 console.log(Training4(24));  

 // 5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.

function toplam() {
  let sonuc = 0;

  for (let i = 0; i < arguments.length; i++) {
    sonuc += arguments[i];
  }

  return sonuc;
}

console.log(toplam(2, 5));
console.log(toplam(2, 5, 7));
console.log(toplam(2, 5, 7, 10));  
