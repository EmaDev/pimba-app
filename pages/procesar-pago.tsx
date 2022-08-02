import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import { authContext } from '../context/AuthContext';

const procesarPago = () => {

  const {user} = useContext(authContext);
  const {push} = useRouter();

  useEffect( () => {
    if(!user) {
        push('/');
    }
  },[]);

  return (
    <div>procesar-pago</div>
  )
}

export default procesarPago;
