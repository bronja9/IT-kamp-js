const objekat = {
  ime: "nikola",
  godine: 25,
};

objekat["nikola"];

console.log(objekat["ime"]);
console.log(objekat.ime);

function nekaFukcija() {
  console.log("cao");
}

const nekaNovaFukcija = function () {
  console.log("hehee");
};

const najnovijaFunkcija = () => {
  console.log("hahah");
};

////////

const saberi = function (a, b) {
  return a + b;
};

const oduzmi = function (a, b) {
  return a - b;
};

const pomnozi = function (a, b) {
  return a * b;
};

const podeli = function (a, b) {
  return a / b;
};

const kvadriraj = function (a, b) {
  return Math.pow(a, b);
};

const arrayFunkcija = [saberi, oduzmi, pomnozi, podeli, kvadriraj];

for (const funkcija of arrayFunkcija) {
  console.log(funkcija(2, 5));
}

//// callback

function stadion(lopta) {
  return lopta();
}

function sutniLoptu() {
  console.log(
    "GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOLMAN HVATA LOPTU"
  );
}

stadion(sutniLoptu);

////////////////

function first() {
  console.log("Ako pobedis ne mozes da izgubis");
}

function second() {
  console.log("Ako izgubis ne mozes da pobedis");
}

function oneOfTwo(f, s) {
  let num = Math.floor(Math.random() * 10);

  if (num > 5) {
    return f;
  } else {
    return s;
  }
}

let resultFunction = oneOfTwo(first, second);
resultFunction();

////////////// pangam

console.log(isPangam("sadkjsalkdjs"));
console.log("dksajl");
