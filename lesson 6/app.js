////////////////HOISTING
var mojeIme = "ALdin";

var mojeIme;

console.log(mojeIme);

console.log(mojeIme);
mojeIme = 10;

console.log(mojeIme);

var mojeIme;

mojeIme = 10;

console.log(hdmi);
let hdmi;

hdmi = 10;
console.log(hdmi);

nekeaFunkcija();

const nekeaFunkcija = () => {
  console.log("John Doe");
};

greetings(hisName);

function greetings(nekoIme) {
  console.log(nekoIme, "gde koci ?");
}

var hisName = "Muzafer1234%^&*";
let brojac = 0;

for (let i = 0; i < hisName.length; i++) {
  if (+hisName[i] / 1 === +hisName[i]) {
    console.log("ima");
  } else {
    brojac++;
  }
}

const automobili = {
  ja: ["vw", "audi", "cayenne", "targa"],
  tajra: ["golf", "audi", "bmw"],
  iman: ["peugeot", "fiat", "citroen", "x5"],
  bronja: ["pagani", "mclaren", "rollce roys"],
};

const allCars = Object.values(automobili);

// console.log(allCars);

const drugiAutomobili = allCars.map((car) => [...car, car.length]);
console.log(drugiAutomobili);
