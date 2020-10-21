---
title: Custom React localStorage Hook
date: "2020-10-21T22:15:03.284Z"
description: "Criando um custom React Hook para lidar com localStorage"
tags: ["React", "React Hooks", "JavaScript", "localStorage"]
---

```javascript
// useLocalStorage.js
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
