import css from "./Square.module.css"
import React from "react"
import Link from "next/link"

export interface SquareProps {
  ages: string
  title: string
  href: string
}

export default function Square({ ages, title, href }: SquareProps) {
  return (
    <Link href={`/learn${href}`}>
      <a>
        <div className={css.square}>
          <h1>{ages}</h1>
          <h2>years</h2>
          <h4>{title}</h4>
        </div>
      </a>
    </Link>
  )
}
