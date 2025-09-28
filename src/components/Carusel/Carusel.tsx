'use client'
import React, {ReactNode, useCallback, useEffect, useRef} from 'react'
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

const TWEEN_FACTOR_BASE = 0.84

const numberWithinRange = (number: number, min: number, max: number): number =>
    Math.min(Math.max(number, min), max)

type PropType<T> = {
  slides: T[]
  options?: EmblaOptionsType
  children: (slide: T, index: number) => ReactNode
}

export function Carousel<T>({slides, options, children}: PropType<T>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "y",
    loop: true,
    align: 'center',
    slidesToScroll: 1,
    ...options
  })
  const tweenFactor = useRef(0)

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenOpacity = useCallback(
      (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
        const engine = emblaApi.internalEngine()
        const scrollProgress = emblaApi.scrollProgress()
        const slidesInView = emblaApi.slidesInView()
        const isScrollEvent = eventName === 'scroll'

        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
          let diffToTarget = scrollSnap - scrollProgress
          const slidesInSnap = engine.slideRegistry[snapIndex]

          slidesInSnap.forEach((slideIndex) => {
            if (isScrollEvent && !slidesInView.includes(slideIndex)) return

            if (engine.options.loop) {
              engine.slideLooper.loopPoints.forEach((loopItem) => {
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
            emblaApi.slideNodes()[slideIndex].style.opacity = numberWithinRange(tweenValue, 0, 1).toString()
          })
        })
      },
      []
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenFactor(emblaApi)
    tweenOpacity(emblaApi)
    emblaApi
        .on('reInit', setTweenFactor)
        .on('reInit', tweenOpacity)
        .on('scroll', tweenOpacity)
        .on('slideFocus', tweenOpacity)

    // Добавляем поддержку скролла колесиком мыши
    const handleWheel = (event: WheelEvent) => {
      const goingNext = event.deltaY > 0
      const canScroll = goingNext ? emblaApi.canScrollNext() : emblaApi.canScrollPrev()

      if (canScroll) {
        event.preventDefault()
        if (goingNext) {
          emblaApi.scrollNext()
        } else {
          emblaApi.scrollPrev()
        }
      }
    }

    const emblaNode = emblaApi.rootNode()
    emblaNode.addEventListener('wheel', handleWheel, {passive: false})

    return () => {
      emblaNode.removeEventListener('wheel', handleWheel)
    }
  }, [emblaApi, setTweenFactor, tweenOpacity])

  return (
      <div className="overflow-hidden h-full select-none" ref={emblaRef}>
        <div className="flex flex-col h-full">
          {slides.map((slide, index) => (
              <div key={index} className="flex items-center justify-center p-8">
                {children(slide, index)}
              </div>
          ))}
        </div>
      </div>
  )
}