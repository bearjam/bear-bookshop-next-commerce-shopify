import { styled } from "@stitches/react"
import tw from "twin.macro"

const Button = styled("button", {
  ...tw`text-base text-center`,
  ...tw`leading-tight tracking-wide`,
  ...tw`bg-secondary rounded-lg`,
  ...tw`font-body font-medium text-primary`,
  ...tw`py-2 px-6`,
  ...tw`my-4`,
})

export default Button
