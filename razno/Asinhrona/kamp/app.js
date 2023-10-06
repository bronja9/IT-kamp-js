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
//   fetch("://jsonplaceholder.tyhttpspicode.com/todos")
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

////////////////////////////////////////////////////////////////////////////////////////

// const fetchingData = async () => {
//   const data = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const result = await data.json();
//   // console.log(result);
//   const filtered = await result.filter((el) => el.id % 2 === 0);
//   // console.log(filtered);

//   return { result, filtered };

//   // return {
//   //   result: result,
//   //   filtered: filtered,
//   // };
// };

// fetchingData().then((el) => console.log(el));

// const fetchComments = async (a, b) => {
//   // let unos = prompt("unesi broj");
//   // let unos2 = prompt("unesi broj");

//   // const data = await fetch(
//   //   `https://jsonplaceholder.typicode.com/comments?postId=${unos}&postId=${unos2}`
//   // );

//   const data = await fetch(
//     `https://jsonplaceholder.typicode.com/comments?postId=${a}&postId=${b}`
//   );

//   const result = await data.json();

//   console.log(result);
// };

// fetchComments(3, 4);

///////////////////////////////////////////////////////////////////////////////
