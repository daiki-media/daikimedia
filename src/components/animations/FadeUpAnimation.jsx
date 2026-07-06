'use client'
import { fadeUpAnimation } from '@/data/animation'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const FadeUpAnimation = ({ children, className }) => {
  return (
    // initial={false}: content is server-rendered visible so heroes never
    // wait on JS to paint (this element is usually above the fold)
    <motion.div variants={fadeUpAnimation} initial={false} animate="animate" className={className}>
      {children}
    </motion.div>
  )
}

FadeUpAnimation.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default FadeUpAnimation
