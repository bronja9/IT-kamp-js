// ukus neki was selected 2
// start the production 0
// cut the fruits 2
// liquids prvi i drugi was added 1
// start the machine 1
// ice cream placed on holder neki 2
// toppings was selected 3
// serve ice cream 2

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "penauts"],
};

let isShopOpen = false;

let order = (work, time) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("shop is closed"));
    }
  });
};

order();

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
