const Footer = () => {
  return (
      <footer className="footer">
        © {new Date().getFullYear()} <a href="https://emanoellopes.dev" title="Emanoel Lopes">emanoellopes.dev</a>. Desenvolvido com
        {` `}
        <a href="https://astro.build/" title="Astro">Astro</a>
      </footer>
  );
};

export default Footer;
