import { motion } from 'framer-motion'
import { styled } from 'stitches.config'
import tw from 'twin.macro'
import Hamburger from './Hamburger'
import Nav from './Nav'

export const Root = styled(motion.div, {})

export const Backdrop = styled(motion.div, {
  backgroundColor: '#eee',
  ...tw`fixed w-full h-full z-10`,
})

export const Container = styled(motion.div, {
  ...tw`fixed w-full h-20 max-w-5xl`,
  ...tw`flex justify-between items-center`,
  ...tw` mx-auto inset-x-0 px-4 `,
  ...tw`z-20`,
})

const _Hamburger = styled(Hamburger, {
  ...tw`z-30 text-lg`,
  '@lg': tw`hidden`,
  '& svg': {
    strokeWidth: 2.5,
  },
})

export { _Hamburger as Hamburger }

export const Branding = styled('div', {})

export const SmallNav = styled(Nav, {
  ...tw`w-full h-full`,
  ...tw`fixed inset-0`,
  ...tw`flex flex-col`,
  ...tw`justify-center items-center`,
  ...tw`font-display`,
  '& > * + *': {
    ...tw`mt-4`,
  },
  '@lg': tw`hidden`,
})

export const BigNav = styled(Nav, {
  ...tw`hidden font-display`,
  '@lg': {
    ...tw`flex`,
    '& > *:not(:last-child)': tw`mr-6`,
    '& a': tw`relative`,
    '& a > div': {
      'border-bottom-width': '3px',
      ...tw`absolute w-full border-yellow-500`,
      bottom: -2,
    },
  },
})
