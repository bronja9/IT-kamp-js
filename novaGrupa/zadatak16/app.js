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
