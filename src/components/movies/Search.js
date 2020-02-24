import React, { useState } from 'react';
import styled from 'styled-components';

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

const Search = () => {

  const [text, setText ] = useState('');

  return (
    <div>
      <form>
        <input
          type="text"
          name="text"
          value={text}
          placeholder="Search users..."
          onChange={e => setText(e.target.value)} />
      </form>
      <Button className="blue">Clear</Button>
    </div>
  )
};

export default Search;

