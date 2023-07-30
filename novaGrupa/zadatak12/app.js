// const student = {
//   exams: { midterm: 82, final: 95 },
// };

// console.log(student.exams.midterm);

// console.log(student);

// delete student.exams;

// console.log(student);

// console.log(student.exams);

// console.log(student.kekk);

//niz ima 10 objekata, svaki objekat ima sledece properije
//prvi je naziv filma, drugi je godina pustanja, budzet i trajanje

//nadji najduzi film
//najveci budzet
//

const movies = [
  {
    movieName: "titanic",
    releaseYear: 1999,
    budget: 200000,
    duration: 119,
  },
  {
    movieName: "ko to tamo peva",
    releaseYear: 1998,
    budget: 20000,
    duration: 90,
  },
  {
    movieName: "american pie",
    releaseYear: 2001,
    budget: 190000,
    duration: 88,
  },
  {
    movieName: "tesna koza",
    releaseYear: 1988,
    budget: 98000,
    duration: 78,
  },
  {
    movieName: "pirates from caribes",
    releaseYear: 2019,
    budget: 340322,
    duration: 128,
  },
  {
    movieName: "avengers",
    releaseYear: 2021,
    budget: 598229,
    duration: 90,
  },
  {
    movieName: "peky",
    releaseYear: 2022,
    budget: 97889,
    duration: 143,
  },
  {
    movieName: "halkidiki",
    releaseYear: 2003,
    budget: 87000,
    duration: 69,
  },
  {
    movieName: "avatar",
    releaseYear: 2007,
    budget: 459009,
    duration: 68,
  },
  {
    movieName: "transporter",
    releaseYear: 2011,
    budget: 209302,
    duration: 77,
  },
];

let najveci = movies[0];

let najduzi = movies[0];

let najstariji = movies[0];

let najduzeIme = movies[0];

for (let i = 0; i < movies.length; i++) {
  if (najduzi.duration < movies[i].duration) {
    najduzi = movies[i];
  }
  if (najveci.budget < movies[i].budget) {
    najveci = movies[i];
  }

  if (najstariji.releaseYear > movies[i].releaseYear) {
    najstariji = movies[i];
  }

  if (najduzeIme.movieName.length < movies[i].movieName.length) {
    najduzeIme = movies[i];
  }
}

console.log(najveci, "budzet");
console.log(najduzi, "duzina");
console.log(najstariji, "najstariji");
console.log(najduzeIme, "najduze ime");
