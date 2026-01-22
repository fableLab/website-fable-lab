'use client'
import type { FormFieldBlock, Form as FormType } from '@payloadcms/plugin-form-builder/types'

import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import { fields } from './fields'
import { getClientSideURL } from '@/utilities/getURL'
import { Align } from '@/components/Align'
import { cn } from "@/utilities/ui"
import { bgSecondaryColorsMap, fillSecondaryColorsMap, ColorsList } from "@/constants/ColorMaps"

const WAVE_WIDTH = 1200
const WAVE_HEIGHT = 30
const WAVE_COUNT = 10

const generateWavePath = (invert: boolean): string => {
  const points = []
  const step = 0.5 // High Resolution
  const width = WAVE_WIDTH
  const height = WAVE_HEIGHT
  const amplitude = height / 2
  const frequency = (Math.PI * 2 * WAVE_COUNT) / width

  // Top Wave (invert=false): Fills the bottom part (from wave to Height).
  // Wave oscillates around midY.
  // We want the "Orange" area to be the container.
  // The Top SVG should be Orange. It sits Above content.
  // So it should be solid from Wave to Height?
  // Wait, if it sits ABOVE, and content is BELOW.
  // The join is at y=Height.

  // Actually, let's look at the "Top" relative to the page flow.
  // Page = White.
  // Form = Orange.
  // Top Wave SVG = Transition White -> Orange.
  // So the SVG should have the "Orange" shape at the bottom.
  // It should be Transparent at the top.
  // So we fill from Wave to Height.

  // Bottom Wave SVG = Transition Orange -> White.
  // So the SVG should have the "Orange" shape at the top.
  // Transparent at the bottom.
  // So we fill from 0 to Wave.

  const isTopWave = !invert

  // Start point
  let d = isTopWave
    ? `M0,${height} L0,${height / 2}`
    : `M0,0 L0,${height / 2}`

  for (let x = 0; x <= width; x += step) {
    // Sine wave equation
    // We want it to start at 0 (slope?) or Peak?
    // Sine(0) = 0.
    // We want bumps.
    // If we use Cos(0) = 1 (Peak).
    // Let's use Cos to start at a peak (or valley).
    // y = midY + amplitude * cos(...)
    const angle = x * frequency
    const y = (height / 2) + Math.sin(angle) * (height / 2)
    // If sin, starts at mid.
    // If cos, starts at peak.
    // Let's try Sin first.
    d += ` L${x},${y}`
  }

  // Close path
  d += isTopWave
    ? ` L${width},${height} Z`
    : ` L${width},0 Z`

  return d
}



export type FormBlockType = {
  blockName?: string
  blockType?: 'formBlock'
  enableIntro: boolean
  form: FormType
  introContent?: SerializedEditorState
}

export const FormBlock: React.FC<
  {
    id?: string
  } & FormBlockType
> = (props) => {
  const {
    enableIntro,
    form: formFromProps,
    form: { id: formID, confirmationMessage, confirmationType, redirect, submitButtonLabel } = {},
    introContent,
  } = props

  const formMethods = useForm({
    defaultValues: formFromProps.fields,
  })
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState<boolean>()
  const [error, setError] = useState<{ message: string; status?: string } | undefined>()
  const router = useRouter()

  const [topWavePath, setTopWavePath] = useState("")
  const [bottomWavePath, setBottomWavePath] = useState("")

  React.useEffect(() => {
    setTopWavePath(generateWavePath(false))
    setBottomWavePath(generateWavePath(true))
  }, [])

  const onSubmit = useCallback(
    (data: FormFieldBlock[]) => {
      let loadingTimerID: ReturnType<typeof setTimeout>
      const submitForm = async () => {
        setError(undefined)

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }))

        // delay loading indicator by 1s
        loadingTimerID = setTimeout(() => {
          setIsLoading(true)
        }, 1000)

        try {
          const req = await fetch(`${getClientSideURL()}/api/form-submissions`, {
            body: JSON.stringify({
              form: formID,
              submissionData: dataToSend,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          })

          const res = await req.json()

          clearTimeout(loadingTimerID)

          if (req.status >= 400) {
            setIsLoading(false)

            setError({
              message: res.errors?.[0]?.message || 'Internal Server Error',
              status: res.status,
            })

            return
          }

          setIsLoading(false)
          setHasSubmitted(true)

          if (confirmationType === 'redirect' && redirect) {
            const { url } = redirect

            const redirectUrl = url

            if (redirectUrl) router.push(redirectUrl)
          }
        } catch (err) {
          console.warn(err)
          setIsLoading(false)
          setError({
            message: 'Something went wrong.',
          })
        }
      }

      void submitForm()
    },
    [router, formID, redirect, confirmationType],
  )

  return (
    <div className="container lg:max-w-[60rem]">
      {enableIntro && introContent && !hasSubmitted && (
        <RichText className="mb-8 lg:mb-12" data={introContent} enableGutter={false} />
      )}
      <FormProvider {...formMethods}>
        {!isLoading && hasSubmitted && confirmationType === 'message' && (
          <RichText data={confirmationMessage} />
        )}
        {isLoading && !hasSubmitted && <p>Loading, please wait...</p>}
        {error && <div>{`${error.status || '500'}: ${error.message || ''}`}</div>}
        {!hasSubmitted && (
          <form id={formID} onSubmit={handleSubmit(onSubmit)}>
            <Align orientation="center">
              <div className={cn("w-full", fillSecondaryColorsMap["orange"])}>
                <svg className="w-full" viewBox={`0 0 ${WAVE_WIDTH} ${WAVE_HEIGHT}`} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d={topWavePath} />
                </svg>
                <div className={cn("px-8 py-6", bgSecondaryColorsMap["orange"])}>
                  {formFromProps &&
                    formFromProps.fields &&
                    formFromProps.fields?.map((field, index) => {
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      const Field: React.FC<any> = fields?.[field.blockType as keyof typeof fields]
                      if (Field) {
                        return (
                          <div className="mb-4 last:mb-0" key={index}>
                            <Field
                              form={formFromProps}
                              {...field}
                              {...formMethods}
                              control={control}
                              errors={errors}
                              register={register}
                            />
                          </div>
                        )
                      }
                      return null
                    })}
                  <div className="mt-6 flex justify-end">
                    <Button form={formID} type="submit" className="bg-camelot-800 text-white hover:bg-camelot-900 rounded-none text-xl">
                      {submitButtonLabel}
                    </Button>
                  </div>
                </div>
                <svg className="w-full" viewBox={`0 0 ${WAVE_WIDTH} ${WAVE_HEIGHT}`} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d={bottomWavePath} />
                </svg>
              </div>
            </Align>
          </form>
        )}
      </FormProvider>
    </div>
  )
}
