// ukus neki was selected 2
// start the production 0
// cut the fruits 2
// liquids prvi i drugi was added 1
// start the machine 1
// ice cream placed on holder neki 2
// toppings was selected 3
// serve ice cream 2

// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "penauts"],
// };

// let isShopOpen = true;

// function time(ms) {
//   return new Promise((resolve, reject) => {
//     if (isShopOpen) {
//       setTimeout(resolve, ms);
//     } else {
//       reject(console.log("shop is closed"));
//     }
//   });
// }

// async function kitchen() {
//   try {
//     await time(2000);
//     console.log(`${stocks.Fruits[0]} has been selected`);

//     await time(0);
//     console.log("start the production");

//     await time(2000);
//     console.log("cut the fruits");

//     await time(1000);
//     console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//     await time(1000);
//     console.log("start the machine");

//     await time(2000);
//     console.log(`ice cream has been placed on ${stocks.holder[0]}`);

//     await time(3000);
//     console.log(`${stocks.toppings[0]} was selected`);

//     await time(2000);
//     console.log("serve the ice cream");
//   } catch (error) {
//     console.log("customer left");
//   } finally {
//     console.log("day ended, shop is closed");
//   }
// }

// kitchen();

/////////////////////////////////////////////////////////////////////////////////////////
// let order = (work, time) => {
//   return new Promise((resolve, reject) => {
//     if (isShopOpen) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("shop is closed"));
//     }
//   });
// };

// order(() => {
//   console.log(`${stocks.Fruits[0]} was selected`);
// }, 2000)
//   .then(() => {
//     return order(() => {
//       console.log("start the production");
//     }, 0);
//   })
//   .then(() => {
//     return order(() => {
//       console.log("cut the fruits");
//     }, 2000);
//   })
//   .then(() => {
//     return order(() => {
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
//     }, 1000);
//   })
//   .then(() => {
//     return order(() => {
//       console.log("start the machine");
//     }, 1000);
//   })
//   .then(() => {
//     return order(() => {
//       console.log(`ice cream has been placed on ${stocks.holder[0]}`);
//     }, 2000);
//   })
//   .then(() => {
//     return order(() => {
//       console.log(`${stocks.toppings[0]} has been selected`);
//     }, 3000);
//   })
//   .then(() => {
//     return order(() => {
//       console.log("serve the ice cream");
//     }, 2000);
//   })
//   .catch(() => {
//     console.log("customer left");
//   })
//   .finally(() => {
//     console.log("day ended, shop is closed");
//   });

///////////////////////////////////////////////////////////////////////////////////////////
// let production = () => {
//   setTimeout(() => {
//     console.log(`${stocks.Fruits[0]} was selected`);

//     setTimeout(() => {
//       console.log("start the production");

//       setTimeout(() => {
//         console.log("cut the fruits");

//         setTimeout(() => {
//           console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//           setTimeout(() => {
//             console.log("start the machine");

//             setTimeout(() => {
//               console.log(`ice cream placed on ${stocks.holder[0]}`);

//               setTimeout(() => {
//                 console.log(`${stocks.toppings[0]} was selected`);

//                 setTimeout(() => {
//                   console.log("serve ice cream");
//                 }, 2000);
//               }, 3000);
//             }, 2000);
//           }, 1000);
//         }, 1000);
//       }, 2000);
//     }, 0);
//   }, 2000);
// };

// production();

//////////////////////////////////////////////////////////////////////////////////////////
// let order = (fruitName, callProduction) => {
//   setTimeout(() => {
//     console.log(`${stocks.Fruits[fruitName]} was selected`);
//     callProduction();
//   }, 2000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log("production has been started ");

//     setTimeout(() => {
//       console.log("fruit has been chopped");

//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//         setTimeout(() => {
//           console.log("start the machine");

//           setTimeout(() => {
//             console.log(`ice cream placed on ${stocks.holder[0]}`);

//             setTimeout(() => {
//               console.log(`${stocks.toppings[0]} has been selected`);

//               setTimeout(() => {
//                 console.log("serve ice cream");
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0);
// };

// order(0, production);

/////////////////////////////////// FETCH API //////////////////////////////////////////

// const fetchData = () => {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then((json) => json.filter((el) => el.userId != 10))
//     .then((evenIds) => evenIds.filter((el) => el.id % 2 === 0))
//     .then((titleLength) => titleLength.filter((el) => el.title.length < 46))
//     .then((complete) => complete.filter((el) => el.completed === true))
//     .then((newResult) =>
//       newResult.map((el) => {
//         return {
//           ...el,
//           sumOfAllIds: newResult.reduce((a, c) => a + c.id, 0),
//         };
//       })
//     )

//     .then(console.log)
//     .catch((error) => console.log(error));
// };

// fetchData();

// const fetchData2 = () => {
//   fetch("https://dummyjson.com/products")
//     .then((response) => response.json())
//     .then((newOne) => newOne.products.filter((el) => el.stock > 93))
//     .then((ids) => ids.filter((el) => el.id % 2 === 0))
//     .then((ratings) => ratings.filter((el) => el.rating > 4.3))
//     .then((prices) => prices.filter((el) => el.price > 14))
//     .then((discounts) => discounts.filter((el) => el.discountPercentage > 14))
//     .then(console.log)
//     .catch((error) => console.log(error));
// };

// fetchData2();

const fetchData3 = () => {
  fetch("https://dummyjson.com/carts")
    .then((response) => response.json())
    .then(console.log);
};
