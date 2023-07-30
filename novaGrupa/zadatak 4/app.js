// let num = 3;
// let num2 = 4;
// const num3 = 44;

// if (num > num2) {
//   console.log("num je veci od num2");
// } else {
//   console.log("num je manji od num2");
// }

// if (num + num2 > num3) {
//   console.log("veci je zbir");
// } else {
//   console.log("manji je zbir");
// }

// //poredjaj ih po starini
// let komsija1 = "bozidar";
// let komsija2 = "muzafer";
// let komsinica = "Hasima";

// let godineKomsija1 = 50;
// let godineKomsija2 = 201;
// let godineKomsinica = 200;

// //if
// if (
//   godineKomsija1 > godineKomsija2 &&
//   godineKomsija1 > godineKomsinica &&
//   godineKomsija2 > godineKomsinica
// ) {
//   console.log(
//     `${komsija1} je najstariji, ${komsija2} je drugi, a ${komsinica} je najmlađi`
//   );
// } else if (
//   godineKomsija1 > godineKomsija2 &&
//   godineKomsija1 > godineKomsinica &&
//   godineKomsija2 < godineKomsinica
// ) {
//   console.log(
//     `${komsija1} je najstariji, ${komsinica} je drugi, a ${komsija2} je najmlađi`
//   );
// } else if (
//   godineKomsija2 > godineKomsija1 &&
//   godineKomsija2 > godineKomsinica &&
//   godineKomsija1 > godineKomsinica
// ) {
//   console.log(
//     `${komsija2} je najstariji, ${komsija1} je drugi, a ${komsinica} je najmlađi`
//   );
// } else if (
//   godineKomsija2 > godineKomsija1 &&
//   godineKomsija2 > godineKomsinica &&
//   godineKomsija1 < godineKomsinica
// ) {
//   console.log(
//     `${komsija2} je najstariji, ${komsinica} je drugi, a ${komsija1} je najmlađi`
//   );
// } else if (
//   godineKomsinica > godineKomsija1 &&
//   godineKomsinica > godineKomsija2 &&
//   godineKomsija1 < godineKomsija2
// ) {
//   console.log(
//     `${komsinica} je najstarija, ${komsija2} je drugi, a ${komsija1} je najmlađi`
//   );
// } else {
//   console.log(
//     `${komsinica} je najstarija, ${komsija1} je drugi, a ${komsija2} je najmlađi`
//   );
// }

// // lasksi nacin
// let najstariji, srednji, najmladji;

// if (godineKomsija1 > godineKomsija2 && godineKomsija1 > godineKomsinica) {
//   najstariji = komsija1;
//   if (godineKomsija2 > godineKomsinica) {
//     srednji = komsija2;
//     najmladji = komsinica;
//   } else {
//     srednji = komsinica;
//     najmladji = komsinica;
//   }
// } else if (
//   godineKomsija2 > godineKomsija1 &&
//   godineKomsija2 > godineKomsinica
// ) {
//   najstariji = komsija2;
//   if (godineKomsija1 > godineKomsinica) {
//     srednji = komsija1;
//     najmladji = komsinica;
//   } else {
//     srednji = komsinica;
//     najmladji = komsija1;
//   }
// } else if (
//   godineKomsinica > godineKomsija1 &&
//   godineKomsinica > godineKomsija2
// ) {
//   najstariji = komsinica;
//   if (godineKomsija1 > godineKomsija2) {
//     srednji = komsija1;
//     najmladji = komsija2;
//   } else {
//     srednji = komsija2;
//     najmladji = komsija1;
//   }
// }

///////////////////////////////////////////////////////////////////

// console.log(
//   `${najstariji} je najstariji, ${srednji} je srednji, ${najmladji} je najmladji`
// );

// let broj1 = 1;
// let broj2 = 2;
// let broj3 = 3;

// if (broj3 > (broj1 && broj2)) {
//   console.log("tri je najveci");
// }

/////////////includes()
//proverava da li neki element koji mu zadamo jeste deo niza koji proveravamo

//mozemo proveriti da li niz sadrzi neki string ili neki broj

//mozemo proveriti da li je neki pojedinacni string-slovo sadrzan u nekom stringu
//jer je string sam pom sebi niz

//da bi smo na broju proverili da li je neki broj sadrzan u nekom drugom broju
//potrebno je da ga preko meetode prebacimo u string i proverimo da li on u sebi
// sadrzi taj neki broj u stringu
//razlog tome je to je string niz, a broj nije, te zato ne mozemo primeniti
//metodu na broj

let voce = ["banana", "jabuka", "orange"];

if (voce.includes("banana")) {
  console.log("super, imamo bananu i jabuku");
} else {
  console.log("bedak, nemamo bananu");
}

let brojevi = [2, 3, 34, 543, 52, 11];

if (brojevi.includes(88)) {
  console.log("imate broj 88, mozete da prodjete");
} else {
  console.log("nemate broj 88, ne mozete da prodjete");
}

let ime = "davud";

if (ime.includes("s")) {
  console.log("sadrzi slovo s");
} else {
  console.log("ne sadrzi slovo s");
}

let number = 4332;

if (number.toString().includes("4")) {
  console.log("broj u sebi sadrzi 4");
} else {
  console.log("broj u sebi ne sadrzi 4");
}

//////////////some()
//prverava da li neki (NAPOMENA: string je niz) niz u sebi sadrzi neki od karaktera
//nekog drugog niza (tu ukljucujemo includes)
// i ukoliko sadrzi bar jedan od njih, vratice true

//mozemo npr i da pitamo da li neki niz brojeva sadrzi neki negativan broj i sl.

const niza = [1, 2, 3, 4];

if (niza.some((el) => el > 3)) {
  console.log("niz sadrzi brojeve vece od 3");
} else {
  console.log("niz ne sadrzi brojeve vece od 3");
}

persons = [
  {
    name: "salko",
    age: 13,
  },
  {
    name: "marko",
    age: 17,
  },
  {
    name: "stanko",
    age: 11,
  },
];

if (persons.some((person) => person.age > 17)) {
  console.log("imate punoletnih medju vama");
} else {
  console.log("NEMATE punoletnih medju vama");
}

const persons2 = [
  {
    ime: "melko",
  },
  {
    ime: "melko",
  },
  {
    prezime: "ska",
  },
];

if (persons2.some((el) => el.ime === undefined)) {
  console.log("neko od imena je UNDEFIEND");
} else {
  console.log("sva imena imaju vrednost");
}
//vraca true kada imamo ime unutar objekta i ako nema vrednost
//false je jedino kada ga uopste nema u nizu

const some = [22, 33, 44, 55, 66, 77];
const someCheck = [222, 3, 4, 5, 6];

if (someCheck.some((el) => some.includes(el))) {
  console.log("some u sebi sadrzi neki od karaktera iz someCheck-a");
} else {
  console.log("some u sebi NE sadrzi NIJEDAN od karaktera iz someCheck-a");
}

const prezime = "hot";
const provera = ["ic", "nja"];

if (provera.some((el) => prezime.includes(el))) {
  console.log("pusti ga, nas je");
} else {
  console.log("streljajte ga");
}

////////every() radi sve isto sto i some(),
// razlika je u tome sto every() vraca true
//iskljucivo u situcijama gde su svi elementi ispunili uslov

const arr = [3, 54, 66, 2, 9, 87, 6, -2];
const arrCheck = [3, 54, 66, 2, 565];

if (arrCheck.every((el) => arr.includes(el))) {
  console.log("niz sadrzi sve elemente iz pomocnog niza");
} else {
  console.log("niz NE sadrzi sve elemente iz pomocnog niza");
}

if (arr.every((el) => el > 0)) {
  console.log("svi brojevi ovog niza su pozitivni");
} else {
  console.log("neki od od brojeva je negativan ili jednak nuli");
}

const imena = [
  {
    ime: "marko",
  },
  {
    ime: "osman",
  },
  {
    ime: "konan",
  },
  {
    prezime,
  },
];

if (imena.every((el) => el.ime !== undefined)) {
  console.log("sva imena su definisana");
} else {
  console.log("neko od imena je undefiend");
}
//isti slucaj kao sa some....

const nesto = "strinic";
const nestoProvera = ["ic", "in"];

if (nestoProvera.every((el) => nesto.includes(el))) {
  console.log("nesto sadrzi sve neophodne karaktere");
} else {
  console.log("nesto ne sadrzi neki od neophodnih karaktera");
}
