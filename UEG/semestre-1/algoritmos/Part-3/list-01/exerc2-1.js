const prompt = require("prompt-sync")();

const numero = Number(prompt(`Digite um valor: `));
let valor = numero;

while(valor >= 1)
    {
        console.log(`${valor}`);
    valor--;
}
console.log(`O valor = ${valor}`);