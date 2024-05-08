import React from "react";

function Search({ setSearchTerm }) {
    function handleInputChange(e) {
        setSearchTerm(e.target.value)
    }

    return (
        <div className="search-bar">
            <label className="search-label" id="label" htmlFor="search">Search 🔍</label>
            <input
             type="text"
             id="search" 
             placeholder="Start typing to search..." 
             onChange={handleInputChange} 
             className="search-input" />
        </div>
    );
}

export default Search;



