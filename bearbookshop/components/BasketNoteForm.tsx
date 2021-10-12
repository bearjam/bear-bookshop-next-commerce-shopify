import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useCart } from '~/shopify/storefront/cart'
import { Button, Form, Submit, TextAreaField } from './inputs'

type Inputs = {
  note: string
}

const BasketNoteForm = () => {
  const { updateNote, cart } = useCart()
  const note = cart?.note ?? ''

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      note,
    },
  })

  const [editingNote, setEditingNote] = useState(false)
  const editNote = () => setEditingNote(true)

  const onSubmit: SubmitHandler<Inputs> = async ({ note }) => {
    await updateNote(note)
    setEditingNote(false)
  }

  return (
    <div>
      <h3>Add a Personalised Message</h3>
      {!note ? (
        <div>
          {!editingNote ? (
            <div>
              <Button onClick={editNote}>Add a Message</Button>
            </div>
          ) : (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <TextAreaField {...register('note')} />
              <Submit />
            </Form>
          )}
        </div>
      ) : (
        <div>
          {!editingNote ? (
            <div>
              <Button onClick={editNote}>Edit Note</Button>
            </div>
          ) : (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <TextAreaField {...register('note')} />
              <Submit />
            </Form>
          )}
        </div>
      )}
    </div>
  )
}

export default BasketNoteForm
