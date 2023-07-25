import dayjs from 'dayjs'

export const calculateRemainingTime = (timeInMs) => {
  const timestamDayjs = dayjs(timeInMs)
  const nowDayjs = dayjs()

  if (timestamDayjs.isBefore(nowDayjs)) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    }
  }

  return {
    seconds: getRemainingSeconds(timestamDayjs, nowDayjs),
    minutes: getRemainingMinutes(timestamDayjs, nowDayjs),
    hours: getRemainingHours(timestamDayjs, nowDayjs),
    days: getRemainingDays(timestamDayjs, nowDayjs),
  }
}

function getRemainingSeconds(timestamDayjs, nowDayjs) {
  const totalSeconds = timestamDayjs.diff(nowDayjs, 'seconds') % 60
  return padWithZero(totalSeconds, 2)
}

function getRemainingMinutes(timestamDayjs, nowDayjs) {
  const totalMinutes = timestamDayjs.diff(nowDayjs, 'minutes') % 60
  return padWithZero(totalMinutes, 2)
}

function getRemainingHours(timestamDayjs, nowDayjs) {
  const totalHours = timestamDayjs.diff(nowDayjs, 'hours') % 24
  return padWithZero(totalHours, 2)
}

function getRemainingDays(timestamDayjs, nowDayjs) {
  const totalDays = timestamDayjs.diff(nowDayjs, 'days')
  return totalDays
}

// => 1 => 01
function padWithZero(number, length) {
  const numberStr = number.toString()
  if (numberStr.length >= length) {
    return numberStr
  }
  return '0'.repeat(length - numberStr.length) + numberStr
}
