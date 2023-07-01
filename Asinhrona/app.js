//setTimeout time represent minimum time of waiting for execution, not exact or maximum

//ice cream production

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "penauts"],
};

let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);

    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("production has started");

    setTimeout(() => {
      console.log("the fruit has been chopped");

      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has added`);
      }, 1000);
    }, 2000);
  }, 0);
};

order(0, production);
