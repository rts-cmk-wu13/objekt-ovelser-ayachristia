"use strict";

"use strict";

// -----------opgave 1
const computer = {
  brand: "Del",
  year: 2024,
  rentedFrom: "Roskilde Tekniske skole",
  skærmStr: '27"',
};

console.log(computer.brand);
console.log(computer.year);
console.log(computer.rentedFrom);
console.log(computer.skærmStr);

console.log(computer["brand"]);
console.log(computer["year"]);
console.log(computer["rentedFrom"]);
console.log(computer["skærmStr"]);

// ------------opgave 2
const computer2 = {
  brand: "Del",
  year: 2024,
  rentedFrom: "Roskilde Tekniske skole",
  skærmStr: '27"',
  isWarrwanted: true,
  stores: ["computer city", "elgiganten", "bilka"],
  components: {
    displayPanel: "LCD/LED",
    skærmDriver: "T-CON board",
    strømforsyning: "kabel",
    IndgangsOgVideoForb: [
      "HDMI",
      "USB-C",
      "DVI",
      "VGA",
      "DisplayPort (DP)",
      "SDI",
    ],
    højtalere: "integreret",
  },
};

computer2.stores.forEach((store) => {
  console.log(store);
});

console.log(computer2.components.displayPanel);
console.log(computer2.components.skærmDriver);
console.log(computer2.components.strømforsyning);
console.log(computer2.components.IndgangsOgVideoForb);
console.log(computer2.components.højtalere);
