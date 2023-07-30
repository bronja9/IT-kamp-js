// let niz = [1, 2, 3, 4, 4, 3];
// let niz2 = [1, 2, 3, 4, 4, 3];

// for (let i = 0; i < niz.length; i++) {
//   console.log(niz[i] === niz2[i]);
// }

// let array = [1, 2, 3, 4, 4, 3, 5, 5];
// let array2 = [1, 2, 3, 4, 4, 3];

// let maxLength = Math.max(array.length, array2.length);

// for (let i = 0; i < maxLength; i++) {
//   console.log(array2[i] === array[i]);
// }

// for (let i = 0; i < niz.length; i++) {
//   console.log(niz[i] === niz2[i]);
// }

// console.log(niz[0] === niz2[0]);

// objecat = {
//   daljinski: "vox",
//   komp: "nov",
//   bike: "star",
//   ranac: "tudj",
//   lopta: "izbusena",
// };

// let najduza = objecat.daljinski;

// for (const promenjiva in objecat) {
//   if (objecat[promenjiva].length > najduza.length) {
//     najduza = objecat[promenjiva];
//   }
// }

// console.log(najduza);

// let sviKljucevi = Object.keys(objecat);
// console.log(sviKljucevi);

// let sveVrednosti = Object.values(objecat);
// console.log(sveVrednosti);

// let matricaKljucevaIVrednosti = Object.entries(objecat);
// console.log(matricaKljucevaIVrednosti);

// let najduzaRec = [0];
// for (let i = 0; i < sveVrednosti.length; i++) {
//   if (najduzaRec.length < sveVrednosti[i].length) {
//     najduzaRec = sveVrednosti[i];
//   }
// }

// console.log(najduzaRec);

// for (const promenjiva of Object.values(objecat)) {
//   console.log(promenjiva);
// }

// let niz = [1, 23, 5, 4, 345];

// for (const iterator in niz) {
//   console.log(niz[iterator]);
// }

// for (const iterator of niz) {
//   console.log(iterator);
// }

// //forof i for obicne saberi

// let suma = 0;

// for (let i = 0; i < niz.length; i++) {
//   suma += niz[i];
// }

// console.log(suma);

// let zbir = 0;

// for (const i of niz) {
//   zbir += i;
// }

// console.log(zbir);

// let sumarum = 0;

// for (const i in niz) {
//   sumarum += niz[i];
// }

// console.log(sumarum);

//////////////////////////////

// let matrix = [
//   [1, 3, 5],
//   [2, 4, 6],
//   [7, 8, 9],
// ];

// let sum = 0;

// for (let i = 0; i < matrix.length; i++) {
//   sum += matrix[i][i];
// }

// console.log(sum);

// let sum2 = 0;

// for (let i = 0; i < matrix.length; i++) {
//   sum2 += matrix[i][matrix.length - 1 - i];
// }

// console.log(sum2);

//////////////////////////////////////

let array = ["apple", "banana", "strawberry", ["apple", "strawberry"]];

// ispisati koliko se puta element apple pojavljuje u nizu.

// a)
// let array2 = array.pop();
// let newArray = array.concat(array2);

let appleCounter = 0;

// 1)
// for (const key in newArray) {
//   if (newArray[key] === "apple") {
//     appleCounter++;
//   }
// }

//2)
// for (const iterator of newArray) {
//   if (iterator === "apple") {
//     appleCounter++;
//   }
// }

//3)
// for (let i = 0; i < newArray.length; i++) {
//   if (newArray[i] === "apple") {
//     appleCounter++;
//   }
// }

console.log(appleCounter);

// b)

let appleCounter2 = 0;
// 1)
// for (let i = 0; i < array.length; i++) {
//   if (array[i] === "apple") {
//     appleCounter2++;
//   }

//   if (Array.isArray(array[i])) {
//     for (let j = 0; j < array[i].length; j++) {
//       if (array[i][j] === "apple") {
//         appleCounter2++;
//       }
//     }
//   }
// }

// 2)
// for (const key in array) {
//   if (array[key] === "apple") {
//     appleCounter2++;
//   }

//   if (Array.isArray(array[key])) {
//     for (const key2 in array[key]) {
//       if (array[key2] === "apple") {
//         appleCounter2++;
//       }
//     }
//   }
// }

// 3)
// for (const iterator of array) {
//   if (iterator === "apple") {
//     appleCounter2++;
//   }

//   if (Array.isArray(iterator)) {
//     for (const iterator2 of iterator) {
//       if (iterator2 === "apple") {
//         appleCounter2++;
//       }
//     }
//   }
// }

console.log(appleCounter2);
