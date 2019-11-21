export interface Nominee {
    id: number,
    categoryId: number,
    name: string,
    happyPictureUrl: string,
    sadPictureUrl: string,
    extraPictureUrl?: string
    isHappy: boolean
}
