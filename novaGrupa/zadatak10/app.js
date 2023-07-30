function comparaNames(name1, name2) {
  if (name1.length > name2.length) {
    console.log("duze je prvo ime", name1);
  } else if (name1.length === name2.length) {
    console.log("imena su iste duzine");
  } else {
    console.log("duze je drugo ime", name2);
  }
}

comparaNames("ikan", "mikan");

function ukloniTri(niz) {
  // niz.splice(-3);
  // return niz;
  return niz.splice(0, niz.length - 3);
}

let array = [3, 4, 4, 4];
console.log(ukloniTri(array));

function spojnica(niz, niz2) {
  let novi = niz.concat(niz2);
  return novi;
}

const prva = [1, 2];
const druga = [1, 2, 3];

console.log(spojnica(prva, druga));

// let array = [2, 3, 4];
// let array2 = array;
// console.log(array, array2);

// array = [5, 6, 7];
// console.log(array);
// console.log(array2);
