/* 11. Criar um algoritmo que receba a idade e o peso de 20
pessoas. Calcular e imprimir as médias dos pesos das
pessoas da mesma faixa etária. As faixas etárias são: de 1 a
10 anos, de 11 a 20 anos, de 21 a 30 anos e maiores de 30
anos. */

//ENTRADA
const prompt = require("prompt-sync")();

//PROCESSAMENTO
function imprimirMedia(){
    let media1 = 0;
    let media2 = 0;
    let media3 = 0;
    let media4 = 0;
    let quantidade1 = 0;
    let quantidade2 = 0;
    let quantidade3 = 0;
    let quantidade4 = 0;
    for(let contador = 1; contador <= 20; contador++){
        let idade = Number(prompt(`Digite a idade: `));
        let peso = Number(prompt(`Digite o peso: `));
        if(idade <= 10){
            media1 += peso;
            quantidade1++
        }else if(idade <= 20){
            media2 += peso;
            quantidade2++
        }else if(idade <= 30){
            media3 += peso;
            quantidade3++
        }else {
            media4 += peso;
            quantidade4++
        }
    }
        let resultado1 = media1 / quantidade1;
        let resultado2 = media2 / quantidade2;
        let resultado3 = media3 / quantidade3;
        let resultado4 = media4 / quantidade4;
        console.log(`Peso médio da na faixa de idade 1 a 10 anos: ${resultado1.toFixed(2)}`);
        console.log(`Peso médio da na faixa de idade 11 a 20 anos: ${resultado2.toFixed(2)}`);
        console.log(`Peso médio da na faixa de idade 21 a 30 anos: ${resultado3.toFixed(2)}`);
        console.log(`Peso médio da na faixa de idade maior de 30 anos: ${resultado4.toFixed(2)}`);
}

//SAIDA
imprimirMedia();