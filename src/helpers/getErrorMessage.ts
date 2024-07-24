import {
  isErrorWithMessage,
  isFetchBaseQueryError,
} from './isFetchBaseQueryError'

interface FetchBaseQueryErrorWithData {
  status: number
  data: {
    error: string
  }
}

export const getErrorMessage = (err: unknown): string => {
  if (isFetchBaseQueryError(err)) {
    const errMsg = err as FetchBaseQueryErrorWithData

    return 'error' in err ? `${err.error}. Please try later` : errMsg.data.error
  } else if (isErrorWithMessage(err)) {
    return err.message
  } else {
    return 'An unknown error occurred'
  }
}
