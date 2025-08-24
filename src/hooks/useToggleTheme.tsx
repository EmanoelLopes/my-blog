import { useState, useEffect, useCallback } from 'react';

const useToggleTheme = () => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  const handleToggleTheme = useCallback(() => {
    const newDarkMode = !isDarkModeOn;
    setIsDarkModeOn(newDarkMode);
    
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      
      if (newDarkMode) {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [isDarkModeOn]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
      
      if (shouldBeDark !== isDarkModeOn) {
        setIsDarkModeOn(shouldBeDark);
        
        if (shouldBeDark) {
          html.classList.add('dark');
        } else {
          html.classList.remove('dark');
        }
        
        if (!savedTheme) {
          localStorage.setItem('theme', shouldBeDark ? 'dark' : 'light');
        }
      }
    }
  }, []);

  return {
    isDarkModeOn,
    handleToggleTheme,
  };
};

export default useToggleTheme;
