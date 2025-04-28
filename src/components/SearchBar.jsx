function SearchBar({ onSearch }) {
    return (
      <input
        type="text"
        placeholder="Buscar notas..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
    );
  }
  
  export default SearchBar;