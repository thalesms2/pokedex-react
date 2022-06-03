import useApi from "./useApi"
import { useState } from "react"

export default function handles() {
    const {
        searchPokemon
    } = useApi()
    const [search, setSearch] = useState<string>('')
    const handleSubmitSearch = () => {
        searchPokemon(search)
    }
    const handleInputChange = (value: string) => {
        setSearch(value)
    }
    return {
        search,
        handleSubmitSearch,
        handleInputChange,
    }
}