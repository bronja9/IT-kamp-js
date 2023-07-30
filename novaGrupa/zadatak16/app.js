function rollDice() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

function roll(times) {
  for (let i = 0; i < times; i++) {
    rollDice();
  }
  console.log("pozvao sam roll funkciju");
}

roll(10);

let niz = [];
function rollThousand() {
  var roll = Math.floor(Math.random() * 1000);
  return roll;
}

console.log(roll);

function pozivanje(array, number) {
  for (let i = 0; i < number; i++) {
    array.push(rollThousand());
  }
}

pozivanje(niz, 10);
console.log(niz);
