import {Timeline} from '../types'

export interface TimelinePoint {
  x: number;
  y: number;
  angle: number;
  timeline: Timeline;
}

export const getPointOnCircle = (
    centerX: number,
    centerY: number,
    radius: number,
    angleDeg: number
) => {
  const angleRad = (angleDeg * Math.PI) / 180

  return {
    x: centerX + radius * Math.cos(angleRad),
    y: centerY + radius * Math.sin(angleRad),
  }
}

export const getTimelinePoints = (
    size: number,
    timelines: Timeline[]
): TimelinePoint[] => {
  const count = timelines.length
  if (!count) return []

  const center = size / 2
  const radius = center

  const step = 360 / count

  return timelines.map((timeline, index) => {
    const angleDeg = -90 + step * index
    const {x, y} = getPointOnCircle(center, center, radius, angleDeg)

    return {
      x,
      y,
      angle: angleDeg,
      timeline
    }
  })
}
