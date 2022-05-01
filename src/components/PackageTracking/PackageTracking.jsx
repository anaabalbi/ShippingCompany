import React, { useContext } from 'react';

import {
  BoxPackage,
  SectionPackage,
  ButtonReturn,
} from './stylePackageTracking';
import { Link } from 'react-router-dom';

import Shipping from '../ShippingCard/Shipping';
// import { SearchModalContext } from '../../Provider/context-modal';
// import { UrlGetCode } from '../../service/Api';
import { useApi } from '../../Hooks/useApi';
import { SearchModalContext } from '../../Provider/context-modal';
import Animation from '../Animation/Animation';

const PackageTracking = () => {
  const { codeTracking } = useContext(SearchModalContext);

  const { data, isFetching, error } = useApi(

    `//transportadora-pedido.herokuapp.com/address/codetracking/${codeTracking}`
  );

  return (
    <SectionPackage>
      <BoxPackage>
        {isFetching ? (
          <Animation></Animation>

        ) : data != undefined ? (

          <Shipping
            codeTracking={data.CODE_TRACKING}
            senderState={data.SENDER_STATE}
            senderCountry={data.SENDER_COUNTRY}
            addresseeState={data.ADDRESSEE_STATE}
            addresseeCountry={data.ADDRESSEE_COUNTRY}
            dateCreate={data.DATE_ORDERED}
            status={data.STATUS}
          />

        ) : (
          <ButtonReturn>
            <strong>PEDIDO NÃO ENCONTRADO</strong>
            <Link to={'/'}>Voltar para página inicial</Link>
          </ButtonReturn>

        )}
      </BoxPackage>
    </SectionPackage>
  );
};

export default PackageTracking;
