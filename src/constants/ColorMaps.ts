export type ColorsList =
  | 'yellow'
  | 'violet'
  | 'blue'
  | 'orange'
  | 'prune'
  | 'perspective'
  | 'transparent'

/* Primary Colors Map */
export const primaryColorsMap: Record<ColorsList, string> = {
  yellow:      'bees-400',
  violet:      'lavender-400',
  blue:        'azure-800',
  orange:      'cinnabar-500',
  prune:       'camelot-800',
  perspective: 'perspective-500',
  transparent: 'transparent',
}

export const bgPrimaryColorsMap: Record<ColorsList, string> = {
  yellow:      'bg-bees-400',
  violet:      'bg-lavender-400',
  blue:        'bg-azure-800',
  orange:      'bg-cinnabar-500',
  prune:       'bg-camelot-800',
  perspective: 'bg-perspective-500',
  transparent: 'bg-transparent',
}

export const borderPrimaryColorsMap: Record<ColorsList, string> = {
  yellow:      'border-bees-400',
  violet:      'border-lavender-400',
  blue:        'border-azure-800',
  orange:      'border-cinnabar-500',
  prune:       'border-camelot-800',
  perspective: 'border-perspective-500',
  transparent: 'border-transparent',
}

export const fillPrimaryColorsMap: Record<ColorsList, string> = {
  yellow:      'fill-bees-400',
  violet:      'fill-lavender-400',
  blue:        'fill-azure-800',
  orange:      'fill-cinnabar-500',
  prune:       'fill-camelot-800',
  perspective: 'fill-perspective-500',
  transparent: 'fill-transparent',
}

export const strokePrimaryColorsMap: Record<ColorsList, string> = {
  yellow:      'stroke-bees-400',
  violet:      'stroke-lavender-400',
  blue:        'stroke-azure-800',
  orange:      'stroke-cinnabar-500',
  prune:       'stroke-camelot-800',
  perspective: 'stroke-perspective-500',
  transparent: 'stroke-transparent',
}

/* Secondary Colors Map */
export const secondaryColorsMap: Record<ColorsList, string> = {
  yellow:      'bees-100',
  violet:      'lavender-200',
  blue:        'azure-100',
  orange:      'cinnabar-200',
  prune:       'camelot-700',
  perspective: 'perspective-200',
  transparent: 'stroke-transparent',
}

export const bgSecondaryColorsMap: Record<ColorsList, string> = {
  yellow:      'bg-bees-100',
  violet:      'bg-lavender-200',
  blue:        'bg-azure-100',
  orange:      'bg-cinnabar-200',
  prune:       'bg-camelot-700',
  perspective: 'bg-perspective-200',
  transparent: 'bg-transparent',
}

export const borderSecondaryColorsMap: Record<ColorsList, string> = {
  yellow:      'border-bees-100',
  violet:      'border-lavender-200',
  blue:        'border-azure-100',
  orange:      'border-cinnabar-200',
  prune:       'border-camelot-700',
  perspective: 'border-perspective-200',
  transparent: 'border-transparent',
}

export const fillSecondaryColorsMap: Record<ColorsList, string> = {
  yellow:      'fill-bees-100',
  violet:      'fill-lavender-200',
  blue:        'fill-azure-100',
  orange:      'fill-cinnabar-200',
  prune:       'fill-camelot-700',
  perspective: 'fill-perspective-200',
  transparent: 'fill-transparent',
}

export type TextColorsList =
  | 'yellow'
  | 'violet'
  | 'blue'
  | 'orange'
  | 'prune'
  | 'perspective'
  | 'white'
  | 'black'

export const textColorsMap: Record<TextColorsList, string> = {
  yellow:      'text-bees-400',
  violet:      'text-lavender-400',
  blue:        'text-azure-800',
  orange:      'text-cinnabar-500',
  prune:       'text-camelot-800',
  perspective: 'text-perspective-500',
  white:       'text-white',
  black:       'text-black',
}
