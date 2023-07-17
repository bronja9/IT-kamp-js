// const arr = [1, 2, 3, 4, 44, 2, 3, 32, 321];

// const sum = (el) => {
//   return el + 3;
// };

// const customMap = (array, callbackFunction) => {
//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     newArray.push(callbackFunction(array[i]));
//   }

//   return newArray;
// };

// console.log(customMap(arr, sum));

// console.log(arr.map((el) => el + 3));

// function smanji(number) {
//   if (number !== 3) {
//     number--;
//     console.log(number);
//     smanji(number);
//   }
//   // if (number === 3) return;
//   // number--;
//   // console.log(number);
//   // smanji(number);
// }

// let nesto = 30;
// smanji(nesto);

//////////////////////////////////////////////////

// let d3 = [[4, 12, 100], [2, 5, 7, 9, 3], [11, 53, 75, 87], [3], [4]];
// let result = [];

// a)
// for (let i = 0; i < d3.length; i++) {
//   let temp = [];
//   for (let j = 0; j < d3[i].length; j++) {
//     if (d3[i][j] % 2 === 0) {
//       temp.push(d3[i][j]);
//     }
//   }

//   result.push(temp);

// b)
// for (let i = 0; i < d3.length; i++) {
//   let temp = [];

//   for (let j = 0; j < d3[i].length; j++) {
//     if (d3[i][j] % 2 !== 0) {
//       temp.push(d3[i][j]);
//     }
//   }

//   result.push(temp);
// }

// console.log(result);
