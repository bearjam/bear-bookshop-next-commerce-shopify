import { motion, MotionProps } from "framer-motion"
import React, { HTMLProps, PropsWithChildren } from "react"

const OpacityPresence = (
  props: PropsWithChildren<MotionProps> &
    Pick<HTMLProps<HTMLDivElement>, "className">
) => (
  <motion.div
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    {...props}
  />
)
export default OpacityPresence
