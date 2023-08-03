function callback(func) {
  func();
  func();
}

function laugh() {
  console.log("hahahahahahhahahhah");
}

callback(laugh);

///////////////////

function callIt() {
  return function () {
    console.log("HI");
  };
}

console.log(callIt()); // ispisace se cela funckcija

const innerFunction = callIt(); // kada joj dodamo varijablu ona postaje funkcija
innerFunction();

// prethodno je bio primer anonimne funcije

function noAnonymus() {
  const funkcijaNasa = function () {
    console.log("hi guys!!");
  };

  return funkcijaNasa;
}

const returnValueOfNoAnoymousFunction = noAnonymus();
returnValueOfNoAnoymousFunction();

//////////

function multiplyBy(broj) {
  return function (x) {
    return x * broj;
  };
}

// console.log(multiplyBy(3));

// multiplyBy nam je zapravo kao fabrika funkcija!
// anonimna funkcija ( nema naziv ) je unutrasnja funkcija nase multyplyBy funkcije!

const triple = multiplyBy(3);
const double = multiplyBy(2);
const havle = multiplyBy(0.5);

console.log(triple(3));
console.log(double(5));
console.log(havle(7));

//

function message() {
  console.log(prompt("unesi nesto"));
}

//

// setInterval(() => {
//   console.log("set interval");
// }, 1000);

// setTimeout(message, 1000);

// setTimeout(() => {
//   console.log(prompt("unesi posle nesto"));
// }, 2000);
