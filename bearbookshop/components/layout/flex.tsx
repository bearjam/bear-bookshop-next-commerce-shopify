import { styled } from 'stitches.config'
import tw from 'twin.macro'

export const FlexCenter = styled('div', {
  ...tw`flex justify-center items-center`,
  '@sm': tw`block`,
})
