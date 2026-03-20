function calcularDelta(cA, cB, cC){
 const delta = cB*cB - 4 * cA * cC;
 return delta;
}
// ENTRADA DE DADOS
const prompt = require("prompt-sync")();
const coeficienteA = Number(prompt("Coeficiente A: "));
const coeficienteB = Number(prompt("Coeficiente B: "));
const coeficienteC = Number(prompt("Coeficiente C: "));

// PROCESSAMENTO
const delta = calcularDelta(coeficienteA, coeficienteB, coeficienteC);

//SAÍDA
console.log(`O valor de delta é: ${delta}`);