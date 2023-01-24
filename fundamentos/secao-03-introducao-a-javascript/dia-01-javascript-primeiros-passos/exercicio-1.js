// Exercicio-1

const a = 142;
const b = 78;

let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

// console.log(soma);
// console.log(subtracao);
// console.log(multiplicacao);
// console.log(divisao);
// console.log(modulo);

// exercicio-2
let number_a = 245;
let number_b = 384;
let higher_number;
if (number_a > number_b) {
  higher_number = number_a;
} else {
  higher_number = number_b;
}
// console.log(higher_number)

// Exercicio - 3

let number_1 = 263;
let number_2 = 151;
let number_3 = 841;
let maior_numero;
if (number_1 > number_2 && number_1 > number_3) {
  maior_numero = "numero 1 é maior";
} else if (number_2 > number_1 && number_2 > number_3) {
  maior_numero = "numero 2 é maios";
} else if (number_3 > number_1 && number_3 > number_2) {
  maior_numero = "numero 3 é maior";
} else {
  maior_numero = "os números são iguais";
}

// console.log(maior_numero);

// exercicio - 4

let pessoa = "agasalhou";
let doente;
if (pessoa == "frio" || pessoa == "chuva") {
  doente = "positivo";
} else {
  doente = "negativo";
}
// console.log(doente)

let lado_a = 35;
let lado_b = "34";
let lado_c = "35";
let triangulo;
if (lado_a == lado_b && lado_a == lado_c) {
  triangulo = "Triângulo válido";
} else {
  triangulo = "triângulo inválido";
}
// console.log(triangulo);

// exercicio - 5

let peca_xadrez = "";
let movimento;

switch (peca_xadrez.toLowerCase()) {
  case "peao":
    movimento =
      "Peões se movem somente para frente, uma casa por vez. Um exceção é a primeira vez que um peão é movido, quando ele pode se mover duas casas.";
    break;
  case "bispo":
    movimento =
      "O bispo se move em uma linha reta diagonalmente no tabuleiro. Ele pode mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça.";
    break;
  case "torre":
    movimento =
      "A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça.";
    break;
  case "cavalo":
    movimento =
      "O cavalo é a única peça do tabuleiro que pode pular sobre outras peças. O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto.";
    break;
  case "rainha":
    movimento =
      "Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente";
    break;
  case "rei":
    movimento =
      "O rei pode se mover para qualquer casa adjacente. Assim, ele pode mover-se uma casa em qualquer direção";
    break;
  default:
    movimento = "peça inválida";
}
//  console.log(movimento);

//   exerciocio - 6
const um = 15;
const dois = 2;
const tres = 40;
if (um % dois == 0 || tres % um == 0) {
  console.log("verdadeiro");
} else {
  // console.log ("falso");
}

// exercicios - 7

//  exercicios - 8
let salario_bruto = 4500.0;
let inss;
let ir;
let salario_liquido;

if (salario_bruto <= 1556.94) {
  inss = (salario_bruto * 8) / 100;
} else if (salario_bruto > 1556.94 && salario_bruto <= 2594.92) {
  inss = (salario_bruto * 9) / 100;
} else if (salario_bruto > 2594.93 && salario_bruto <= 5189.82) {
  inss = (salario_bruto * 11) / 100;
} else {
  inss = 570.88;
}

if (salario_bruto <= 1903.98) {
  ir = "Isento do imposto de renda";
} else if (salario_bruto > 1903.99 && salario_bruto <= 2826.65) {
  ir = (salario_bruto * 7.5) / 100 - 142.8;
} else if (salario_bruto > 2826.66 && salario_bruto <= 3751.05) {
  ir = (salario_bruto * 15) / 100 - 354.8;
} else if (salario_bruto > 3751.06 && salario_bruto <= 4664.68) {
  ir = (salario_bruto * 22.5) / 100 - 636.13;
} else {
  ir = (salario_bruto * 27.5) / 100 - 869.36;
}

//  console.log(ir +" renda");
//  console.log(inss + " inss");
//  console.log (salario_bruto - ir - inss);
