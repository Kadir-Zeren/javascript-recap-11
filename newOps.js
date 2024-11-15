//* =============================================
//*          DESTRUCTURING (OBJECT)
//* =============================================
console.log(" ****** NEW OPERATORS ******* ");

const car = {
  brand: "BMW",
  model: 2020,
  engine: 2000,
  colors: ["pink", "blue"],
};

//? 1.Yontem (. notasyon)
const brand = car.brand;
console.log(brand);

//? 2.Yontem (square bracket)
console.log(car["model"]);

//? 3. Destructure
const { brand: name, engine, colors } = car; //? object destr.
console.log(engine, colors, name);

const { model } = car;
console.log(model);

//* EXAMPLE: NESTED
const cars = {
  car1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
  },
  car2: {
    name: "Mercedes",
    model: 2022,
    engine: 2.0,
  },
  car3: ["anadol", "togg", "devrim"],
  car4: "kağnı",
};

let { car1, car2, car4, car3 } = cars; //? 1 seviye destr.
console.log(car2, car4);

const { name: c1Name, model: c1Model } = car1; //? 2 seviye destr.
const { name: c2Name, model: c2Model } = car2;
console.log(c2Name, c2Model);

//7-Alternativly
const {
  car1: { nameCar1, modelCar1, engineCar1 },
  car2: { nameCar2, modelCar2, engineCar2 },
} = cars;

//* Example
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "Josh",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];

//? KLASIK
team.forEach((t) => {
  console.log("NAME:", t.name);
  console.log("SURNAME:", t.surname);
  console.log("JOB:", t["job"]);
  console.log("AGE:", t["age"]);
  console.log(" ***************** ");
});

//? DESTR.
team.forEach((t) => {
  console.log(t);
  const { name, surname, job, age } = t;
  console.log("NAME:", name);
  console.log("SURNAME:", surname);
  console.log("JOB:", job);
  console.log("AGE:", age);
  console.log("***************** ");
});

// !--- FUNCTIONLARDA DEATRUC. KULLANIMI-----------

//? Donus degeri olarak
const getProduct = () => {
  return {
    id: "123",
    pName: "NIKE",
    price: 300,
    stock: 1000,
  };
};

// console. log (getProduct())
let { pName, price, stock } = getProduct();
//* function'un dondurdugu obje doğrudan dest. yapılabilir

console.log("PRODUCT NAME:", pName, "PRICE:", price);

stock = stock - 100;
console.log("REMAINING STOCK:", stock);

//? Parametre olarak
const data = {
  id: "123",
  pName: "NIKE",
  price: 300,
};

// const print = function (data) {
//   const { id, pName, price } = data;
//   console.log(pName, price);
// };

const print = function ({ pName, price }) {
  //? Yolda destr.
  console.log(pName, price);
};

print(data);

//* =====================================
//*       DESTRUCTURING (ARRAY)
//* =====================================
const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"];

//? Klasik
const ismet = names[2];
console.log(ismet);

const [ahmo, , ismo, safo] = names;
console.log(ahmo, ismo, safo);

//*============================================
//* REST (...)
//*============================================

//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? içerisine konumlandirir. Cesitli kullanım alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!   ayri dizi yada objelere kopyalanmasini saglayabilir.

//* REST: Array
const araclar = ["bmw", "merso", "ferarri", "rover", "lambo"];

const [araba1, araba2, araba3, ...geriKalanlar] = araclar;
console.log(araba1);
console.log(geriKalanlar);

//* REST: Object

const kisi = {
  ad: "Canan",
  soyad: "Cano",
  yas: 33,
  meslek: "tester",
};

const { meslek, yas, ...isim } = kisi;

console.log(meslek, yas);
console.log(isim);
console.log(kisi);

//! 2- Bir fonksiyonun argumanlarini diziye cevirmek icin kullanılabilir.

const topla = (a, b) => a + b;

console.log("SONUC:", topla(2, 5, 10, 4));

//? REST ( ... ) ile non-iterable olan sayilari iterable hale (diziye)
//? cevirmiş olduk.

const toplaminiAl = (...sayilar) => {
  console.log(sayilar);
  return sayilar.reduce((t, v) => t + v, 0);
};
console.log("SONUC:", toplaminiAl(2, 5, 10, 4, 6, 8));

//*=======================================================
//*         SPREAD (...)
//*=======================================================

//? Spread operatoru ise iterables olan bir elemani bireysel
//? degerler haline getirir.

const ucanAraclar = ["drone", "heli", "ucak"];
const karaAraclari = ["Tir", "Araba", "Kamyonet", "Bisiklet"];

const tasitlar = [ucanAraclar, karaAraclari];
console.log(tasitlar);
console.log(tasitlar[0][1]);

const tasitlar1 = [...ucanAraclar, ...karaAraclari];
console.log(tasitlar1);
