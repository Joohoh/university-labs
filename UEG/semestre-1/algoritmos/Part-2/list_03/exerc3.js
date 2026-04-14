/* 3. Uma locadora de filmes tem as seguintes regras para o aluguel
destes:
● Às segundas, terças e quintas (2,3 e 5) : desconto de 40% em
relação ao preço normal;
● Às quartas , sextas, sábados e domingos (4,6 ,7 e 1): preço
normal;
● Aluguel de fitas comuns: preço normal;
● Aluguel de lançamentos: acréscimo de 15% em relação ao preço
normal.
Desenvolver um programa para ler o preço normal do filme alugado
(em R$) e sua categoria (comum ou lançamento). Calcular e imprimir
o preço final que será pago pela locação do filme. */

function calcularAluguelFilme(precoBase, categoria, diaDaSemana){
    let precoAux = precoBase;

    switch(Number(diaDaSemana)){
        
        case 1: precoAux = precoBase;
        break;
        case 2: precoAux = precoBase * 0.60; 
        break;
        case 3: precoAux = precoBase * 0.60; 
        break;
        case 4: precoAux = precoBase;
        break; 
        case 5: precoAux = precoBase * 0.60; 
        break;
        case 6: precoAux = precoBase;
        break;
        case 7: precoAux = precoBase;
        break;

    }
        if(categoria === 2) {precoAux = precoAux * 1.15;} 
        return precoAux.toFixed(2)

}

const prompt = require("prompt-sync")();

let opcao = "S";

do{
    console.log("Qual o dia da semana em que o filme foi alugado? \n" + 
    "1 - Domingo;\n" +
    "2 - Segunda-feira;\n" +
    "3 - Terça-feira;\n" +
    "4 - Quarta-feira;\n" +
    "5 - Quinta-feira;\n" +
    "6 - Sexta-feira;\n" +
    "7 - Sábado"
    );

    const diaDaSemana = Number(prompt("Opção: "));
    const valorBaseDoFilme = Number(prompt("Digite o preço base do filme: "));
    const categoria = Number(prompt("O filme é: 1- Comum ou 2 - Lançamento? "));

    console.log(`Valor final do filme:  ${calcularAluguelFilme(valorBaseDoFilme, categoria, diaDaSemana)}`);
    opcao = prompt("Deseja continuar? [S,N]: ").toUpperCase();

}while(opcao === "S")
    if(opcao === "N") return console.log("Programa encerrado!");