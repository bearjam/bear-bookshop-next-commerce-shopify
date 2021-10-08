import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Form, Submit, TextAreaField } from './inputs'

type Inputs = {
  note: string
}

const CheckoutNoteForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      note: '',
    },
  })
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextAreaField {...register('note')} />
      <Submit />
    </Form>
  )
}

export default CheckoutNoteForm
