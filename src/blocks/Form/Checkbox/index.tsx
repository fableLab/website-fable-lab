import type { CheckboxField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { useFormContext } from 'react-hook-form'

import { Checkbox as CheckboxUi } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'

export const Checkbox: React.FC<
  CheckboxField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
  }
> = ({ name, defaultValue, errors, label, register, required, width }) => {
  const props = register(name, { required: required })
  const { setValue } = useFormContext()

  return (
    <Width width={width}>
      <div className="flex items-center gap-2">
        <CheckboxUi
          defaultChecked={defaultValue}
          id={name}
          className="rounded-none border-2 border-current shrink-0"
          {...props}
          onCheckedChange={(checked) => {
            setValue(props.name, checked)
          }}
        />
        <Label htmlFor={name} className="text-xl font-bold">
          {label}
          {required && (
            <span className="required text-red-500">*</span>
          )}
        </Label>
      </div>
      {errors[name] && <Error name={name} />}
    </Width>
  )
}
