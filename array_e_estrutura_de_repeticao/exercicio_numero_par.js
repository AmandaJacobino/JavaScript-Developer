// 2 - Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado. 

const listaNumerica = [2, 5, 6, 7, 8, 12, 45, 13, 1, 0, 7, 10];


for (let i = 0; i < listaNumerica.length; i++) {
    let numeroPar = listaNumerica[i]
    if (numeroPar % 2 === 0) {
        console.log(`${numeroPar}`);
    } 
}