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
