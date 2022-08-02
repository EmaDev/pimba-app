import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import { authContext } from '../context/AuthContext';

export const ProcessPayment = () => {

    const {user} = useContext(authContext); 
    const {push} = useRouter();

    useEffect( () => {
        if(!user) push('/');
    },[]);
  
    return (
    <div>ProcessPayment</div>
  )
}
