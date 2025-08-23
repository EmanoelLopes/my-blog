const Footer = () => {
  return (
      <footer className="flex flex-col md:flex-row md:gap-1 items-center justify-center row-start-3 row-end-4 py-8">
        <div>
          <span>© {new Date().getFullYear()}</span>
          {` `}
          <a className="underline underline-offset-1 text-terracotta" href="https://emanoellopes.dev" title="Emanoel Lopes">
            emanoellopes.dev
          </a>
          {` - `}
        </div>
        <div>
          <span>Desenvolvido com</span>
          {` `}
          <a className="underline underline-offset-1 text-terracotta" href="https://astro.build/" title="Astro">
            Astro
          </a>
        </div>
      </footer>
  );
};

export default Footer;
