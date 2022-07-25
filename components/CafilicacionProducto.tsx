import React, { useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Qualification } from '../styled/Product.module';

interface Props {
    calif: number;
}
export const CafilicacionProducto = ({calif}:Props) => {
  
    const crearEstrellas = () => {
        const stars = new Array(calif);

        for(let i = 0; i < stars.length; i++){
            stars[i] = i;
        }

        return (
            stars.map( star => (
                <div key={star}>
                    <AiFillStar size="2rem" color="orange"/>
                </div>
            ))
        )

    };
    
    return (
        <Qualification>
        {crearEstrellas()}
        </Qualification>  
    )
}
