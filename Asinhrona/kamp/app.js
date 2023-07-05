// const firstPromise = new Promise((res, rej) => {
//   let age = prompt("put in your age");
//   setTimeout(() => {
//     if (+age > 17) {
//       res = +age;
//     } else {
//       rej = +age;
//     }
//   }, 400);
// });

// firstPromise
//   .then((data) => {
//     console.log(`pesron has been adult for ${data - 18} `);
//   })
//   .catch((data) => {
//     console.log(`pesron has been adult for ${18 - data} `);
//   });

const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => console.log(json));
};

fetchData();
