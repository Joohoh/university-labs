/* 4. Fazer um programa que leia os dados de um usuário de telefonia de
uma empresa de telecomunicações: bairro e número completo do
telefone e verifique se o número do telefone (Exemplo:32121212) está
correto, ou seja, se o prefixo (4 primeiros dígitos) é correspondente ao
bairro especificado. Sabendo-se que os prefixos existem nos bairros
conforme a tabela a seguir:

Bairro Prefixos
Oeste 3223, 3225, 3212,
Centro 3223, 3224, 3212,
Sul 3241, 3242, 3243, 3281
Bueno 3251, 3285
Campinas 3233, 3291 */

function verificarTelefone(bairro, telefone) {

    let prefixo = Math.trunc(telefone / 10000);

    if (bairro === "OESTE") return (prefixo === 3223 || prefixo === 3225 || prefixo === 3212); 
    else if (bairro === "CENTRO") return (prefixo === 3223 || prefixo === 3224 || prefixo === 3212);
        else if (bairro === "SUL") return (prefixo === 3241 || prefixo === 3242 || prefixo === 3243 || prefixo === 3281);
            else if (bairro === "BUENO")  return (prefixo === 3251 || prefixo === 3285);
                else if (bairro === "CAMPINAS") return (prefixo === 3233 || prefixo === 3291);
                    else return "Bairro não reconhecido";
    
}

const prompt = require("prompt-sync")();

let opcao = "S";

do{
    let bairro = prompt(`Digite o bairro: `).toLocaleUpperCase();
    let telefone = Number(prompt(`Digite o número do telefone: `));

    console.log(`Bairro: ${bairro} - Telefone: ${telefone}`);
    if (verificarTelefone(bairro, telefone) === true) console.log(`Número de telefone válido para o bairro informado.`);
    else if (verificarTelefone(bairro, telefone) === false) console.log(`Número de telefone inválido para o bairro informado.`);
    else console.log(verificarTelefone(bairro, telefone));

    opcao = prompt(`\nDeseja continuar? [S/N]: `).toUpperCase();

}while (opcao === "S");

if (opcao === "N") {
    console.log("Programa encerrado!");
}