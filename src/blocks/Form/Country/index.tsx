import type { CountryField } from '@payloadcms/plugin-form-builder/types'
import type { Control, FieldErrorsImpl } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React from 'react'
import { Controller } from 'react-hook-form'

import { Error } from '../Error'
import { Width } from '../Width'
import { countryOptions } from './options'

export const Country: React.FC<
  CountryField & {
    control: Control
    errors: Partial<FieldErrorsImpl>
  }
> = ({ name, control, errors, label, required, width }) => {
  return (
    <Width width={width}>
      <div className="flex flex-wrap items-end gap-2">
        <Label htmlFor={name} className="text-xl font-bold pb-2 mr-2">
          {label}
          {required && (
            <span className="text-red-500">*</span>
          )}:
        </Label>
        <Controller
          control={control}
          defaultValue=""
          name={name}
          render={({ field: { onChange, value } }) => {
            const controlledValue = countryOptions.find((t) => t.value === value)

            return (
              <Select onValueChange={(val) => onChange(val)} value={controlledValue?.value}>
                <SelectTrigger className="flex-1 min-w-[50%] text-xl border-0 border-b-2 border-current rounded-none bg-transparent px-0 outline-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none" id={name}>
                  <SelectValue placeholder={label} />
                </SelectTrigger>
                <SelectContent>
                  {countryOptions.map(({ label, value }) => {
                    return (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            )
          }}
          rules={{ required }}
        />
      </div>
      {errors[name] && <Error name={name} />}
    </Width>
  )
}
