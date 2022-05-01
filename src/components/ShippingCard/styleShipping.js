import styled from 'styled-components';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';

export const BoxTracking = styled.div`
  width: 600px;
  height: 200px;
  display: flex;
  flex-diretion: column;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  & > h2 {
    margin-bottom: 50px;
  }

  & > a {
    color: #1e1e1e;
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    width: 220px;
    height: 100px;
    border-bottom: 4px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      border-bottom: 4px solid #fa680c;
    }
  }
`;

export const Tracking = styled.div`
  width: 500px;
  height: 30px;
  border-radius: 50px;
  background-color: ${(props) => {
    if (props.status === 'delivered') {
      return ' #1e1e1e';
    } else {
      return '#f2f2f2';
    }
  }};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  position: relative;
`;

export const Transfer = styled.div`
  width: 250px;
  height: 30px;
  border-radius: 50px;
  background-color: ${(props) => {
    if (props.status === 'shipping') {
      return ' #1e1e1e';
    } else {
      return 'transparent';
    }
  }};
`;

export const Span1 = styled(IoCheckmarkCircleSharp)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  color: #fa680c;
  justify-content: center;
  top: 5px;
  left: 5px;
`;

export const Span2 = styled(IoCheckmarkCircleSharp)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  color: ${(props) => {
    if (props.status !== 'ordered') {
      return '#fa680c';
    } else {
      return '#1e1e1e4e';
    }
  }};
  justify-content: center;
  top: 5px;
  left: 225.5px;
`;

export const Span3 = styled(IoCheckmarkCircleSharp)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  color: ${(props) => {
    if (props.status === 'delivered') {
      return '#fa680c';
    } else {
      return '#1e1e1e4e';
    }
  }};
  display: flex
  align-items: center;
  justify-content: center;
  top: 5px;
  left: 475.5px;
`;

export const BoxInfo = styled.div`
  width: 500px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Ordered = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  width: 100px;
  height: 100px;
  & > p {
    margin: 3px;
  }
  & > p:nth-child(1) {
    font-size: 14px;
    font-weight: bold;
  }
  & > p:nth-child(2) {
    font-size: 12px;
  }
  & > p:nth-child(3) {
    font-size: 11px;
  }
`;
export const Progress = styled.div`
  width: 100px;
  height: 100px;

  & > p {
    margin: 5px;
    font-size: 14px;
    font-weight: bold;
    color: ${(props) => {
      if (props.status !== 'ordered') {
        return 'black';
      } else {
        return '#6a6a6a7a';
      }
    }};
  }
`;
export const Delivered = styled.div`
  width: 100px;
  height: 100px;
  text-align: right;
  font-size: 14px;
  & > p {
    margin: 3px;
  }

  & > p:nth-child(1) {
    font-weight: bold;
    color: ${(props) => {
      if (props.status === 'delivered') {
        return 'black';
      } else {
        return '#6a6a6a7a';
      }
    }};
  }
  & > p:nth-child(2) {
    font-size: 12px;
  }
`;
