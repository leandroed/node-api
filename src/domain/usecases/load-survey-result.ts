import { SurveyResultModel } from '@/domain/models'

export type LoadSurveyResult = {
  load (surveyId: string, accountId: string): Promise<LoadSurveyResult.Result>
}

export namespace LoadSurveyResult {
  export type Result = SurveyResultModel
}
