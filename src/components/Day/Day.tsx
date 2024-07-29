import { FC, useState } from 'react'
// import { useClickOutside } from 'hooks'
import sprite from 'assets/icons/sprite.svg'
import * as SC from './Day.styled'

interface DayProps {
  day: string
  date: string
  task: string
  text?: string
}

export const Day: FC<DayProps> = ({ date, day, task, text }) => {
  const [isTextareaVisible, setTextareaVisible] = useState(false)
  // const textareaRef = useRef<HTMLTextAreaElement>(null)

  const toggleTextarea = () => {
    setTextareaVisible((prev) => !prev)
  }

  // useClickOutside(textareaRef, () => setTextareaVisible(false))

  return (
    <>
      <SC.Header>
        <SC.DayName>{day}</SC.DayName>
        <SC.Date>{date}</SC.Date>
      </SC.Header>

      <SC.Label>
        <SC.Checkbox type="checkbox" />
        {task}
      </SC.Label>

      <SC.ToggleButtonWrapper>
        <SC.ToggleButton onClick={toggleTextarea} className={isTextareaVisible ? 'open' : ''}>
          ----------
          <SC.IconDropdown className={isTextareaVisible ? 'open' : ''}>
            <use href={`${sprite}#arrow`} />
          </SC.IconDropdown>
          ----------
        </SC.ToggleButton>
      </SC.ToggleButtonWrapper>

      {isTextareaVisible && <SC.Textarea />}

      <SC.Text>{text}</SC.Text>
    </>
  )
}
