// let autovi = [
// ["BMW", "MErcedes", "audi"],
// ["fiat", "alfa", "rari"]
// ];

// for(let i in autovi){
//   for(let j in autovi[i]){
//     console.log(autovi[i][j])
//   }
// }

// let cars = ["BMW", "MErcedes", "audi"];


// for (let i in cars) {
//   console.log(cars[i]);
// }

// console.log(cars.length);

// cars.length = 2;

// console.log(cars);

// cars.length = 10;

// console.log(cars);

// cars[0] = "FIAT";
// cars[5] = 10;
// cars[2] = "ubaceni element";
// cars[3] = "nesto trece";

// console.log(cars);

// console.log(cars);

// cars.push("nebitno");

// console.log(cars, cars.length);
// cars.push("Bitno");
// console.log(cars, cars.length);

// let lastElement = cars.pop();

// console.log(cars, cars.length);
// console.log(lastElement);

// cars.unshift("Prvi Element", "drugi element");
// console.log(cars);
// let firstElement = cars.shift();
// console.log(cars);
// console.log(firstElement);
// cars.push("aldin", "halilovic", "treci", "cetvrti");
// console.log(cars);
// cars.pop();
// cars.pop();
// cars.pop();
// console.log(cars);

// console.log(cars) 

// cars.push();

// let firstThree = [1, 3, 5];
// let secondThree = [2, 4, 6];

// let combined = firstThree.concat(secondThree);

// console.log(combined);

// console.log(combined.reverse());

// let randomItems = ["telefon", "ranac", "ajfon", "laptop", "coach"];
// console.log(randomItems, randomItems.length);

// let a = randomItems.slice(3);
// console.log(a);
// console.log(randomItems);
// a.push("nesto");
// console.log(a);
// a.pop();
// console.log(a);

// let a = randomItems.splice(0, 3);
// console.log(a, "parce niza");
// console.log(randomItems, "originalni niz");

//let numbers = [1, 3, 5, 7, 9];

// //            [1,3,5,7,9,2,4,6,8]

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0 && i !== 0) {
//     numbers.push(i);
//   }
// }

// console.log(numbers);
// console.log(numbers.reverse());

// console.log("nekaRec");
// console.log("nekaRec".length);
// console.log("nekaRec"[0]);


// let nekaRec = "ALDIN";

// let al = nekaRec.slice(0, 2);
// let letterA = nekaRec.slice(0, 1);
// let rest = nekaRec.slice(2);


// console.log(al);
// console.log(letterA);
// console.log(rest);

// let prvaTri = al.concat(letterA);

// let fullName = prvaTri.concat(rest);

// console.log(fullName);

///////////////////////////////arrow function///////////////////////////////////////////////////


// const prvaArrowFunction = () => {
//   console.log("prvi");
//   console.log("drugi");
// };

// prvaArrowFunction();

// const squareNum = (el) => el * el;

// // console.log(squareNum(10));

// const istiNiz = [1, 3, 5, 7, 9];

// const sumNumbers = (nekiNiz) => {
//   let start = 1;

//   for (let i = 0; i < nekiNiz.length; i++) {
//     start += nekiNiz[i];
//   }

//   return start;
// };

// console.log(sumNumbers(istiNiz));



