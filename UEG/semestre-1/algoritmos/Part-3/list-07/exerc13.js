/* 13. Escreva um programa que leia várias coordenadas de um
ponto P(x,y), fornecido pelo usuário, o usuário deve dizer
quando para de ler os dados. O seu programa deverá
escrever “INTERIOR” se o ponto estiver dentro da região
formada pelas retas, como mostra a figura, ou “EXTERIOR”
caso contrário.*/

//ENTRADA
const prompt = require("prompt-sync")();

//PROCESSAMENTO (Se fosse quadrante)
/*function verificarCoordenadas(){
    let opcao = `S`;
    while(opcao === `S`){
        let pontoX = Number(prompt(`Digite o ponto x: `));
        let pontoY = Number(prompt(`Digite o ponto y: `));
        
        if((pontoX <= 15 && pontoX >= -15) && (pontoY <= 15 && pontoY >= -15)){
            console.log(`INTERIOR`);
        }else{
            console.log(`EXTERIOR`);
        }
         opcao = prompt(`Deseja continuar: [S | N]? `);
    }
    
}

//SAIDA
verificarCoordenadas();*/

//PROCESSAMENTO LOSANGO
function verificarCoord(){
    let opcao = `S`;
    while(opcao === `S`){
        let pontoX = Number(prompt(`Digite o ponto x: `));
        let pontoY = Number(prompt(`Digite o ponto y: `));
        
        if(Math.abs(pontoX + pontoY) <= Math.abs(15)){
            console.log(`INTERIOR`);
        }else{
            console.log(`EXTERIOR`);
        }
         opcao = prompt(`Deseja continuar: [S | N]? `);
    }
}

//SAIDA
verificarCoord();