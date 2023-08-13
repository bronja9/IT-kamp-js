//1
const DATA1 = [2, 26, 38, 75, 11, 29];
const DATA2 = [, "a", "b", "c", "d", "e"];

const helper = DATA1 + DATA2;
console.log(helper);

const evenNums = [];
for (let i = 0; i < DATA1.length; i++) {
  if (DATA1[i] % 2 === 0) {
    evenNums.push(DATA1[i]);
  }
}
console.log(evenNums);
