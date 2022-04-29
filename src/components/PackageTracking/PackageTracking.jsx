import React, { useContext } from 'react';
import { BoxPackage, SectionPackage } from './stylePackageTracking';
import Shipping from '../ShippingCard/Shipping';
// import { SearchModalContext } from '../../Provider/context-modal';
// import { UrlGetCode } from '../../service/Api';
import { useApi } from '../../Hooks/useApi';
import { SearchModalContext } from '../../Provider/context-modal';
import Animation from '../Animation/Animation';

const PackageTracking = () => {
  const { codeTracking } = useContext(SearchModalContext);
  localStorage.setItem('codeTrackingStorage', codeTracking);
  const { data, isFetching } = useApi(
    `//transportadora-pedido.herokuapp.com/address/codetracking/${codeTracking}`
  );

  return (
    <SectionPackage>
      <BoxPackage>
        {data.length < 1 ? (
          <Shipping>
            {' '}
            <h3>Pedido não encontrado</h3>
          </Shipping>
        ) : isFetching ? (
          <Animation></Animation>
        ) : (
          <Shipping
            codeTracking={data.CODE_TRACKING}
            senderState={data.SENDER_STATE}
            senderCountry={data.SENDER_COUNTRY}
            addresseeState={data.ADDRESSEE_STATE}
            addresseeCountry={data.ADDRESSEE_COUNTRY}
            dateCreate={data.DATE_ORDERED}
            status={data.STATUS}
          />
        )}
      </BoxPackage>
    </SectionPackage>
  );
};

export default PackageTracking;
