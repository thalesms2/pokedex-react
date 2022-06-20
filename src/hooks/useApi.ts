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
    function pickDescriptions(text: any, response: any) {
        if(text.language.name === 'en') {
            response.data.description.push({
                text: formatDescription(text.flavor_text),
                language: text.language.name,
                version: response.data.description.length,
                versionFixed: formatVersion(text.version.name)
            })
        }
    }
    async function searchPokemon(pokemonName: string) {
        const pokemonInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(async (response) => {
                response.data.types.map(async (type: any) => {
                    await axios.get(type.type.url)
                        .then((damageRelation) => {
                            response.data.damageRelations = damageRelation.data
                        })
                        // tratar damage relations {double_damage_to from} transformar em 2 arrays tratados
                })
                return response.data
            })
        const pokemonSpecies = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
            .then(async (response) => {
                await axios.get(response.data.evolution_chain.url)
                    .then((evo) => { response.data.evo = evo.data })
                // Description
                response.data.description = []
                response.data.flavor_text_entries.forEach((text: any) => { pickDescriptions(text, response) })
                return response.data
            })

        const response = {
            info:  {
                id: pokemonInfo.id,
                name: pokemonInfo.name,
                img: pokemonInfo.sprites,
                types: pokemonInfo.types,
                height: pokemonInfo.height,
                weight: pokemonInfo.weight,
                stats: pokemonInfo.stats,
                abilities: pokemonInfo.abilities,
                gender: pokemonSpecies.gender_rate,
            },
            description: pokemonSpecies.description,
            evolution: pokemonSpecies.evo
        }
        return await response
    }
    async function getAll() {
        let response: Array<Pokemon> = [] 
        for(let i = 1; i < 13; i++) {
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