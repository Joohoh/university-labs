/* 5. Dados quatro números distintos, desenvolver um programa que
determine e imprima a soma dos três menores. */

function somarTresMenores(n1, n2, n3, n4) {
    let maior = n1;

    if (n2 > maior) {
        maior = n2;
    }
    if (n3 > maior) {
        maior = n3;
    }
    if (n4 > maior) {
        maior = n4;
    }


    const somaTotal = n1 + n2 + n3 + n4;
    const resultado = somaTotal - maior;

    return resultado;
}

const prompt = require("prompt-sync")();

let opcao = "S";

do{
    const num1 = Number(prompt("Digite o primeiro número: "));
    const num2 = Number(prompt("Digite o segundo número: "));
    const num3 = Number(prompt("Digite o terceiro número: "));
    const num4 = Number(prompt("Digite o quarto número: "));

    const somaFinal = somarTresMenores(num1, num2, num3, num4);

    console.log(`Os números são: ${num1}, ${num2}, ${num3}, ${num4}`);
    console.log(`A soma dos três menores é: ${somaFinal}`);

    opcao = prompt("Deseja continuar? [S/N]: ").toUpperCase();

}while(opcao === "S")
    if(opcao === "N") return console.log("Programa encerrado!");