function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error('Divisão por zero não é permitida');
  }
  return a / b;
}

function ehPar(numero) {
  return numero % 2 === 0;
}

function fatorial(n) {
  if (n < 0) {
    throw new Error('Não existe fatorial de número negativo');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
  fatorial,
};

