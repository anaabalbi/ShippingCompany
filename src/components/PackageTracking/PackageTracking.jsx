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
        ) : error.erro != true ? (
          <Shipping
            codeTracking={data[0].CODE_TRACKING}
            senderState={data[0].SENDER_STATE}
            senderCountry={data[0].SENDER_COUNTRY}
            addresseeState={data[0].ADDRESSEE_STATE}
            addresseeCountry={data[0].ADDRESSEE_COUNTRY}
            dateCreate={data[0].DATE_ORDERED}
            status={data[0].STATUS}
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
