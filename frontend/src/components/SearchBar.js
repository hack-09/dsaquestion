import React, { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search questions..."
                    value={query}
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;