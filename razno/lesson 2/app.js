// a = 0;

// while (a !==22 ) {
//   a = +prompt ("izaberi neki broj 1-100");
//   if (a === 22) {
//     console.log ("cestitamo dobili ste dedu", a);
//   } else {
//     console.log ("vise srece drugi put", a)
//   }
//  } 

// switch se koristi kada imamo/zelimo tacnu vredsnost, 
//if kada je vece ili manje, switch je brzi i koristimo ga kod mnogo uslova
// let c = 8

// switch (c) {
//   case 3:
//     console.log ("b je 3");
//     break;
//    case 4:
//     console.log ("b je 4");
//     break;
//    case 5:
//     console.log ("b je 5");
//     break;
//    default:
//     console.log("ovo je preostalo")
//     break;
//     }


    //skraceni if else

    // let d = 10;

    // d > 5 ? console.log("vece od 5") : console.log ("manje od 5");

    // true/false;


// petlje za izbegavanje ponavljanja koda
//-- smanjuje za po 1, ++ dodaje za po 1

/*for (let v = 0; v < 10; v++) {
  console.log("ovo je petlja", v)
}*/


// let f = 5;

// for (i = 0; i < 10; i++) {
//   console.log(f, "default", i);
//   i += 1;
//   console.log (i, "petlja");
//   console.log(f);
// }

// prompt je prozor za neki input usera

// let k = prompt ("unesi nesto")
// console.log (+k);
// console.log (typeof +k);
//"3", 3




//alert ("unesi nesto!!!!")

// let brojOkretanja = prompt("Unesi broj okretanja petlje: ");

// let a = 0;
// for (let i = 0; i < 3; i++) {
//    console.log("nesto", i);
//   a += +prompt("Dodaj broj");
//   console.log(a, i);
// }

// +"3"
//console.log(a);
// "0" + +"5" + +"5" + +"5"
// 0+5+5+5
// let nekiBroj = "5" + "tri";
// console.log(nekiBroj);


//zadaca

// let q = 1;

// for (let i = 0; i < 3; i++) {
//   q *= +prompt ("pomnozi");
//   console.log (a, i);
// }


// for (let i = 0; i < 100; i++) {
//   if (i % 3 ===0) {
//     console.log ("fiz");
//   } if else (i % 5 ===0); {
//     console.log ("baz");
//   } if else (i % 5 ===0 && i % 3 ===0 ); {
//     console.log ("fiz-baz");
//   } 
// }



// for (let i = 0; i < 20; i++) {
//   if (i % 2=== 0) {
//     console.log (i *7 + 20);
//   } else {
//     console.log (i * 5 + 20);
//   }
// }

//do and while

// let a = Math.floor(Math.random() * 100) +1;
// let guess;

// do {
//   guess = prompt ("unesi neki broj");
//   if (+guess > a) {
//     alert ("prbaj manji");
//   } else if (+guess < a) {
//     alert ("probaj veci");
//   } else {
//     alert ("bingo");
//   } 
// }   while (+guess !== a);

//igra pogadjanja


 // Function /////////////////////////////////////////

  // function myFirstFunction() {
  //   // console.log("Aldin");
  //   let a = 5;
  //   let b = 6;
  //   let zbir = a + b;
  //   return zbir;
  // }

  
//let nekiDrugiZbir = myFirstFunction();
 //console.log(nekiDrugiZbir + 20);
//console.log(myFirstFunction() + 20);

// function mySecondFunction(argument1 =30, argument2 =20, argument3 = 10) {
//    // let a = 13;
//   console.log(argument1 + argument2 + argument3);
//    // return a;
//  }

// console.log(mySecondFunction());

// mySecondFunction(100, 30);
//  mySecondFunction(10);
//  mySecondFunction(100, 30, 20);




// function kvadratN (argument) {
//   let kvadrat = argument * argument;
//   return kvadrat;
// }

// //return argument * argument

// console.log (kvadratN (6));
// console.log (kvadratN (10));



// //bolje da uvek koristimo return, kao u prethodnom primeru

// function razlika (number1, number2) {
//   if(number1 > number2){
//     console.log(number1 - number2);
//   } else {
//     console.log(number2 - number1)
//   }
// }

// // console.log(razlika(2, 1));
// // console.log(razlika(10, 3));


// razlika(3, 6);
// razlika(34, 44);
// razlika(33, 6);
// razlika(3, 3);



// //nameless function

// const nekaFunkcija = function () {
//   console.log ('ovo je nameles fukcija')
// }

// nekaFunkcija();


// const celziusToFarentheit = function(number) {
//   return  number * 1.8 + 32;
// }

// console.log(celziusToFarentheit(30));


// const FarentheitToCelsius = function(number) {
//   return  (number - 32) / 1.8;
// }

// console.log(FarentheitToCelsius(86));


//////////////////////////////niz//////////////////////////////////
// let nekiDrugiNiz = [3, 10, 16, "Nesto", true, false, undefined, NaN, "bilosta"];

// console.log(nekiDrugiNiz[0]);
// console.log(nekiDrugiNiz[1]);
// console.log(nekiDrugiNiz[2]);
// console.log(nekiDrugiNiz[3]);
// console.log(nekiDrugiNiz[4]);
// console.log(nekiDrugiNiz[5]);
// console.log(nekiDrugiNiz[6]);
// console.log(nekiDrugiNiz[7]);
// console.log(nekiDrugiNiz[8]);

// console.log(nekiDrugiNiz.length);

// for(let i = 0; i < 9; i++) {
//   console.log(nekiDrugiNiz[i]);
// }


// for(let i = nekiDrugiNiz.length - 1; i >= 0; i--){
//   console.log(nekiDrugiNiz[i], i)
// }

// let ime = "nekoime";
// ime = ["n", "e", "k", "o", "i", "m", "e"];
// console.log(ime.length);
// console.log(ime);


// for(i = 0; i < ime.length; i++){
//   console.log(ime[i]);
// }

// for(i = ime.length -1; i >= 0; i--) {
//   console.log(ime[i]);
// }

//niz kola, napred i nazad, prikazi samo parne ili neparne

// let cars = ["bmw", "audi", "alfa", "mercedes", "vw"];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

// for(let i = cars.length -1; i >= 0; i--){
//   console.log(cars[i]);
// }


// for(i = 0; i < cars.length; i++) {
//   if(i % 2 ===0){
//     console.log(cars[i]);
//   } 
// }

// for(i = cars.length -1; i >= 0; i--) {
//   if(i % 2 === 0) {
//     console.log(cars[i]);
//   }
// }


///////////////////////////////////////////////////////////////////////////////



//  let someArray = [3, 4, 53, 44, 66, 5];
//  let anotherArray = [34, ,435, 5433, 543, 243, 532, 52];
//  let anotherOne = [343, 54333, 5434, 636346, ,435, 5433, 543, 243, 532, 52];


//  function getMaxNumber(niz){
//   const duzinaNiza = niz.length;
//   let number = 0;

//   for (let i = 0; i < duzinaNiza; i++){
//     if(number < niz[i]) {
//       number = niz [i];
//     }
//   }
//   return number;
//  }

//  console.log(getMaxNumber(anotherArray))
//  console.log(getMaxNumber(someArray))
//  console.log(getMaxNumber(anotherOne))

// let matrica = [
//   [1, 2, 3], // 1
//   [4, 5, 6], // 2
//   [7, 8, 9], // 3
// ];

// for (let i = 0; i < matrica.length; i++) {
//   console.log(matrica[i][i]);
// }

// for (let i = 0; i < matrica.length; i++) {
//   console.log(matrica[i]); 
//  }

 //   console.log(matrica[0][1]);
//   console.log(matrica[2][2]);
   
  // for (let i = 0; i < matrica.length; i++) {
  //   for (let j = 0; j < matrica[i].length; j++) {
  //     console.log(matrica[i][j]);
  //   }
  // }

  // function minMaxIn2D(arr) {
  //   var min,max;
  //   for(var i in arr) {
  //     for(var j in arr[i]){
  //       min = min - arr[i][j] <= 0 ? min : arr[i][j] ;
  //       max = max - arr[i][j] >= 0 ?  max: arr[i][j]; 
  //     }
  
  //   }
  //   console.log(min, max)
  // }

  // minMaxIn2D(matrica)

// function getMaxNumber(nekiNiz){
//   let number = nekiNiz[0][0];

//   for (let i = 0; i < nekiNiz.length; i++) {
//     for (let j = 0; j < nekiNiz[i].length; j++) {
//       if(number < nekiNiz.length * nekiNiz[i].length)
//         number = nekiNiz.length * nekiNiz[i].length;
//       }
//     }
//   }
//   return number
// }    

// console.log(getMaxNumber(matrica))



// let matrica = [
//   [1222, 22, 3], // 1
//   [411, 51, 6], // 2
//   [7, 82, 9, 1], // 3
//   [1322, 221, 23, -2], // 1
//   [4211, 5221, 0], // 2
//   [7, 82, 9, 1, 44], // 3
// ];


// function minMaxIn2D(nekiNiz) {
//   let min = nekiNiz[0][0]

//   for(let i in nekiNiz) {
//     for(let j in nekiNiz[i]){
//     //  min = min - nekiNiz[i][j] <= 0 ? min : nekiNiz[i][j] ;
//      if(min - nekiNiz[i][j] >= 0){
//       min = nekiNiz[i][j]
//      }
//     //max = max - arr[i][j] >= 0 ?  max: arr[i][j]; 
//     }

//   }
//   return  min
// }

// console.log(minMaxIn2D(matrica))

// function getMaxNumber(nekiNiz) {
//   let max = nekiNiz[0][0]

//   for(let i in nekiNiz){
//     for(let j in nekiNiz[i]){
//       if(max - nekiNiz[i][j] <= 0){
//         max = nekiNiz[i][j]
//       }
//     }
//   }
//   return max
// }

// console.log(getMaxNumber(matrica))

// function getLowestNumber(arr){
//   let min = arr[0][0];

//   for(let i in arr){
//     for(let j in arr[i]){
//       if(min - arr[i][j] >= 0){
//         min = arr[i][j]
//       }
//     }
//   }
//   return min
// }

// console.log(getLowestNumber(matrica))

