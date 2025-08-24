import { useState, useEffect, useRef } from 'react';

const useToggleTheme = () => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  const htmlRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      htmlRef.current = document.documentElement;
      
      const isDark = htmlRef.current.classList.contains('dark');
      setIsDarkModeOn(isDark);
      
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        htmlRef.current.classList.add('dark');
        setIsDarkModeOn(true);
      } else if (savedTheme === 'light') {
        htmlRef.current.classList.remove('dark');
        setIsDarkModeOn(false);
      }
    }
  }, []);

  const handleToggleTheme = () => {
    const newDarkMode = !isDarkModeOn;
    setIsDarkModeOn(newDarkMode);
    
    if (htmlRef.current) {
      if (newDarkMode) {
        htmlRef.current.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        htmlRef.current.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  };

  return {
    isDarkModeOn,
    handleToggleTheme,
  };
};

export default useToggleTheme;