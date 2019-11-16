import { User } from "./User";

export interface Nomination {
  id: number
  userId: number
  categoryId: number
  mainNominee?: User
  auxNominee?: User
  extra?: string
}
