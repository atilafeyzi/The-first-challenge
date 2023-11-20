const price1 = 10;
const price2 = 15;
const price3 = 18;

const balance = 60;

const totalPrice = price1 + price2 + price3 * 2;
console.log(`Total Price = ${totalPrice}`);

const averagePrice = totalPrice / 4;
console.log(`Average Price =${averagePrice}`);

const finalPrice = totalPrice * 0.95;
console.log(`Final Price =${finalPrice}`);

const canBuy = balance >= finalPrice;
console.log(`Can buy = ${canBuy}`);

const message = canBuy ? "Great! You can buy these products" : "sorry!";
console.log(message);
