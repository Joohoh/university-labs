/* Fazer um algoritmo que imprima todas as tabuadas de adicionar de 1 a 9.*/

function verificarTabuada(){
    let soma = 0;
    let numero = 1;

    for(valor = 1; valor < 10; valor++) {
        soma = numero + valor;
        for(numero = 1; numero < 10; numero++) {
             soma = numero + valor;
             console.log(`Soma de ${valor} + ${numero} = ${soma}`);
        }
        console.log(`\n`);
        console.log(`-----------------------------`);
  /*  console.log(`Soma de ${valor} + ${numero} = ${soma}`);
        if(valor === 9){
            valor = 0;
            numero += 1;
            console.log(`\n`);
            console.log(`-----------------------------`);
        } */
            
    } 
    
}
console.log(`\n------TABUADA DE 1 AO 9------\n`)
verificarTabuada();