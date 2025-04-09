/* 
    1 - Crie uma classe para representar carros. 
      - Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetros rodado. 
      - Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso. 
*/

class Carro {

    //Atributos do carro
    marca;
    cor;
    combustivelPorKm;
    

    constructor (marca, cor, combustivelPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.combustivelPorKm = combustivelPorKm;
    }

    //Método
    calcularCustoDoPercurso (distanciaEmKm, precoDoCombustivel) {
        return (distanciaEmKm * this.combustivelPorKm) * precoDoCombustivel;
    }
}

//Objeto carro
const palio = new Carro ('Fiat', 'Preto', 1/11);

//Custo da viagem
const custo = palio.calcularCustoDoPercurso(50, 5.50);

console.log(`O custo médio de combustível é R$${custo.toFixed(2)}`); //Saída: R$25,00