import React, { useContext } from 'react';
import PackageTracking from '../../components/PackageTracking/PackageTracking';
import { useApi } from '../../Hooks/useApi';
import { SearchModalContext } from '../../Provider/context-modal';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';

const Busca = () => {
  const { codeTracking, setCodeTracking } = useContext(SearchModalContext);
  localStorage.getItem('codeTrackingStorage', codeTracking);

  return (
    <>
      <HeaderHome></HeaderHome>
      <PackageTracking></PackageTracking>
      <Footer></Footer>
    </>
  );
};

export default Busca;
