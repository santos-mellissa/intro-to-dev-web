const product = 'arroz';
const price = 22.00;
const discount = 10;

const message = `Produto: ${product}
Preço: ${price}
Preço com desconto: ${price - (price * (discount / 100)).toFixed(2)}`;

console.log(message);