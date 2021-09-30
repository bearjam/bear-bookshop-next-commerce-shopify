import { motion, MotionProps } from "framer-motion"
import React, { HTMLProps } from "react"

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth={2}
    stroke="currentcolor"
    strokeLinecap="round"
    {...props}
  />
)

type Props = MotionProps &
  Pick<HTMLProps<HTMLButtonElement>, "className" | "onClick"> & {
    open: boolean
  }

const Hamburger = ({ open, ...rest }: Props) => (
  <motion.button {...rest}>
    <svg width="1em" height="1em" viewBox="0 0 18 18">
      <Path
        animate={open ? "open" : "closed"}
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        animate={open ? "open" : "closed"}
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        animate={open ? "open" : "closed"}
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </motion.button>
)

export default Hamburger
