import styled from 'styled-components'
import { btnCommonStyles } from 'styles'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const DayName = styled.p`
  font-weight: ${({ theme }) => theme.global.text.fontWeight.b};
`

export const Date = styled.p`
  font-weight: ${({ theme }) => theme.global.text.fontWeight.b};
`

export const Checkbox = styled.input`
  margin-right: 10px;
`
export const LabelTaskWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

export const LabelTask = styled.label`
  display: block;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

export const TaskTitle = styled.p`
  display: inline;

  margin-bottom: 5px;
`

export const TaskDescription = styled.p`
  /* display: inline; */

  text-indent: 3ch;
`

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 150px;
  border: 1px solid #000;
  margin-bottom: 20px;
`

export const Text = styled.div`
  text-align: justify;
`

export const ToggleButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ToggleButton = styled.button`
  ${btnCommonStyles}

  color: ${({ theme }) => theme.textColor};

  &:hover,
  &:focus,
  &:active,
  &.open {
    color: ${({ theme }) => theme.linkActiveColor};
  }
`

export const IconDropdown = styled.svg`
  width: 1rem;
  height: 1rem;

  fill: currentColor;
  stroke: currentColor;

  &.open {
    transform: rotate(180deg);

    fill: ${({ theme }) => theme.linkActiveColor};
    stroke: ${({ theme }) => theme.linkActiveColor};
  }
`
