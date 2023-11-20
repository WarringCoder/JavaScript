var ogrencı1 =
{
    isim : "Nil",
    dogum : 2004,
    mat_not : 70,
    mat_not2 : 80,
    mat_not3 : 90
}

var ogrencı2 = 
{
  isim: "Ishak",
  dogum: 2002,
  mat_not: 90,
  mat_not2: 83,
  mat_not3: 99,
};


ogrenci1_yas = (2023 - (ogrencı1.dogum));
ogrenci2_yas = (2023 - (ogrencı2.dogum));

ogrenci1_mat_ort = ( (ogrencı1.mat_not + ogrencı1.mat_not2 + ogrencı1.mat_not3) /3 );
ogrenci2_mat_ort = ( (ogrencı2.mat_not + ogrencı2.mat_not2 + ogrencı2.mat_not3) /3 );

ogrencı1_basari = (90 < ogrenci1_mat_ort);
ogrencı2_basari = (90 < ogrenci2_mat_ort);

console.log(ogrencı1.isim , ogrenci1_yas , ogrenci1_mat_ort ,"Üst Seviye mi?", ogrencı1_basari);
console.log(ogrencı2.isim , ogrenci2_yas , ogrenci2_mat_ort ,"Üst Seviye mi?", ogrencı2_basari);
