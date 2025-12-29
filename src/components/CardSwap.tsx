'use client'

import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import './CardSwap.css'

export const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { customClass?: string }>(
  ({ customClass, ...rest }, ref) => (
    <div ref={ref} {...rest} className={`card ${customClass ?? ''} ${rest.className ?? ''}`.trim()} />
  )
)
Card.displayName = 'Card'

const makeSlot = (i: number, distX: number, distY: number, total: number) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
})

const placeNow = (el: HTMLElement, slot: { x: number; y: number; z: number; zIndex: number }, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  })

interface CardSwapProps {
  width?: number
  height?: number
  cardDistance?: number
  verticalDistance?: number
  delay?: number
  pauseOnHover?: boolean
  onCardClick?: (index: number) => void
  skewAmount?: number
  easing?: 'elastic' | 'smooth'
  enableScrollSwap?: boolean
  children: React.ReactNode
}

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = 'elastic',
  enableScrollSwap = true,
  children
}) => {
  const config =
    easing === 'elastic'
      ? {
          ease: 'elastic.out(0.6,0.9)',
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05
        }
      : {
          ease: 'power1.inOut',
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2
        }

  const childArr = useMemo(() => Children.toArray(children), [children])
  const refs = useMemo(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    [childArr.length]
  )

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i))

  const tlRef = useRef<gsap.core.Timeline | null>(null)
  const intervalRef = useRef<number>()
  const container = useRef<HTMLDivElement>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const lastScrollTime = useRef(0)

  useEffect(() => {
    const total = refs.length
    refs.forEach((r, i) => {
      if (r.current) {
        placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount)
      }
    })

    const swap = () => {
      if (order.current.length < 2 || isAnimating) return

      setIsAnimating(true)

      const [front, ...rest] = order.current
      const elFront = refs[front].current
      if (!elFront) {
        setIsAnimating(false)
        return
      }

      const tl = gsap.timeline({
        onComplete: () => setIsAnimating(false)
      })
      tlRef.current = tl

      tl.to(elFront, {
        y: '+=500',
        duration: config.durDrop,
        ease: config.ease
      })

      tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`)
      rest.forEach((idx, i) => {
        const el = refs[idx].current
        if (!el) return
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length)
        tl.set(el, { zIndex: slot.zIndex }, 'promote')
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease
          },
          `promote+=${i * 0.15}`
        )
      })

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length)
      tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`)
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex })
        },
        undefined,
        'return'
      )
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease
        },
        'return'
      )

      tl.call(() => {
        order.current = [...rest, front]
      })
    }

    // Scroll wheel handler
    const handleWheel = (e: WheelEvent) => {
      if (!enableScrollSwap) return

      const now = Date.now()
      const scrollThrottle = 800 // Minimum time between swaps (ms)

      if (now - lastScrollTime.current > scrollThrottle && !isAnimating) {
        lastScrollTime.current = now

        // Reset interval when user scrolls
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = window.setInterval(swap, delay)
        }

        swap()
      }
    }

    swap()
    intervalRef.current = window.setInterval(swap, delay)

    // Add scroll listener
    const node = container.current
    if (node && enableScrollSwap) {
      node.addEventListener('wheel', handleWheel, { passive: true })
    }

    if (pauseOnHover) {
      if (!node) return

      const pause = () => {
        tlRef.current?.pause()
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
      const resume = () => {
        tlRef.current?.play()
        intervalRef.current = window.setInterval(swap, delay)
      }
      node.addEventListener('mouseenter', pause)
      node.addEventListener('mouseleave', resume)
      return () => {
        node.removeEventListener('mouseenter', pause)
        node.removeEventListener('mouseleave', resume)
        if (enableScrollSwap) {
          node.removeEventListener('wheel', handleWheel)
        }
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (node && enableScrollSwap) {
        node.removeEventListener('wheel', handleWheel)
      }
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing, enableScrollSwap, refs, config, isAnimating])

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child as React.ReactElement<any>, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: (e: React.MouseEvent) => {
            child.props.onClick?.(e)
            onCardClick?.(i)
          }
        })
      : child
  )

  return (
    <div ref={container} className="card-swap-container" style={{ width, height }}>
      {rendered}
    </div>
  )
}

export default CardSwap
