import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'

export const Text: React.FC<
  TextField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
  }
> = ({ name, defaultValue, errors, label, register, required, width }) => {
  return (
    <Width width={width}>
      <div className="flex flex-wrap items-end gap-2">
        <Label htmlFor={name} className="text-xl font-bold pb-2 mr-2">
          {label}
          {required && (
            <span className="text-red-500">*</span>
          )}:
        </Label>
        <Input
          defaultValue={defaultValue}
          id={name}
          type="text"
          className="flex-1 min-w-[50%] text-xl border-0 border-b-2 border-current rounded-none bg-transparent px-0 outline-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none"
          {...register(name, { required })}
        />
      </div>
      {errors[name] && <Error name={name} />}
    </Width>
  )
}
