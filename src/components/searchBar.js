import'./searchBar.css'

function SearchBar() {
    return (
        <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Food item</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search Food item"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
    );
  }
  
  export default SearchBar;