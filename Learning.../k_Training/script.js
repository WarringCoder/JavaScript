let url = "https://www.sadikturan.com";
let kursAdi = "Komple Web Geliştirme Kursu"; 
var sonuc;

// 1- url kaç karakterlidir?

sonuc = url.length;

// 2- kursAdi kaç kelimeden oluşmaktadır?

sonuc = kursAdi.split(" ").length;

// 3- url https ile mi başlıyor?

 sonuc = url.startsWith("https");

 if(sonuc == true)
 {
     console.log("Yes Bebegim! https ile basliyor");
 }

// 4- kursAdi içerisinde Eğitimi kelimesi var mı?

if ( kursAdi.indexOf("Kursu") > -1)
{
    console.log("Evet var bebegim")
}
else
{
    console.log("Malesef yok bebegim")
}

// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.
// https://www.sadikturan.com/komple-web-gelistirme-kursu

kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ","-");
kursAdi = kursAdi.replace("ş", "s").replace("ı", "i");

sonuc = `${url}/${kursAdi}`;

console.log(sonuc);