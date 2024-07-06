import { ErrorMessage, Field, Form } from "formik"
import styled from "styled-components"

export const FormStyled = styled(Form)`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const Label = styled.label`
  position: relative;
`

export const FormText = styled.p`
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.text.fontSize.xs};
  font-weight: ${({ theme }) => theme.text.fontWeight};
  line-height: ${({ theme }) => theme.text.lineHeight};
  color: ${({ theme }) => theme.textColor};

  /* @media screen and (min-width: 480px) {
    font-size: ${({ theme }) => theme.text.fontSize.bxxxl};
  } */
`
export const InputStyled = styled(Field)`
  padding: 0.5rem 1rem;
  border: 0.0625rem solid ${({ theme }) => theme.form.primaryInputColor};
  border-radius: 0.5rem;
  width: 100%;
  margin-bottom: 0.5rem;
`
export const ErrorMessageStyled = styled(ErrorMessage)`
  position: absolute;
  color: ${({ theme }) => theme.form.warningColor};
  font-size: ${({ theme }) => theme.text.fontSize.xs};
  font-weight: ${({ theme }) => theme.text.fontWeight};
  line-height: ${({ theme }) => theme.text.lineHeight};
`
