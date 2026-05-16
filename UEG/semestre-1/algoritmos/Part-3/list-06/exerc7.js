/* 7. Fazer um algoritmo que imprima todos os números perfeitos entre 1 e
1000. Número perfeito é aquele cuja soma de seus divisores, exceto ele
próprio, é igual ao número.
Exemplo: 6 é um número perfeito porque 1 + 2 + 3 = 6. */

function ImprimirNumerosPerfeitos() {
    console.log(`Números perfeitos entre 1 e 1000:`);
    for (let numero = 1; numero <= 1000; numero++) {
        let somaDivisores = 0;
        for(let divisor = 1; divisor < numero; divisor++) {
            if (numero % divisor === 0) {
                somaDivisores += divisor;
            }
        }
        if (somaDivisores === numero) {
            console.log(numero);
        }
    }
}

ImprimirNumerosPerfeitos();