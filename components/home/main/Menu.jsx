import React from 'react'

import styles from './styles.module.scss'
import { BiCategory } from 'react-icons/bi'
import { menuArray } from '@/data/home'
import Link from 'next/link'

export default function Menu() {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <a href="" className={styles.menu__header}>
            <BiCategory />
            <b>Category</b>
          </a>
        </li>
        <div className={styles.menu__list}>
          {menuArray.map((item, i) => (
            <Link key={i} href={item.link} legacyBehavior>
              <a href="">
                <span>{item.name}</span>
              </a>
            </Link>
          ))}
        </div>
      </ul>
    </div>
  )
}
