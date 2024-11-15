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
