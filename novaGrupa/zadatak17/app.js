const porscheCarPlatz = [
  {
    brandName: "Audi",
    model: "SQ5",
    price: "45.500$",
  },
  {
    brandName: "Mercedes",
    model: "AMG-45",
    price: "65.500$",
  },
  {
    brandName: "SKODA",
    model: "SUPER-B",
    price: "35.000$",
  },
  {
    brandName: "BMW",
    model: "X7",
    price: "120.000$",
  },
  {
    brandName: "Rolls Royce",
    model: "PHANTOM",
    price: "300.000$",
  },
];

const carSpeed = [
  {
    brandName: "SKODA",
    maxSpeed: "340kmh",
  },
  {
    brandName: "Rolls Royce",
    maxSpeed: "300kmh",
  },
  {
    brandName: "AUDI",
    maxSpeed: "280kmh",
  },
  {
    brandName: "BMW",
    maxSpeed: "320kmh",
  },
  {
    brandName: "Mercedes",
    maxSpeed: "280kmh",
  },
];

for (let i = 0; i < porscheCarPlatz.length; i++) {
  for (let j = 0; j < carSpeed.length; j++) {
    if (
      porscheCarPlatz[i].brandName.toUpperCase() ===
      carSpeed[j].brandName.toLocaleUpperCase()
    ) {
      porscheCarPlatz[i]["maxSpeed"] = carSpeed[j].maxSpeed;
    }
  }
}
``;
console.log(porscheCarPlatz);
