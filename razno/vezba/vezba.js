// da li je osoba punoletna
age=18

if (age >= 18) {
  console.log("osoba je punoletna", age);
} else {
  console.log("osoba je maloletna", age);
}

// ! bi stavili ispred npr imena kada bi zeleli da samo prezime bude ispunjeno
ime="redze"
prezime="habib"

if(ime && prezime)  {
console.log("osoba je unela podatke");
} else {
  console.log("osoba nije unela podatke");
}

//da li je broj negativan
number=-2

if (number > 0) {
  console.log("broj je pozitivan", number);
} else if (number === 0) {
  console.log("broj je neutralan", number);
} else {
  console.log("broj je negativan", number);
}

// poruka koja odgovara temperaturi

temp = 40

if (temp < 0) {
  console.log("Smrzavanje", temp);
} else if (temp<=10) {
  console.log("veoma hladno");
} else if (temp<=20) {
  console.log("hladno vreme");
} else if (temp<=30) {
  console.log("normalna temp");
} else if (temp > 40) {
  console.log("vruce");
} else {
  console.log("veoma vruce");
}

// da li god prestupna
//kada je deljiva sa 4 a nije sa 100
// ili kada je deljiva sa 400

year=2024

if ((year % 4 === 0 && year % 100 !==0) || year % 400 ===0) {
  console.log ("godina je prestupna");
} else {
  console.log ("godina nije prestupna")
}

//da li je deljiv sa 3

num=6

if (num % 3 ===0) {
  console.log("deljiv je sa 3")
} else{
  console.log("nije deljiv")
}

//da li je temp ispd tacke smrzavanja

tem=-2

if (tem <= 0) {
  console.log("smrzava")
} else {
  console.log("nece smrzne")
}

// da li je user uneo broj ili string

user = "Sabahudin"

console.log(typeof user)

//da li su dva broja jednaka

c=3
d=3

if(c===d){
  console.log("jednaki")
} else{
  console.log ("nisu")
}

//brojevi od 1-7 da su dani u nedelji

value=3

if (value===1) {
  console.log("pondeljak")
} else if (value===2) {
  console.log("utorak")
} else if (value===3) {
  console.log("sreda")
} else if (value===4) {
  console.log("cetvrtak")
} else if (value===5) {
  console.log("petak")
} else if (value===6) {
  console.log("subota")
} else if (value===7) {
  console.log("nedelja")
}

//tri broja ispisati najveci

g=3
r=4
h=8

if(g>r && g>h) {
  console.log("g",g)
} else if (r>g && r>h) {
  console.log("r",r)
} else if (h>g && h>r) {
  console.log("h",h)
}

//uneti dva broja, od veceg oduzeti manji i prikazati rezultat

k=99
l=89

if (k>l) {
  console.log(k-l)
} else {
  console.log (l-k)
}