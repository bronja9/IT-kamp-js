// let komsija1 = "bozidar";
// let komsija2 = "muzafer";
// let komsinica = "Hasima";

// let godineKomsija1 = 202;
// let godineKomsija2 = 201;
// let godineKomsinica = 203;

// let najstariji, srednji, najmladji;

// if (godineKomsija1 > godineKomsija2 && godineKomsija1 > godineKomsinica) {
//   najstariji = komsija1;
//   if (godineKomsija2 > godineKomsinica) {
//     srednji = komsija2;
//     najmladji = komsinica;
//   } else {
//     srednji = komsinica;
//     najmladji = komsinica;
//   }
// } else if (
//   godineKomsija2 > godineKomsija1 &&
//   godineKomsija2 > godineKomsinica
// ) {
//   najstariji = komsija2;
//   if (godineKomsija1 > godineKomsinica) {
//     srednji = komsija1;
//     najmladji = komsinica;
//   } else {
//     srednji = komsinica;
//     najmladji = komsija1;
//   }
// } else if (
//   godineKomsinica > godineKomsija1 &&
//   godineKomsinica > godineKomsija2
// ) {
//   najstariji = komsinica;
//   if (godineKomsija1 > godineKomsija2) {
//     srednji = komsija1;
//     najmladji = komsija2;
//   } else {
//     srednji = komsija2;
//     najmladji = komsija1;
//   }
// }

// console.log(
//   `${najstariji} je najstariji, ${srednji} je srednji, ${najmladji} je najmladji`
// );

/////////////////////////////////////sort()//////////////////////////////

// const imena = ["ivan", "berin", "aldin", "albin"];
// console.log(imena);
// imena.sort();
// console.log(imena);

// const brojevi = [222, 32, 43, 54, 65, 77, 45, 4, 0];

// console.log(brojevi);

// brojevi.sort((a, b) => a - b);

// function compareFunction(a, b) {
//   return b - a;
// }  //u ovom slucaju funkcijiu prosledjujemo kao argument sort(compareFunction)

// console.log(brojevi);

// const products = [
//   {
//     name: "laptop",
//     price: 1000,
//   },
//   {
//     name: "desktop",
//     price: 1500,
//   },
//   {
//     name: "laptop",
//     price: 500,
//   },
// ];

// console.log(products);

// products.sort((a, b) => a.price - b.price);
// console.log(products);

// products.sort((a, b) => b.price - a.price);
// console.log(products);

/////////////////////////////////////////////

// const ucenik1 = "aldin";
// const ucenik2 = "medina";
// const ucenik3 = "haris";

// const ucenik1Godine = 33;
// const ucenik2Godine = 22;
// const ucenik3Godine = 10;

// const ucenici = [
//   { ime: ucenik1, godine: ucenik1Godine },
//   { ime: ucenik2, godine: ucenik2Godine },
//   { ime: ucenik3, godine: ucenik3Godine },
// ];

// ucenici.sort((a, b) => b.godine - a.godine);
// console.log(
//   `${ucenici[0].ime} je najstariji, ${ucenici[1].ime} je drugi, a ${ucenici[2].ime} je najmladji`
// );

// let array = ["nikola", "muhamed", "davud", "ninininin"];

// // 1)
// let najduze = array[0];

// for (let i = 0; i < array.length; i++) {
//   if (array[i].length > najduze.length) {
//     najduze = array[i];
//   } else {
//     najduze = array[0];
//   }
// }
// console.log(najduze);

// // 2)

// for (let i = 0; i < array.length; i++) {
//   array[i] = array[i].toUpperCase();
// }
// console.log(array);

// // 3)

// if (array.length % 2 === 0) {
//   const originalLength = array.length;
//   for (let i = 0; i < originalLength; i++) {
//     array.push(array[i]);
//   }
// }
// console.log(array);

// // 4)
// const originalLength = array.length;

// for (let i = 0; i < originalLength; i++) {
//   array.pop();
// }

// console.log(array);

//5)
// let array2 = [];

// for (let unos = parseFloat(prompt("unesi")); unos !== "50"; ) {
//   array2.push(unos);
// }

// console.log(array2);

// 6) drugi najveci

// const array3 = [1, 2, 3, 4, 5, 67, 8];

// let min = Infinity;
// let min2 = Infinity;

// for (let i = 0; i < array3.length; i++) {
//   if (array3[i] < min) {
//     min = array3[i];
//   }
//   if (array3[i] < min2 && array3[i] > min) {
//     min2 = array3[i];
//   }
// }

// console.log(min);
// console.log(min2);

// let max = array3[0];
// let max2 = array3[0];

// for (let i = 0; i < array3.length; i++) {
//   if (array3[i] > max) {
//     max = array3[i];
//   }
//   if (array3[i] > max2 && array3[i] < max) {
//     max2 = array3[i];
//   }
// }

// console.log(max);
// console.log(max2);

///////////////////////////////////////////////////////////////////////////////////////

// let array = [
//   "apple",
//   "banana",
//   "strawberry",
//   ["apple", "strawberry"],
//   { fruits: "apple", vegetables: "carrot" },
// ];

// let appleCounter = 0;

// // a)
// for (const key in array) {
//   if (Array.isArray(array[key])) {
//     for (const key2 in array[key]) {
//       if (array[key2] === "apple") {
//         appleCounter++;
//       }
//     }
//   } else if (typeof array[key] === "object") {
//     for (const key3 in array[key]) {
//       if (array[key][key3] === "apple") {
//         appleCounter++;
//       }
//     }
//   } else if (array[key] === "apple") {
//     appleCounter++;
//   }
// }

// b)
// for (const iterator of array) {
//   if (Array.isArray(iterator)) {
//     for (let i = 0; i < iterator.length; i++) {
//       if (iterator[i] === "apple") {
//         appleCounter++;
//       }
//     }
//   } else if (typeof iterator === "object") {
//     for (const key in iterator) {
//       if (iterator[key] === "apple") {
//         appleCounter++;
//       }
//     }
//   } else if (iterator === "apple") {
//     appleCounter++;
//   }
// }

// c)
// for (let i = 0; i < array.length; i++) {
//   if (Array.isArray(array[i])) {
//     for (let j = 0; j < array[i].length; j++) {
//       if (array[i][j] === "apple") {
//         appleCounter++;
//       }
//     }
//   } else if (typeof array[i] === "object") {
//     for (const key in array[i]) {
//       if (array[i][key] === "apple") {
//         appleCounter++;
//       }
//     }
//   } else if (array[i] === "apple") {
//     appleCounter++;
//   }
// }

// console.log(appleCounter);

/////////////////////////////////////////////////////////////////////////////////

// niz1 = [
//   "nesto",
//   null,
//   "drugo",
//   false,
//   5,
//   3,
//   10,
//   true,
//   undefined,
//   undefined,
//   "plastika",
//   105,
//   103.2,
//   null,
//   "dva" == "dva",
//   1001,
//   [5, 5, 3],
//   { ime: "dzelal", godine: "koliko ti hoces" },
//   { ime: "nikola", godine: 26 },
// ];

// const obj = {};

// for (let i = 0; i < niz1.length; i++) {
//   let arraysName = typeof niz1[i] + "s";

//   if (!obj.hasOwnProperty(arraysName)) {
//     obj[arraysName] = [];
//   }

//   obj[arraysName].push(niz1[i]);
// }

// console.log(obj);

/////////////////////////////

// let array = [33, 1];

// function fibonachi(value, someArray) {
//   while (someArray[someArray.length - 1] < value) {
//     someArray.push(
//       someArray[someArray.length - 2] + someArray[someArray.length - 1]
//     );
//   }

//   if (someArray[someArray.length - 1] > value) {
//     someArray.pop();
//   }

//   return someArray;
// }

// console.log(fibonachi(93, array));

////////////////////////////

// function fibonachi(value) {
//   let array = [0, 1];
//   let sum = 0;

//   while (sum < value) {
//     array.push(array[array.length - 2] + array[array.length - 1]);

//     sum += array[array.length - 2] + array[array.length - 1];
//   }

//   return array;
// }

// console.log(fibonachi(200));

///////////////////////////

// let threeDArray = [
//   [
//     [1, 2, 7],
//     [4, 5, 6],
//     [7, 8, 3],
//   ],
//   [
//     [2, 4, 6],
//     [8, 9, 3],
//     [5, 7, 1],
//   ],
//   [
//     [9, 8, 7],
//     [6, 5, 4],
//     [3, 2, 7],
//   ],
// ];

// a) zbir svih dijagonala
// let firstD = 0;

// for (let i = 0; i < threeDArray.length; i++) {
//   for (let j = 0; j < threeDArray[i].length; j++) {
//     firstD += threeDArray[i][j][j];
//   }
// }

// console.log(firstD);

// let secondD = 0;

// for (let i = 0; i < threeDArray.length; i++) {
//   for (let j = 0; j < threeDArray[i].length; j++) {
//     secondD += threeDArray[i][j][threeDArray.length - 1 - j];
//   }
// }

// console.log(secondD);

// b) dijagonalni zbir 3 broja

// let firstD = 0;

// for (let i = 0; i < threeDArray.length; i++) {
//   firstD += threeDArray[i][i][i];
// }

// console.log(firstD);

// let secondD = 0;

// for (let i = 0; i < threeDArray.length; i++) {
//   secondD += threeDArray[i][i][threeDArray.length - 1 - i];
// }

// console.log(secondD);

//////////////////////////////////////

////////////////////////////
// a)

// const array = [1, 22, 3, 44, 211, 2, 332, 4, 55, 344, 22];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   newArray = [array[i], array[i + 1], array[i + 2]];
//   let currentSum = newArray[0] + newArray[1] + newArray[2];

//   // let currentSum = newArray.reduce((a, c) => a + c, 0);

//   // let currentSum = 0;
//   // for (let i = 0; i < newArray.length; i++) {
//   //   currentSum += newArray[i];
//   // }

//   if (currentSum > sum) {
//     sum = currentSum;
//   }
// }

// console.log(sum);

// b)

// const array = [1, 22, 3, 44, 211, 2, 332, 4, 55, 344, 22];
// let sum = 0;
// let indexes = [];

// for (let i = 0; i < array.length; i++) {
//   let newArray = [array[i], array[i + 1], array[i + 2]];
//   let currentSum = newArray[0] + newArray[1] + newArray[2];

//   if (currentSum > sum) {
//     sum = currentSum;
//     indexes = [i, i + 1, i + 2];
//   }
// }

// console.log(sum);
// console.log(indexes);

/////////////////////////

// const array = [1, 22, 3, 44, 211, 2, 332, 4, 55, 344, 22];

// function valueSumIndexes(value, arr) {
//   let indexes = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let newArray = [arr[i], arr[j]];
//       let currentValue = newArray[0] + newArray[1];

//       if (value === currentValue) {
//         indexes = [i, j];
//       }

//       // ako ne stavimo break, vratice poslednju kombinaciju
//       // if (indexes.length > 1) break;
//     }
//   }

//   return indexes;
// }

// console.log(valueSumIndexes(23, array));

////////////////////////////

// let array = [1, 2, 3, 42, 22, 333, 222, 11, 45];

// a)
// function returnNumsByValue(value, arr) {
//   let newArray = arr.sort((a, b) => b - a);

//   while (newArray.length !== value) {
//     newArray.pop();
//   }

//   return newArray;
// }

// console.log(returnNumsByValue(5, array));

// b)

// function returnNumsByValue(value, arr) {
//   let newArray = arr.sort((a, b) => b - a);
//   return newArray.slice(0, value);
// }

// console.log(returnNumsByValue(7, array));

///////////////////////////////

// let array = [1, 2, 3, 42, 22, 333, 222, 11, 45];
// let sorted = [];

// for (let i = 0; i < array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     let a = 0;

//     if (array[i] > array[j]) {
//       a = array[i];
//       array[i] = array[j];
//       array[j] = a;
//     }
//   }

//   sorted.push(array[i]);
// }

// console.log(sorted);

////////////////////////////////

