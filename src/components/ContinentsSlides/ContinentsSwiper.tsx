import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {  Pagination,Navigation } from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);

import { ReactNode } from "react";

import styles from './styles.module.scss';

interface ContinentsSwiperProps {
  children: ReactNode
}

export function ContinentsSwiper({ children }: ContinentsSwiperProps) {
  return (
    <Box
      m={["20px auto 24px", "52px auto 40px"]}
      w={["100%", 1240]}
      h={["250px", "450px"]}
    >
      <Swiper 
        slidesPerView={1} 
        spaceBetween={1} 
        loop={true} 
        pagination={{"clickable": true}} 
        navigation={true}
        className={styles.navigationChanged}
      >
          {children}
      </Swiper>
    </Box>
  )
}