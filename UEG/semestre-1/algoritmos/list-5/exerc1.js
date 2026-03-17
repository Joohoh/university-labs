/* Faça um algoritmo que leia a idade de uma pessoa expressa
em anos, meses e dias e mostre-a expressa apenas em dias. */

function calcularIdadeDias(idadeAnos, idadeMeses, idadeDias){
    const resultado = (idadeAnos * 365) + (idadeMeses * 12) + (idadeDias * 30);
    return resultado;
}

const prompt = require("prompt-sync")();
const idadeAnos = parseInt(prompt("Digite sua idade em anos: "));
const idadeMeses = parseInt(prompt("Digite sua idade em meses: "));
const idadeDias = parseInt(prompt("Digite sua idade em dias: "));

const idadeCalculadaDias = calcularIdadeDias(idadeAnos, idadeMeses, idadeDias);

console.log(`Sua idade em dias é de: ${idadeCalculadaDias}`);