const numero = 2; 

//Aqui a varivael recebe o resultado do calculo
const isNumeroPar = (numero % 2) === 0; 
/*Quando a variavel for tipo booleano, colocar 'is' como prefixo */ 

//Passando a variavel fica mais fácil entender a condicional do que passando o calculo: 

if (isNumeroPar) {            //  if ((numero % 2) === 0) {
    console.log('Par');       //       console.log('Par');
} else {                      // } else {
    console.log('Impar');     //      console.log('Impar');
}                             // }
                            
    

    

