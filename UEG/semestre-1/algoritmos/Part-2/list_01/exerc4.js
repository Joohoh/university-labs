/* 4. Criar um algoritmo que leia a idade de uma pessoa e que mostre a
sua classe eleitoral:
● Não-eleitor (abaixo de 16 anos);
● Eleitor Obrigatório (entre 18 e 65 anos);
● Eleitor facultativo (entre 16 e 18 anos e maior de 65 anos).
Obs.: Usuário ideal - ele não irá digitar valores incorretos. */

function calcularClasseEleitoral(idade){
    
    //Opção 1 - Estrutura condicional simples
    if(idade < 16) return "O usuário é um Não-eleitor."; 
    
    if(idade >= 18 && idade <= 65) return "O usuário é um eleitor Obrigatório."
    
    if ((idade >= 16 && idade < 18) || idade > 65) return "O usuário é um eleitor facultativo."; 

    //Opção 2 - Estrutura condicional aninhadas
    // if(idade < 16) return "Não eleitor";
    // else if(idade < 18) return "Eleitor Facultativo";
    //      else if(idade <= 65) return "Eleitor Obrigatorio";
    //          else return "Eleitor Facultativo";
}

const prompt = require("prompt-sync")();

const idade = Number(prompt("Digite sua idade: "));

const resultado = calcularClasseEleitoral(idade);

console.log(`Pela idade de ${idade} anos -> ${resultado}`);