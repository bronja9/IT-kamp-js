const arrayOfNumbers = [
  1, 2, 3, -2, -4, -10, 1, 5, 67, 1321, -2, -223, -4, -6, 23,
];

//Zadatak 4: Pronalaženje prvog pozitivnog broja
//Napišite funkciju koja pronalazi i vraća prvi pozitivan broj u nizu. Ako nema pozitivnih brojeva, funkcija treba vratiti null.

for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] > 0) {
    console.log(arrayOfNumbers[i]);
  }
  break;
}
