export type Pokemon = {
    name: string
    id: number
    abilities: any
    sprites: any
    types: Array<Object>
    height: number
    weight: number
}

export type Status = {
    base_stat: number
    stat: {
        name: string
    }
}