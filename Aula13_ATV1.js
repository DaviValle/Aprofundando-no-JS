
let x = 15;
let y = 4;

console.log("=== OPERADORES ARITMÉTICOS ===");
console.log(`x = ${x}, y = ${y}`);

let soma = x + y;
let subtracao = x - y;
let multiplicacao = x * y;
let divisao = x / y;
let resto = x % y;
let exponenciacao = x ** y;

console.log(`Soma: ${x} + ${y} = ${soma}`);
console.log(`Subtração: ${x} - ${y} = ${subtracao}`);
console.log(`Multiplicação: ${x} * ${y} = ${multiplicacao}`);
console.log(`Divisão: ${x} / ${y} = ${divisao}`);
console.log(`Resto: ${x} % ${y} = ${resto}`);
console.log(`Exponenciação: ${x} ** ${y} = ${exponenciacao}`);

console.log("\n=== OPERADORES DE COMPARAÇÃO ===");
console.log(`${x} > ${y}: ${x > y}`);
console.log(`${x} < ${y}: ${x < y}`);
console.log(`${x} >= ${y}: ${x >= y}`);
console.log(`${x} <= ${y}: ${x <= y}`);
console.log(`${x} == ${y}: ${x == y}`);
console.log(`${x} === ${y}: ${x === y}`);
console.log(`${x} != ${y}: ${x != y}`);
console.log(`${x} !== ${y}: ${x !== y}`);

console.log("\n=== OPERADORES LÓGICOS ===");
let expressao1 = (x > 10) && (y < 5);
let expressao2 = (x === 15) || (y === 10);
let expressao3 = !(x === y);

console.log("Expressões que resultam em TRUE:");
console.log(`(x > 10) && (y < 5): ${expressao1}`);
console.log(`(x === 15) || (y === 10): ${expressao2}`);
console.log(`!(x === y): ${expressao3}`);

let expressao4 = (x < 10) && (y > 2);
let expressao5 = (x === 20) && (y === 3);
let expressao6 = !(x > y);

console.log("\nExpressões que resultam em FALSE:");
console.log(`(x < 10) && (y > 2): ${expressao4}`);
console.log(`(x === 20) && (y === 3): ${expressao5}`);
console.log(`!(x > y): ${expressao6}`);

console.log("\n=== EXEMPLOS ADICIONAIS ===");
console.log(`Combinação AND e OR: (x > 10 && y < 5) || (x === 20): ${(x > 10 && y < 5) || (x === 20)}`);
console.log(`Negação dupla: !!x: ${!!x}`); 