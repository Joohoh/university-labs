    /* Criar um algoritmo que imprima os N primeiros termos da série de
    Fibonacci.
    Observação: os dois primeiros termos desta série são 1 e 1 e os
    demais são gera- dos a partir da soma dos anteriores. Exemplos:
    ● 1 + 1 -> 2 terceiro termo;
    ● m 1 + 2-> 3 quarto termo etc. */

    const prompt = require('prompt-sync')();

    // ENTRADA
    const numero = Number(prompt('Digite o número de termos da série de Fibonacci: '));

    // PROCESSAMENTO
    function calcularFibonacci(numero) {
        let a = 1, b = 1;
        let resultado = ""; 

    for(let valor = 1; valor <= numero; valor++) {
        let pontuacao;
    
        if (valor === numero) {pontuacao = "";}   
        else {pontuacao = ", ";}

        resultado += a + pontuacao; // + (valor === numero ? "" : ", "); -> Simplificação de if-else para adicionar a vírgula apenas entre os números, sem deixar uma vírgula no final da sequência.
        
        let proximo = a + b;
        a = b;
        b = proximo;
    }
    console.log(resultado);
    }

    // SAÍDA
    calcularFibonacci(numero);