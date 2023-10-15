import React, { createContext, useState } from 'react';
import { IUser } from '../pages/service-providers/servicers';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar';

interface IAuth {
  isLoggedIn: boolean | null;
  setIsLoggedIn?: React.Dispatch<React.SetStateAction<boolean>>;
  serviceProvider?: IUser | null;
  setServiceProvider?: React.Dispatch<React.SetStateAction<IUser | null>>;
}

type AuthChildren=React.ReactNode


const Auth = createContext<IAuth>({
  isLoggedIn: false,
});

export default function AuthContextProvider({children}:{children:AuthChildren}) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [serviceProvider, setServiceProvider] = useState<IUser | null>(null);

  return (
    <Auth.Provider value={{ isLoggedIn, setIsLoggedIn, serviceProvider, setServiceProvider }}>
    <NavBar isShowOptions={true} />

      <Outlet />
      {children}
    </Auth.Provider>
  );
}
