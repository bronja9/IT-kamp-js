const fruitArray = ["apple", "banana", "watermelon", "kiwi"];
let nizNovi = [];

fruitArray.forEach((e, i, array) => {
  console.log(
    array,
    "ovo je niz prosledjen u call back funkciju for each metode"
  );
  nizNovi.push(e.toUpperCase());
  return;
});

console.log(nizNovi, "saaaaaaaaaaaaaaaaaaaad");
