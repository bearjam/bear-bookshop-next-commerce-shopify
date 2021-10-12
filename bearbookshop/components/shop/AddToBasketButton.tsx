import React, { useState } from 'react'
import { useCart } from '~/shopify/storefront/cart'
import { Spinner } from '..'
import { Button } from '../inputs'

type Props = {
  id: string
  quantity?: number
}

const AddToBasketButton = ({ id, quantity = 1 }: Props) => {
  const [adding, setAdding] = useState(false)
  const { addItem } = useCart()
  const addProduct = async () => {
    try {
      setAdding(true)
      await addItem({
        merchandiseId: String(id),
        quantity,
      })
      setAdding(false)
    } catch (error) {
      console.log({ error })
      setAdding(false)
    }
  }
  return adding ? (
    <Spinner />
  ) : (
    <Button onClick={addProduct} disabled={adding}>
      Add to Basket
    </Button>
  )
}

export default AddToBasketButton
