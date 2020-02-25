import React from 'react';

const Search = ({ change }) => {

  return (
    <div>
      <form>
        <input
          id="search"
          type="search"
          placeholder="Search movies..."
          onChange={e => change(e.target.value)}/>
      </form>
    </div>
  )
};

export default Search;



