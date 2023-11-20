var meyveler = ["Elma","Armut","Muz","Çilek"];

sonuc = meyveler.length;
sonuc1 = meyveler[0];
sonuc2 = meyveler[3];
sonuc3 = meyveler.indexOf("Elma");
sonuc4 = meyveler.push("Kiraz");
sonuc5 = meyveler.pop();
sonuc6 = meyveler.pop();



console.log("Dizi", sonuc, "elemanlıdır");
console.log("Dizinin ilk elemanı ", sonuc1, " Dizinin ikinci elemanı ", sonuc2);
if (sonuc3 >= 0) {
  console.log("True");
}
console.log(sonuc4);
console.log(sonuc5);
console.log(sonuc6);
console.log(meyveler);

var time = new Date();

var ogrenci1 =
{
    isim: "Yigit",
    soyad: "Bilgi",
    dogum: 2010,
    not1:70,
    not2: 60,
    not3: 80
}
var ogrenci2 = {
  isim: "Ada",
  soyad: "Bilgi",
  dogum: 2012,
  not1: 80,
  not2: 80,
  not3: 90,
};
var ogrenci3 = {
  isim: "Ahmet",
  soyad: "Turan",
  dogum: 2009,
  not1: 60,
  not2: 60,
  not3: 70,
};

ogrenci1yas = ( time.getFullYear() - ogrenci1.dogum );
ogrenci1ort = ((ogrenci1.not1 + ogrenci1.not2 + ogrenci1.not3) / 3); 

ogrenci2yas = time.getFullYear() - ogrenci2.dogum;
ogrenci2ort = (ogrenci2.not1 + ogrenci2.not2 + ogrenci2.not3) / 3; 

ogrenci3yas = time.getFullYear() - ogrenci3.dogum;
ogrenci3ort = (ogrenci3.not1 + ogrenci3.not2 + ogrenci3.not3) / 3; 

console.log("1. Ogrenci:", 
"yas:", ogrenci1yas, "Ort:", ogrenci1ort, "2. Ogrenci:", 
"yas:", ogrenci2yas,"Ort:", ogrenci2ort, "3. Ogrenci:", 
"yas:",ogrenci3yas, "Ort:", ogrenci3ort);