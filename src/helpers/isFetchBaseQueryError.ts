import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export function isFetchBaseQueryError(
  error: unknown
): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error
}

export function isErrorWithMessage(
  error: unknown
): error is { message: string } {
  if (typeof error === 'object' && error !== null) {
    const e = error as { message: unknown }

    return 'message' in e && typeof e.message === 'string'
  }

  return false
}
