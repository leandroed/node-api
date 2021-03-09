import { AddAccountParams } from '@/domain/usecases'
import { AccountModel } from '@/domain/models/account'

export interface AddAccountRepository {
  add (data: AddAccountParams): Promise<AccountModel>
}
