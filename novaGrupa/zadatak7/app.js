// let names = ["muhamed", "dinel", "omer", "enes"];
// console.log(names);

// console.log(names.push("ilhan"));
// console.log(names);

// console.log(names.pop());
// console.log(names);

// console.log(names.shift());
// console.log(names);

// console.log(names.unshift("ilhan"));
// console.log(names);

// let niz = ["ilhan", 3, 4, 3, "skoda", 6];

// console.log(typeof niz[niz.length - 1]);

// if (typeof niz[niz.length - 1] === "number") {
//   niz.pop();
// } else {
//   niz.push("koza", "koza", "skela");
// }

// console.log(niz);

// let array = ["ilhan", 3, 4, 3, "skoda", 6];

// let unos = Number(prompt("unesi neki broj"));

// if (unos % 2 === 0) {
//   array.unshift(unos);
// } else {
//   array.push(unos);
// }
// console.log(array);

//neparan i veci od 5 a manji od 20 izbrisi 2 elementa niza
//else dodaj 3 elementa na pocetak

// let array = [12, 3, "3", "hakala"];
// let unos = prompt("unesi nesto");

// if (+unos / 1 === +unos) {
//   array.unshift(parseInt(unos));
// } else {
//   array.push(unos);
// }

// console.log(array);

// kada se primeni operacija na nesto sto zapravo nije broj
// nece da vrati istu vrednost (dobicemo NaN)
// prethodno smo osigurali da sve bude typeof number (preko +)

// let string = "3";
// console.log(+string / 1); // 3 => number

// let string2 = "3 sls";
// console.log(+string2 / 1); //NaN => number
