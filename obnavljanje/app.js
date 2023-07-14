const arr = [1, 2, 3, 4, 44, 2, 3, 32, 321];

const sum = (el) => {
  return el + 3;
};

const customMap = (array, callbackFunction) => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackFunction(array[i]));
  }

  return newArray;
};

console.log(customMap(arr, sum));
