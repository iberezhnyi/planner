type SpacingValues =
  | [number]
  | [number, number]
  | [number, number, number]
  | [number, number, number, number]

export const calculateSpacing = (...values: SpacingValues): string => {
  const remValues = values.map((value) => `${value * 0.25}rem`)

  return remValues.join(' ')
}
