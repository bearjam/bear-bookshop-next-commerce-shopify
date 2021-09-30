import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import BearBookshopLogo from './BearBookshopLogo'
import {
  Backdrop,
  BigNav,
  Branding,
  Container,
  Hamburger,
  Root,
  SmallNav,
} from './Header.styles'
import { theme } from 'twin.macro'

const Header = () => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen((p) => !p)
  const transition = {
    type: 'spring',
    damping: 25,
    mass: 0.9,
    stiffness: 120,
  }
  return (
    <Root animate={open ? 'open' : 'closed'} initial="closed">
      <Backdrop
        data-open={open}
        variants={{
          closed: {
            y: `calc(-100% + ${theme`spacing.20`})`,
            transition: {
              ...transition,
              delay: 0.5,
            },
          },
          open: {
            y: 0,
            transition,
          },
        }}
      />
      <Container>
        <Link href="/">
          <a>
            <Branding>
              <BearBookshopLogo />
            </Branding>
          </a>
        </Link>
        <Hamburger open={open} onClick={toggleOpen} />
        <AnimatePresence>
          {open && (
            <SmallNav
              variants={{
                open: {
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.2,
                  },
                },
                closed: {
                  transition: {
                    staggerChildren: 0.1,
                    staggerDirection: -1,
                  },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {({ href, label, active }: any) => (
                <motion.div
                  variants={{
                    open: {
                      opacity: 1,
                    },
                    closed: {
                      opacity: 0,
                    },
                  }}
                  onClick={() => void setOpen(false)}
                >
                  <Link href={href}>
                    <a data-active={active}>{label}</a>
                  </Link>
                </motion.div>
              )}
            </SmallNav>
          )}
        </AnimatePresence>
        <AnimateSharedLayout>
          <BigNav>
            {({ href, label, active }: any) =>
              href !== '/account' ? (
                <Link href={href}>
                  <a>
                    <span>{label}</span>
                    {active && <motion.div layoutId="underline" />}
                  </a>
                </Link>
              ) : null
            }
          </BigNav>
        </AnimateSharedLayout>
      </Container>
    </Root>
  )
}

export default Header
