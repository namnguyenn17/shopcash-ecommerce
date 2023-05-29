import React from 'react'
import styles from './styles.module.scss'
import Ad from './Ad.jsx'
import Top from './Top.jsx'
import Main from './Main.jsx'

export default function Header({ country }) {
  return (
    <header className={styles.header}>
      <Ad />
      <Top country={country} />
      <Main />
    </header>
  )
}
