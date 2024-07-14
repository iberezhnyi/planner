import { ErrorMessage, Field, Form } from 'formik'
import styled from 'styled-components'

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.global.spacing(8)};
  margin-bottom: ${({ theme }) => theme.global.spacing(4)};
`

export const Label = styled.label`
  position: relative;
`

export const InputStyled = styled(Field)`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.global.spacing(2)};
  padding: ${({ theme }) => theme.global.spacing(4)};

  border: 0.0625rem solid ${({ theme }) => theme.global.form.primaryInputColor};
  border-radius: 0.5rem;
`

export const FormText = styled.p`
  margin-bottom: ${({ theme }) => theme.global.spacing(2)};

  font-size: ${({ theme }) => theme.global.text.fontSize.xs};
  font-weight: ${({ theme }) => theme.global.text.fontWeight.sb};
`

export const ErrorMessageStyled = styled(ErrorMessage)`
  position: absolute;

  color: ${({ theme }) => theme.global.form.warningColor};
  font-size: ${({ theme }) => theme.global.text.fontSize.xs};
  font-weight: ${({ theme }) => theme.global.text.fontWeight.sb};
`

export const IconLogin = styled.svg`
  width: 1.25rem;
  height: 1.25rem;

  fill: transparent;
  stroke: ${({ theme }) => theme.btnTextColor};
`
