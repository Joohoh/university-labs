/* 3. Números palíndromos são aqueles que escritos da direita para
esquerda ou da esquerda para direita tem o mesmo valor. Exemplo
929, 44, 97379. Fazer um algoritmo que dado um número de 5 dígitos;
calcule e escreva se este é ou não palíndromo. */

function calcularPalindromos(number){
    
    let numberAux = number;
    let numeroInvertido = 0;

    numeroInvertido = (numeroInvertido * 10) + (numberAux % 10);
    numberAux = Math.trunc(numberAux / 10);

    numeroInvertido = (numeroInvertido * 10) + (numberAux % 10);
    numberAux = Math.trunc(numberAux / 10);

    numeroInvertido = (numeroInvertido * 10) + (numberAux % 10);
    numberAux = Math.trunc(numberAux / 10);

    numeroInvertido = (numeroInvertido * 10) + (numberAux % 10);
    numberAux = Math.trunc(numberAux / 10);

    numeroInvertido = (numeroInvertido * 10) + (numberAux % 10);

    if(numeroInvertido == number) return `é um palíndromo.`;
    else return `não é um palíndromo`;

}

const prompt = require("prompt-sync")();

let opcao = "S";

do{
    const numero = Number(prompt(`Escreva um algoritmo de 5 dígitos: `));

    console.log(`Sendo o numero digitado: ${numero}, ele ${calcularPalindromos(numero)}`);

    opcao = prompt(`\nDeseja continuar? [S/N]: `).toUpperCase();
} while (opcao === "S");

if (opcao === "N") {
    console.log("Programa encerrado!");
}