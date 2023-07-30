let array = [
  "davud zukorlic",
  "muhamed nicevic",
  "dzenis",
  "ilhan",
  "omer curic",
  "bakir",
  "enes kilimenta",
  "nikola glisovic",
];

console.log(array);

let novi = [array.join("")];
console.log(novi);

let combined = novi.join("");
console.log(combined);

let brojevi = [11, 2, 33, 1, 45, 6, 33];

console.log(brojevi.sort((a, b) => b - a));

function davudKalkulise(name, surname) {
  console.log(`dobrodosli ${name} ${surname}`);
}

davudKalkulise("davud", "zukorlic");

let ime = prompt("unesi ime");
let prezime = prompt("unesi prezime");

function dobrodosli(ime, prezime) {
  console.log(`dobrodosli ${ime} ${prezime}`);
}

dobrodosli();
