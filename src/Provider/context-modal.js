import React, { createContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

export const SearchModalContext = createContext();

export const SearchModalProvider = (props) => {
  const [openSearchModal, setOpenSearchModal] = useState();
  const [codeTracking, setCodeTracking] = useState();
  // const navigate = useNavigate();
  function handleOpen() {
    setOpenSearchModal(true);
    console.log(openSearchModal);
  }

  function handleClose() {
    setOpenSearchModal(false);
  }

  function codeHandler(e) {
    setCodeTracking(e.target.value);
    localStorage.setItem('codeTrackingStorage', e.target.value);
    console.log(codeTracking);
  }

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   console.log(codeTracking);
  //   if (codeTracking === '') {
  //     alert('digite o código de rastreio');
  //   } else {
  //     navigate('/search' + codeTracking);
  //     handleClose();
  //   }
  // }

  return (
    <SearchModalContext.Provider
      value={{
        handleOpen,
        handleClose,
        openSearchModal,
        codeTracking,
        setCodeTracking,
        codeHandler,
      }}
    >
      {props.children}
    </SearchModalContext.Provider>
  );
};
