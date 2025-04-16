//ACESSO DINÂMICO A PROPRIEDADES DE UM OBJETO

//Criando um objeto:
const pessoa = {
    nome: 'Amanda S Jacobino',
    idade: 23,
    cidade: 'São Paulo'
  };
  
  //Forma comum de acessar as propriedades (acesso direto):
  console.log(pessoa.nome);   // Amanda S Jacobino
  console.log(pessoa.idade);  // 23
  
  //----------------------------------------------------
  //Forma dinâmica de acessar propriedades:
  
  // Suponha que você tem uma variável com o nome da chave que quer acessar:
  const chave = 'cidade';
  
  // Podemos usar colchetes [] para acessar dinamicamente a propriedade:
  console.log(pessoa[chave]); // São Paulo
  
  /* Isso é útil quando:
     - Você não sabe qual chave será acessada (ex: resposta do usuário)
     - As chaves vêm de um formulário, array ou API
  */
  
  // Outro exemplo: acessando várias chaves com base em um array
  const campos = ['nome', 'idade', 'cidade'];
  
  for (let i = 0; i < campos.length; i++) {
    console.log(`${campos[i]}: ${pessoa[campos[i]]}`);
  }
  
  // Resultado:
  // nome: Amanda S Jacobino
  // idade: 23
  // cidade: São Paulo
  
  //----------------------------------------------------
  //ATENÇÃO: Usar ponto (.) com uma variável não funciona:
  const campo = 'idade';
  
  console.log(pessoa.campo);      // undefined ❌ Isso não funciona porque o JS vai procurar uma chave literal chamada "campo", e não o valor que a variável campo guarda.
  
  console.log(pessoa[campo]);     // 23 ✅ (busca o valor da variável "campo")
  