/* 12. No dia da estréia do filme "Senhor dos Anéis” uma grande
emissora de TV realizou uma pesquisa logo após o
encerramento do filme. Cada espectador respondeu a um
questionário no qual constava sua idade e a sua opinião em
relação ao filme: excelente - 3; bom - 2; regular - 1. Criar um
algoritmo que receba a idade e a opinião de 20 espectadores,
calcule e imprima:
● a média das idades das pessoas que responderam
excelente;
● a quantidade de pessoas que responderam regular;
● a percentagem de pessoas que responderam bom entre
todos os espectadores analisados. */

//ENTRADA
const prompt = require("prompt-sync")();


//PROCESSAMENTO
function imprimirMedia(){
    let mediaIdade = 0;
    let porcentagem = 0;
    let quantidade = 0;
    let media = 0;

    for(let contador = 1; contador <= 6; contador++){
        let idade = Number(prompt(`Digite a idade: `));
        console.log(`Digite sua opnião sobre o filme: 1 - Regular | 2 - Bom | 3 - Excelente`);
        let opiniao = Number(prompt(`: `));
        
        switch(opiniao){
            case 1: quantidade ++;
            break;
            case 2: porcentagem ++;
            break;
            case 3: mediaIdade += idade; 
                    media++;
            break;

        }
    }
    porcentagem = (porcentagem * 100) / 20;
    mediaIdade = mediaIdade / media;
    
    console.log(`Média das idades das pessoas que responderam excelente: ${mediaIdade.toFixed(2)}`);
    console.log(`Quantidade de pessoas que responderam regular: ${quantidade}`);
    console.log(`Percentagem de pessoas que responderam bom entre todos os espectadores analisados: ${porcentagem.toFixed(2)} %`);

}

//SAIDA

imprimirMedia();