/* 8. Um posto de combustível vende três tipos de combustível : álcool,
diesel e gasolina. O preço por litro de combustível é apresentado na
tabela a seguir. Faça um algoritmo que leia uma opção que representa
o tipo de combustível comprado (1, 2 ou 3) e a quantidade em litros. O
programa deve imprimir o valor em reais a ser pago pelo combustível.

Combustível Preço por Litro
1 – Álcool R$ 4,805
2 – Diesel R$ 5,953
3 – Gasolina R$ 6,565 */

function calcularValorCombustivel(tipoCombustivel, quantidadeLitros){
    
    // if(tipoCombustivel === 1) return "O valor em litros do Álcool é de: R$ " + quantidadeLitros * 4.805;
    // if(tipoCombustivel === 2) return "O valor em litros do Diesel é de: R$ " + quantidadeLitros * 5.953;
    // if(tipoCombustivel === 3) return "O valor em litros da Gasolina é de: R$ " + quantidadeLitros * 6.565;

    if(tipoCombustivel === 1) return "O valor em litros do Álcool é de: R$ " + quantidadeLitros * 4.805;
    else if(tipoCombustivel === 2) return "O valor em litros do Diesel é de: R$ " + quantidadeLitros * 5.953;
        else return "O valor em litros da Gasolina é de: R$ " + quantidadeLitros * 6.565;

    // switch(tipoCombustivel){
    //     case 1: return "O valor em litros do Álcool é de: R$ " + quantidadeLitros * 4.805;
    //     case 2: return "O valor em litros do Diesel é de: R$ " + quantidadeLitros * 5.953;
    //     case 3: return "O valor em litros da Gasolina é de: R$ " + quantidadeLitros * 6.565;
    // }
}

const prompt = require("prompt-sync")();

console.log("Escolha o tipo de combustível: \n" + 
    "1 - Álcool; \n" +
    "2 - Diesel; \n" +
    "3 - Gasolina;"
)
const tipoCombustivel = Number(prompt("Opção: "));
const quantidadeLitros = Number(prompt("Digite a quantidade de litros: "));

const resultado = calcularValorCombustivel(tipoCombustivel, quantidadeLitros);

console.log(`${resultado}`);