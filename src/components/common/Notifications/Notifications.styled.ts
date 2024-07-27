import styled from 'styled-components'
import { MaterialDesignContent } from 'notistack'

export const Notifications = styled(MaterialDesignContent)(({ theme }) => ({
  '&.notistack-MuiContent-success': {
    backgroundColor: theme.accent,
    color: theme.btnDisabledTextColor,
  },

  '&.notistack-MuiContent-error': {
    backgroundColor: theme.global.form.warningColor,
  },
}))
