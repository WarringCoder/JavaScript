//   1- Sipariş bilgilerini object içerisinde saklayınız.

var siparis_1 = {
  "siparis id": 101,
  "siparis tarihi": 31 / 12 / 2022,
  "ödeme şekli": "Kredi Kartı",
  "kargo adresi": "Yahya Kaptan mh. Kocaeli İzmit",
  "satın alınan ürünler": [
    {
      "ürün id": 5,
      "ürün başlığı": "İphone 13 Pro",
      "ürün url": "http://abc.com/iphone-13-pro",
      "ürün fiyatı": 22000
    },
    {
      "ürün id": 6,
      "ürün başlığı": "İphone 13 Pro Max",
      "ürün url": "http://abc.com/iphone-13-pro-max",
      "ürün fiyatı": 25000
    },
  ],
  "müşteri":{"müşteri id": 12},
  "satıcı":{"firma id": 34, "firma adı": "apple türkiye"}
};

var siparis_2 = {
  "siparis id": 102,
  "siparis tarihi": 30 / 12 / 2022,
  "ödeme şekli": "Kredi Kartı",
  "kargo adresi": "Yahya Kaptan mh. Kocaeli İzmit",
  "satın alınan ürünler": 
  [
    {
      "ürün id": 6,
      "ürün başlığı": "İphone 13 Pro Max",
      "ürün url": "http://abc.com/iphone-13-pro-max",
      "ürün fiyatı": 25000,
    },
  ],
  müşteri: { "müşteri id": 12 },
  satıcı: { "firma id": 34, "firma adı": "apple türkiye" },
};

//   2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)
var siparis_1_kdv_dahil = (((siparis_1["satın alınan ürünler"][0]["ürün fiyatı"]) * (1 + (18/100))) + ((siparis_1["satın alınan ürünler"][1]["ürün fiyatı"]) * (1 + (18/100))));

var siparis_2_kdv_dahil =
  siparis_2["satın alınan ürünler"][0]["ürün fiyatı"] * (1 + 18 / 100);

console.log(siparis_1_kdv_dahil);
console.log(siparis_2_kdv_dahil);



//   3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.
var siparis_toplam = siparis_1_kdv_dahil + siparis_2_kdv_dahil;

console.log(siparis_toplam);