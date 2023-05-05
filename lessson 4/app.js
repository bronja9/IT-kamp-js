// console.log("nesto");
// console.log("5 + 4");

// console.log(typeof "nesto");

// true/false

// var let const

// let laptop;
// console.log(laptop);
// laptop = "10";
// console.log(+laptop + 3);

// console.log(5 === "5");
// console.log("5" + "4" + 1);
// console.log("Aldin" + "Halilovic");

// console.log(5 <= 6 && 5 < 3);
// console.log(5 <= 6 || 5 < 3);

// if (5 < 3) {
//   console.log("5 je vece od 3");
// } else {
//   console.log("neaslkfdjskljklsadjlsj");
// }

// a = 1;

// if (a < 20) {
//   console.log("nesto prvo");
// } else if (a > 10) {
//   console.log("nesto drugo");
// } else {
//   console.log("poslednji");
// }


// age = 10;

// if (age >= 18) {
//   console.log("osoba je punoletna");
// } else if (age < 18 && age > 10) {
//   console.log("teenager");
// } else {
//   console.log("jos si beba");
// }


// switch (age) {
//   case 18:
//     console.log("ti si tek punoletan");
//     break;
//   case 19:
//     console.log("punoletan si odavno xd");
//     break;
//   case 16:
//     console.log("za 2 godine tek");
//     break;
//   default:
//     console.log("bebaaaaa");
//     break;
// }



// nesto = 18;

// nesto > 10 ? console.log("vece od 10") : console.log("manje od 10");


//////////////////////////falsy////////////////////////////////////////////

// let myName;
// console.log(myName)

// if (myName) {
//   console.log("imam ime")
// } else {
//   console.log("Sacekaj")
// }

// myName = "ALdin"

// if (myName) {
//   console.log("imam ime")
// } else {
//   console.log("Sacekaj")
// }
// console.log(myName)

// if (!!myName) {
//   console.log("Tacno")
// }

// undefined || true
// null || true
// 0 || true
// -0 || true
// '' || true
// false || true
// 0n || true
// NaN || true

// let myLastName;

// for (let i = 0; i < 5; i++) {
//   //console.log(myLastName, i)
//   if (i === 3) {
//     myLastName = "Aldin";
//   }
//   if (myLastName) {
//     console.log("Imam ime", i);
//   } else {
//     console.log("Sacekaj redzi", i);
//   }
//  }

// let b = 3;
// {
//   var a;
//   let b = 10;
//   const c = 15;

//   {
//     // let b = 10;
//     // const c = 20;
//     console.log(b, "blok koda");
//     console.log(c, "blok koda");
//   }
// }
// console.log(b, "global scope");
// console.log(c, "global scope");

/////////////////////////////////call back function//////////////////////////

// function sayHello() {
//   console.log("Hello Aldin");
// }

// function helloSomeone() {
//   console.log("Cao Mehmed");
// }

// function anotherFunction(nekaFunkcija1, nekaFunkcija2) {
//   console.log("Cao Dzenis");
//   console.log("Cao Redzi");
//   console.log("prekid");
//   nekaFunkcija1();
//   nekaFunkcija2();
//   console.log("prekid");
//   console.log("Cao Tajra");
// }

// anotherFunction(sayHello);
// anotherFunction(helloSomeone, sayHello);

// function addTwoNumbers(a, b) {
//   return a + b;
// }

// function biggerFunction(someFunction) {
//   let a = 3;
//   let b = 10;

//   return someFunction(a, b);
// }

// console.log(biggerFunction(addTwoNumbers));

// let someArray = [3, 5, 123, 54, 213, 54, 23, 123, 435, 123, 8];
// let secondArray = [1, 23, 531, 412, 321345, 34513, 4213, 12];
// let helperFunction = (a) => a + 10;

// function customFunction(aldin, callbackFunkciju) {
//   let pomocniNiz = [];
//   for (let i = 0; i < aldin.length; i++) {
//     console.log(callbackFunkciju(aldin[i]));
    // pomocniNiz.push(callbackFunkciju(aldin[i]));
//   }

//   return pomocniNiz;
// }

// console.log(someArray);
// console.log(customFunction(someArray, helperFunction));
// console.log(secondArray);
// console.log(customFunction(secondArray, helperFunction));

///////////////////////////filter//////////////////////////////////////////////

// const brojevi = [6, 5, 27, 28, 29, 31, 33, 15];

// const neparniBrojevi = brojevi.filter((el) => el % 2 === 0);

// // console.log(brojevi);
// // console.log(neparniBrojevi);

// // const neparniMapBrojevi = brojevi.map((el) => el % 2 !== 0);

// // console.log(neparniMapBrojevi);

// const biggerNums = brojevi.filter((el) => el > 16);

// // console.log(biggerNums);

// const ourCustomFilter = (niz, callbackFn) => {
//   const noviFilterNiz = [];
//   for (let i = 0; i < niz.length; i++) {
//     if (callbackFn(niz[i])) {
//       noviFilterNiz.push(niz[i]);
//     }
//   }
//   return noviFilterNiz;
// };

// function customCallback(el) {
//   return el > 10;
// }

// // console.log(ourCustomFilter(brojevi, customCallback));

// const nekiBrojevi = [7, 12, 1, 8, 19, 20, 15, 22, 25, 30, 2, 10, 63];

// const pomnozenibrojevi = nekiBrojevi.map((el) => el * 3);
// console.log(pomnozenibrojevi);

// const parnibrojevi = pomnozenibrojevi.filter((el) => el % 2 === 0);
// console.log(parnibrojevi);



