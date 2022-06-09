import axios from 'axios'

import { Pokemon } from '../types/pokemonTypes'


export default function useApi() {
    function formatDescription(description: string) {
        description = description.toLowerCase()
        description = description.replace(/(\n)/gm, " ")
        description = description.replace(/(\f)/gm, "")
        const index = description.search(/([.])/gm)
        if(description[index+1] === ' ') {
            description = description.charAt(0).toUpperCase() + description.slice(1, index) + '. ' + description.charAt(index+2).toUpperCase() + description.slice(index+3)
        } else {
            description = description.charAt(0).toUpperCase() + description.slice(1, index) + '. ' + description.charAt(index+1).toUpperCase() + description.slice(index+2)
        }
        return description
    }
    function formatVersion(version: string) {
        let response = version.replaceAll('-', ' ')
        return response
    }
    async function searchPokemon(pokemonName: string) {
        const pokemonInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        const pokemonSpecies = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
        const pokemonEvo = await axios.get(pokemonSpecies.data.evolution_chain.url)

        const pokemonDamageRelations: any = []
        pokemonInfo?.data.types.map(async (type: any) => {
            const response = await axios.get(type.type.url)
            pokemonDamageRelations.push(response.data.damage_relations)
        })

        // Descrições
        const descriptions: any = []
        let index = 0
        pokemonSpecies?.data.flavor_text_entries.forEach((text: any) => {
            if(text.language.name === 'en') {
                const response = {
                    text: formatDescription(text.flavor_text),
                    language: text.language.name,
                    version: index,
                    versionFixed: formatVersion(text.version.name)
                }
                descriptions.push(response)
                index++
            }
        })

        const response = {
            info:  {
                id: pokemonInfo.data.id,
                name: pokemonInfo.data.name,
                img: pokemonInfo.data.sprites,
                types: pokemonInfo.data.types,
                height: pokemonInfo.data.height,
                weight: pokemonInfo.data.weight,
                stats: pokemonInfo.data.stats,
                abilities: pokemonInfo.data.abilities,
                gender: pokemonSpecies.data.gender_rate,
                damageRelations: pokemonDamageRelations
            },
            description: descriptions,
            evolution: pokemonEvo.data.chain.evolves_to
        }
        return await response
    }
    async function getAll() {
        let response: Array<Pokemon> = [] 
        for(let i = 1; i < 152; i++) {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
          response.push(res.data)
        }
        return await response
    }
    return {
        getAll,
        searchPokemon
    }
}