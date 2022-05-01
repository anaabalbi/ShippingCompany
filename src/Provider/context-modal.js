import React, { createContext, useState } from 'react';

export const SearchModalContext = createContext();

export const SearchModalProvider = (props) => {
  const [openSearchModal, setOpenSearchModal] = useState();
  const [codeTracking, setCodeTracking] = useState('');
  const [data, setData] = useState({});
  function handleOpen() {
    setOpenSearchModal(true);

    console.log(openSearchModal);
  }

  function handleClose() {
    setOpenSearchModal(false);
  }

  function codeHandler(e) {
    setCodeTracking(e.target.value);
  }

  return (
    <SearchModalContext.Provider
      value={{
        handleOpen,
        handleClose,
        openSearchModal,
        codeTracking,
        setCodeTracking,
        codeHandler,
        data,
        setData,
      }}
    >
      {props.children}
    </SearchModalContext.Provider>
  );
};
