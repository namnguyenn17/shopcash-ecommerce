import React from 'react'
import styles from './styles.module.scss'
import { useMediaQuery } from 'react-responsive'
import { BsArrowRightCircle } from 'react-icons/bs'

export default function Category({ title, products, background }) {
  const isMedium = useMediaQuery({ query: '(max-width: 1300px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 550px)' })

  return (
    <div className={styles.category} style={{ background: `${background}` }}>
      <div className={styles.category__header}>
        <h1>{title}</h1>
        <BsArrowRightCircle />
      </div>
      <div className={styles.category__list}>
        {products
          .slice(0, isMobile ? 6 : isMedium ? 4 : 6)
          .map((product, index) => (
            <div key={index} className={styles.item}>
              <img src={product.image} alt={product.name} />
            </div>
          ))}
      </div>
    </div>
  )
}
