import {IHistoricalEvent} from '../../types'
import styles from './HistoricalEvent.module.scss'

interface HistoricalEventProps {
  event: IHistoricalEvent;
}

export const HistoricalEvent = ({event}: HistoricalEventProps) => {
  return (<div className={styles.event}>
    <p>{event.year}</p>
    <p>{event.text}</p>
  </div>)
}