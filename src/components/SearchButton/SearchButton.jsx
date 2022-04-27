import React from 'react';
import { Button, SearchIcon } from './style';
import { SearchModalContext } from '../../provider/context-modal';
import { useContext } from 'react';

const SearchButton = () => {
  const { handleOpen } = useContext(SearchModalContext);

  return (
    <>
      <Button onClick={handleOpen}>
        <SearchIcon />
      </Button>
    </>
  );
};

export default SearchButton;
