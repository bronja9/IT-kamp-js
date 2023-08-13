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
