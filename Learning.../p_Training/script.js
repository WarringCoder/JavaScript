let sayilar = [1, 5, 7, 15, 3, 25, 12, 24];

// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.

for (let i in sayilar)
{
    sonuc = (sayilar[i] * sayilar[i]);
    // console.log(sonuc);
}

// ya da 

for(let i of sayilar)
{
    sonuc = i * i;
    // console.log(sonuc);
}

// 2- sayilar listesindeki hangi sayılar 5' in katıdır?
for (let s of sayilar)
{
    if (sonuc = (s % 5 == 0))
    {
        // console.log(s);
    }
}

// 3- sayilar listesindeki çift sayıların toplamını bulunuz.
var toplam = 0;
for (let h of sayilar)
{
    if(h % 2 == 0)
    {
        toplam += h;
    }
    
}
// console.log(toplam);



let urunler = [
  "iphone 12",
  "samsung s22",
  "iphone 13",
  "samsung s23",
  "samsung s20"
];
// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.
for (let k of urunler)
{
    sonuc = k.toUpperCase();
    // console.log(sonuc);
}

// 5- urunler listesinde samsung geçen kaç ürün vardır?
let adet = 0;

for(let urun of urunler) {
     if(urun.includes("samsung")) {
         adet++;
     }
 }

 // console.log(adet);



let ogrenciler = [
    {"ad":"yiğit", "soyad": "bilgi", "notlar": [60,70,60]},
    {"ad":"ada", "soyad": "bilgi", "notlar": [80,70,80]},
    {"ad":"çınar", "soyad": "turan", "notlar": [10,20,60]}
];

// ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.
for (let p in ogrenciler)
{
    sonuc =
      ((ogrenciler[p].notlar[0] +
      ogrenciler[p].notlar[1] +
      ogrenciler[p].notlar[2]) / 3 );
      if(sonuc > 50)
      {
        // console.log("Tebrikler Geçtiniz NOTUNUZ:", sonuc);
      }
      else
      {
        // console.log("Geçemedin Tembel Teneke Git Çalış! Al bu da NOTUN:", sonuc);
      }
}


// tüm öğrencilerin not ortalaması kaçtır?
var sonuc = 0;
var adett = 0;
var toplamm = 0;
for (let p in ogrenciler) 
{
  sonuc =
    ((ogrenciler[p].notlar[0] +
    ogrenciler[p].notlar[1] +
    ogrenciler[p].notlar[2]) / 3);
    toplamm += sonuc;
    adett++;
}
console.log("Sınıf Ortalaması: ", toplamm / adett);