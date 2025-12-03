import React, {FC} from 'react'
import {
  MdKeyboardArrowLeft as MdKeyboardArrowLeftRaw,
  MdKeyboardArrowRight as MdKeyboardArrowRightRaw,
} from 'react-icons/md'
import {useRef} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import {HistoricalEvent} from '../HistoricalEvent/HistoricalEvent'
import {IHistoricalEvent} from '../../types'
import styles from './SwipeLine.module.scss'
import {isMobile} from 'react-device-detect'

const MdKeyboardArrowLeft: FC = MdKeyboardArrowLeftRaw as unknown as FC
const MdKeyboardArrowRight: FC = MdKeyboardArrowRightRaw as unknown as FC

interface HistoricalEventProps {
  events: IHistoricalEvent[];
}

export const SwipeLine = ({events}: HistoricalEventProps) => {
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)


  const spaceBetween = isMobile ? 50 : 50
  const slidesPerView = isMobile ? 2 : 3
  return (
      <div className={styles.SwipeLine}>
        <Swiper
            modules={[Navigation]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            grabCursor
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper: any) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }}
        >
          {events.map((e) => (
              <SwiperSlide key={e.id} className={styles.slide}>
                <HistoricalEvent event={e}/>
              </SwiperSlide>
          ))}
        </Swiper>

        <button ref={prevRef} className={`${styles.navButton} ${styles.prev}`}>
          <MdKeyboardArrowLeft/>
        </button>

        <button ref={nextRef} className={`${styles.navButton} ${styles.next}`}>
          <MdKeyboardArrowRight/>
        </button>
      </div>
  )
}
