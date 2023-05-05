//Primitivni i referentni tipovi podataka
// primitivni: number, string, boolean, undefined, null, symbol
//referentni : objekat, niz, funkcija

//number
a = 5;
console.log(a);

//typeof provera tipa podataka
console.log(typeof a);

//string
ime = "Ajla";
console.log(ime);
console.log(typeof ime);

letters =
  "adhasdasdhasdjashjdasjdhkasdhajskdjasjdjkjkasjkdjkassdkkajsdasjkadsdkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj";
console.log(letters);

//boolean - true or false
snegPada = false;
console.log(snegPada);
console.log(typeof snegPada);

//undefined
//b;
//console.log(b);
// console.log(5 + 2 + "nesto");
 
prvi = 11;
drugi = 5;

saberi = prvi + drugi;
console.log(saberi);

pomnozi = prvi * drugi;
console.log(pomnozi);

kvadrat = prvi ** 2;
console.log(kvadrat);

deli = prvi / drugi;
console.log(deli);

// % 
/*moduo je ostatak od deljenja dva broja, tj. ono sto bi se inace delilo za decimale 
(11 i 5 su dva broja koja imaju moduo vrednost od 1)*/
moduo = prvi % drugi;
console.log(moduo);

//dva plusa ce uvelicati vrednost promenjive za 1
prvi++;
prvi = prvi + 10;
prvi += 10;
console.log(prvi);

//dva minusa ce umanjiti vrednost promenjive za 1
drugi--;
drugi -= 2;
console.log(drugi);

// == uporedjuje vrednost
// === uporedjuje vrednost i tip podataka
prviB = 11;
drugiB = "10";

console.log(prviB == drugiB);
console.log(prviB === drugiB);

// != uporedjuje vrednost negacije
// !== uporedjuje vrednost i tip podataka negacije
console.log(prviB != drugiB);
console.log(prviB !== drugiB);

//  ||  ili (jedna vrednost mora da bude true da bi statment bio tacan)
//   &&  i  (obe vrednosti moraju da budu true da bi statment bio tacan)

console.log(true || false);
console.log(false || false);
console.log(false || true);
console.log(true || true);
console.log("---------------------------------");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//provera da li vrednost NIJE broj "is Not a Number" (ukoliko nije number statment ce biti true)
prezime = 10;
console.log(isNaN(prezime));

// if(uslov){
//   body
// }

c = 12;
e = 5;

if (c < e) {
  console.log("C je vece od E");
} else {
  console.log("E je vece od C");
}

console.log(c < e); 

//Da li je c paran broj
if (c % 2 === 0) {
  console.log("C je paran broj");
} else {
  console.log("C je neparan broj");
}
