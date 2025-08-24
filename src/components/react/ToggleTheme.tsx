import Icon from '@components/react/Icon';
import { useToggleTheme } from '@hooks/index';

const ToggleTheme = () => {
  const { isDarkModeOn, handleToggleTheme } = useToggleTheme();

  return (
    <button
      className="cursor-pointer p-2 rounded-lg"
      aria-label="Alterar o tema"
      onClick={handleToggleTheme}>
        {isDarkModeOn
          ? <Icon name="sun" />
          : <Icon name="moon" />
        }
    </button>
  );
};

export default ToggleTheme;