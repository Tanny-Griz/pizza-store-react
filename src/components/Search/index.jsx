import React from 'react';
import './style.scss';

const Search = ({ title, placeholder, onChange }) => {
  return (
    <div className="search">
      <input
        id="searchComponent"
        type="text"
        placeholder={placeholder || 'Enter value'}
        onChange={onChange}
      />
    </div>
  );
}

export default Search;