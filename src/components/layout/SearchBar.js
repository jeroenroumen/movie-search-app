import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  margin-bottom: 30px;
  `;

const SearchBar = () => {

  return (
    <Nav className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search logs..." />
            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </Nav>
  )
};

export default SearchBar;
