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
        <CountDown date={new Date(2024, 6, 27, 15, 10)} />
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="flashDeals__swiper"
        breakpoints={{
          450: {
            slidesPerView: 2,
          },
          630: {
            slidesPerView: 3,
          },
          920: {
            slidesPerView: 4,
          },
          1232: {
            slidesPerView: 5,
          },
        }}
      >
        <div className={styles.flashDeals__list}>
          {flashDealsArray.map((product, index) => (
            <SwiperSlide key={index}>
              <FlashCard product={product} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  )
}
