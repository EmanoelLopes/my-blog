---
title: Como converter NodeLists em arrays
date: "2020-10-20T22:12:03.284Z"
description: "Algumas maneiras bem simples e eficientes de transformar NodeLists em arrays afim de facilitar a manipulação no DOM."
tags: ["javascript"]
---

Se você em algum momento precisou manipular e iterar vários itens no [DOM](https://developer.mozilla.org/pt-BR/docs/DOM), é bem provável que já tenha se deparado com uma <b>NodeList</b>.
Como informado na [documentação da MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/NodeList), os objetos `NodeLists` são coleções de nós similares aos objetos retornados de métodos como `Node.childNodes` e `document.querySelectorAll()`. <br />
Sendo assim, é bem comum uma criarmos pequena confusão de que NodeLists são iteráveis como arrays:

```javascript
const anchors = document.querySelectorAll('a');
Array.isArray(anchors) // false
```

Uma NodeList não sendo um array, logo os métodos de um array não funcionam numa NodeList:

```javascript
anchors.map(i => console.log(i));
// Uncaught TypeError: anchors.map is not a function
```
Aqui apresento algumas diferentes abordagens de como converter NodeLists em arrays iteráveis.

### for

O bom e velho `for` sempre funciona, bom para usar quando precisa dar suporte em navegadores muito antigos:

```javascript
var anchors = document.querySelectorAll('a');
var arrayOfAnchors = [];

for (var i = 0; i < anchors.length; i++) {
  var item = anchors[i];
  arrayOfAnchors.push(item);
}
```

### Array.prototype.slice.call()

Uma outra abordagem afim de garantir suporte em navegadores mais antigos como é o caso do IE10 e IE11, para não precisar utilizar nenhum tipo de polyfill, pode ser uma boa usar o `Array.prototype.slice.call()`:

```javascript
const arrayOfAnchors = Array.prototype.slice.call(anchors);
Array.isArray(arrayOfAnchors); // true

// ou

const arrayOfAnchors = [].slice.call(anchors);
Array.isArray(arrayOfAnchors); // true
```

### forEach()

O `forEach` é um dos métodos disponíveis dentro de uma NodeList:

```javascript
anchors.forEach(i => console.log(i))
```

Na [MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/NodeList) é explicado de maneira bem sucinta o uso do `forEach()` em uma NodeList. Contudo, pode ser um problema caso seja necessário suportar navegadores mais antigos como o caso do IE10, por exemplo:

> Apesar de NodeList não ser um Array, é possível ser iterada usando o método forEach(). Muitos navegadores antigos ainda não implementaram este método

Suporte dos navegadores: https://caniuse.com/?search=forEach

### for...of

Também é possível obter um array de uma NodeList utlizando o `for...of`:

```javascript
const anchors = document.querySelectorAll('a');
let arrayOfAnchors = [];

for (item of anchors) {
  let item = anchors[i];
  arrayOfAnchors.push(item);
}
```

Suporte dos navegadores: https://caniuse.com/?search=for...of

### Array.from()

Agora, se você não precisa lidar com browsers mais antigos, com a vinda do ES6 alguns anos atrás, ficou bem simples converter NodeLists em arrays. Basta usar o `Array.from()`:

```javascript
Array.from(anchors).map(i => console.log(i));
```
O `Array.from()` permite que você crie arrays à partir de objetos array-like e [Objetos iteráveis](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols), como o [Map](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map) e o [Set](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set).

Suporte dos navegadores: https://caniuse.com/?search=array%20from

### Spread Operator

Mais um caminho via ES6, utilizando o [spread operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator):

```javascript
const anchors = [...document.querySelectorAll('a')];
Array.isArray(anchors) // true
```

Suporte dos navegadores: https://caniuse.com/?search=spread%20operator

## Conclusão

Existem diversas formas de converter uma NodeList num array para facilitar sua manipulacão no DOM. A escolha delas vai depender de alguns fatores como suporte aos navegadores, uso de polyfills para alguns métodos, se sua aplicação utiliza transpilers que garantam o uso de ES6+ e coisas do gênero.
