import React, { useRef } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { searchMovies } from '../../actions/movieActions';

const Search = ({ searchMovies }) => {

  const text = useRef('');

  const onChange = () => {
    searchMovies(text.current.value, 1);
  };

  return (
    <div>
      <form>
        <input
          id="search"
          type="search"
          placeholder="Search movies..."
          ref={text}
          onChange={onChange} />
      </form>
      <Button className="blue">Clear</Button>
    </div>
  )
};

const Button = styled.button`
    display: inline-block;
    color: #FFFFFF;
    padding: 0.4rem 2.3rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    margin-right: 0.5rem;
    transition: opacity 0.2s ease-in;
    outline: none;
    display: block;
    width: 100%;
`;

export default connect(null, { searchMovies })(Search);



