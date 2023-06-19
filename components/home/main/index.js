import React from 'react'
import styles from './styles.module.scss'
import MainSwiper from './Swiper'
import Offers from './Offers'
import Menu from './Menu'

export default function index() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>Header</div>
      <Menu />
      <MainSwiper />
      <Offers />
      <div className={styles.user}>User</div>
    </div>
  )
}
