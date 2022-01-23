//UMA VARIAVEL É UM "ARMAZENAMENTO NOMEADO" PARA DADOS;
//PARA CRIAR UMA VARIÁVEL EM JAVASCRIPT, USE A PALAVRA-CHAVE LET:

let mensagem;
mensagem = 'Olá';

let mensagem = 'Olá';

alert(mensagem);

let usuario = "paulo", idade = 25, mensagem = 'Olá';

/*Em scripts mais antigos, você também pode encontrar outra
palavra-chave "var" em vez de "let":*/

 var mensagem = 'olá';

 let mensagem;
 mensagem = 'olá';
 mensagem = 'mundo';

let ola = 'Olá mundo!';
let mensagem;
mensagem = ola;

//Nomenclatura de Variavel
//O nome deve conter apenas letras, dígitos ou os simbolos $ e _
//O primeiro Caractere não deve ser um dígito;

//Exemplos de nomes válidos:
let NomeUsuário;
let Teste123;

//Exemplos de nomes inválidos:
let 1a; // Não pode iniciar com um número
leu meu-Nome; // Hífens não são permitidos

//Sensível a capitalização
//Variáveis nomeadas fruta e Fruta são duas variáveis diferentes:

let fruta = 'uva';
let Fruta = 'laranja';

console.log(fruta); //Exibe 'uva'
console.log(Fruta); //Exibe 'laranja'

//Resumo Variáveis
//let - é uma declaração de variável moderna;
//var - é uma declaração de variável antiga;
/*const - é semelhante let, mas o valor da variável 
não pode ser alterado;*/