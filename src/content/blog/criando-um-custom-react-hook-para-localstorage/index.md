---
title: "Criando um custom react hook para lidar com dados no localstorage"
pubDate: 2020-10-21
author: "Emanoel Lopes"
description: "Criando um custom React Hook para lidar com dados no localStorage."
tags: ["React", "React Hooks", "JavaScript", "localStorage"]
tldr: ""
---

Com a chegada dos [Hooks](https://reactjs.org/docs/hooks-intro.html) à partir da versão 16.8, uma gama enorme de possibilidades foi aberta em aplicações React. Além de possibilitar o uso de states e o lifecycle dentro de componentes funcionais, também foi possível criar os nosso próprios hooks. Aqui apresento uma abordagem de como criar um hook customizado para persistir valores no localStorage.

## Criando o custom Hook

A lógica é similar ao uso do `useState` em algum componente, contudo neste caso não há a necessidade de chamar a instância do React:

```javascript
// hooks/useLocalStorage.js
import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    return window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
```

# O Custom Hook no componente

No exemplo abaixo, no componente `App.js` vou chamar o custom hook `useLocalStorage.js` para persistir o valor do tema `darkMode`. Assim, quando o usuário alterar o tema e recarregar a tela, o tema clicado anteriormente já estará persistido:

```javascript
// App.js
import React, { useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import "./styles.css";

export default function App() {
  const body = Array.from(document.querySelectorAll("body"))[0];
  const [storedValue, setStoredValue] = useLocalStorage("darkMode", false);

  const handleToggleTheme = () => {
    setStoredValue((value) => !value);
    body.classList.toggle("dark-mode-on");
  };

  const handleReload = () => window.location.reload();

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      return storedValue
        ? body.classList.add("dark-mode-on")
        : body.classList.remove("dark-mode-on");
    }

    return () => unmounted = true;

  }, [body, storedValue]);

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2>
        Here is a simple example how to use a custom React Hook to handle
        localStorage
      </h2>
      <button onClick={handleToggleTheme}>Click Here to change Theme</button>
      <p>
        If you refresh the screen, the theme that you selected before will be
        active becouse it is persisted on localStorage
      </p>
      <button onClick={handleReload}>
        Click here to refresh the Screen!
      </button>
    </div>
  );
}
```

E algumas linhas de CSS apenas para título de alteração dos estilos:

```css
// styles.css
body.dark-mode-on {
  background-color: #000;
  color: #fff;
}
```

O exemplo acima no CodeSandbox:

<iframe src="https://codesandbox.io/embed/custom-react-hook-uselocalstorage-mlqjq?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="custom-react-hook-useLocalStorage"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>