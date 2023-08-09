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

// Zadatak 3: Every
// Napišite funkciju koja provjerava jesu li svi elementi niza veći od 10.

function checkIfAllAreGreater(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(checkIfAllAreGreater(arrayOfNumbers));
