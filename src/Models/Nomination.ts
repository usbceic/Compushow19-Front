export interface Nomination {
  id: number
  userId: number
  categoryId: number
  mainNominee: number
  auxNominee?: number
  extra?: string
}
