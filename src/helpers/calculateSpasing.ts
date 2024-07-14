export const calculateSpacing = (...values: number[]) => {
  if (values.length < 1 || values.length > 4)
    throw new Error('Invalid number of arguments for spacing')

  return values.map((value) => `${value * 0.25}rem`).join(' ')
}
