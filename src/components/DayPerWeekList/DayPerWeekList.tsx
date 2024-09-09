import { FC, useState } from 'react'
import { useFormik } from 'formik'
import {
  useAddNoteMutation,
  useDeleteNoteMutation,
  useUpdateNoteMutation,
} from 'store/weeksApi'
import { IWeekDay } from 'types'
import * as SC from './DayPerWeekList.styled'
import sprite from 'assets/icons/sprite.svg'

interface DayPerWeekListProps extends IWeekDay {}

export const DayPerWeekList: FC<DayPerWeekListProps> = ({
  notes,
  tasks,
  date,
  day,
}) => {
  const [isTextareaVisible, setTextareaVisible] = useState(false)
  const toggleTextarea = () => {
    setTextareaVisible((prev) => !prev)
  }
  const [addNote] = useAddNoteMutation()
  const [updateNote] = useUpdateNoteMutation()
  const [deleteNote] = useDeleteNoteMutation()
  const [initialNote, setInitialNote] = useState(notes?.note || '')

  const formik = useFormik({
    initialValues: {
      note: initialNote,
    },

    onSubmit: async (values) => {
      if (values.note.trim() !== initialNote) {
        if (notes?._id) {
          if (values.note.trim() === '') {
            await deleteNote({
              noteId: notes._id,
            })

            setInitialNote('')
          } else {
            await updateNote({
              noteId: notes._id,
              note: values.note.trim(),
              date: date.toString(),
            })

            setInitialNote(values.note.trim())
          }
        } else if (values.note.trim() !== '') {
          await addNote({
            note: values.note.trim(),
            date: date.toString(),
          })

          setInitialNote(values.note.trim())
        }
      }
    },
  })

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
      {isTextareaVisible && (
        <form onBlur={formik.handleSubmit}>
          <SC.Textarea
            name="note"
            onChange={formik.handleChange}
            value={formik.values.note}
          />
        </form>
      )}
      <SC.Text>{notes ? notes.note : 'My note'}</SC.Text>
    </>
  )
}
