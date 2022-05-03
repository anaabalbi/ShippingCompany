import { createContext, useState } from 'react';

export const ContextUser = createContext();
export const InfoUserProvider = (props) => {
  const [dataUser, setDataUser] = useState({});
  return (
    <ContextUser.Provider value={{ dataUser, setDataUser }}>
      {props.children}
    </ContextUser.Provider>
  );
};
