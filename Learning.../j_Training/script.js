var paragraf = "Ben cabuk iyilesen bir insanim ve savasmaya devam ediyorum";

let sonuc;

sonuc = paragraf.indexOf("bir");
sonuc = paragraf.toLowerCase();
sonuc = paragraf.toUpperCase();
sonuc = paragraf.length;
sonuc = paragraf[5];
sonuc = paragraf.slice(9, 17);
sonuc = paragraf.slice(4);
sonuc = paragraf.replace("ediyorum","edecegim")
sonuc = paragraf.split(" ");
sonuc = paragraf.split(" ")[4];

console.log(sonuc);