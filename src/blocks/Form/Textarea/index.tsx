import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import { Textarea as TextAreaComponent } from '@/components/ui/textarea'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'

export const Textarea: React.FC<
  TextField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
    rows?: number
  }
> = ({ name, defaultValue, errors, label, register, required, rows = 6, width }) => {
  return (
    <Width width={width}>
      <div className="flex flex-col gap-2">
        <Label htmlFor={name} className="text-xl font-bold">
          {label}{required && (<span className="text-red-500">*</span>)}:
        </Label>
        <TextAreaComponent
          defaultValue={defaultValue}
          id={name}
          rows={rows}
          className="w-full text-xl bg-transparent border-2 border-current rounded-sm px-3 py-2 outline-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none resize-y"
          {...register(name, { required: required })}
        />
      </div>

      {errors[name] && <Error name={name} />}
    </Width>
  )
}
