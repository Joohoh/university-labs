/* 1. Criar um programa em JavaScript que, a partir do tipo do paciente,
calcule a dosagem de determinado medicamento e imprima a receita
informando a quantidade de gotas do medicamento e a dosagem em
mg que o paciente deve tomar.
Considere que o medicamento em questão possui 400 mg por ml, e
que cada ml corresponde a 14 gotas.
Deve ser lido o tipo do paciente e calcule a dosagem em mg e em
gotas.
Leve em consideração a tabela abaixo:
Tipo do Paciente Dosagem
1 - Bebê 600 mg
2 - Adolescente 1600 mg
3 - Adulto 4600 mg
4 - Idoso 2450 mg */

function calcularDosagemMedicamento(tipo){
   
    const gotasMg = 14 / 400;
    
    switch(tipo){

        case 1: return "Bebê 600mg - " + "Quantidade em ml: " 
        +  (gotasMg * 600).toFixed(0);
        case 2: return "Adolescente 1600 mg - " + " Quantidade em ml: " 
        + (gotasMg * 1600).toFixed(0); 
        case 3: return "Adulto 4600 mg - " + "Quantidade em ml: " 
        + (gotasMg * 4600).toFixed(0);
        case 4: return "Idoso 2450 mg - " + "Quantidade em ml: " 
        + (gotasMg * 2450).toFixed(0);
    }
}

const prompt = require("prompt-sync")();

let opcao = "S";

do{
    console.log("Qual o tipo do paciente? \n" + 
    "1 – Bebê 600 mg \n" +
    "2 – Adolescente 1600 mg \n" +
    "3 – Adulto 4600 mg \n" +
    "4 – Idoso 2450 mg"
    );

    const tipoPaciente = Number(prompt("Opção: "));

    console.log(`Paciente do tipo ${tipoPaciente} -> ${calcularDosagemMedicamento(tipoPaciente)}`);
    opcao = prompt("Deseja continuar? [S,N]: ").toUpperCase();

}while(opcao === "S");
    if(opcao === "N") return console.log("Programa encerrado");