import {SwipeLine} from './SwipeLine/SwipeLine'
import {useEffect, useState} from 'react'
import {IHistoricalEvent, Timeline} from '../types'
import {eventsByTimeline} from '../utils/formatters'
import {events} from '../data/events'
import {TimelineCircle} from './TimelineCircle/TimelineCircle'
import {timelines} from '../data/timelines'
import styles from './HistoricalTimeline.module.scss'
import {TimelineDates} from './TimelineDates/TimelineDates'
import {Stepper} from './Stepper/Stepper'
import {isMobile} from 'react-device-detect'

export const HistoricalTimeline = () => {
  const [currentTimeline, setCurrentTimeline] = useState<Timeline>()
  const [currentEvents, setCurrentEvents] = useState<IHistoricalEvent[]>([])
  useEffect(() => {
    if (!currentTimeline) {
      setCurrentTimeline(timelines[0])
    }
    const filtered = eventsByTimeline({events, timeline: currentTimeline})
    setCurrentEvents(filtered)
  }, [currentTimeline])

  const setTimeLine = (timeLine: Timeline) => {
    setCurrentTimeline(timeLine)
  }
  return (
      <div className={styles.historicalTimeline}>
        <div className={styles.title}>
          <h1>Historical dates</h1>
        </div>
        {!isMobile && <TimelineCircle timeline={currentTimeline} setTimeLine={setTimeLine}/>}
        <TimelineDates timeline={currentTimeline}/>
        <Stepper timeline={currentTimeline} setTimeline={setTimeLine}/>
        <SwipeLine events={currentEvents}/>
      </div>
  )
}