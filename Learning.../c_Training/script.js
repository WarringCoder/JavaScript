// Değişken Tipini Öğrenebiliyoruz
var Futbolcu_ismi = "Icardi";
let Futbolcu_deger = 10000;

console.log(typeof Futbolcu_ismi);
console.log(typeof Futbolcu_deger);

// Değişkenin Tipini Çevirebiliyoruz 

    // 1. Örnek
    let sayi1 = 43;
    let sayi2 = "66";

    console.log(sayi1);
    console.log(Number(sayi2));

    // 2. Örnek
    let sayi3 = "14";
    let sayi4 = "53";

    console.log(sayi3 + sayi4);
    console.log(Number(sayi3) + Number(sayi4));

// String şeklinde yazdırabilirsin

var isim = "ishak";
var soyad = "eren";

console.log(isim + " " +soyad);

// Boalen Tipinde Yazdırma

var not = 85;
var sözlü = 90;
var EQ = 99;

let seviye = (250 < (not + sözlü + EQ));

console.log("Üst Seviye Mi?" + " " + seviye);
console.log(typeof(seviye));

// Undefined değer yazdırma (Eğer değer atanmamışsa undefined olur)

var deneme;
console.log(deneme);
console.log(typeof(deneme));