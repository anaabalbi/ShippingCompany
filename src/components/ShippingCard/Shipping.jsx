import React from 'react';
import { Link } from 'react-router-dom';
import {
  BoxTracking,
  Tracking,
  Transfer,
  Span1,
  Span2,
  Span3,
  BoxInfo,
  Delivered,
  Progress,
  Ordered,
} from './styleShipping';

export default function Shipping({
  codeTracking,
  status,
  senderState,
  senderCountry,
  addresseeCountry,
  addresseeState,
  dateCreate,
}) {
  return (
    <li>
      <BoxTracking>
        <h2>Code Tracking : {codeTracking}</h2>

        <Tracking status={status}>
          <Transfer status={status}></Transfer>
          <Span1 status={status}></Span1>
          <Span2 status={status}></Span2>
          <Span3 status={status}></Span3>
        </Tracking>
        <BoxInfo>
          <Ordered status={status}>
            <p>Ordered</p>
            <p>
              {senderState} / {senderCountry}
            </p>
            <p>{dateCreate}</p>
          </Ordered>
          <Progress status={status}>
            <p>Shipped</p>
          </Progress>
          <Delivered status={status}>
            <p>Delivered</p>
            <p>
              {addresseeState} / {addresseeCountry}
            </p>
          </Delivered>
        </BoxInfo>
        <Link to='/'> Voltar para página inicial </Link>
      </BoxTracking>
    </li>
  );
}
