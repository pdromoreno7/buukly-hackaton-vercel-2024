'use client'
import { EmblaCarouselType, EmblaEventType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useRef } from 'react'
import './embla.css'

export interface Books {
  number: number
  title: string
  originalTitle: string
  releaseDate: string
  description: string
  pages: number
  cover: string
  index: number
}

export default function Slider() {
  const TWEEN_FACTOR_BASE = 0.52

  const numberWithinRange = (
    number: number,
    min: number,
    max: number,
  ): number => Math.min(Math.max(number, min), max)
  const BOOKS = [
    'https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/covers/1.png',
    'https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/covers/2.png',
    'https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/covers/3.png',
    'https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/covers/4.png',
    'https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/covers/5.png',
  ]
  const options = { loop: true }
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 2000 }),
  ])
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])
  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map(slideNode => {
      return slideNode.querySelector('.carousel__slide__card') as HTMLElement
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach(slideIndex => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach(loopItem => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const scale = numberWithinRange(tweenValue, 0, 1).toString()
          const tweenNode = tweenNodes.current[slideIndex]
          tweenNode.style.transform = `scale(${scale})`
        })
      })
    },
    [],
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
  }, [emblaApi, tweenScale])

  return (
    <div className='carousel_wrapper'>
      <div className='carousel__viewport' ref={emblaRef}>
        <div className='carousel__container'>
          {BOOKS.map(book => (
            <div className='carousel__slide' key={book}>
              <div className='carousel__slide__card'>
                <img src={book} alt='' className='h-full rounded-md' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
