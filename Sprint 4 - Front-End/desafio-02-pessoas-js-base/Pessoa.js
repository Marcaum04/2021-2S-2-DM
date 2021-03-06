// Declarar uma variável qualquer, que receba um objeto vazio.
var pessoa = new Object;

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

    pessoa.nome = 'Marcos',
    pessoa.sobrenome = 'Vinícius',
    pessoa.sexo = 'Masculino',
    pessoa.idade = 17,
    pessoa.altura = 1.73,
    pessoa.peso = 62.5,
    pessoa.andando = false,
    pessoa.caminhouQuantosMetros = 0

    

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
pessoa.fazerAniversario = function fazerAniversario() {
    pessoa.idade++;
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro"
*/
pessoa.andar = function andar(caminhado) {
    pessoa.caminhouQuantosMetros += caminhado;
    pessoa.andando = true;
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = function parar() {
    pessoa.andando = false;
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoa.nomeCompleto = function nomeCompleto() {
    return `Olá! Meu nome é ${pessoa.nome} ${pessoa.sobrenome}`;
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
pessoa.mostrarIdade = function mostrarIdade() {
    return `Olá, eu tenho ${pessoa.idade} anos!`;
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.mostrarPeso = function mostrarPeso() {
    return `Eu peso ${pessoa.peso}Kg`;
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
pessoa.mostrarAltura = function mostrarAltura() {
    return `Minha altura é ${pessoa.altura}m`;
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.nomeCompleto()) // Olá! Meu nome é Marcos Vinícius

/*
Qual a idade da pessoa (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.mostrarIdade()) // Olá, eu tenho 17 anos!

/*
Qual o peso da pessoa (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.mostrarPeso()) // Eu peso 62.5Kg

/*
Qual a altura da pessoa (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.mostrarAltura()) // Minha altura é 1.73m

/*
Faça a `pessoa` fazer 3 aniversários.
*/
var x 
for (x = 0; x < 3; x++) {
    pessoa.fazerAniversario();
}

/*
Quantos anos a `pessoa` tem agora (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
console.log(pessoa.mostrarIdade()) // Olá, eu tenho 20 anos!

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
pessoa.andar(30);
pessoa.andar(18);
pessoa.andar(22);

/*
A pessoa ainda está andando (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.andando) // true(andando)

/*
Se a pessoa ainda está andando, faça-a parar.
*/
pessoa.parar();

/*
E agora: a pessoa ainda está andando (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(pessoa.andando) // false(parado)

/*
Quantos metros a pessoa andou (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(pessoa.caminhouQuantosMetros) //70

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"
Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o"
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
let homemAnos = `Olá, eu sou o ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} anos, ${pessoa.altura}, meu peso é ${pessoa.peso} e, só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} metros!`;

let homemAno = `Olá, eu sou o ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ano, ${pessoa.altura}, meu peso é ${pessoa.peso} e, só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} metros!`;

let mulherAnos = `Olá, eu sou a ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} anos, ${pessoa.altura}, meu peso é ${pessoa.peso} e, só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} metros!`;

let mulherAno = `Olá, eu sou a ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ano, ${pessoa.altura}, meu peso é ${pessoa.peso} e, só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} metros!`;

pessoa.apresentacao = function apresentacao() { 
    if(pessoa.sexo == "Masculino" && pessoa.idade == 1){
        return homemAno;
    }else if(pessoa.sexo == "Masculino"){
        return homemAnos;
    }else if(pessoa.sexo == "Feminino" && pessoa.idade == 1){
        return mulherAno
    }else{
        return mulherAnos
    }
}
// Agora, apresente-se )
console.log(pessoa.apresentacao()) // Olá, eu sou o Marcos Vinícius, tenho 20 anos, 1.73, meu peso é 62.5 e, só hoje, eu já caminhei 70 metros!