//setTimeout time represent minimum time of waiting for execution, not exact or maximum

//ice cream production

// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "penauts"],
// };

//////////////////////////////////// ASYNC / AWAIT /////////////////////////////////////

// let is_shop_open = false;

// function time(ms) {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(resolve, ms);
//     } else {
//       reject(console.log("shop is closed"));
//     }
//   });
// }

// async function kitchen() {
//   try {
//     await time(2000);
//     console.log(`${stocks.Fruits[0]} was selected`);

//     await time(0);
//     console.log("start the production");

//     await time(2000);
//     console.log("cut the fruit");

//     await time(1000);
//     console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//     await time(1000);
//     console.log("start the machine");

//     await time(2000);
//     console.log(`ice cream placed on ${stocks.holder[0]} `);

//     await time(3000);
//     console.log(`${stocks.toppings[0]} was selected`);

//     await time(2000);
//     console.log("serve ice cream");
//   } catch (error) {
//     console.log("customer left");
//   } finally {
//     console.log("day ended, shop is closed");
//   }
// }

// kitchen();

/////////////////////////////

// let toppings_choise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("which topping would you love?");
//       resolve();
//     }, 3000);
//   });
// };

// async function kitchen() {
//   console.log("A");
//   console.log("B");
//   console.log("C");

//   await toppings_choise();

//   console.log("D");
//   console.log("E");
// }

// kitchen();

// console.log("doing dishes");
// console.log("cleaning the tables");
// console.log("taking others orders");

////////////////////////////////////////

// async function order() {
//   try {
//     await abc;
//   } catch (error) {
//     console.log("abc does not exits", error);
//   } finally {
//     console.log("runs code anyways");
//   }
// }

// order().then(() => {
//   console.log("sadoisaio");
// });
///////////////////////////////////// PROMISES ///////////////////////////////////////////

// let is_shop_open = true;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("our shop is closed"));
//     }
//   });
// };

// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//   .then(() => {
//     return order(0, () => console.log("production has been started"));
//   })
//   .then(() => {
//     return order(2000, () => {
//       console.log("fruits has been chopped");
//     });
//   })
//   .then(() => {
//     return order(1000, () => {
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`);
//     });
//   })
//   .then(() => {
//     return order(1000, () => {
//       console.log("start the machine");
//     });
//   })
//   .then(() => {
//     return order(2000, () => {
//       console.log(` ice cream placed on ${stocks.holder[0]} `);
//     });
//   })
//   .then(() => {
//     return order(3000, () => {
//       console.log(`${stocks.toppings[0]} was selected`);
//     });
//   })
//   .then(() => {
//     return order(1000, () => {
//       console.log("ice cream was served");
//     });
//   })
//   .catch(() => {
//     console.log("customer left");
//   })
//   .finally(() => {
//     console.log("day ended, shop is closed");
//   });
///////////////////////////////////// CALLBACK HELL ///////////////////////////////////////

// let order = (Fruit_name, call_production) => {
//   setTimeout(() => {
//     console.log(`${stocks.Fruits[Fruit_name]} was selected`);

//     call_production();
//   }, 2000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log("production has started");

//     setTimeout(() => {
//       console.log("the fruit has been chopped");

//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has added`);

//         setTimeout(() => {
//           console.log("the machine was started");

//           setTimeout(() => {
//             console.log(`ice cream was been placed on ${stocks.holder[0]} `);

//             setTimeout(() => {
//               console.log(`${stocks.toppings[0]} was added`);

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

//////////////////////////////// FETCH /////////////////////////////////////////////////

// const url = "http://worldtimeapi.org/api/timezone/America/New_York";

// async function getData() {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// }

// getData();

///////////////////////////// PROMISES ////////////////////////////////////////////////

// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a == 2) {
//     resolve("success");
//   } else {
//     reject("failed");
//   }
// });

// p.then((message) => {
//   console.log("this is in the then " + message);
// }).catch((message) => {
//   console.log("this is in the catch " + message);
// });

/////////////////

// const userLeft = false;
// const userWatchingCatMeme = false;

// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: "user left",
//       message: ":(",
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: "user watching cat meme",
//       message: "webDevSimplified < cat",
//     });
//   } else {
//     callback("thums up and subscribe");
//   }
// }

// watchTutorialCallback(
//   (message) => {
//     console.log("success " + message);
//   },
//   (error) => {
//     console.log(error.name + " " + error.message);
//   }
// );

// function watchTutorialPromise() {
//   return new Promise((resolve, reject) => {
//     if (userLeft) {
//       reject({
//         name: "user left",
//         message: ":(",
//       });
//     } else if (userWatchingCatMeme) {
//       reject({
//         name: "user watching cat meme",
//         message: "webDevSimplified < cat",
//       });
//     } else {
//       resolve("thums up and subscribe");
//     }
//   });
// }

// watchTutorialPromise()
//   .then((message) => {
//     console.log("success " + message);
//   })
//   .catch((error) => {
//     console.log(error.name + " " + error.message);
//   });

///////////////////

// const recordVideoOne = new Promise((resolve, reject) => {
//   resolve("video 1 recorded");
// });

// const recordVideoTwo = new Promise((resolve, reject) => {
//   resolve("video 2 recorded");
// });

// const recordVideoThree = new Promise((resolve, reject) => {
//   resolve("video 3 recorded");
// });

// Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
//   (message) => {
//     console.log(message);
//   }
// );

// Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
//   (message) => {
//     console.log(message);
//   }
// );
