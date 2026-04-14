/* 5. Tendo como dados de entrada a altura e o sexo de uma pessoa,
construa um algoritmo que calcule seu peso ideal, utilizando as
seguintes expressões:

● Para homens: 72.7 * h −58 ;
● Para mulheres: 62.1* h −44.7.

Obs.: Usuário ideal - ele não irá digitar valores incorretos. */

function calcularPesoIdeal (sexo, altura){
    if(sexo === "F") return "Feminino - Peso ideal: " + (62.1 * altura - 44.7).toFixed(2);
        else return "Masculino - Peso ideal: " + (72.7 * altura - 58).toFixed(2);   
}

const prompt = require("prompt-sync")();

const sexo = prompt("Digite seu sexo: Masculino ou Femino -> F/M: ");
const altura = Number(prompt("Digite sua altura: "));

console.log(`Na opção ${sexo}, ${calcularPesoIdeal(sexo, altura)}`);
