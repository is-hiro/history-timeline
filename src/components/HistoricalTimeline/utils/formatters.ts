import {IHistoricalEvent, Timeline} from '../types'

interface Props {
  events: IHistoricalEvent[],
  timeline?: Timeline
}

export const eventsByTimeline = ({events, timeline} : Props) => {
  if(!timeline) return []
  return events.filter(event => event.year > timeline.startYear && event.year < timeline.endYear && timeline.type === event.type).sort((a, b) => a.year - b.year)
}