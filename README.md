# Projeto Node.js com Testes de Unidade e GitHub Actions

Pequeno programa em JavaScript com testes de unidade e integração contínua (CI) configurada via **GitHub Actions**.

## Estrutura do Projeto

- `src/calculadora.js`: Implementação das funções (`somar`, `subtrair`, `multiplicar`, `dividir`, `ehPar`, `fatorial`).
- `test/calculadora.test.js`: 6 testes de unidade utilizando o test runner nativo do Node.js (`node:test`).
- `.github/workflows/ci.yml`: Workflow do GitHub Actions configurado para rodar a cada commit/PR em **Ubuntu, macOS e Windows** nas versões **Node.js 18.x, 20.x e 22.x**.

## Como executar localmente

```bash
# Verificar sintaxe (build)
npm run build

# Executar os testes de unidade
npm test
```

