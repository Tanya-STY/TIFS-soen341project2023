import React from 'react'
import './Searchbar.css'


const Searchbar = ({keyword, onChange}) => {
    return (
      <div>
        <input 
        id="searchBar"
        key="search-bar"
        value={keyword}
        placeholder={"Job Title, Keywords, etc."}
        onChange={(e) => onChange(e.target.value)}>
        </input>
      </div>
    );
  }
  

export default Searchbar;