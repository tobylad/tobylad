export const formatDate = (date: Date) => {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  
  // Format date: SUN SEP 22 2024
  const currentDayOfWeek = days[date.getDay()]
  const month = months[date.getMonth()]
  const dayOfMonth = date.getDate()
  const year = date.getFullYear()
  const formattedDate = `${currentDayOfWeek} ${month} ${dayOfMonth} ${year}`

  return formattedDate
}

const formatTime = (date: Date) => {
  // Format Time - 'HH : MM : SS AM/PM'
  const hours = date.getHours()
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12
  const period = hours >= 12 ? 'PM' : 'AM'
  const formattedMinutes = date.getMinutes().toString().padStart(2, '0')
  const formattedSeconds = date.getSeconds().toString().padStart(2, '0')
  const formattedTime = `${formattedHours} : ${formattedMinutes} : ${formattedSeconds} ${period}`

  return formattedTime
}

export const formatDateTime = (): CurrentDateTime => {
  const today = new Date()
  const date = formatDate(today)
  const time = formatTime(today)

  return { date, time }
}
