/*Elabore um algoritmo que controle o acesso a um sistema com base no cargo do usuário, na senha e no horário de acesso. O sistema deve seguir as seguintes regras:

Diretor: Possui acesso irrestrito e não precisa inserir senha ou verificar horário.

Gerente: Precisa inserir uma senha correta para obter acesso.

Funcionário: Só pode acessar entre 6h e 18h. Caso tente acessar fora desse horário, o acesso será negado.*/

function liberarAcesso (quemEstaAcessando, senhaCorreta, horario) {

    quemEstaAcessando = quemEstaAcessando.toLowerCase();

    if (quemEstaAcessando.toLowerCase() === 'diretor'){ //Diretor
        return ('Acesso aprovado');
    }
    else if (quemEstaAcessando.toLowerCase() === 'gerente') { //Gerente
            let entradaSenha = prompt('Digite a senha: ');
            if (Number(entradaSenha) === senhaCorreta){
                return ('Acesso aprovado');
            } else {
                return ('Acesso negado. Senha incorreta');
            }
    
    }
    else if (quemEstaAcessando.toLowerCase() === 'funcionario') { //Funcionário
            if (horario < 6 || horario > 18) {
                return ('Acesso negado. Horário indisponível');
            } else {
                return ('Acesso aprovado');
            }
    }
}

//Main
(function () {
   console.log(liberarAcesso('Diretor', 123, 9));
}
)(); 








