/* Com o usuário fornecendo a base e a altura de uma pirâmide,
fazer um programa que calcule e escreva o seu volume. 
VOLUME =1/3 * BASE * ALTURA */

function calcularVolume(base, altura){
    const volume = base * altura / 3;
    return volume;
}

const prompt = require("prompt-sync")();
const b = Number(prompt("Digite o valor da base: "));
const a = Number(prompt("Digite o valor da altura: "));

const volume = calcularVolume(b, a);

console.log(`O volume da pirâmide é de: ${volume}`);
