// Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:

	const a =15;
	const  b =35;
	const operador = "+";

	console.log(a + b);
	console.log(a - b);
	console.log(a * b);
	console.log(a / b);
	console.log(a % b);

	// Melhorando o código

	if (operador === "+") {
		console.log(a + b);
	}
	else if (operador === "-") {
		console.log(a - b);
	}
	else if (operador === "*") {
		console.log(a *b);
	}
	else if (operador === "/") {
		console.log(a / b);
	}
	else if (operador === "%") {
		console.log(a % b);
	}
	else {
		console.log("Operador desconhecido!")
	}


// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.
	const valorA = 256;
	const valorB = 256;
	let maiorValor = ""
	if (valorA > valorB) {
		maiorValor = "Valor A é maior que o valor B!"
		// console.log("Valor A é maior que o valor B!");
	}
	else if (valorA < valorB) {
		maiorValor = "Valor B é maior que o valor A!"
		// console.log("Valor B é maior que o valor A!");
	}
	else {
		maiorValor = "Os valores A e B são iguais"
		// console.log("Os valores A e B são iguais");
	}
	console.log(maiorValor);


// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.
	const valor_A = 345;
	const valor_B = 345;
	const valor_C = 345;
	let maior_valor = "";

	if (valor_A > valor_B && valor_A > valor_C) {
		maior_valor = "Valor A é o mair valor!";
		// console.log("Valor A é o mair valor!");
	}
	else if (valor_B > valor_A && valor_B > valor_C) {
		maior_valor = "Valor B é o maior valor!";
		// console.log("Valor B é o maior valor!");
	}
	else if (valor_C > valor_A && valor_C > valor_B) {
		maior_valor = "Valor C é o maior valor!";
		// console.log("Valor C é o maior valor!");
	}
	else {
		maior_valor = "Os valores são iguais!";
		// console.log("Os valores são iguais!");
	}
	console.log(maior_valor);


// Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
	const valor = -1;
	let comparacao = "";
	if (valor < 0) {
		comparacao = "Negative";
	}
	else if (valor > 0) {
		comparacao = "Positive";
	}
	else {
		comparacao = "Zero";
	}
	console.log(comparacao);


// 🚀 Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

	const ab = -50;
	const ac = 60;
	const bc = 80;
	if (ab + ac + bc === 180) {
		console.log("Triângulo válido!")
	}
	else  {
		console.log("Triângulo inválido!")
	}

	if ( ab < 0) {
		console.log("Ângulo ab inválido!");
	}
	else if (ac < 0) {
		console.log("Ângulo ac inválido!");
	}
	else if (bc < 0) {
		console.log("Ângulo bc inválido!");
	}
	else {
			
	}


// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)
const peca = "CAVALO";

switch (peca.toLowerCase()){
	case "rei":
		console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez");
	break
	case "dama":
		console.log("Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.");
	break
	case "torre":
		console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
	break
	case "bispo":
		console.log("Move-se na diagonal, quantas casas quiser.")
	break
	case "cavalo":
		console.log("O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante");
	break
	case "peão":
		console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.");
	break
	default: 
	console.log("Peça inválida!");
}


// Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B

// Porcentagem >= 70 -> C

// Porcentagem >= 60 -> D

// Porcentagem >= 50 -> E

// Porcentagem < 50 -> F

// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
	let notaRecebida = 80;
	if (notaRecebida >= 90) {
		console.log("A");
	}
	else if (notaRecebida >= 80) {
		console.log("B");
	}
	else if (notaRecebida >= 70) {
		console.log("C");
	}
	else if (notaRecebida >= 60) {
		console.log("D");
	}
	else if (notaRecebida >= 50) {
		console.log("E");
	}
	else if (notaRecebida < 50) {
		console.log("F");
	}
	else if (notaRecebida > 100) {
		console.log("Nota inválida,maior que o valor máximo!");
	}
	else {
		console.log("Nota inválida,nota negativa!");
	}


// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

	const valor_1 = 87;
	const valor_2 = 54;
	const valor_3 = 43;
	if (valor_1 % 2 === 0 || valor_2 % 2 === 0 || valor_3 % 2 === 0){
		console.log("True");
	}
	else {
		console.log("False");
	}


// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.
	const valor1 = 54;
	const valor2 = 87;
	const valor3 = 54;
	if (valor1 % 2 !== 0 || valor2 % 2 !== 0 || valor3 % 2 !== 0){
		console.log("True");
	}
	else {
		console.log("False");
	}


// Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.

// Seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

// valorCustoTotal = valorCusto + impostoSobreOCusto;
// lucro = valorVenda - valorCustoTotal (lucro de um produto);
	const custo = 80;
	const valorVenda = 100;
	
	if (custo >=0 && valorVenda >= 0) {
		const valorTotalCusto = (custo * 0.2) + custo;
		const lucroTotal = (valorVenda - valorTotalCusto) * 1000;
		console.log(lucroTotal);
	}
	else {
		console.log("Valores inválidos");
	}


// 	Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

// INSS (Instituto Nacional do Seguro Social)

// Salário bruto até R$ 1.556,94: alíquota de 8%

// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// IR (Imposto de Renda)

// Até R$ 1.903,98: isento de imposto de renda

// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

// Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

// Resultado: R$ 2.612,55.

	const salarioBruto = 2500.00;
	let salarioMenosInss = 0;
	let ir = 0;
	

	if (salarioBruto < 1556.94) {
		salarioMenosInss = salarioBruto - (salarioBruto * 8) / 100; 
	}
	else if (salarioBruto >= 1556.95 && salarioBruto < 2594.92) {
		salarioMenosInss = salarioBruto - (salarioBruto * 9) / 100;
	}
	else if (salarioBruto >= 2594.93 && salarioBruto < 5189.82) {
		salarioMenosInss = salarioBruto - (salarioBruto * 11) / 100;
	}
	else{
		salarioMenosInss = 570.88
	}

	
	if (salarioMenosInss < 1903.98) {
		ir = "Isento de imposto de renda!"
	}
	else if (salarioMenosInss >= 1903.98 && salarioMenosInss < 2826.65) {
		ir = (salarioMenosInss * 7.5) / 100 + 142.80;
	}
	else if (salarioMenosInss >= 2826.66 && salarioMenosInss < 3751.05) {
		ir = (salarioMenosInss * 15) / 100 + 354.80;
	}
	else if (salarioMenosInss >= 3751.06 && salarioMenosInss < 4664.68) {
		ir = (salarioMenosInss * 22.5) / 100 + 636.13;
	}
	else {
		ir = (salarioMenosInss * 27.5) / 100 + 869.36;
	}

	let salarioLiquido = salarioMenosInss - ir;
	console.log(`Sálario liquido:${salarioLiquido}`);

