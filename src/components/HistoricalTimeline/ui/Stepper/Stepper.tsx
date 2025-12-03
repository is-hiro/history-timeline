import {Timeline} from '../../types'
import styles from './Stepper.module.scss'
import {timelines} from '../../data/timelines'
import {FC, useState, useEffect} from 'react'
import {
  MdKeyboardArrowLeft as MdKeyboardArrowLeftRaw,
  MdKeyboardArrowRight as MdKeyboardArrowRightRaw,
} from 'react-icons/md'
import clsx from 'clsx'

const MdKeyboardArrowLeft: FC = MdKeyboardArrowLeftRaw as unknown as FC
const MdKeyboardArrowRight: FC = MdKeyboardArrowRightRaw as unknown as FC

type Props = {
  timeline?: Timeline;
  setTimeline: (timeline: Timeline) => void;
};

export const Stepper = ({timeline, setTimeline}: Props) => {
  const [currentStep, setCurrentStep] = useState<number>(0)

  useEffect(() => {
    if (!timeline) return
    const idx = timelines.findIndex((t) => t.id === timeline.id)
    if (idx !== -1) {
      setCurrentStep(idx)
    }
  }, [timeline])

  const handleNext = () => {
    setCurrentStep((prev) => {
      const next = Math.min(prev + 1, timelines.length - 1)
      if (next !== prev) {
        setTimeline(timelines[next])
      }
      return next
    })
  }

  const handlePrev = () => {
    setCurrentStep((prev) => {
      const next = Math.max(prev - 1, 0)
      if (next !== prev) {
        setTimeline(timelines[next])
      }
      return next
    })
  }

  return (
      <div className={styles.Stepper}>
        <div className={styles.arrows}>
          <p>
            {currentStep + 1}/{timelines.length}
          </p>
          <div className={styles.actions}>
            <button onClick={handlePrev} disabled={currentStep === 0}>
              <MdKeyboardArrowLeft/>
            </button>
            <button
                onClick={handleNext}
                disabled={currentStep === timelines.length - 1}
            >
              <MdKeyboardArrowRight/>
            </button>
          </div>
        </div>

        <div className={styles.circles}>
          {Array.from(timelines).map((t, i) => (
              <div className={clsx(styles.circle, {[styles.active]: t.id === timeline?.id})}>

              </div>))}
        </div>
      </div>
  )
}
