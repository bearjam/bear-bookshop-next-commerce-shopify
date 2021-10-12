import { styled } from 'stitches.config'

export const Flex = styled('div', {
  display: 'flex',
  variants: {
    wrap: {
      true: {
        flexWrap: 'wrap',
      },
    },
    center: {
      true: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    justify: {
      evenly: {
        justifyContent: 'space-evenly',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    items: {
      center: {
        alignItems: 'center',
      },
      start: {
        alignItems: 'flex-start',
      },
      end: {
        alignItems: 'flex-end',
      },
    },
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
  },
})
