import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="transition-all duration-300 hover:scale-110 cursor-pointer"
      aria-label="Alternar tema"
    >
      {darkMode ? (
        <MdLightMode className="w-6 h-6 md:w-8 md:h-8" />
      ) : (
        <MdDarkMode className="w-6 h-6 md:w-8 md:h-8" />
      )}
    </button>
  );
}

export default ThemeToggle;
