import React from 'react';
import RadioSelectors from './SearchBox/RadioSelectors';
import SearchInput from './SearchBox/SearchInput';
import SearchButton from './SearchBox/SearchButton';
import '../styles/styles.css';

function SearchBar() {
  return (
    <div>
      <SearchInput />
      <RadioSelectors />
      <SearchButton />
    </div>
  );
}

export default SearchBar;
