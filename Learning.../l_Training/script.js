var dem = new Date(); // Şimdiki Tarihi Alır

    // Get Methods ( Şu anın Bilgisi )
     dem = dem.getDate(); // Ayın  Hangi Günde Olduğunu Söyler
     dem = dem.getDay(); //  Haftanın Hangi Gününde Olduğunu Söyler
     dem = dem.getFullYear(); // Yılı Söyler 
     dem = dem.getHours(); // Saati Söyler
     dem = dem.getMilliseconds(); // Mili Saniyeyi Söyler
     dem = dem.getMinutes(); // Dakikayı öyler
     dem = dem.getMonth(); // Ayı söyler
     dem = dem.getSeconds(); // Saniyeyi Söyler
     dem = dem.getTime(); // Saati milisaniye cinsinden veriyor


    // Set Methods ( İstediğimiz Bilgiyi Değiştirebiliyoruz )
     sonuc = dem.setFullYear(2024);
     sonuc = dem.setMonth(11);
     sonuc = dem.setDate(23);
     sonuc = dem.setHours(0);
     sonuc = dem.setMinutes(0);
     sonuc = dem.setSeconds(0);
     sonuc = dem.setMilliseconds(123);
     sonuc = dem;

    // Yaşımı Bul :)
    var yas = new Date(2002, 12, 18);
    
    sonuc = dem.getFullYear() - yas.getFullYear();


    console.log(sonuc);

    // SONUÇLARI TEST ETMEK İÇİN TEKER TEKER DENEMELİSİNİ. BU YÜZDEN YORUM SATIRINA ALINIZ