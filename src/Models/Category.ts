export interface Category {
    color: string
    description: string
    extra?: string
    id: number
    pictureUrl: string
    type: 'TO_USER' | 'ONLY_EXTRA' | 'TO_USER_WITH_EXTRA' | 'TO_TWO_USERS'
    name: string
}
