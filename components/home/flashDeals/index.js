import React, { useRef, useState } from 'react'

import styles from './styles.module.scss'
import { MdFlashOn } from 'react-icons/md'
import CountDown from '@/components/countdown'
import { flashDealsArray } from '@/data/home'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import FlashCard from './Card'

export default function FlashDeals() {
  return (
    <div className={styles.flashDeals}>
      <div className={styles.flashDeals__header}>
        <h1>
          Flash Sale
          <MdFlashOn />
        </h1>
        <CountDown />
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="flashDeals__swiper"
      >
        <div className={styles.flashDeals__list}>
          {flashDealsArray.map((item, index) => (
            <SwiperSlide key={index}>
              <FlashCard product={item} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  )
}
