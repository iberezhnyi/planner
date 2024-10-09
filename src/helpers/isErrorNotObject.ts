export function isErrorNotObject(error: unknown): error is string {
  if (typeof error !== typeof {} && error !== null && error !== undefined) {
    return error && typeof error === 'string'
  }

  return false
}
