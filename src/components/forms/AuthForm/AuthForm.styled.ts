import { ErrorMessage, Field, Form } from "formik"
import styled from "styled-components"

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;

  gap: 2rem;
  margin-bottom: 1rem;
`

export const Label = styled.label`
  position: relative;
`

export const InputStyled = styled(Field)`
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 1rem;

  border: 0.0625rem solid ${({ theme }) => theme.form.primaryInputColor};
  border-radius: 0.5rem;
`

export const FormText = styled.p`
  margin-bottom: 0.5rem;

  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.text.fontSize.xs};
  font-weight: ${({ theme }) => theme.text.fontWeight.sb};
`

export const ErrorMessageStyled = styled(ErrorMessage)`
  position: absolute;

  color: ${({ theme }) => theme.form.warningColor};
  font-size: ${({ theme }) => theme.text.fontSize.xs};
  font-weight: ${({ theme }) => theme.text.fontWeight.sb};
`
