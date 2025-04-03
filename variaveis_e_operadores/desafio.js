/*Faça um programa para calcular o valor de uma viagem. 

Você terá 3 variais, sendo elas: 
1 - Preço do combustível; 
2 - Gasto médio do combustível do carro por km;
3 - Distância em km da viagem; 

Imprima no console o valor que será gasto para realizar a viagem.*/ 

const precoCombustivel = 5.79; 
const kmPorLitro = 12; 
const distanciaEmKm = 1651; 

//Calcula o consumo 
const litrosConsumidos = distanciaEmKm / kmPorLitro;
//Calcula o valor gasto 
const valorGasto = litrosConsumidos * precoCombustivel;

//Saída
console.log(valorGasto.toFixed(2));



