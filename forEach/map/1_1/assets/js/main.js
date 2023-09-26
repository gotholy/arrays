let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];
const list = document.querySelector("#list");
let getraenkeSorted = getraenke.sort();
console.log(getraenkeSorted);
getraenkeSorted.forEach((singleDrink) => document.write(singleDrink));
