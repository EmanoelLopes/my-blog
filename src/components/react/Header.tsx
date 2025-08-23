import { useState } from 'react';
import Icon from '@components/react/Icon';

const Header = () => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkModeOn(value => !value);
  };

  return (
    <header className="w-full row-start-1 row-end-2 h-[70px] flex justify-center items-center px-4 lg:px-0">
      <div className="w-full max-w-[1280px] flex justify-between">
        <h1 className="text-xl md:text-2xl text-center font-extrabold text-terracotta">Emanoel Lopes</h1>
        <button
          className="cursor-pointer"
          aria-label="Alterar o tema"
          onClick={handleToggleTheme}>
            {isDarkModeOn
              ? <Icon name="sun" />
              : <Icon name="moon" />
            }
        </button>
      </div>
    </header>
  );
};

export default Header;