import { useCombobox } from "downshift"
import React, { useEffect, useState } from "react"
import css from "./MultiCheckCombobox.module.css"

interface Props<T> {
  initialItems: T[]
  id?: string
  label?: string
  itemToString: (t: T | null) => string
  selectedItems: T[]
  setSelectedItems: (ts: T[]) => void
  placeholder: string
}
function MultiCheckCombobox<T>({
  id = "combobox",
  initialItems,
  itemToString,
  label = "Choose an element",
  selectedItems,
  setSelectedItems,
  placeholder,
}: Props<T>) {
  const [inputItems, setInputItems] = useState<T[]>(initialItems)

  useEffect(() => void setInputItems(initialItems), [initialItems])

  const removeItem = (item: T) =>
    void setSelectedItems(
      selectedItems.filter((x) => itemToString(x) !== itemToString(item))
    )

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    id,
    items: inputItems,
    onSelectedItemChange: ({ selectedItem }) => {
      if (!selectedItem) {
        return
      }
      const index = selectedItems.indexOf(selectedItem)
      if (index > 0) {
        setSelectedItems([
          ...selectedItems.slice(0, index),
          ...selectedItems.slice(index + 1),
        ])
      } else if (index === 0) {
        setSelectedItems([...selectedItems.slice(1)])
      } else {
        setSelectedItems([...selectedItems, selectedItem])
      }
    },
    selectedItem: null,
    stateReducer: (state, actionAndChanges) => {
      const { changes, type } = actionAndChanges
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true, // keep menu open after selection.
            highlightedIndex: state.highlightedIndex,
            inputValue: "", // don't add the item string as input value at selection.
          }
        case useCombobox.stateChangeTypes.InputBlur:
          return {
            ...changes,
            inputValue: "", // don't add the item string as input value at selection.
          }
        default:
          return changes
      }
    },
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        initialItems.filter((item) =>
          typeof inputValue === "string"
            ? itemToString(item)
                .toLowerCase()
                .startsWith(inputValue.toLowerCase())
            : false
        )
      )
    },
  })
  return (
    <div className={css.multi}>
      <label {...getLabelProps()}>{label}</label>
      <div>
        {selectedItems.map((selectedItem) => (
          <span className={css.selected} key={itemToString(selectedItem)}>
            {itemToString(selectedItem)}
            <span onClick={() => void removeItem(selectedItem)}> X</span>
          </span>
        ))}
      </div>
      <div {...getComboboxProps()}>
        <input placeholder={placeholder} {...getInputProps()} />
        <button
          type="button"
          {...getToggleButtonProps()}
          aria-label="toggle menu"
        >
          &#8595;
        </button>
      </div>
      <ul {...getMenuProps()}>
        {isOpen &&
          inputItems.map((item, index) => (
            <li
              style={
                highlightedIndex === index ? { backgroundColor: "#bde4ff" } : {}
              }
              key={`${itemToString(item)}${index}`}
              {...getItemProps({
                item,
                index,
              })}
            >
              <input
                type="checkbox"
                checked={selectedItems
                  .map(itemToString)
                  .includes(itemToString(item))}
                value={itemToString(item)}
                onChange={() => null}
              />
              <span />
              {itemToString(item)}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default MultiCheckCombobox
