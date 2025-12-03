import {Timeline} from '../../types'
import styles from './Stepper.module.scss'
import {timelines} from '../../data/timelines'
import {
  MdKeyboardArrowLeft as MdKeyboardArrowLeftRaw,
  MdKeyboardArrowRight as MdKeyboardArrowRightRaw,
} from 'react-icons/md'
import clsx from 'clsx'
import {FC, useMemo} from 'react'

const MdKeyboardArrowLeft: FC = MdKeyboardArrowLeftRaw as unknown as FC
const MdKeyboardArrowRight: FC = MdKeyboardArrowRightRaw as unknown as FC

type Props = {
  timeline: Timeline;
  setTimeline: (timeline: Timeline) => void;
};

export const Stepper: FC<Props> = ({timeline, setTimeline}) => {
  const currentStep = useMemo(
      () => timelines.findIndex((t) => t.id === timeline.id),
      [timeline]
  )

  const isFirst = currentStep <= 0
  const isLast = currentStep >= timelines.length - 1

  const handleNext = () => {
    if (isLast) return
    const next = timelines[currentStep + 1]
    setTimeline(next)
  }

  const handlePrev = () => {
    if (isFirst) return
    const prev = timelines[currentStep - 1]
    setTimeline(prev)
  }

  return (
      <div className={styles.Stepper}>
        <div className={styles.arrows}>
          <p>
            {currentStep + 1}/{timelines.length}
          </p>

          <div className={styles.actions}>
            <button onClick={handlePrev} disabled={isFirst}>
              <MdKeyboardArrowLeft/>
            </button>
            <button onClick={handleNext} disabled={isLast}>
              <MdKeyboardArrowRight/>
            </button>
          </div>
        </div>

        <div className={styles.circles}>
          {timelines.map((t) => (
              <div
                  key={t.id}
                  onClick={() => setTimeline(t)}
                  className={clsx(styles.circle, {
                    [styles.active]: t.id === timeline.id,
                  })}
              />
          ))}
        </div>
      </div>
  )
}
