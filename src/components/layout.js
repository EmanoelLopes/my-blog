import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import useLocalStorage from 'hooks/useLocalStorage';
import Icon from 'components/icon';

const Layout = ({ location, title, children }) => {
  const [darkModeOn, setDarkModeOn] = useState(false);
  const [storedDarkMode, setStoredDarkMode] = useLocalStorage('darkMode', false);
  const body = typeof document !== 'undefined' && Array.from(document.getElementsByTagName('body'))[0];
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  const handleToggleTheme = () => {
    setDarkModeOn(value => !value);
    setStoredDarkMode(value => !value);
    body.classList.toggle('dark-mode-on');
  };

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      return (storedDarkMode)
        ? body.classList.add('dark-mode-on')
        : body.classList.remove('dark-mode-on');
    }
    
    return () => unmounted = true;
  }, [body, storedDarkMode])

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <button
        className="theme-toggle"
        aria-label="Alterar o tema"
        onClick={handleToggleTheme}>
          {darkModeOn
            ? <Icon name="sun" />
            : <Icon name="moon" />
          }
      </button>
      <header className="global-header">
        {header}
      </header>
      <main>{children}</main>
      <footer className="footer">
        © {new Date().getFullYear()} <a href="https://emanoellopes.dev" title="Emanoel Lopes">emanoellopes.dev</a>. Desenvolvido com
        {` `}
        <a href="https://www.gatsbyjs.com" title="Gatsby">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
