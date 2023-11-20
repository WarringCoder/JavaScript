// Bir sayının 10 - 50 arasında olup olmadığını ispat et. Arasındaysa consola yazdır.

var sayi = 5;

if(10 < sayi && sayi < 50 )
{
    console.log("Tebrikler Şanslı Sayıyı Tutturdunuz :)")
}
else 
{
    console.log("Üzgünüm Tekrar Deneyin");
} 

// Bir sayının pozitif tek sayı olup olmadığını kontrol etme

var sayi = -7 ;

if (sayi % 2 == 1 || sayi % 2 == -1) {
  if (sayi > 0) {
    console.log("Bu sayı pozitif tek sayıdır!");
    return 0;
  }
  console.log("Bu sayı Tek ama pozitif değil!");
} else {
  console.log("Üzgünüm bu sayı pozitif ve tek sayı değil!");
}

// x, y, z sayılarını büyükten küçüğe sırala

var x=65, y=34, z=99;

if (x > y && x > z) {
  console.log("En büyük sayı x'tir");
} else if (y > x && y > z) {
  console.log("En büyük sayı y'dir");
} else if (z > x && z > y) {
  console.log("En büyük sayı y'dir");
} else {
  console.log("Sayılar eşit!");
}

//  2 vize (40%) ve 1 final(60%) notuna göre hesaplanan ortalama için;
    // a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.
    // b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
    // c- Finalden 70 alındığında ortalama 50' nin altında olsa bile dersten geçilsin.

var ogrenci =
{
    vize1 : 3,
    vize2 : 10,
    final : 70
}

var vize_ort = ((((ogrenci.vize1 + ogrenci.vize2) /2) * 0.4));
var final_ort = (ogrenci.final * 0.6 );
var genel_ort = (vize_ort + final_ort);

if (genel_ort >= 50 && ogrenci.final >= 50) 
{ 
    console.log("Tebrikler Geçtiniz! Aferin Lan!")
} 
    else if (ogrenci.final >= 70) 
    {
    console.log("Finalde paçayı yıttın :) hadi yine iyisin. Geçtin");
    } 
        else 
        {
        console.log("Kaldın Bebeğim. Git Çalış");
        };

console.log(vize_ort, final_ort, genel_ort);