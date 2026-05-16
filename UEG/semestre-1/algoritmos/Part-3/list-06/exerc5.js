/* 5. Números capicuas, ou palíndromos, são números que permanecem os
mesmos quando lidos de trás para frente, como 33, 121, 5445 ou 82328. A
palavra, de origem catalã "cap i cua" (cabeça e cauda), refere-se a essa
simetria numérica. Eles são comuns em matemática recreativa e datas
calendárias, e existem infinitos números capicuas.Fazer um algoritmo que
dado um número inteiro positivo, calcule e escreva se este é ou não
capicua.*/

const prompt = require("prompt-sync")();

let numeroOriginal = Number(prompt("Digite um número inteiro positivo: "));

function verificarNumero(n) {

    let numeroTrabalhado = n; // 33
    let numeroInvertido = 0;

    while (numeroTrabalhado > 0) {
        let ultimoDigito = numeroTrabalhado % 10;  
        
        numeroInvertido = (numeroInvertido * 10) + ultimoDigito; 

        numeroTrabalhado = Math.floor(numeroTrabalhado / 10); 
    }

    return n === numeroInvertido;
}

if (verificarNumero(numeroOriginal)) {
    console.log(`O número ${numeroOriginal} é capicua.`);
} else {
    console.log(`O número ${numeroOriginal} não é capicua.`);
}