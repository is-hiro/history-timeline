import {Timeline} from '../../types'
import styles from './TimelineCircle.module.scss'
import {timelines} from '../../data/timelines'
import {getTimelinePoints} from '../../utils/geometry'
import {useEffect, useMemo, useState} from 'react'
import {motion, useMotionValue, useTransform, animate} from 'motion/react'
import clsx from 'clsx'

type Props = {
  timeline?: Timeline;
  setTimeLine: (timeline: Timeline) => void;
}

const CIRCLE_SIZE = 520
const ACTIVE_TARGET_ANGLE = -45

export const TimelineCircle = ({timeline, setTimeLine}: Props) => {
  const points = getTimelinePoints(CIRCLE_SIZE, timelines)
  const [isAnimate, setIsAnimate] = useState<boolean>(false)
  const activeTimeline = points.find((p) => p.timeline.id === timeline?.id) || points[0]
  const [displayedName, setDisplayedName] = useState(activeTimeline.timeline.name)
  const targetRotation = useMemo(() => ACTIVE_TARGET_ANGLE - activeTimeline.angle, [activeTimeline.angle])

  const rotate = useMotionValue(0)
  const counterRotate = useTransform(rotate, (v) => -v)

  useEffect(() => {
    setIsAnimate(true)
    const controls = animate(rotate, targetRotation,
        {
          type: 'spring',
          duration: 1,
          onComplete: () => {
            setDisplayedName(activeTimeline.timeline.name)
            setIsAnimate(false)
          },
        })
    return () => controls.stop()
  }, [rotate, targetRotation, activeTimeline.timeline.name])


  return (
      <div className={styles.container}>
        <motion.div
            style={{
              width: CIRCLE_SIZE,
              height: CIRCLE_SIZE,
              rotate,
            }}
            onAnimationComplete={() => setIsAnimate(false)}
            onAnimationStart={() => setIsAnimate(true)}
            className={styles.timelineCircle}
        >
          {points.map((p) => {
            const isActive = p.timeline.id === timeline?.id

            return (
                <div
                    key={p.timeline.id}
                    className={clsx(styles.timeline, {[styles.active]: isActive})}
                    style={{
                      position: 'absolute',
                      left: p.x,
                      top: p.y,
                      transform: 'translate(-50%, -50%)',
                    }}
                >
                  <motion.button
                      className={styles.timeButton}
                      onClick={() => setTimeLine(p.timeline)}
                      type="button"
                  >
                    <motion.p
                        style={{rotate: counterRotate}}
                        className={styles.order}
                    >
                      {p.timeline.id}
                    </motion.p>
                  </motion.button>
                </div>
            )
          })}
        </motion.div>
        <motion.p
            className={styles.name}
            style={{left: CIRCLE_SIZE - 40}}
            initial={false}
            animate={{opacity: isAnimate ? 0 : 1}}
            transition={{duration: 0.3, ease: 'easeInOut'}}
        >
          {displayedName}
        </motion.p>

      </div>
  )
}
