
console.log("=== CONDICIONAIS IF/ELSE ===");

let nota = 85;

console.log(`Nota: ${nota}`);

if (nota >= 70) {
    console.log("Aprovado");
} else if (nota >= 50 && nota < 70) {
    console.log("Recuperação");
} else if (nota < 50) {
    console.log("Reprovado");
} else {
    console.log("Nota inválida");
}

console.log("\n--- Testando com nota 65 ---");
nota = 65;
console.log(`Nota: ${nota}`);
if (nota >= 70) {
    console.log("Aprovado");
} else if (nota >= 50 && nota < 70) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

console.log("\n--- Testando com nota 45 ---");
nota = 45;
console.log(`Nota: ${nota}`);
if (nota >= 70) {
    console.log("Aprovado");
} else if (nota >= 50 && nota < 70) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

console.log("\n=== SWITCH CASE - MESES ===");

let mes = 7;

console.log(`Número do mês: ${mes}`);

switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Mês inválido! Digite um número entre 1 e 12.");
}

console.log("\n--- Testando com mês 12 ---");
mes = 12;
console.log(`Número do mês: ${mes}`);
switch (mes) {
    case 1: console.log("Janeiro"); break;
    case 2: console.log("Fevereiro"); break;
    case 3: console.log("Março"); break;
    case 4: console.log("Abril"); break;
    case 5: console.log("Maio"); break;
    case 6: console.log("Junho"); break;
    case 7: console.log("Julho"); break;
    case 8: console.log("Agosto"); break;
    case 9: console.log("Setembro"); break;
    case 10: console.log("Outubro"); break;
    case 11: console.log("Novembro"); break;
    case 12: console.log("Dezembro"); break;
    default: console.log("Mês inválido!");
}

console.log("\n=== WHILE - NÚMEROS PARES ===");

let contador = 0;
console.log("Números pares de 0 a 20:");

while (contador <= 20) {
    if (contador % 2 === 0) {
        console.log(contador);
    }
    contador++;
}

console.log("\n=== FOR - ARRAY DE CIDADES ===");

let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Salvador", "Brasília"];

console.log("Lista de cidades:");
for (let i = 0; i < cidades.length; i++) {
    console.log(`${i + 1}. ${cidades[i]}`);
}

console.log("\n=== FOR - ORDEM DECRESCENTE ===");

console.log("Números de 10 a 1 em ordem decrescente:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("\n=== EXEMPLOS ADICIONAIS ===");

console.log("Usando for...of com cidades:");
for (let cidade of cidades) {
    console.log(cidade);
}

console.log("\nUsando while para ordem decrescente:");
let num = 10;
while (num >= 1) {
    console.log(num);
    num--;
}