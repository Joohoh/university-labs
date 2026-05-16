const prompt = require("prompt-sync")();

const numero = Number(prompt(`Digite um valor: `));
let valor = 1;

do{
    console.log(`${valor}`);
    valor+=2;
}while(valor <= numero)
console.log(`O valor = ${valor}`);
