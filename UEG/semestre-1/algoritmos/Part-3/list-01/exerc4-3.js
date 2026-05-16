const prompt = require("prompt-sync")();

const numero = Number(prompt(`Digite um valor: `));
let valor = 1;

while(valor <= numero){
    console.log(`${valor}`);
    valor+=2;
}
console.log(`O valor = ${valor}`);
