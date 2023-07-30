// let array = ["apple", "banana", "strawberry", ["apple", "strawberry"]];

// let simbiose = array.flat();

// let counter = 0;

// for (let i = 0; i < simbiose.length; i++) {
//   if (simbiose[i] === "apple") {
//     counter++;
//   }
// }

// console.log(counter);

////////////////////////////////////////////////////////////////////////////////

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

// const obj = {
//   strings: [],
//   arrays: [],
//   booleans: [],
//   nulls: [],
//   numbers: [],
//   undefinedElements: [],
//   objects: [],
// };

// for (let i = 0; i < niz1.length; i++) {
//   if (typeof niz1[i] === "string") {
//     obj.strings.push(niz1[i]);
//   } else if (Array.isArray(niz1[i])) {
//     obj.arrays.push(niz1[i]);
//   } else if (typeof niz1[i] === "boolean") {
//     obj.booleans.push(niz1[i]);
//   } else if (typeof niz1[i] === "object" && niz1[i] !== null) {
//     obj.objects.push(niz1[i]);
//   } else if (typeof niz1[i] === "number") {
//     obj.numbers.push(niz1[i]);
//   } else if (typeof niz1[i] === "object") {
//     obj.nulls.push(niz1[i]);
//   } else if (typeof niz1[i] === "undefined") {
//     obj.undefinedElements.push(niz1[i]);
//   }
// }

// console.log(obj);

///////////////////////////////////////////////////////////////////////////////

// let niz = [1, 23, 4, 56, 7];

// let niz2 = [2, 33, 44, 56, 7, 6];

// let niz3 = []

// let maxLength = Math.max(niz.length, niz2.length);

// for (let i = 0; i < maxLength; i++) {
//   if (niz.length === niz2.length) {
//     niz3.push(niz[i] + niz2[i]);
//   } else {
//     niz3.push(niz[i] || niz2[i]);
//   }
// }

// console.log(niz3);

// function sumovi(a, b) {
//   let maxLength = Math.max(a.length, b.length);

//   let niz3 = [];

//   for (let i = 0; i < maxLength; i++) {
//     if (a.length === b.length) {
//       niz3.push(a[i] + b[i]);
//     } else {
//       niz3.push(a[i] || b[i]);
//     }
//   }

//   return niz3;
// }

// console.log(sumovi(niz, niz2));

/////////////

// a)
// function fibonaci(a) {
//   let array = [0, 1];
//   let element = 0;

//   for (let i = 0; i < a - 2; i++) {
//     element = array[i] + array[i + 1];
//     array.push(element);
//   }

//   return array;
// }

// console.log(fibonaci(4));

// b)

// function fibonaci(a) {
//   let array = [0, 1];

//   // for (let i = 0; i < a - 2; i++) {
//   //   array.push(array[i] + array[i + 1]);
//   // }

//   for (let i = 2; i < a; i++) {
//     array.push(array[i - 2] + array[i - 1]);
//   }

//   return array;
// }

// console.log(fibonaci(8));

// c)

// let array = [3, 1];

// function fibonaci(someArray, arrayLength) {
//   for (let i = 0; i < arrayLength - 2; i++) {
//     someArray.push(someArray[i] + someArray[i + 1]);
//   }

//   return someArray;
// }

// console.log(fibonaci(array, 8));
