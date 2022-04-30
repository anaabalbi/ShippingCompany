import React, { useContext } from 'react';
import PackageTracking from '../../components/PackageTracking/PackageTracking';
import { useApi } from '../../Hooks/useApi';
import { SearchModalContext } from '../../Provider/context-modal';

const Busca = () => {
  const { codeTracking, setCodeTracking } = useContext(SearchModalContext);
  localStorage.getItem('codeTrackingStorage', codeTracking);

  return (
    <>
      <PackageTracking></PackageTracking>
    </>
  );
};

export default Busca;
