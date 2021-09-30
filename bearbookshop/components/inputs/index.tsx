import { paramCase } from "change-case"
import clsx from "clsx"
import Link, { LinkProps } from "next/link"
import React, {
  ButtonHTMLAttributes,
  forwardRef,
  HTMLProps,
  PropsWithChildren,
  PropsWithoutRef,
  ReactNode,
} from "react"
import { FieldError } from "react-hook-form"
import css from "./index.module.css"

export const Submit = ({
  className = css.submit,
  ...props
}: HTMLProps<HTMLInputElement>) => (
  <input type="submit" className={className} {...props} />
)

export const Label = ({ className = css.label, ...props }) => {
  return <label className={className} {...props} />
}

export const NumberInput = forwardRef<
  HTMLInputElement,
  HTMLProps<HTMLInputElement>
>(({ className = css["number-input"], type = "number", ...props }, ref) => {
  return <input type={type} className={className} ref={ref} {...props} />
})

export const NumberField = forwardRef<
  HTMLInputElement,
  HTMLProps<HTMLInputElement> & { error?: FieldError }
>(({ className = css["number-field"], label, name, error, ...props }, ref) => {
  return (
    <div className={className}>
      {label ? (
        <Label htmlFor={name ? paramCase(name) : undefined}>{label}</Label>
      ) : null}
      <div>
        <NumberInput
          id={name ? paramCase(name) : undefined}
          name={name}
          aria-invalid={!!error}
          {...props}
          ref={ref}
        />
      </div>
      {error && <div className={css.error}>{error.message}</div>}
    </div>
  )
})

export const TextArea = forwardRef<
  HTMLTextAreaElement,
  HTMLProps<HTMLTextAreaElement>
>(({ className = css["textarea"], ...props }, ref) => {
  return <textarea className={className} ref={ref} {...props} />
})

export const TextAreaField = forwardRef<
  HTMLTextAreaElement,
  HTMLProps<HTMLTextAreaElement> & { error?: FieldError }
>(
  (
    { className = css["textarea-field"], label, name, error, ...props },
    ref
  ) => {
    return (
      <div className={className}>
        {label ? (
          <Label htmlFor={name ? paramCase(name) : undefined}>{label}</Label>
        ) : null}
        <div>
          <TextArea
            id={name ? paramCase(name) : undefined}
            name={name}
            aria-invalid={!!error}
            {...props}
            ref={ref}
          />
        </div>
        {error && <div className={css.error}>{error.message}</div>}
      </div>
    )
  }
)

export const TextInput = forwardRef<
  HTMLInputElement,
  HTMLProps<HTMLInputElement>
>(({ className = css["text-input"], type = "text", ...props }, ref) => {
  return <input type={type} className={className} ref={ref} {...props} />
})

export const TextField = forwardRef<
  HTMLInputElement,
  HTMLProps<HTMLInputElement> & { error?: FieldError }
>(({ className = css["text-field"], label, name, error, ...props }, ref) => {
  return (
    <div className={className}>
      {label ? (
        <Label htmlFor={name ? paramCase(name) : undefined}>{label}</Label>
      ) : null}
      <div>
        <TextInput
          id={name ? paramCase(name) : undefined}
          name={name}
          aria-invalid={!!error}
          {...props}
          ref={ref}
        />
      </div>
      {error && <div className={css.error}>{error.message}</div>}
    </div>
  )
})

export const CheckboxInput = forwardRef<
  HTMLInputElement,
  HTMLProps<HTMLInputElement>
>(({ className = css["checkbox-input"], ...props }, ref) => {
  return <input type="checkbox" className={className} ref={ref} {...props} />
})

export const CheckboxField = forwardRef<
  HTMLInputElement,
  HTMLProps<HTMLInputElement> & { error?: FieldError }
>(
  (
    {
      className = css["checkbox-field"],
      label,
      name,
      id = name ? paramCase(name) : undefined,
      error,
      ...props
    },
    ref
  ) => {
    return (
      <div className={className}>
        <div>
          <CheckboxInput id={id} name={name} {...props} ref={ref} />
        </div>
        <Label htmlFor={name}>{label}</Label>
        {error && <div className={css.error}>{error.message}</div>}
      </div>
    )
  }
)
export const RadioInput = forwardRef<
  HTMLInputElement,
  HTMLProps<HTMLInputElement>
>(({ className = css["radio-input"], ...props }, ref) => {
  return <input type="radio" className={className} ref={ref} {...props} />
})

export const RadioField = forwardRef<
  HTMLInputElement,
  HTMLProps<HTMLInputElement> & { error?: FieldError }
>(
  (
    { className = css["radio-field"], label, name, value, error, ...props },
    ref
  ) => {
    const id = paramCase(`${name}--${value}`)
    return (
      <div className={className}>
        <div>
          <RadioInput id={id} name={name} value={value} {...props} ref={ref} />
        </div>
        <Label htmlFor={id}>{label}</Label>
        {error && <div className={css.error}>{error.message}</div>}
      </div>
    )
  }
)

export const DateInput = forwardRef<
  HTMLInputElement,
  HTMLProps<HTMLInputElement>
>(({ className = css["date-input"], type = "date", ...props }, ref) => {
  return <input type={type} className={className} ref={ref} {...props} />
})

export const DateField = forwardRef<
  HTMLInputElement,
  HTMLProps<HTMLInputElement> & { error?: FieldError }
>(({ className = css["date-field"], label, name, error, ...props }, ref) => {
  return (
    <div className={className}>
      {label ? (
        <Label htmlFor={name ? paramCase(name) : undefined}>{label}</Label>
      ) : null}
      <div>
        <DateInput
          id={name ? paramCase(name) : undefined}
          name={name}
          aria-invalid={!!error}
          {...props}
          ref={ref}
        />
      </div>
      {error && <div className={css.error}>{error.message}</div>}
    </div>
  )
})

export const Form = ({ className = css.form, ...props }) => (
  <form className={className} {...props} />
)

export const ButtonLink = ({
  href,
  className = css.button,
  ...props
}: PropsWithChildren<LinkProps> &
  PropsWithoutRef<JSX.IntrinsicElements["a"]>) => (
  <Link href={href}>
    <a className={className} {...props} />
  </Link>
)

export const ButtonAnchor = ({
  className,
  ...props
}: PropsWithoutRef<JSX.IntrinsicElements["a"]>) => (
  <a
    className={clsx(css["button-anchor"], className)}
    target="_blank"
    {...props}
  />
)

export const FileInput = forwardRef<
  HTMLInputElement,
  HTMLProps<HTMLInputElement>
>(({ className = css["file-input"], type = "file", ...props }, ref) => {
  return <input type={type} className={className} ref={ref} {...props} />
})

export const FileField = forwardRef<
  HTMLInputElement,
  { label: ReactNode; error?: FieldError } & Omit<
    HTMLProps<HTMLInputElement>,
    "label"
  >
>(({ className = css["file-field"], label, name, error, ...props }, ref) => {
  return (
    <div>
      {label ? (
        <Label
          className={className}
          htmlFor={name ? paramCase(name) : undefined}
        >
          {label}
        </Label>
      ) : null}
      <div>
        <FileInput
          id={name ? paramCase(name) : undefined}
          name={name}
          aria-invalid={!!error}
          {...props}
          ref={ref}
        />
      </div>
      {error && <div className={css.error}>{error.message}</div>}
    </div>
  )
})

interface IncrementFieldProps {
  value: number
  increment: () => void
  decrement: () => void
}

export const IncrementField = ({
  decrement,
  increment,
  value,
}: IncrementFieldProps) => {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{value}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

export { default as Button } from "./Button"
export { default as MultiCheckCombobox } from "./MultiCheckCombobox"
