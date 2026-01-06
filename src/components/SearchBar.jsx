import { CiSearch } from "react-icons/ci";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="mb-8">
      <div className="max-w-2xl mx-auto flex">
        <input
          type="text"
          placeholder="Pesquise pelo nome da foto..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="flex-1 px-6 py-4 text-base border-2 border-gray-300 dark:border-gray-600 rounded-l-full focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <button
          className="px-6 py-3 bg-purple-400 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white border-2 border-purple-600 dark:border-purple-500 rounded-r-full transition-all flex items-center justify-center cursor-pointer"
          aria-label="Buscar"
        >
          <CiSearch className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
