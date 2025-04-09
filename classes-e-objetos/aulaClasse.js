//CLASSES

    class Pessoa {
        nome;
        idade; 
        anoDeNascimento;

    //O constructor é chamado automaticamente ao criar uma nova pessoa.
    //Nesse exemplo, ele define os valores iniciais de 'nome' e 'idade', e calcula o ano de nascimento.
    constructor (nome, idade) { //parâmetros
            this.nome = nome;
            this.idade = idade; 
            this.anoDeNascimento = 2025 - idade; 
    }
        
        //Método
        descrever () {
            console.log(`Meu nome é ${this.nome} e a minha idade é ${this.idade}`);
        }
    }
//-------------------------------------------------------------------------------------------------
    //FUNÇÕES QUE RECEBEM OBJETOS

    function compararPessoas (primeiraPessoa, segundaPessoa) {

        if (primeiraPessoa.idade > segundaPessoa.idade) {
            console.log(`${primeiraPessoa.nome} é mais velha que ${segundaPessoa.nome}`);
        } else if (segundaPessoa.idade > primeiraPessoa.idade) {
            console.log(`${segundaPessoa.nome} é mais velha que ${primeiraPessoa.nome}`);
        } else {
            console.log(`As duas pessoas tem a mesma idade`);
        }

    }

    const amanda = new Pessoa('Amanda', 24);
    const yasmin = new Pessoa('Yasmin', 21);

    compararPessoas(amanda, yasmin);

    