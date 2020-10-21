---
title: Removendo itens repetidos em arrays
date: "2020-10-21T22:12:03.284Z"
description: "Como remover de maneira bem simples itens que se repetem em arrays"
tags: ["javascript"]
---

É bem comum em aplicações JavaScript, receber arrays que contém valores duplicados. Por exemplo:

```javascript
[1, 2, 3, 4, 4, 5, 10, 10, 125]
```

E o que você naturalmente vai precisar é que este array contenha valores únicos:

```javascript
[1, 2, 3, 4, 5, 10, 125]
```
O JavaScript não tem nenhum método nativo específico para remover itens repetidos em arrays mas é bem simples criar funções ou helpers
executem essa tarefa sem a necessidade de bibliotecas externas como por exemplo [JQuery](https://api.jquery.com/jquery.unique/#:~:text=unique()%20function%20searches%20through,not%20considered%20to%20be%20duplicates.) ou [Lodash](https://lodash.com/docs/4.17.15#uniq).

### Utilizando o prototype

Podemos criar uma função nativa utilizando o `prototype`:

```javascript
Array.prototype.unique = function() {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
}

[1, 2, 3, 4, 4, 5, 10, 10, 125].unique();
// (7) [1, 2, 3, 4, 5, 10, 125]
```

### Criando uma função

Similar ao uso do `prototype` mas através da criação de uma função:

```javascript
function unique(arr) {
  return arr.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
}

unique([1, 2, 3, 4, 4, 5, 10, 10, 125]);
// (7) [1, 2, 3, 4, 5, 10, 125]
```

### filter()

Utilizando o `Array.prototype.filter()` de forma bem sucinta via arrow function e em uma única linha:

```javascript
const unique = (arr) => arr.filter((v, i, s) => s.indexOf(v) === i);

unique([1, 2, 3, 4, 4, 5, 10, 10, 125]);
// (7) [1, 2, 3, 4, 5, 10, 125]
```

### new Set()

Outra forma ES6+ like mais simples ainda utilizando o objeto `new Set()`:

```javascript
const unique = (arr) => [...new Set(arr)];

unique([1, 2, 3, 4, 4, 5, 10, 10, 125]);
// (7) [1, 2, 3, 4, 5, 10, 125]
```

## Conclusão:
Bibliotecas como o <b>Lodash</b> são ótimas pois tem excelentes funções helpers para nos ajudar como nos casos acima mas pondere o seu uso. A maioria costuma inflar o bundle final de suas aplicações, o que pode comprometer a performance. Em alguns casos não é necessário o uso de nenhuma lib uma vez que você pode criar suas próprios funções.
