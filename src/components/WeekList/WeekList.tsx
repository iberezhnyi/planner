import { FC } from 'react'
import * as SC from './WeekList.styled'
import { DayPerWeekList } from 'components/DayPerWeekList'
import { useGetWeekInfoQuery } from 'store'

export const WeekList: FC = () => {
  const { data } = useGetWeekInfoQuery()
  console.log('data :>> ', data?.weekDays)

  return (
    <SC.WeekList>
      {data?.weekDays?.map((day) => (
        <SC.DayItem key={day.id}>
          <DayPerWeekList {...day} />
        </SC.DayItem>
      ))}
      {/* <SC.DayItem>
        <DayPerWeekList
          day="Понеділок"
          date="29.07"
          task="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, harum odio nostrum alias neque pariatur eaque suscipit. Alias accusamus minus nulla? Totam rerum sapiente consequatur, officia quasi esse. Iure, magnam.
      Tempora consequuntur est delectus odit soluta veniam vel quam, modi voluptates! Culpa facere possimus quaerat maiores velit autem quidem suscipit repudiandae soluta. Facere impedit earum, accusamus minima sapiente perferendis dolor!
      Recusandae eligendi maiores ducimus neque omnis debitis veniam dolor impedit molestias, quia sed nostrum, nesciunt voluptatum blanditiis. Optio incidunt odit eius illum est minus, molestias quas culpa, pariatur corrupti nobis cumque!"
        />
      </SC.DayItem>
      <SC.DayItem>
        <DayPerWeekList
          day="Вівторок"
          date="30.07"
          task="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, harum odio nostrum alias neque pariatur eaque suscipit. Alias accusamus minus nulla? Totam rerum sapiente consequatur, officia quasi esse. Iure, magnam.
      Tempora consequuntur est delectus odit soluta veniam vel quam, modi voluptates!"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, harum odio nostrum alias neque pariatur eaque suscipit. Alias accusamus minus nulla?"
        />
      </SC.DayItem>
      <SC.DayItem>
        <DayPerWeekList
          day="Середа"
          date="31.07"
          task="Illum, repellendus voluptatibus distinctio quam, quod debitis placeat odio magnam quisquam at similique tempora facilis illo. Optio incidunt odit eius illum est minus, molestias quas culpa, pariatur corrupti nobis cumque!"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, harum odio nostrum alias neque pariatur eaque suscipit. Alias accusamus minus nulla? Totam rerum sapiente consequatur, officia quasi esse. Iure, magnam.
      Tempora consequuntur est delectus odit soluta veniam vel quam, modi voluptates! Culpa facere possimus quaerat maiores velit autem quidem suscipit repudiandae soluta. Facere impedit earum, accusamus minima sapiente perferendis dolor!
      Recusandae eligendi maiores ducimus neque omnis debitis veniam dolor impedit molestias, quia sed nostrum, nesciunt voluptatum blanditiis. Neque accusamus impedit recusandae consequuntur distinctio repellendus vitae odit, sunt quas delectus quam!
      Molestias quae laborum atque saepe vero impedit nobis harum blanditiis perspiciatis cumque neque ab asperiores repellendus voluptas voluptatibus deserunt at, aut aliquid eveniet. Ipsam officiis sequi blanditiis, iure consectetur molestiae!
      Illum, repellendus voluptatibus distinctio quam, quod debitis placeat odio magnam quisquam at similique tempora facilis illo. Optio incidunt odit eius illum est minus, molestias quas culpa, pariatur corrupti nobis cumque!"
        />
      </SC.DayItem>
      <SC.DayItem>
        <DayPerWeekList
          day="Четвер"
          date="01.08"
          task="Culpa facere possimus quaerat maiores velit autem quidem suscipit repudiandae soluta. Facere impedit earum, accusamus minima sapiente perferendis dolor!
      Recusandae eligendi maiores ducimus neque omnis debitis veniam dolor impedit molestias, quia sed nostrum, nesciunt voluptatum blanditiis. Neque accusamus impedit recusandae consequuntur distinctio repellendus vitae odit, sunt quas delectus quam!"
        />
      </SC.DayItem>
      <SC.DayItem>
        <DayPerWeekList
          day="П'ятниця"
          date="02.08"
          task="Recusandae eligendi maiores ducimus!"
        />
      </SC.DayItem>
      <SC.DayItem>
        <DayPerWeekList
          day="Субота"
          date="03.08"
          task="Recusandae eligendi maiores ducimus neque omnis debitis veniam dolor impedit molestias, quia sed nostrum, nesciunt voluptatum blanditiis. Neque accusamus impedit recusandae consequuntur distinctio repellendus vitae odit, sunt quas delectus quam!"
          text="Ipsam officiis sequi blanditiis, iure consectetur molestiae!
      Illum, repellendus voluptatibus distinctio quam, quod debitis placeat odio magnam quisquam at similique tempora facilis illo. Optio incidunt odit eius illum est minus, molestias quas culpa, pariatur corrupti nobis cumque!"
        />
      </SC.DayItem>
      <SC.DayItem>
        <DayPerWeekList
          day="Неділя"
          date="04.08"
          task="Culpa facere possimus quaerat maiores velit autem quidem suscipit repudiandae soluta. Facere impedit earum, accusamus minima sapiente perferendis dolor!
      Recusandae eligendi maiores ducimus neque omnis debitis veniam dolor impedit molestias, quia sed nostrum, nesciunt voluptatum blanditiis. Neque accusamus impedit recusandae consequuntur distinctio repellendus vitae odit, sunt quas delectus quam!
      Molestias quae laborum atque saepe vero impedit nobis harum blanditiis perspiciatis cumque neque ab asperiores repellendus voluptas voluptatibus deserunt at, aut aliquid eveniet. Ipsam officiis sequi blanditiis, iure consectetur molestiae!
      Illum, repellendus voluptatibus distinctio quam, quod debitis placeat odio magnam quisquam at similique tempora facilis illo. Optio incidunt odit eius illum est minus, molestias quas culpa, pariatur corrupti nobis cumque!"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, harum odio nostrum alias neque pariatur eaque suscipit. Alias accusamus minus nulla? Totam rerum sapiente consequatur, officia quasi esse. Iure, magnam.
      Tempora consequuntur est delectus odit soluta veniam vel quam, modi voluptates! Culpa facere possimus quaerat maiores velit autem quidem suscipit repudiandae soluta. Facere impedit earum, accusamus minima sapiente perferendis dolor!
      Recusandae eligendi maiores ducimus neque omnis debitis veniam dolor impedit molestias, quia sed nostrum, nesciunt voluptatum blanditiis. Neque accusamus impedit recusandae consequuntur distinctio repellendus vitae odit, sunt quas delectus quam!
      Molestias quae laborum atque saepe vero impedit nobis harum blanditiis perspiciatis cumque neque ab asperiores repellendus voluptas voluptatibus deserunt at, aut aliquid eveniet. Ipsam officiis sequi blanditiis, iure consectetur molestiae!
      Illum, repellendus voluptatibus distinctio quam, quod debitis placeat odio magnam quisquam at similique tempora facilis illo. Optio incidunt odit eius illum est minus, molestias quas culpa, pariatur corrupti nobis cumque!"
        />
      </SC.DayItem> */}
    </SC.WeekList>
  )
}
