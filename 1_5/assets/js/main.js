const foodArr = ["Thai-Curry", "Kürbisqureme Suppe", "BigMac"];
console.log(foodArr);
foodArr.push("Kartoffelsalat", "Panierter Blumenkohl");
console.log(foodArr);
const friendArr = ["Andre", "Christian", "Denny"];
console.log(friendArr);
friendArr.push("Dennis", "Benny");
console.log(friendArr);
const personArr = [28, "Göggingen", "Gamer"];
console.log(personArr);
personArr.push("Hundefreund", "Nachtaktiv");
console.log(personArr);

let lastValueFoodArr = foodArr.pop();
console.log(lastValueFoodArr);
let lastValueFriendArr = friendArr.pop();
console.log(lastValueFriendArr);
let lastValuePersonArr = personArr.pop();
console.log(lastValuePersonArr);
