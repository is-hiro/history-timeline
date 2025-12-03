import styles from "./TimelineDates.module.scss"
import {Timeline} from '../../types'
import CountUp from 'react-countup'
import {useEffect, useState} from 'react'

type Props = {
  timeline?: Timeline
}

export const TimelineDates = ({timeline}: Props) => {
  const [currentTimeline, setCurrentTimeline] = useState({
    start: 0,
    end: 0
  })

  useEffect(() => {
    if (!timeline) return

    const timeoutId = setTimeout(() => {
      setCurrentTimeline({
        start: timeline.startYear,
        end: timeline.endYear,
      })
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [timeline])
  if (!timeline) return null

  return (
      <div className={styles.TimelineDates}>
        <h1>
          <CountUp
              key={`start-${timeline.startYear}`}
              start={currentTimeline.start}
              end={timeline.startYear}
              duration={1}
              separator=""
          />
        </h1>
        <h1>
          <CountUp
              key={`end-${timeline.endYear}`}
              start={currentTimeline.end}
              end={timeline.endYear}
              duration={1}
              separator=""
          />
        </h1>
      </div>
  )
}