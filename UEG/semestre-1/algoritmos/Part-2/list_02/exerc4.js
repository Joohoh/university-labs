/* 4. Fazer um algoritmo que converta uma determinada quantia em Reais
para uma das seguintes moedas de acordo com a opção do usuário:

Moeda Preço por Litro
1 – Euro R$ 5,418
2 – Libra Esterlina R$ 6,336
3 – Dólar R$ 5,189 */ 

function calcularMoeda (real, moeda){
    
    switch(real, moeda){
        case 1: return "A conversão de Real para Euro é de: R$ " + (real * 5.418).toFixed(2);
        case 2: return "A conversão de Real para Libra é de: R$ " +(real * 6.336).toFixed(2);
        case 3: return "A conversão de Real para Dolar é de: R$ " + (real * 5.189).toFixed(2);
    }
}

const prompt = require("prompt-sync")();

const valorEmReal = Number(prompt("Digite o valor em reais: R$ "));

console.log("Escolha a moeda para conversão: \n" + 
    "1 – Euro R$ 5,418; \n" +
    "2 – Libra Esterlina R$ 6,336; \n" +
    "3 – Dólar R$ 5,189"
);

const tipoMoeda = Number(prompt("Opção: "));

console.log(`Sendo R$ ${valorEmReal} -> ${calcularMoeda(valorEmReal, tipoMoeda)}`);
