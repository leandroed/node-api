import { AuthenticationModel } from '@/domain/models'

export type AuthenticationParams = {
  email: string
  password: string
}

export type Authentication = {
  auth (authenticationParams: AuthenticationParams): Promise<AuthenticationModel>
}
