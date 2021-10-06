import Link from "next/link"
import React from "react"

function Account(props: any) {
  return (
    <Link href="/account">
      <a>
        <svg
          width="2rem"
          height="2rem"
          fill="none"
          viewBox="0 0 38 39"
          {...props}
        >
          <path
            d="m29.613 12.499c0 5.7676-4.7363 10.471-10.613 10.471s-10.613-4.7031-10.613-10.471c0-5.7675 4.7363-10.471 10.613-10.471s10.613 4.703 10.613 10.471z"
            stroke="#12283A"
            strokeLinejoin="round"
            strokeWidth="4"
          />
          <path
            d="m18.37 23.698c-13.096 0.9954-16.37 9.5394-16.37 13.687h34c-0.4198-4.9771-4.5333-14.682-17.63-13.687z"
            stroke="#12283A"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        </svg>
      </a>
    </Link>
  )
}

export default Account
