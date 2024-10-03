import React, {useState, useCallback} from 'react'
import {LayoutData, LayoutField, LayoutFieldTypes} from './types'
import {Box, Stack, Switch, Text, TextArea, TextInput, Select} from '@sanity/ui'

interface EditorFieldProps {
  field: LayoutField
  data: LayoutData
  updateData: (data: LayoutData) => void
  disabled: boolean
}

const UNSUPORTED_TYPES: LayoutFieldTypes[] = ['date', 'datetime', 'image', 'reference']

const EditorField: React.FC<EditorFieldProps> = ({field, data = {}, updateData, disabled}) => {
  const {type, name, title, unsupportedError, options} = field
  const [value, setValue] = useState(data[name])
  const [isChecked, setIsChecked] = useState(data.isChecked || false)

  const onChange = useCallback(
    (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      let newValue: number | string | boolean = e.currentTarget.value

      if (e.currentTarget.type === 'checkbox' && 'checked' in e.currentTarget) {
        newValue = e.currentTarget.checked
        setIsChecked(newValue as boolean)
      } else if (e.currentTarget.type === 'number') {
        newValue = Number(newValue)
      }

      updateData({
        ...data,
        [name]: newValue,
      })
      setValue(newValue || '')
    },
    [data, name, updateData],
  )

  if (!type || !name || !updateData) {
    return null
  }

  const label = title || name

  if (UNSUPORTED_TYPES.includes(type)) {
    return (
      <Box marginTop={2}>
        <Stack space={2}>
          <Text size={1} weight="semibold">
            {label}
          </Text>
          <Text size={0}>
            {unsupportedError || 'Close this dialog and edit the document to change this field.'}
          </Text>
        </Stack>
      </Box>
    )
  }

  if (type === 'object' && field.fields?.length) {
    return (
      <div>
        {field.fields.map((fld) => (
          <EditorField
            key={fld.name}
            updateData={updateData}
            field={fld}
            data={value}
            disabled={disabled}
          />
        ))}
      </div>
    )
  }

  if (!['boolean', 'number', 'text', 'string'].includes(type)) {
    console.error('Asset-source OG Image: wrong field type received')
    return null
  }

  const commonProps = {
    onChange,
    value,
    disabled,
  }

  return (
    <div>
      <label>
        {title}
        {type === 'boolean' && <Switch checked={value === true} onChange={onChange} />}
        {type === 'text' && <TextArea {...commonProps} rows={5} />}
        {(type === 'string' || type === 'number') && (
          <TextInput type={type === 'number' ? 'number' : 'text'} {...commonProps} />
        )}
      </label>
    </div>
  )
}

export default EditorField
