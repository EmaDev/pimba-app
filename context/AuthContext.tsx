import React, { createContext, useEffect, useState } from 'react';
import { UserData, createUserWithEmailandPasswordAuth, signInWithEmailAndPasswordAuth, checkIfIsLogged, logOut } from '../firebase/Auth';
import Swal from 'sweetalert2';

interface Response {
  ok: boolean;
  msg: string;
  user?: any;
}

interface AuthContextProps {
  user: any;
  isLoading: boolean;
  createUserWithEmail: (email: string, password: string) => void;
  loginWithEmail: (email: string, password: string) => void;
  logOut: () => void;
}
export const authContext = createContext({} as AuthContextProps);


export const AuthProvider = ({ children }: any) => {

  const [userState, setUserState] = useState<UserData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect( () => {
    checkIfIsAutenticated();
  },[]);

  const checkIfIsAutenticated = async() => {
    const resp = await checkIfIsLogged(setUserState);
    setIsLoading(false);
  }

  const createUserWithEmail = async (email: string, password: string) => {
    const user: Response = await createUserWithEmailandPasswordAuth(email, password);
    if (user.ok) {
      setUserState(user.user);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cuenta creada correctamente',
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  const loginWithEmail = async (email: string, password: string) => {
    const user: Response = await signInWithEmailAndPasswordAuth(email, password);

    if (user.ok) {
      setUserState(user.user);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Ingreso correcto',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      alert('error');
      console.log(user.msg);
    }
  }

  const closeSession = () => {
    logOut();
    setUserState(undefined);
  }

  return (
    <authContext.Provider value={{
      user: userState,
      isLoading,
      createUserWithEmail,
      loginWithEmail,
      logOut: closeSession,
    }}>
      {children}
    </authContext.Provider>
  )
}
