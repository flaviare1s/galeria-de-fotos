import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <header className="bg-linear-to-r from-purple-300 to-purple-600 dark:from-gray-800 dark:to-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center relative flex items-center justify-between">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
          Galeria de Fotos
        </h1>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
