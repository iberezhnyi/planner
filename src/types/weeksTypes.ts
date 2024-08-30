interface INote {
  _id: string
  date: Date
  note: string
  owner: {
    _id: string
    email: string
  }
}

interface ITask {
  _id: string
  type: 'monthly' | 'weekly' | 'daily'
  title: string
  description: string
  date: Date
  completed: boolean
}

export interface IWeekDay {
  id: string
  day: string
  notes: INote | null
  tasks: ITask[] | null
  date: Date
}

export interface IWeeksResponse {
  message: string
  weekDays: IWeekDay[]
}
