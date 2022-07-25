import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";
import { SwiperCard } from "./SwiperCard";
import { Button } from "../styled/Games.module";

const Container = styled.div`
   width: 200px;
   margin:auto;
`;

const initialState = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
export const SwiperContainer = () => {

  const [arrNumbers, setArrNumbers] = useState<number[]>(initialState);
  const [isUntidy, setIsUntidy] = useState<boolean>(false);
  
  useEffect( () => {
    desordenarArray();
  },[]);

  const desordenarArray = () => {
    const desordenado = arrNumbers.sort(() => Math.random() - 0.5);
    setArrNumbers(desordenado);
    setIsUntidy(true);
  }
 
  return (
      <Container>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {
            (isUntidy) &&
            arrNumbers.map(item => (
              <SwiperSlide key={item}>
                <SwiperCard num={item}></SwiperCard>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Container>
      
  );
}
