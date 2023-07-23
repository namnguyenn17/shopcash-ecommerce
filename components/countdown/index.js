import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { calculateRemainingTime } from './utils'

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
}

export default function CountDown({ date }) {
  const [timeInMs, setTimeInMs] = useState(date.getTime())

  useEffect(() => {
    setTimeInMs(date.getTime())
  }, [date])

  const [remainingTime, setRemainingTime] = useState()

  useEffect(() => {
    const interval = setInterval(() => {
      updateRemainingTime(timeInMs)
    }, 1000)
    return () => clearInterval(interval)
  }, [timeInMs])

  const updateRemainingTime = (timeInMs) => {
    setRemainingTime(calculateRemainingTime(timeInMs))
  }

  return (
    <div className={styles.countdown}>
      {/* {[...Array(remainingTime?.days?.length).keys()].map((d, index) => (
        <span key={index}>{remainingTime?.days?.slice(index, index + 1)}</span>
      ))} */}
      {/* <b>:</b> */}
      <span>{remainingTime?.hours.slice(0, 1)}</span>
      <span>{remainingTime?.hours.slice(1, 2)}</span>
      <b>:</b>
      <span>{remainingTime?.minutes.slice(0, 1)}</span>
      <span>{remainingTime?.minutes.slice(1, 2)}</span>
      <b>:</b>
      <span>{remainingTime?.seconds.slice(0, 1)}</span>
      <span>{remainingTime?.seconds.slice(1, 2)}</span>
    </div>
  )
}
