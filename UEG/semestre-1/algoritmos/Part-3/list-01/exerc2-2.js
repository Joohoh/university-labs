const prompt = require("prompt-sync")();

const numero = Number(prompt(`Digite um valor: `));
let valor = numero;

do{
    console.log(`${valor}`);
    valor--;
}while(valor >= 1);
console.log(`O valor = ${valor}`);