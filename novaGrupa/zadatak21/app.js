const arrayOfNumbers = [
  1, 2, 3, -2, -4, -10, 1, 5, 67, 1321, -2, -223, -4, -6, 23,
];

//Zadatak 4: Pronalaženje prvog pozitivnog broja
//Napišite funkciju koja pronalazi i vraća prvi pozitivan broj u nizu.
// Ako nema pozitivnih brojeva, funkcija treba vratiti null.

function findFirstPositive(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      return array[i];
      break;
    } else {
      return null;
    }
  }
}

console.log(findFirstPositive(arrayOfNumbers));

//The find() method returns the first element in the provided array that satisfies the provided
// testing function. If no values satisfy the testing function, undefined is returned.

function findFirstPositive2(array) {
  return array.find((e) => e > 0);
}

console.log(findFirstPositive2(arrayOfNumbers));

// Zadatak 3: Every
// Napišite funkciju koja provjerava jesu li svi elementi niza veći od 10.

function checkIfAllAreGreater(array) {
  function check10(num) {
    return num > 10;
  }

  return array.every(check10);
}

console.log(checkIfAllAreGreater(arrayOfNumbers));

// Zadatak 2: Some
// Napišite funkciju koja provjerava je li barem jedan od elemenata u nizu parni broj.

function checkIfNumIsEven(array) {
  function checkEven(num) {
    return num % 2 === 0;
  }

  return array.some(checkEven);
}

console.log(checkIfNumIsEven(arrayOfNumbers));

// Zadatak 1: Filter zadatak
// Napišite funkciju koja prima niz brojeva i vraća novi niz koji sadrži samo pozitivne brojeve.

function positiveNumbers(array) {
  return array.filter((e) => e > 0);
}

console.log(positiveNumbers(arrayOfNumbers));
