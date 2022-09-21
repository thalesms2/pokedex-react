import useApi from "./useApi"
import { useState } from "react"


export default function useHandles() {
    const {
        searchPokemon
    } = useApi()
    const [search, setSearch] = useState<string>('')
    const [gameDescription, setGameDescription] = useState(0)
    const [sprite, setSprite] = useState<string>('')
    const [title, setTitle] = useState('Pokedex')
    const handleSubmitSearch = () => {
        searchPokemon(search)
    }
    const handleInputChange = (value: string) => {
        setSearch(value)
    }
    const handleGameDescriptionChange = (value: string) => {
        setGameDescription(Number(value))
    }
    const handleSpriteChange = (value: string) => {
        setSprite(value)
    }
    const handleTitleChange = (title: string) => {
        setTitle(title)
    }
    return {
        search,
        handleSubmitSearch,
        handleInputChange,
        gameDescription,
        handleGameDescriptionChange,
        sprite,
        handleSpriteChange,
        title,
        handleTitleChange
    }
}