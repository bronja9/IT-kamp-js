const fruitArray = ["apple", "banana", "watermelon", "kiwi"];
let nizNovi = [];

fruitArray.forEach((e, i, array) => {
  console.log(
    array,
    "ovo je niz prosledjen u call back funkciju for each metode"
  );
  nizNovi.push(e.toUpperCase());
  return;
});

console.log(nizNovi, "saaaaaaaaaaaaaaaaaaaad");

// const callBackFunction = (value, index, array) => {
//   for (index = 0; index < array.length; index++) {
//     value = array[index];
//   }

//   return value;
// };

// console.log(callBackFunction(0, 0, fruitArray));

let newArray = [];
fruitArray.forEach((e) => newArray.push(e.toLocaleUpperCase()));
console.log(newArray);

// map metoda kreira novi niz, sa rezultatima iz callback funkcije koja je pozvana na svaki element niza

let mapedArray = fruitArray.map((e) => e.toLocaleUpperCase());

console.log(mapedArray);

//

const numberArray = [12, 13, 15, 16, 17, 18, 20, 21, 22, 25];

const numberDetails = numberArray.map((e) => {
  return {
    number: e,
    isEven: e % 2 === 0,
  };
});

console.log(numberDetails);

//

const books = [
  { title: "Vratice se rode", authors: ["First man name"], rating: 4.36 },
  { title: "Nece se vratiti rode", authors: ["Second man name"], rating: 3.86 },
  {
    title: "Nekad ce se vratiti rode",
    authors: ["Third man name"],
    rating: 4.36,
  },
];

const titles = books.map((e) => {
  return e.title;
});

console.log(titles);

// arrow function

const doubleUp = (n) => n * n;
console.log(doubleUp(5));

const arrowFunction = (number) => number * 5;
console.log(arrowFunction(10));

const newFunction = (n) => (n < 10 ? n * 100 : n / 200);
console.log(newFunction(5));

const someFunction = (param) => param - param;
console.log(someFunction(10));

// filter metoda

const nums = [9, 8, 7, 6, 5, 4, 3];
// filter takodje vraca novi niz!

const odds = nums.filter((e) => e % 2 !== 0);
console.log(odds);
