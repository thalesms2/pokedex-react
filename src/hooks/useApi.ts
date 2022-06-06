import axios from 'axios'

import { Pokemon } from '../types/pokemonTypes'


export default function useApi() {
    async function searchPokemon(pokemonName: string) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        return await response.data
    }
    async function getSpecies(pokemonName: string) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
        return await response.data
    }
    async function getEvolution(pokemonId: number) {
        const response = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${pokemonId}`)
        return await response.data
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
        searchPokemon,
        getSpecies,
        getEvolution
    }
}