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

//////////////////////////////////// FETCH ////////////////////////////////////////////

// const fetchData = () => {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json);
//       return json.filter((el) => el.id % 2 === 0);
//     })
//     .then((salko) => {
//       console.log(salko);
//     });
// };

// fetchData();

// const fetchData2 = () => {
//   fetch("https://dummyjson.com/products")
//     .then((res) => res.json())
//     .then((novi) => {
//       console.log(novi);
//       return novi.products.filter((el) => el.stock > 64);
//     })
//     .then(console.log);
// };

// fetchData2();

// const fetchData3 = () => {
//   fetch("https://dummyjson.com/carts")
//     .then((res) => res.json())
//     .then((novi) =>
//       novi.carts.map((el) => el.products.filter((el) => el.total > 646))
//     )
//     .then((noviji) => noviji.filter((el) => el.length))
//     .then(console.log);
// };

// fetchData3();
