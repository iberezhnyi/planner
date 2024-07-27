import { enqueueSnackbar } from 'notistack'

export const successNotification = (message: string) => {
  enqueueSnackbar(message, { variant: 'success', autoHideDuration: 2000 })
}

export const errorNotification = (message: string) => {
  enqueueSnackbar(message, { variant: 'error', autoHideDuration: 2000 })
}
