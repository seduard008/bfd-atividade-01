// script de verificação de idade
// importa a biblioteca para leitura de entrada do usuário
import { questionInt } from 'readline-sync';

// pergunta a idade do usuário e armazena a resposta
const idade = questionInt("Qual a sua idade? ");

// verifica se a idade é maior ou igual a 18
if (idade >= 18) {
    console.log("Acesso permitido. Seja bem-vindo!");
} else {
    console.log("Acesso negado. Você precisa ser maior de 18 anos.");
}