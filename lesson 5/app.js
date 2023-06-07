// const nekaMatrica = [
//   [12, 5, 8],
//   [3, 5, 10],
//   [15, 3, 6]
// ]

// const filtered = nekaMatrica.map(manja => manja.filter(el => el % 2 === 0))
// console.log(filtered)

//////////////////////////////////reduce///////////////////////////////////

// const nizZaReduce = [2, 8, 14, 17, 10, 50, 60, 30, 43, 3, 9, 68];

// const zbirElemenata = nizZaReduce.reduce(
//   (previousValue, currentValue) => previousValue + currentValue
// );

// const averageNum = zbirElemenata / nizZaReduce.length;

// console.log(averageNum);

// console.log(zbirElemenata);
////////////////////////////////////reduce method/////////////////////////////////////

// const ourFirstObject = {
//   car: "Alfa romeo",
//   vozac: "Dzenis Bronja",
//   suvozac: "Redzi (pod kaznom)",
//   godina: 23,
//   prijatelji: ["Mitar iz Dubica", "petrojka", "bilo sta"],
//   skills: {
//     html: "good",
//     css: "average",
//     lying: "bad",
//     josJedan: {
//       nekiProperti: "bilo koji",
//       josJedanObjekat: {
//         ja: "aldin",
//       },
//     },
//   },
// };

// [{}, {}];

// console.log(ourFirstObject.skills.josJedan.josJedanObjekat.ja);

// console.log(ourFirstObject);
// console.log(ourFirstObject.skills.html);

// console.log(ourFirstObject.prijatelji);
// console.log(ourFirstObject.prijatelji[2]);

// console.log(ourFirstObject.vozac);

// console.log(ourFirstObject["suvozac"]);
// const aldin = ['nasdindas', 'asldkjasd'smadkasd'asd]

// const user = {
//   name: "aldin",
//   lastname: "bla bla bla",
//   pol: "musko",
//   age: 20,
// };

const ime = "Aldin";

const user = {
  ime,
  prezime: "Halilovic",
  skills: ["html", "css", "js", "react"],
};

const myLastName = user.prezime;

const skillsArray = user.skills;

// console.log("Ja se prezivam " + myLastName);

// skillsArray.pop();

// console.log(user);

// classroom.sayHello();

// const nasNiz = classroom.ucenici;
// const imanNiz = nasNiz.map((el) => el.name);
// const imanNiz = nasNiz.map((el) => {
//   return {
//     name: el.name,
//   };
// });

// console.log(imanNiz);

// const nekiObjekat = [{1}, {2}, {3}, {4}];

const ourClassroom = [
  { name: "Tajra", id: 1, age: 17 },
  { name: "Iman", id: 2, age: 17 },
  { name: "Dzenis", id: 3, age: 23 },
  { name: "Tarik", id: 4, age: 25 },
  { name: "Imad", id: 5, age: 17 },
  { name: "Haris", id: 6, age: 18 },
  { name: "Mehmed", id: 7, age: 16 },
  { name: "Redzep", id: 8, age: 18 },
];

const filteredClassroom = ourClassroom.filter((clas) => clas.age >= 18);

// console.log(ourClassroom);
// console.log(filteredClassroom);

const evenIds = ourClassroom.filter((el) => el.id % 2 === 0);
// console.log(evenIds);

const onlyIds = evenIds.map((el) => {
  return {
    id: el.id,
  };
});

const numberIds = ourClassroom.map((el) => el.id);

// console.log(numberIds);

const classroom = {
  brojUcenika: 10,
  vremeCasa: 10.0,
  ciklus: "2 ciklus",
  profesor: "aldin",
  ucenici: [
    // [prvi objekat, drugi objekat, treci objekat]
    {
      name: "redzi",
      proffesion: "basketball player",
    },
    {
      name: "bronja",
      proffesion: "auto limar",
    },
    {
      name: "neki lik",
      proffesion: " peti sesti ",
    },
  ],
  sayHello() {
    console.log("hello " + this.profesor);
  },
  helloRedzi() {
    console.log("hello" + this.ucenici[0].name);
  },
  thisKeyword() {
    console.log(this.profesor, "ovo je this keyword");
  },
};

// classroom.thisKeyword();
// classroom.helloRedzi();
// classroom.sayHello();

// console.log(this);

// const nekaVarijabla = "nesto";
// const neka_druga_varijabla = "nesto drugo";

// const BASE_URL = "https://www.google.com/blablabal";

// const prvoIme = "aldin";
// const drugoIme = "redzi";

// console.log(prvoIme + " i " + drugoIme);

// console.log(`${prvoIme} i ${drugoIme}`);

// `https://jsonplaceholder.typicode.com/todos/${nekaVarijablaZaurl}`;

// const nebitnoNesto = {
//   televizor: "sharp",
//   laptop: "acer",
//   telefon: "apple",
// };

// nebitnoNesto.punjac = "za laptop";

// console.log(nebitnoNesto);

// delete nebitnoNesto.televizor;
// console.log(nebitnoNesto);

const watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];

// const mapArray = watchList.map((el) => {
//   return {
//     title: el.Title,
//     rating: el.imdbRating,
//   };
// });

// console.log(mapArray);
// const filteredArray = mapArray.filter((el) => el.rating >= 8);

// console.log(filteredArray);

const filteredArrayMovies = watchList.filter((el) => {
  if (+el.imdbRating >= 8.0) {
    return {
      title: el.Title,
      rating: el.imdbRating,
    };
  }
});

// console.log(filteredArrayMovies);

/////////////////////////////////////////////////////////////////////////////////////

// let nekaVrednost = "imad";

// console.log(`${nekaVrednost} je primer za template strings`);

// console.log(nekaVrednost + " nesto trece");

// console.log(this, "ovo je this");

// const nasCustomObjekat = {
//   odeljenje: "3-10",
//   dukserica: "zelena",
//   ja: "ne znam",
//   godine: 30,
//   brojLaptopova: 9,
// };
// const nasCustomObjekat2 = {
//   odeljenje: "3-10",
//   dukserica: "zelena",
//   ja: "ne znam",
//   godine: 40,
//   brojLaptopova: 9,
// };

// function ourFirstCallFunction(argumentFirst, argumentSecond) {
//   console.log(
//     `${argumentFirst} ima ${this.godine} godina i ${argumentSecond} mu je ${this.dukserica} `
//   );
// }

// ourFirstCallFunction.call(nasCustomObjekat, "Aldin", "kapa");

// ourFirstCallFunction.apply(nasCustomObjekat2, ["aldin", "kapa"]);

// const bindFunkcija = ourFirstCallFunction.bind(nasCustomObjekat2, "kapa");

// bindFunkcija();

// const user1 = {
//   id: 1,
//   godine: 12,
//   ime: "prvo Ime",
//   profesija: "HTML",
//   vozila: ["mclaren", "ladu"],
// };

// const user2 = {
//   id: 2,
//   godine: 13,
//   ime: "drugo Ime",
//   profesija: "css",
//   vozila: ["golf", "tesla", "passat", "touran"],
// };

// const user3 = {
//   id: 3,
//   godine: 25,
//   ime: "trece Ime",
//   profesija: "javascript",
//   vozila: ["audi", "toyota", "michubishi"],
// };

// const user4 = {
//   id: 4,
//   godine: 33,
//   ime: "cetvrto Ime",
//   profesija: "typescript",
//   vozila: ["volkswagen", "punto"],
// };

const allUsers = [
  {
    id: 1,
    godine: 12,
    ime: "prvo Ime",
    profesija: "HTML",
    vozila: ["mclaren", "ladu"],
  },
  {
    id: 2,
    godine: 13,
    ime: "drugo Ime",
    profesija: "css",
    vozila: ["golf", "tesla", "passat", "touran"],
  },
  {
    id: 3,
    godine: 25,
    ime: "trece Ime",
    profesija: "javascript",
    vozila: ["audi", "toyota", "michubishi"],
  },
  {
    id: 4,
    godine: 33,
    ime: "cetvrto Ime",
    profesija: "typescript",
    vozila: ["volkswagen"],
  },
];

function checkingUserAge() {
  if (this.godine >= 18) {
    console.log("svaka cast");
  } else {
    console.log(`dodji za ${18 - this.godine} godina`);
  }
}

// checkingUserAge.call(user4);
// checkingUserAge.call(user3);0
// checkingUserAge.call(user2);
// checkingUserAge.call(user1);

// allUsers.map((user) => checkingUserAge.call(user));

const ourDeleteFunction = (id, id2) =>
  allUsers.filter((user) => user.id !== id && user.id !== id2);

// console.log(ourDeleteFunction(2, 3));
// console.log(ourDeleteFunction(3));

////////////////////////////////////////////////////////////////////

const obnovaObjekta = {
  name: "Aldin",
  course: "js",
};

const noviObjekat = {
  name: "Medina",
  course: "Medicinska ",
};

obnovaObjekta.name;
obnovaObjekta["course"];

obnovaObjekta.prezime = "halilovic";

function callFunkcija(argumentNeki) {
  console.log(this.name, argumentNeki, "ovo je call funkcija");
}

// callFunkcija.call(obnovaObjekta, ["isto neki argument"]);
// callFunkcija.call(noviObjekat, "drugi argument");

// callFunkcija.apply(obnovaObjekta, [
//   "asndjlsakdj",
//   "alskdjklsjdklsa",
//   "a;skdjslkdjs",
// ]);

const bindFunkcijaObnavljanje = callFunkcija.bind(obnovaObjekta, "nesto");

// bindFunkcijaObnavljanje();

const objectPractice = {
  voda: "Maxi",
  laptop: "Acer",
  telefon: "iphone",
};

const kljucevi = Object.keys(objectPractice);

// console.log(kljucevi);

const vrednosit = Object.values(objectPractice);
// console.log(vrednosit);

// Object.freeze(objectPractice);
Object.seal(objectPractice);

// console.log(objectPractice);

objectPractice.voda = "rosa";

// console.log(objectPractice);

const functionInObject = {
  name: "aldin",
  voda: "Maxi",
  laptop: "Acer",
  telefon: "iphone",
  // sayHello() {
  //   console.log("Hello world");
  // },
  helloName() {
    console.log(`Hello ${this.name}`);
  },
};

// this.window.functionInObject.helloName();
// functionInObject.sayHello()

function sayHello() {
  console.log("hello World");
}

// this.window.sayHello();

///////////////////////////////////CLOSURE////////////////////////////////////////////////////////////////

let a = 10;

function firstA() {
  let b = 5;
  console.log(b);
}

function secondA() {
  let b = 3;
  console.log(b);
}

function lastA() {
  console.log(a);
}

// firstA();
// secondA();
// lastA();

class Phone {
  constructor(marka, model, gb) {
    this.marka = marka;
    this.model = model;
    this.gb = gb;
  }
}

// const myPhone = new Phone("iphone", "jesam", "128");
// console.log(myPhone);

// const mojeImeObjekat = {
//   ime: "Aldin",
//   prezime: "blabas;ldkasl;djsalk",
// };

// class NewClass {
//   ime = "ALdin";
//   prezime = "Halilovic;";
// }

// const mojeIme = new NewClass();

// console.log(mojeIme);

// class Bus {
//   seats;
//   color;

//   constructor(sedista, boja) {
//     this.color = boja;
//     this.seats = sedista;
//   }

//   helloBus() {
//     console.log("caoooooooo");
//   }

//   changeColor(newColor) {
//     this.color = newColor;
//   }

//   getColor() {
//     return this.color;
//   }
// }

// const lasta = new Bus(55, "zelena");

// console.log(lasta);

// lasta.helloBus();

// lasta.changeColor("zuta");
// console.log(lasta);

// const bojaAutaobusa = lasta.getColor();
// console.log(bojaAutaobusa);

class Pet {
  legNum;
  tail;

  constructor(noge, rep) {
    this.legNum = noge;
    this.tail = rep;
  }
}

class Cat extends Pet {
  name;
  color;

  constructor(noge, rep, ime, boja) {
    super(noge, rep);
    this.name = ime;
    this.color = boja;
  }
}

class Dog extends Cat {
  constructor(noge, rep, ime, boja) {
    super(noge, rep, ime, boja);
  }

  bark() {
    console.log("arrrr!!!");
  }

  getTail() {
    return this.tail;
  }
}

const ourCat = new Cat(4, "yes", "Sladjan", "Bela");

const ourDog = new Dog(4, "yes", "Sladjana", "grey");

// console.log(ourCat);

// console.log(ourDog);

// ourDog.bark();

////////////////////////////////////////ENKAPSULACIJA////////////////////////////////////////////////////

// class Shop {
//   #ime;
//   lokacija;
//   logo;

//   static brojKasa = 10;

//   constructor(name, location, logo) {
//     this.#ime = name;
//     this.lokacija = location;
//     this.logo = logo;
//   }

//   get ourName() {
//     return this.#ime;
//   }

//   setOurName(nekoIme) {
//     this.#ime = nekoIme;
//   }
// }

// const brojKasaUMaxiju = Shop.brojKasa;

// const maxi = new Shop("maxi", "1. maj", "MaXi");

// class Cat extends Pet {
// console.log(maxi);
// // console.log(maxi.ime);

// const imeProdavnice = maxi.ourName;
// console.log(imeProdavnice);

// maxi.setOurName("idea");

// console.log(maxi);

// class Shop {
//   #ime;
//   lokacija;
//   logo;

//   static brojKasa = 10;

//   constructor(name, location, logo) {
//     this.#ime = name;
//     this.lokacija = location;
//     this.logo = logo;
//   }

//   ourName() {
//     return this.#ime;
//   }

//   setOurName(nekoIme) {
//     this.#ime = nekoIme;
//   }
// }

// const nekaProdavnica = new Shop("IDEA", "jedinstvo", "iDEA");

// console.log(nekaProdavnica);
// // console.log(nekaProdavnica.#ime);

// const imeProdavnice = nekaProdavnica.ourName();

// console.log(imeProdavnice);

// nekaProdavnica.setOurName("RODA");

// console.log(nekaProdavnica);

//////////////////////////////////////////////////////////////////

// abstrakcija

// class User {
//   name;
//   color;
//   height;
//   width;
//   age;

//   constructor(noge, rep, ime, boja) {
//     super(noge, rep);
//   constructor(ime, visina, sirina, godine) {
//     this.name = ime;
//     this.color = boja;
//   }
// }

// class Dog extends Cat {
//   constructor(noge, rep, ime, boja) {
//     super(noge, rep, ime, boja);
//     this.height = visina;
//     this.width = sirina;
//     this.age = godine;
//   }

//   bark() {
//     console.log("arrrr!!!");
//   checkUserAge() {
//     if (this.age < 16) {
//       console.log("You can pass!");
//     } else {
//       console.log("Sorry, you are too old!");
//     }
//   }

//   getTail() {
//     return this.tail;
//   checkUserHeight() {
//     if (this.height < 160) {
//       console.log("You can pass!");
//     } else {
//       console.log("Sorry, you can not pass!");
//     }
//   }
// }

// const ourCat = new Cat(4, "yes", "Sladjan", "Bela");
// const aldin = new User("Aldin", 170, 100, 20);

// const redzi = new User("Redzi", 182, 3, 18);

// const ourDog = new Dog(4, "yes", "Sladjana", "grey");
// aldin.checkUserAge();
// aldin.checkUserHeight();

// console.log(ourCat);

// console.log(ourDog);

// ourDog.bark();

/////////////////////////////////////////////////////////

const products = [
  {
    id: 1,
    name: "T-shirt",
    qty: 1,
    price_per_unit: 100,
  },
  {
    id: 2,
    name: "Sneakers",
    qty: 1,
    price_per_unit: 300,
  },
  {
    id: 3,
    name: "Necklace",
    qty: 5,
    price_per_unit: 125,
  },
];

// const calTotal = (arr) => {
//   const productsWithTotal = arr.map((el) => {
//     return {
//       ...el,
//       total: el.qty * el.price_per_unit,
//     };
//   });

//   const total = productsWithTotal.reduce((a, b) => {
//     return a + b.total;
//   }, 0);

//   console.log(productsWithTotal);

//   return total;
// };

// console.log(calTotal(products));

const calTotal = (arr) => {
  const productsWithTotal = arr.map((el) => el.qty * el.price_per_unit);

  const total = productsWithTotal.reduce((a, b) => {
    return a + b;
  }, 0);

  console.log(productsWithTotal);

  return total;
};

calTotal(products);

console.log(typeof typeof 2);
