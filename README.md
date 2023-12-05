# Vitest Learning

Vitest é um framework moderno alimentado pelo Vite. Tem uma sintaxe similar ao jest e vem equipado com ESM.

## Por que Vitest?

Utilizando framewoks como o Jest para testar aplicações alimentadas pelo o Vite levou a muitas duplicações de configurações entre o Jest e Vite. Vitest remove a necessidade de configurações extras para escrever testes unitários. 

## Escrevendo o primeiro teste unitário

### Cria a aplicação

```bash
$ npm create vue <projeto_nome>
```

### Configura o Vitest

```jsx
// vitest.config.js
import { fileURLToPath } from 'node:url';
import { mergeConfig } from 'vite';
import { configDefaults, defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  });
);
```

```json
"scripts": {
	"test:unit": "vitest",
}
```

## O que iremos testar

## Métodos comuns nos testes

* `describe`: Função que aceita nome e função e é utilizada para agrupar testes relacionados

* `test` \ `it`: Utilizada para representar o atual bloco que será testado

* `expect`: Função que irá testar os valores ou criar afirmações
