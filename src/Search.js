import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Search = props => {
  const { query, handleChange, handleClick } = props;
  return (
    <div className="search-container">
      <form className="form-container">
        <label htmlFor="searchbar" />
        <input
          type="search"
          id="searchbar"
          placeholder="Search"
          value={query}
          onChange={handleChange}
        />
        <Button handleClick={handleClick} />
      </form>
    </div>
  );
};

export default Search;

Search.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  query: PropTypes.string,
};
