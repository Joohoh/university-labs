const prompt = require("prompt-sync")();

const numero = Number(prompt(`Digite um valor: `));
let valor = numero;

for(valor = numero; valor >= 1; valor--)
    {
    console.log(`${valor}`);
}
console.log(`O valor = ${valor}`);
