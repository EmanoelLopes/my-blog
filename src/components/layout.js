import React, { useState } from 'react';
import { Link } from 'gatsby';

const Layout = ({ location, title, children }) => {
  const [darkModeOn, setDarkModeOn] = useState(false);
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
    const body = Array.from(document.getElementsByTagName('body'))[0];

    setDarkModeOn(value => !value);
    body.classList.toggle('dark-mode-on');
  };

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <button
        className="theme-toggle"
        onClick={handleToggleTheme}>
          {darkModeOn
            ? <i className="bx bxs-sun"></i>
            : <i className='bx bxs-moon' ></i>
          }
      </button>
      <header className="global-header">
        {header}
      </header>
      <main>{children}</main>
      <footer className="footer">
        © {new Date().getFullYear()} <a href="https://emanoellopes.me" title="Emanoel Lopes">emanoellopes.me</a>. Desenvolvido com
        {` `}
        <a href="https://www.gatsbyjs.com" title="Gatsby">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
