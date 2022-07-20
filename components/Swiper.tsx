import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";
import { SwiperCard } from "./SwiperCard";

const Container = styled.div`
   width: 200px;
   margin:auto;
`;

const initialState = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
export const SwiperContainer = () => {

  const [arrNumbers, setArrNumbers] = useState<number[]>(initialState); 

  const desordenar = (arr:number[]) => {
    const length = arr.length

    for (let i = 0; i < length; i++) {
      const rand_index = Math.floor(Math.random() * length)

      const rand = arr[rand_index]

      arr[rand_index] = arr[i]
      arr[i] = rand
    }
  }

  useEffect( () => {
    desordenar(arrNumbers);
    setArrNumbers(arrNumbers);
  },[]);

  return (
    <Container>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >

        {
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
