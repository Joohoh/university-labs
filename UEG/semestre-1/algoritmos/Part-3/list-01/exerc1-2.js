const prompt = require("prompt-sync")();

const numero = Number(prompt(`Digite um valor: `));
let valor = 1;

while(valor <= numero)
    {
        console.log(`${valor}`);
    valor++;
}
console.log(`O valor = ${valor}`);