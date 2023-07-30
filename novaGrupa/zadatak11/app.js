//5)
// const array2 = [];
// let unos = parseFloat(prompt("Unesi broj"));

//a)
// while (unos !== 50) {
//   array2.push(unos);
//   unos = parseFloat(prompt("Unesi broj"));
// }

// console.log(array2);

//b)
// for (let i = 0; input !== 50; i++) {
//   array2.push(input);
//   unos = parseFloat(prompt("Unesi broj"));
// }

// while (true) {
//   if (unos % 3 === 0 && unos % 5 === 0) {
//     console.log("seyo boy");
//     array2.push(unos);
//     break;
//   } else if (unos % 3 !== 0 && unos % 5 === 0) {
//     console.log("enes");
//     array2.push(unos);
//   } else if (unos % 3 === 0 && unos % 5 !== 0) {
//     console.log("enes kilimenta");
//     array2.push(unos);
//   }
//   unos = parseFloat(prompt("Unesi broj"));
// }

// console.log(array2);

const emilovAuto = {
  marka: "benz",
  godina: "2018",
  cena: "dzabe",
  km: 95000,
};

emilovAuto.cena = "5k";
emilovAuto.najnovijiProperti = "dodajemoNovi";

const dzenisovAuto = {
  marka: "audi",
  godina: "2020",
  cena: "30k",
  km: 50000,
};

console.log(dzenisovAuto);
console.log(emilovAuto);

// if (dzenisovAuto.km > emilovAuto.km) {
//   emilovAuto.km += dzenisovAuto.km - emilovAuto.km;
// } else {
//   dzenisovAuto.km += emilovAuto.km - dzenisovAuto.km;
// }

dzenisovAuto.km += emilovAuto.km - dzenisovAuto.km;

dzenisovAuto.km > emilovAuto.km
  ? (emilovAuto.km += dzenisovAuto.km - emilovAuto.km)
  : (dzenisovAuto.km += emilovAuto.km - dzenisovAuto.km);

console.log(dzenisovAuto);
console.log(emilovAuto);
