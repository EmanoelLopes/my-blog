---
title: Uma breve introdução sobre JavaScript Proxies
date: "2021-01-01T22:12:00.284Z"
description: "Explicando da maneira mais sucinta possível o que é um Proxy no JavaScript."
tags: ["javascript"]
---

[Proxies](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy) são objetos que "envelopam" outros objetos ou funções e podem interceptar operacões, como por exemplo leitura e escrita e gerar novas atribuições, permissões e etc. Proxies são bem comuns em alguns frameworks e bibliotecas como [Vue](https://vuejs.org/) e [React](https://reactjs.org/) e até mesmo libs de validação de formulários.

Antes é bom entendermos que existem três elementos chaves para um Proxy:

- `1.` Targets: É o objeto ou função manipulado pelo proxy;
- `2.` Handlers: É a função que faz algo no objeto ou função manipulado pelo proxy;
- `3.` Traps: "armadilhas" que fornecem acesso à propriedade;

### Sintaxe

Criamos um proxy da seguinte forma:

```javascript
const proxy = new Proxy({}, handler);
```

### Referências
- [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- [https://javascript.info/proxy](https://javascript.info/proxy)


### Dicas de leitura
- [https://towardsdatascience.com/why-to-use-javascript-proxy-5cdc69d943e3](https://towardsdatascience.com/why-to-use-javascript-proxy-5cdc69d943e3)
- [https://blog.logrocket.com/use-es6-proxies-to-enhance-your-objects/](https://blog.logrocket.com/use-es6-proxies-to-enhance-your-objects/)
- [https://dev.to/tombarr/a-practical-guide-to-javascript-proxy-4cpa](https://dev.to/tombarr/a-practical-guide-to-javascript-proxy-4cpa)
