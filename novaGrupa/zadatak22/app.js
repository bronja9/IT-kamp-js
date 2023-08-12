let niz = [12, -12, 5, -5, 6, -6, 7, -7, 8, -20, 20, 50, -30];

// napisati funkciju koja ce da proveri da li za svaki pozitivan broj ima isti takav
//negativan broj, i ako ima, smestiti te pozitivne brojeve
//u novi niz i taj niz ispisati.

function checkAntonims(array) {
  let antonimPositive = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] === 0 && array[i] > 0) {
        antonimPositive.push(array[i]);
      }
    }
  }
  return antonimPositive;
}

console.log(checkAntonims(niz));
