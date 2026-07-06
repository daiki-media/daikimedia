'use client'

import { motion, useInView } from 'framer-motion'
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'

// Content is server-rendered fully visible. The staggered fade-up is only
// "armed" on the client for items still below the viewport, so list items
// can never be stuck invisible when JS is slow, blocked, or fails.
const FadeUpOneByOneAnimation = ({ children, className, i }) => {
  const ref = useRef(null)
  const [armed, setArmed] = useState(false)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    const el = ref.current
    if (el && el.getBoundingClientRect().top > window.innerHeight) {
      setArmed(true)
    }
  }, [])

  const hidden = armed && !inView

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={hidden ? { opacity: 0, y: 100 } : { opacity: 1, y: 0 }}
      transition={hidden ? { duration: 0 } : { duration: 0.5, delay: (i || 0) * 0.2 }}
      className={className}>
      {children}
    </motion.div>
  )
}

FadeUpOneByOneAnimation.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  i: PropTypes.number,
}

export default FadeUpOneByOneAnimation
