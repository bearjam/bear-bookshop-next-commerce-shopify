import { HTMLMotionProps, motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

const defaultLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/visit", label: "Visit" },
  { href: "/learn", label: "Learn" },
  { href: "/account", label: "My Account" },
]

type NavChildren =
  | React.FC<{
      href: string
      label: string
      active: boolean
    }>
  | undefined

interface NavLinkProps {
  href: string
  label: string
  children: NavChildren
}

const NavLink = ({ children, href, label, ...props }: NavLinkProps) => {
  const router = useRouter()
  const active =
    href === "/" ? router.pathname === "/" : router.pathname.startsWith(href)
  return children ? (
    children({ href, label, active, ...props })
  ) : (
    <Link key={href} href={href} {...props}>
      <a data-active={active}>{label}</a>
    </Link>
  )
}

interface NavProps extends HTMLMotionProps<"nav"> {
  children?: NavChildren
  links?: { href: string; label: string }[]
}

export default function Nav({
  children,
  links = defaultLinks,
  ...props
}: NavProps) {
  return (
    <motion.nav {...props}>
      {links.map((linkProps) => (
        <NavLink key={linkProps.href} children={children} {...linkProps} />
      ))}
    </motion.nav>
  )
}
