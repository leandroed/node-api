import { SurveyModel } from '@/domain/models'

export type AddSurvey = {
  add (data: AddSurvey.Params): Promise<void>
}

export namespace AddSurvey {
  export type Params = Omit<SurveyModel, 'id'>
}
