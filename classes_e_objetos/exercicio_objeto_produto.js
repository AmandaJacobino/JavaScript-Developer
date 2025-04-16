/*  - Crie uma classe para representar produtos de uma loja.
    - Os produtos possuem um nome, um preço base e um desconto em porcentagem.
    - O desconto padrão deve ser 0.
    - Crie um getter chamado precoFinal que retorna o valor do produto com o desconto aplicado.
    - Crie um setter chamado desconto que atualiza o valor do desconto, mas só permite valores - entre 0 e 50. Caso contrário, exiba uma mensagem de erro e não altere o valor.
*/


class Produto {

    constructor (nome, precoBase, porcentagemDesconto = 0) {
        this.nome = nome;
        this._precoBase = precoBase;
        this._porcentagemDesconto = porcentagemDesconto;
        
    }

    //Calcula o preço final do produto:
    get precoFinal () {
        return this._precoBase * (1 - this._porcentagemDesconto / 100); 
    }

    //Verifica e aplica a nova porcentagem de desconto:
    set desconto (novaPorcentagem) {

        if (novaPorcentagem > 0 && novaPorcentagem <= 50) {
            this._porcentagemDesconto = novaPorcentagem;
        } 
        else {
            console.log(`ERRO: O desconto deve ser entre 0% e 50%`);
            return;
        }
    }


}

// Novo produto: Tenis
const tenis = new Produto('Tenis', 100);
tenis.desconto = 20; // Desconto aplicado
console.log(`O valor total é de R$${tenis.precoFinal.toFixed(2)}`); //R$80,00 

//Novo produto: Camiseta
const camiseta = new Produto('Camiseta', 50);
camiseta.desconto = 51; //Tenta aplicar um desconto inválido (não é aplicado)
//Exibe o preço sem desconto
console.log(`O valor total é de R$${camiseta.precoFinal.toFixed(2)}`); //R$50.00