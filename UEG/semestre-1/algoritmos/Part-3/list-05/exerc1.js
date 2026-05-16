/* Fazer um programa para calcular e escrever o valor do número π, com
precisão de 0,0001, usando a série:

pi = 4 - 4/3 + 4/5 - 4/7 + 4/9 - 4/11 + ...

Para obter a precisão desejada, adicionar apenas os termos cujo valor
absoluto seja maior ou igual a 0,0001. */

// QUESTÃO FEITA COM O AUXÍLIO DE IA.
// A série de Leibniz para π é uma maneira simples de aproximar o valor de π usando uma série infinita.
// Acumulação de valores em uma variável (pi) e controle do fluxo usando um laço while para garantir a precisão desejada.

function calcularPi() {
    let pi = 0;             // Essa é a nossa "sacola" numérica (acumulador)
    let numerador = 4;
    let denominador = 1;
    let termo = 4;          // Começamos com o primeiro termo (4/1)
    let sinal = 1;          // 1 para somar, -1 para subtrair

    // O laço continua enquanto o valor do termo for importante (>= 0.0001)
    while (termo >= 0.0001) {
        // 1. Calcula o valor do termo atual
        termo = numerador / denominador;

        // 2. Adiciona ou subtrai do valor total de PI
        pi += sinal * termo;

        // 3. Prepara para a próxima volta:
        denominador += 2;   // Denominador pula de 2 em 2 (1, 3, 5, 7...)
        sinal *= -1;        // Inverte o sinal (se era 1 vira -1, se era -1 vira 1)
    }

    console.log(`O valor aproximado de PI é: ${pi.toFixed(5)}`);
}

calcularPi();