import useApi from "./useApi"
import { useState } from "react"

export default function handles() {
    const {
        searchPokemon
    } = useApi()
    const [search, setSearch] = useState<string>('')
    const [index, setIndex] = useState(0)
    const handleSubmitSearch = () => {
        searchPokemon(search)
    }
    const handleInputChange = (value: string) => {
        setSearch(value)
    }
    const handleSelectChange = (value: string) => {
        setIndex(Number(value))
    }
    return {
        search,
        handleSubmitSearch,
        handleInputChange,
        index,
        handleSelectChange
    }
}