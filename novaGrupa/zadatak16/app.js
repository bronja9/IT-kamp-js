// function rollDice() {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// function roll(times) {
//   for (let i = 0; i < times; i++) {
//     rollDice();
//   }
//   console.log("pozvao sam roll funkciju");
// }

// roll(10);

// let niz = [];
// function rollThousand() {
//   var roll = Math.floor(Math.random() * 1000);
//   return roll;
// }

// console.log(roll);

// function pozivanje(array, number) {
//   for (let i = 0; i < number; i++) {
//     array.push(rollThousand());
//   }
// }

// pozivanje(niz, 10);
// console.log(niz);

/////////////////////////////////////////////////////

const noviNiz = [56, 412, 30, 312, 3, 4, 5, 6, 8, 123];

// 1)
function averageValue(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  console.log(sum / array.length);
}

averageValue(noviNiz);

// 2)
function minValue(array) {
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }

  console.log(min);
}

minValue(noviNiz);

// 3)

function maxValue(array) {
  let max = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  console.log(max);
}

maxValue(noviNiz);

// 4)

function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  console.log(sum);
}

sum(noviNiz);

// 5)

function sumEven(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
    }
  }

  console.log(sum);
}

sumEven(noviNiz);

// 6)

function sumOdd(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sum += array[i];
    }
  }

  console.log(sum);
}

sumOdd(noviNiz);

// 7)

function numSquare(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * array[i]);
  }

  console.log(array, newArray);
}

numSquare(noviNiz);
