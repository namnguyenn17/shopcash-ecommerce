import React from 'react'
import styles from './styles.module.scss'
import MainSwiper from './swiper'

export default function index() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>Header</div>
      <div className={styles.menu}>Menu</div>
      <MainSwiper />
      <div className={styles.offers}>Offer</div>
      <div className={styles.user}>User</div>
    </div>
  )
}
