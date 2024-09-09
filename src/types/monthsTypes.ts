export interface IMonthsReq {
  month?: number
  year?: number
}

export interface IMonthsResponse {
  message: string
  monthsDays: IMonthsDay[]
}
export interface IMonthsDay {
  id: string
  day: number
  month: number
  year: number
}
