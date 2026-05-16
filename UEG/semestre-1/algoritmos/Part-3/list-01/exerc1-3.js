const prompt = require("prompt-sync")();

const numero = Number(prompt(`Digite um valor: `));
let valor = 1;

for(valor = 1; valor <= numero; valor++)
    {
        console.log(`${valor}`);
}
console.log(`O valor = ${valor}`);