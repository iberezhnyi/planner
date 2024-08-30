import { FC, useState } from 'react'
// import { useClickOutside } from 'hooks'
import sprite from 'assets/icons/sprite.svg'
import * as SC from './DayPerWeekList.styled'
import { IWeekDay } from 'types'

interface DayPerWeekListProps extends IWeekDay {}

export const DayPerWeekList: FC<DayPerWeekListProps> = ({
  notes,
  tasks,
  date,
  day,
}) => {
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
        <SC.Date>{date.toString().slice(0, 10)}</SC.Date>
      </SC.Header>

      <SC.LabelTaskWrapper>
        {tasks &&
          tasks.map((task) => (
            <SC.LabelTask key={task._id}>
              <SC.Checkbox type="checkbox" />
              <SC.TaskTitle>{task.title}</SC.TaskTitle>
              <SC.TaskDescription>{task.description}</SC.TaskDescription>
            </SC.LabelTask>
          ))}
      </SC.LabelTaskWrapper>

      <SC.ToggleButtonWrapper>
        <SC.ToggleButton
          onClick={toggleTextarea}
          className={isTextareaVisible ? 'open' : ''}
        >
          ----------
          <SC.IconDropdown className={isTextareaVisible ? 'open' : ''}>
            <use href={`${sprite}#arrow`} />
          </SC.IconDropdown>
          ----------
        </SC.ToggleButton>
      </SC.ToggleButtonWrapper>
      {isTextareaVisible && <SC.Textarea />}
      <SC.Text>{notes ? notes.note : 'My note'}</SC.Text>
    </>
  )
}
