import { useEffect, useRef, useState } from 'react'
import { clsx } from 'clsx'
import { FaEarthAmericas } from 'react-icons/fa6'
import { AiFillClockCircle, AiTwotoneCalendar } from 'react-icons/ai'
import * as dayjs from 'dayjs'
interface Props {
  ip: string
  city: string
  country_name: string
}

function Component({ ip, city, country_name }: Props) {
  const [now, setNow] = useState(dayjs())
  const timerRef = useRef(null)
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    timerRef.current = setInterval(() => {
      setNow(dayjs())
    }, 1000)
    return () => {
      clearInterval(timerRef.current)
    }
  })

  return (
    <div className={clsx('p-4', 'flex flex-col items-center gap-1')}>
      <div
        className={clsx(
          'mb-3 text-white bg-blue-500 py-2 px-4  rounded-full',
          'inline-flex flex-row items-center gap-3',
        )}
      >
        Your IP address is : {ip}
      </div>
      <div className={clsx('flex flex-row items-center gap-2 w-64')}>
        <FaEarthAmericas></FaEarthAmericas>
        You are located in {city},{country_name}
      </div>
      <div className={clsx('flex flex-row items-center gap-2 w-64')}>
        <AiTwotoneCalendar></AiTwotoneCalendar>
        Today is : {now.format('YYYY-MM-DD')}
      </div>
      <div className={clsx('flex flex-row items-center gap-2', 'w-64')}>
        <AiFillClockCircle></AiFillClockCircle>
        The local time is : {now.format('HH:mm:ss')}
      </div>
      <div className={clsx('font-bold text-blue-500')}>
        Click the map marker for extra infos
      </div>
    </div>
  )
}

export default Component
