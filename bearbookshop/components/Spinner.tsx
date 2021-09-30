import { HTMLProps } from "react"
import css from "./Spinner.module.css"
import clsx from "clsx"

const Spinner = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
  return <div className={clsx(css.spinner, className)} {...props} />
}

export default Spinner
