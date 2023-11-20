let takimlar = ["Galatasaray", "Fenerbahçe", "Beşiktaş",];

sonuc = takimlar.length;

// Array to String
sonuc = takimlar.toString(); 
sonuc = takimlar.join(" "); // Birleşen stringlerin arasına karakter veya boşluk koyabiliyoruz

// Eleman Silme
sonuc = takimlar.pop(); // en sondaki elemanı siler ve çeker
sonuc = takimlar.shift();  // en baştaki elemanı siler ve çeker

// Eleman Ekleme
sonuc = takimlar.push("Trabzonspor"); // Sona ekelme yapıyor
sonuc = takimlar.unshift("Konyaspor");  // Başa Ekleme Yapar

// Arrayleri Birleştirme
let kitaplar1 = ["Satranç","Pierette","NLP"];
let kitaplar2 = ["Kuyucaklı Yusuf","İyiler Ölmez"];

sonuc = kitaplar1.concat(kitaplar2); // 2 Ayrı arrayi Birleştirdi

// Arrayin İçine Kolayca Ekleme Çıkarma
sonuc = kitaplar1.splice(0,1, "Vadideki Zambak, Piyon, Yürümeye Övgü") 



console.log(sonuc);
console.log(kitaplar1)
console.log(takimlar);