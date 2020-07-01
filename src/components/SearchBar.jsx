import React from 'react';
import RadioSelectors from './SearchBox/RadioSelectors';
import '../styles/styles.css';
import SearchInput from './SearchBox/SearchInput';
import SearchButton from './SearchBox/SearchButton';

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
