---
title: Código Limpo em React
date: "2021-03-01T22:10:00.000Z"
description: "Aplicando algumas técnicas de como de escrever um código melhor, mais legível e limpo em aplicações React."
tags: ["javascript", "react", "clean code"]
---

![Cleaning Materials](./cleaning.jpg)

Para quem já leu o [Clean Code](https://books.google.com.br/books/about/C%C3%B3digo_Limpo.html?id=GXWkDwAAQBAJ&printsec=frontcover&source=kp_read_button&redir_esc=y#v=onepage&q&f=false) de [Robert C. Martin](https://pt.wikipedia.org/wiki/Robert_Cecil_Martin), popularmente conhecido como "Uncle Bob", já sabe que código limpo vai muito além do código. Código limpo tem muito mais a ver legibilidade, simplicidade na compreensão e organização.

Neste post pretendo mostrar algumas abordagens de como aplicar o `clean code` em aplicações React. Lembrando os exemplos em questão são apenas sugestões e não regras e está tudo bem também caso não concorde com elas.

### 1. Use nomes concisos e claros para props

Evite usar nomear `props` com letras ou outros formatos que não mostrem um contexto claro ou sua real finalidade.

Ruim:
```jsx
<Image w={100} h={100} />
```

Bom:
```jsx
<Image width={100} height={200} />
```

### 2. Use nomes claros para variáveis

Nomeie variáveis com valores claros que façam sentido a sua atribuição:

Ruim:

```jsx
function SomeComponent() {
  const d = new Date();

  return (
    <p>{d}</p>
  );
}
```

Bom:

```jsx
function SomeComponent() {
  const today = new Date();

  return (
    <p>{today}</p>
  );
}
```

### 3. Faça checagem de tipos com propTypes

Caso não esteja utilizando nenhum superset de type checking como [TypeScript](https://www.typescriptlang.org/) ou [Flow](https://flow.org/), use a [checagem padrão de tipos](https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html) do React com o `propTypes`:

Ruim:

```jsx
function Card({ user }) {
  return (
    <div className="card-user">
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Age: {user.profession}</p>
    </div>
  );
}
```

Bom:

```jsx
import { object } from 'prop-types';

function Card({ user }) {
  return (
    <div className="card-user">
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Age: {user.profession}</p>
    </div>
  );
}

Card.propTypes = {
  user: object.isRequired
};
```

### 4. Sempre utilize default props para props não obrigatórias

Props que não são obrigatórias mas não tem algum valor padrão sempre retornão `undefined`, o que pode gerar alguns efeitos colaterais indesejados:

Ruim:

```jsx
function Card({ user }) {
  return (
    <div className="card-user">
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Age: {user.profession}</p>
    </div>
  );
}

Card.propTypes = {
  user: object
};

```

Bom:

```jsx
import { object } from 'prop-types';

function Card({ user }) {
  return (
    <div className="card-user">
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Age: {user.profession}</p>
    </div>
  );
}

Card.defaultProps = {
  user: {}
};

Card.propTypes = {
  user: object
};
```

### 5. Use Optional Chaining para validar estruras encadeadas em objetos

Supondo que você tenha um retorno de uma API da seguinte maneira:

```javascript
const users = [
  {
    id: 1,
    name: 'Joey Ramone',
    age: 45,
    details: {
      email: 'joey@gmail.com'
    }
  },
  {
    id: 2,
    name: 'Dee Dee Ramone',
    age: 38,
    details: {}
  }
]
```
E seu componente seja algo do tipo:

```jsx
function UsersList() {
  return (
    <ul className="users-list">
      {users.map(user => (
        <li key={user.id}>
          <p>Name: {user.name}</p>
          <p>Name: {user.age}</p>
          <div className="user-details">
            <p>Email: {user.details.email}</p>
          </div>
        </li>
      )}
    </ul>
  );
}
```

Aqui ocorrerá o seguinte erro:
```
TypeError: Cannot read property 'email' of undefined
09 |   <p>Name: {user.age}</p>
10 |   <p>Email: {user.details.email}</p>
11 | </div>
```

E isso acontece porque nem todos os itens de `users` possui dentro de `details` o `email`.
Mas isso é bem simples de resolver com [Optional Chaining](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Optional_chaining):


```jsx
function UsersList() {
  return (
    <ul className="users-list">
      {users.map(user => (
        <li key={user.id}>
          <p>Name: {user.name}</p>
          <p>Name: {user.age}</p>
          {user?.details?.email && (
            <div className="user-details">
              <p>Email: {user.details.email}</p>
            </div>
          )}
        </li>
      )}
    </ul>
  );
}
```

Que é a mesma coisa que:

```jsx
function UsersList() {
  return (
    <ul className="users-list">
      {users.map(user => (
        <li key={user.id}>
          <p>Name: {user.name}</p>
          <p>Name: {user.age}</p>
          {user && user.details && user.details.email && (
            <div className="user-details">
              <p>Email: {user.details.email}</p>
            </div>
          )}
        </li>
      )}
    </ul>
  );
}
```

### 6. Não use null em renderizações condicionais

Evite usar `null` em condicionais:

Ruim:

```jsx
import { useState } from 'react';

function SomeComponent () {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => setIsVisible(isVisible => !isVisible);

  return (
    <div>
      <p>This always appears!<p>
      <button onClick={handleVisibility}>Click!</button>
      {isVisible ? <p>This appears only when is visible!</p> : null}
    </div>
  );
}
```

Bom:

```jsx
import { useState } from 'react';

function SomeComponent () {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => setIsVisible(isVisible => !isVisible);

  return (
    <div>
      <p>This always appears!<p>
      <button onClick={handleVisibility}>Click!</button>
      {isVisible && <p>This appears only when is visible!</p>}
    </div>
  );
}
```

### 7. Eventos

Evite usar funções anônimas dentro da renderização dos componentes:

Ruim:

```jsx
import { useState } from 'react'

export const SomeComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value)
  };

  return (
    <div className="form-control">
      <label htmlFor="name">Name: </label>
      <input id="name" value={inputValue} onChange={e => handleChange(e)} />
    </>
  );
}
```

Bom:

```jsx
import { useState } from 'react';

export const SomeComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value)
  };

  return (
    <div className="form-control">
      <label htmlFor="name">Name: </label>
      <input id="name" value={inputValue} onChange={handleChange} />
    </>
  );
}
```

### 8. Faça uso de componentes funcionais invés de classes

Como [informado na própria documentação do React](https://pt-br.reactjs.org/docs/hooks-intro.html#classes-confuse-both-people-and-machines), classes dificultam a organização e a legibilidade do código. Além disso, ainda tem o uso do `this` cujo contexto é confuso e contra intuitivo, pode adicionar uma complexidade maior na sua aplicação. Portanto, sempre que possível utilize componentes funcionais invés de classes.

Ruim:

```jsx
import React from 'react';

class Counter extends React.Component {
  constructor(){
    super();
    this.state = {
      count: 0,
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState(previousValue => ({
      count: previousValue.count + 1,
    }));
  }

  decrement() {
    this.setState(previousValue => ({
      count: previousValue.count - 1,
    }));
  }

  render() {
    return (
      <div className="counter">
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default Counter;
```
Bom:

```jsx
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((previousValue) => previousValue + 1);
  const decrement = () => setCount((previousValue) => previousValue - 1);

  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
```

### 9. Hooks: useState

Sempre que precisar atualizar um estado, utilize uma função com parâmetro:

Ruim
```jsx
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => setCount(!isVisible);
```

Bom
```jsx
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => setCount(isVisible => !isVisible);
```

### 10. Hooks: cleanup de eventListeners no useEffect

Quando for adicionar algum eventListener dentro de um `useEffect`, jamais esqueça de removê-lo no return do effect para prevenir problemas desde performance a memory leaks. Apenas uma observação: o `cleanup` no return do effect tem a mesma função do antigo `componentWillUnmount`.


Ruim
```jsx
  useEffect(() => {
    window.addEventListener('scroll', anyCallbackHere);
  }, []);
```

Bom
```jsx
  useEffect(() => {
    window.addEventListener('scroll', anyCallbackHere);

    return () => {
      window.removeEventListener('scroll', anyCallbackHere);
    };
  }, []);
```

### Conclusão:
Os exemplos abordardos acima se atribuem principalmente em aplicações React. No entanto, também são boas práticas para serem aplicadas em Vanilla JavaScript e em até mesmo outros frameworks como Vue.js ou Angular.

### Dicas de leitura

 - [React Clean Code - Simple ways to write better and cleaner code](https://dev.to/thawkin3/react-clean-code-simple-ways-to-write-better-and-cleaner-code-2loa)
 - [Small Tips to Write Better React Code](https://livecodestream.dev/post/small-tips-to-write-better-react-code/)
 - [Writing (clean) React code](https://dev.to/jithinks97/writing-clean-react-code-2mcm)
  - [Handling null and undefined in JavaScript](https://medium.com/javascript-scene/handling-null-and-undefined-in-javascript-1500c65d51ae)
 - [Introdução aos Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)
