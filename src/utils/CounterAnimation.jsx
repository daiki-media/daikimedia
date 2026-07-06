'use client'
import { useEffect, useRef, useState } from 'react'

// Server-renders the final number so stats are meaningful without JS.
// The count-up only runs for counters still below the viewport on load,
// so the section never shows "0" in screenshots or when JS is slow.
const CounterAnimation = ({ number }) => {
  const [count, setCount] = useState(number)
  const [isCounting, setIsCounting] = useState(false)
  const counterRef = useRef(null)

  useEffect(() => {
    const el = counterRef.current
    if (!el) return
    if (el.getBoundingClientRect().top <= window.innerHeight) return

    setCount(0)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCounting(true)
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isCounting && count < number) {
      const timer = setInterval(() => {
        setCount((prevCount) => Math.min(prevCount + 2, number))
      }, 10)

      return () => {
        clearInterval(timer)
      }
    }
  }, [count, isCounting, number])

  return (
    <span className="counter" ref={counterRef}>
      {count}
    </span>
  )
}

export default CounterAnimation
