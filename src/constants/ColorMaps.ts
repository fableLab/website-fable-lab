export type ColorsList = 'yellow' | 'violet' | 'blue' | 'orange' | 'prune';

/* Primary Colors Map */
export const primaryColorsMap: Record<ColorsList, string> = {
  yellow: 'bees-400',
  violet: 'lavender-400',
  blue: 'azure-800',
  orange: 'cinnabar-500',
  prune: 'camelot-800',
};
export const bgPrimaryColorsMap: Record<ColorsList, string> = {
  yellow: `bg-${primaryColorsMap['yellow']}`,
  violet: `bg-${primaryColorsMap['violet']}`,
  blue: `bg-${primaryColorsMap['blue']}`,
  orange: `bg-${primaryColorsMap['orange']}`,
  prune: `bg-${primaryColorsMap['prune']}`,
};

export const borderPrimaryColorsMap: Record<ColorsList, string> = {
  yellow: `border-${primaryColorsMap['yellow']}`,
  violet: `border-${primaryColorsMap['violet']}`,
  blue: `border-${primaryColorsMap['blue']}`,
  orange: `border-${primaryColorsMap['orange']}`,
  prune: `border-${primaryColorsMap['prune']}`,
};

export const fillPrimaryColorsMap: Record<ColorsList, string> = {
  yellow: `fill-${primaryColorsMap['yellow']}`,
  violet: `fill-${primaryColorsMap['violet']}`,
  blue: `fill-${primaryColorsMap['blue']}`,
  orange: `fill-${primaryColorsMap['orange']}`,
  prune: `fill-${primaryColorsMap['prune']}`,
};

/* Secondary Colors Map */
export const secondaryColorsMap: Record<ColorsList, string> = {
  yellow: 'bees-100',
  violet: 'lavender-200',
  blue: 'azure-100',
  orange: 'cinnabar-200',
  prune: 'camelot-700',
};

export const bgSecondaryColorsMap: Record<ColorsList, string> = {
  yellow: `bg-${secondaryColorsMap['yellow']}`,
  violet: `bg-${secondaryColorsMap['violet']}`,
  blue: `bg-${secondaryColorsMap['blue']}`,
  orange: `bg-${secondaryColorsMap['orange']}`,
  prune: `bg-${secondaryColorsMap['prune']}`,
};

export const borderSecondaryColorsMap: Record<ColorsList, string> = {
  yellow: `border-${secondaryColorsMap['yellow']}`,
  violet: `border-${secondaryColorsMap['violet']}`,
  blue: `border-${secondaryColorsMap['blue']}`,
  orange: `border-${secondaryColorsMap['orange']}`,
  prune: `border-${secondaryColorsMap['prune']}`,
};

export const fillSecondaryColorsMap: Record<ColorsList, string> = {
  yellow: `fill-${secondaryColorsMap['yellow']}`,
  violet: `fill-${secondaryColorsMap['violet']}`,
  blue: `fill-${secondaryColorsMap['blue']}`,
  orange: `fill-${secondaryColorsMap['orange']}`,
  prune: `fill-${secondaryColorsMap['prune']}`,
};
