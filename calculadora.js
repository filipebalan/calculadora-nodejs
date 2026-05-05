const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcular(num1, num2, operador) {
    let resultado;

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
            case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        default:    
            resultado = 'Operador inválido';
    }

    // O processo de decisão vai entrar aqui na próxima etapa

    return resultado;
}

rl.question('Digite o primeiro número: ', (resposta1) => {
    rl.question('Digite a operação (+, -, *, /): ', (sinal) => {
        rl.question('Digite o segundo número: ', (resposta2) => {

// 1. Convertendo texto em números para a matemática funcionar
            let n1 = parseFloat(resposta1);
            let n2 = parseFloat(resposta2);

// 2. Chamando a nossa função e entregando as caixas preenchidas
            let resultadoFinal = calcular(n1, n2, sinal);

// 3. Exibindo o resultado no terminal
            console.log('O resultado da sua conta é: ' + resultadoFinal);

// 4. Avisando ao Node.js que terminamos de usar o terminal
            rl.close();

        });
    });
});