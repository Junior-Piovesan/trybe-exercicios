// Parte - 1;

function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log("Idade dentro do for:", idade);
  }
}
imprimeIdade();

// 🚀 Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;
// Copie o código abaixo e rode-o para verificar sua saída:

// Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
const pessoa = {
  nome: "Henri",
  idade: 20,
};
const pessoa2 = {
  nome: "Luna",
  idade: 19,
}; // Altere essa estrutura para corrigir o erro.
console.log(`Nome ${pessoa.nome}
Idade ${pessoa.idade}`);
console.log(`Nome ${pessoa2.nome}
Idade ${pessoa2.idade}`);

// 🚀 Modifique a variável para que não ocorra Erro;
// Copie o código abaixo e rode-o para verificar sua saída:

let favoriteFood = "Lasanha";
favoriteFood = "Hamburguer";
console.log(favoriteFood);



// 🚀 Modifique as concatenações para template literals.

// Copie o código abaixo:

const firstName = 'Adriana';
const lastName = 'Soares';
console.log(`Olá, ${firstName} ${lastName}!`);
// console.log('Olá' + ',' + name + ' ' + lastName + '!');

function soma(a,b) {
 let resultado = a + b;
  return resultado;
}
 

let a = 3;
let b = 5;

console.log(`O resultado da soma de ${a} + ${b} é ${soma(3,5)}`);
console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));

// 🚀 Modifique a estrutura das funções a seguir para que elas sejam arrow functions;

// 🚀 Transforme a função numeroAleatorio em uma arrow function;
// Copie o código abaixo:

function numeroAleatorio() {
    return Math.random()
  }
  console.log(numeroAleatorio());

  let numeroAleatorio = numero => numero + 8;
  console.log(numeroAleatorio(7));


// 🚀 Transforme a função hello em uma arrow function;
// Copie o código abaixo:

function hello(nome) {
    return `Olá, ${nome}!`
  }
  let nome = 'Ivan';
  console.log(hello(nome));

  const hello = nome => `Olá  ${nome}!`;
  console.log(hello("Ivan"));


// 🚀 Transforme a função nomeCompleto em uma arrow function;
// Copie o código abaixo:


function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
  }
  let nome = 'Ivan';
  let sobrenome = 'Pires';
  console.log(nomeCompleto(nome, sobrenome));

  const nomeCompleto = (nome,sobrenome) => `${nome} ${sobrenome}`;
  console.log(nomeCompleto('Junior', 'Piovesan'))


// 🚀 Altere a expressão if/else utilizando ternary operator;

// Copie o código abaixo:

let speed = 90;
const speedCar = (speed) => speed >= 121 ? "Você ultrapassou o limite de velocidade!" : "Você está na velocidad permitida!"
                         {
  if (speed >= 120) {
    return `Você ultrapassou o limite de velocidade`;
  } else {
    return `Você está na velocidade permitida`;
  }
};
console.log(speedCar(120));

