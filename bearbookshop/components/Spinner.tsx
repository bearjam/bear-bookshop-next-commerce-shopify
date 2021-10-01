import { forwardRef, HTMLProps } from 'react'
import css from './Spinner.module.css'
import clsx from 'clsx'

const Spinner = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={clsx(css.spinner, className)} {...props} />
  }
)

export default Spinner
