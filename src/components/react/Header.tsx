import ToggleTheme from '@components/react/ToggleTheme';

const Header = () => {
  return (
    <header className="w-full row-start-1 row-end-2 h-[70px] flex justify-center items-center px-4 lg:px-0">
      <div className="w-full max-w-[1280px] flex justify-between items-center">
        <h1 className="text-xl md:text-2xl text-center font-extrabold text-terracotta dark:text-red-300">
          <a href="/" title="Emanoel Lopes">Emanoel Lopes</a>
        </h1>
        <ToggleTheme />
      </div>
    </header>
  );
};

export default Header;