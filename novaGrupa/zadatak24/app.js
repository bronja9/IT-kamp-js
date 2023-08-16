//1
const DATA1 = [2, 26, 38, 75, 11, 29];
const DATA2 = ["a", "b", "c", "d", "e"];

function twoArrays(first, second) {
  let helper = first.concat(second);

  let evenNums = [];

  for (let i = 0; i < helper.length; i++) {
    if (typeof helper[i] === "number" && helper[i] % 2 === 0) {
      evenNums.push(helper[i]);
    }
  }

  evenNums.unshift(10, 20);

  return [helper, evenNums];
}

console.log(twoArrays(DATA1, DATA2));

//2

const numbers = [2, 5, 10, 3, 4, 8];
let square = [];
for (let i = 0; i < numbers.length; i++) {
  square.push(numbers[i] * numbers[i]);
}
console.log(square);

//3
let root = [];
for (let i = 0; i < square.length; i++) {
  root.push(Math.sqrt(square[i]));
}
console.log(root);

//4
let zeroT = [];
zeroT.push([root[0] * root[0], root[3] * root[3], root[5] * root[5]]);
console.log(zeroT);

//5
let filtered = root.filter((el) => el % 2 === 0);

console.log(filtered);

//6
const words = ["televizor", "daljinski", "telefon", "voda", "ranac", "stolica"];

let secondE = [];

for (let i = 0; i < words.length; i++) {
  if (words[i][1] === "e") {
    secondE.push(words[i]);
  }
}

console.log(secondE);
