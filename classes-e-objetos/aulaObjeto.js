//-OBJETOS-

//Um objeto funciona através de chave - valor:

const pessoa = {
/*Chave ->*/ nome: 'Amanda S Jacobino', /*<-valor*/
/*Chave ->*/ idade: 23, /*<-valor*/

//Os objetos também podem conter funções que serão chamadas de métodos: 
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
}

//É possível acessar o objeto diretamente e sobre-escrever o valor de uma função: 
pessoa.descrever = function () {
    console.log(`Meu nome é ${this.nome}`);
}

//Invocando o objeto: 
pessoa.descrever();


