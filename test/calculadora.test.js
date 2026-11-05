const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
  fatorial,
} = require('../src/calculadora');

describe('Testes de Unidade - Calculadora', () => {
  it('1. Deve somar dois números corretamente', () => {
    assert.strictEqual(somar(5, 3), 8);
    assert.strictEqual(somar(-2, 5), 3);
  });

  it('2. Deve subtrair dois números corretamente', () => {
    assert.strictEqual(subtrair(10, 4), 6);
    assert.strictEqual(subtrair(3, 7), -4);
  });

  it('3. Deve multiplicar dois números corretamente', () => {
    assert.strictEqual(multiplicar(6, 7), 42);
    assert.strictEqual(multiplicar(5, 0), 0);
  });

  it('4. Deve dividir dois números corretamente e impedir divisão por zero', () => {
    assert.strictEqual(dividir(20, 4), 5);
    assert.throws(() => dividir(10, 0), {
      message: 'Divisão por zero não é permitida',
    });
  });

  it('5. Deve verificar corretamente se um número é par ou ímpar', () => {
    assert.strictEqual(ehPar(4), true);
    assert.strictEqual(ehPar(7), false);
  });

  it('6. Deve calcular o fatorial de um número corretamente', () => {
    assert.strictEqual(fatorial(0), 1);
    assert.strictEqual(fatorial(5), 120);
    assert.throws(() => fatorial(-1), {
      message: 'Não existe fatorial de número negativo',
    });
  });
});

