const prompt = require("prompt-sync")({ sigint: true });

const base = parseInt(prompt("Digite a base:"));
const expoente = parseInt(prompt("Digite o expoente:"));

let resultado = 1;
for (let i = 0; i < expoente; i++) {
    let temp = 0;
    for (let j = 0; j < base; j++) {
        temp += resultado;
    }
    resultado = temp;
}

console.log(`${base}^${expoente} = ${resultado}`);
