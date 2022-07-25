import React, { useState } from 'react';

export const useAddRemove = (initialValue?:number) => {
  
  const [quatity, setquatity] = useState<number>(initialValue || 1);
  
  const addQuatity = () => {
    setquatity( quatity + 1);
  }
  const removeQuatity = () => {
    setquatity( quatity - 1);
  }

  return {quatity, addQuatity, removeQuatity};
}
