import { SHOPIFY_COOKIE_EXPIRE } from '@framework/const'
import Cookies from 'js-cookie'
import { PropsWithChildren } from 'react'
import useSWR from 'swr'
import { SHOPIFY_CART_ID_COOKIE } from '~/lib/const'
import { createCtx } from '~/lib/context'
import { storefrontFetch } from '~/shopify/fetch'
import {
  CartDetailsFragment,
  CartLineInput,
  CartLinesAddMutation,
  CartLinesAddMutationVariables,
  CartLinesRemoveMutation,
  CartLinesRemoveMutationVariables,
  CartLinesUpdateMutation,
  CartLinesUpdateMutationVariables,
  CartLineUpdateInput,
  CreateCartMutation,
  CreateCartMutationVariables,
  GetCartQuery,
  GetCartQueryVariables,
} from '../documents'
import {
  cartLinesAddMutation,
  cartLinesRemoveMutation,
  cartLinesUpdateMutation,
  createCartMutation,
  getCartQuery,
} from './queries'

type Ctx = {
  cart: CartDetailsFragment | undefined
  addItem: (lines: CartLineInput | CartLineInput[]) => void
  removeItem: (lineId: string) => void
  updateItem: (lines: CartLineUpdateInput) => void
  loading: boolean
  error: any
}

const [useCtx, CtxProvider] = createCtx<Ctx>()

type Props = PropsWithChildren<{}>

const getCartId = () => {
  return Cookies.get(SHOPIFY_CART_ID_COOKIE)
}

const fetchCart = async (id: string) =>
  await storefrontFetch<GetCartQuery, GetCartQueryVariables>(getCartQuery, {
    id,
  })

const createCart = async () =>
  await storefrontFetch<CreateCartMutation, CreateCartMutationVariables>(
    createCartMutation,
    { cartInput: {} }
  )

export const CartProvider = ({ children }: Props) => {
  const cartId = getCartId()

  const fetcher = async () => {
    const cart = cartId
      ? await fetchCart(cartId).then((x) => x.cart as CartDetailsFragment)
      : await createCart().then(
          (x) => x.cartCreate?.cart as CartDetailsFragment
        )

    Cookies.set(SHOPIFY_CART_ID_COOKIE, cart.id, {
      expires: SHOPIFY_COOKIE_EXPIRE,
    })

    return cart
  }

  const { data: cart, error, mutate } = useSWR('cart', fetcher)
  const loading = !cart && !error

  const addItem = async (lines: CartLineInput | CartLineInput[]) => {
    if (!cart) return
    await storefrontFetch<CartLinesAddMutation, CartLinesAddMutationVariables>(
      cartLinesAddMutation,
      { cartId: cart.id, lines }
    )
    await mutate()
  }

  const removeItem = async (lineId: string) => {
    if (!cart) return
    await storefrontFetch<
      CartLinesRemoveMutation,
      CartLinesRemoveMutationVariables
    >(cartLinesRemoveMutation, { cartId: cart.id, lineIds: [lineId] })

    console.log({ lineId })

    await mutate()
  }

  const updateItem = async (lines: CartLineUpdateInput) => {
    if (!cart) return
    await storefrontFetch<
      CartLinesUpdateMutation,
      CartLinesUpdateMutationVariables
    >(cartLinesUpdateMutation, { cartId: cart.id, lines })
    await mutate()
  }

  return (
    <CtxProvider
      value={{ cart, addItem, removeItem, updateItem, loading, error }}
    >
      {children}
    </CtxProvider>
  )
}

export const useCart = useCtx
