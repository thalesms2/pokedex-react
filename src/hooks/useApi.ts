import axios from 'axios'

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
    function formatSprites(sprite: string) {

    }
    function pickSprites(sprites: any) {
        const response = []
        Object.keys(sprites).forEach((key, index) => {
            response.push({
                'version': key,
                'versionFixed': formatSprites(key),
                'url': sprites.key,
            })
        });
    }
    async function searchPokemon(pokemonName: string) {
        const pokemonInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(async (response) => {
                response.data.weaknesses = []
                response.data.removeWeak = []
                response.data.types.map((type: any) => {
                    axios.get(type.type.url)
                        .then((damageRelation) => {
                            damageRelation.data.damage_relations.double_damage_from.map((weak: any) => {
                                const typeFound = response.data.weaknesses.indexOf(weak.name)
                                if(typeFound === -1) {
                                    response.data.weaknesses.push(weak.name)
                                }
                            })
                            damageRelation.data.damage_relations.double_damage_to.map((strong: any) => {
                                const typeStrongFound = response.data.removeWeak.indexOf(strong.name)
                                if(typeStrongFound === -1) {
                                    response.data.removeWeak.push(strong.name)
                                }
                            })
                            damageRelation.data.damage_relations.half_damage_from.map((half: any) => {
                                const typeHalfFound = response.data.removeWeak.indexOf(half.name)
                                if(typeHalfFound === -1) {
                                    response.data.removeWeak.push(half.name)
                                }
                            })
                            damageRelation.data.damage_relations.no_damage_from.map((noDamage : any) => {
                                const noDamageFound = response.data.removeWeak.indexOf(noDamage.name)
                                if(noDamageFound === -1) {
                                    response.data.removeWeak.push(noDamage.name)
                                }
                            })
                        })
                        .finally(() => {
                            response.data.removeWeak.map((remove: string) => {
                                const conflictType = response.data.weaknesses.indexOf(remove)
                                if(conflictType != -1) {
                                    response.data.weaknesses.splice(conflictType, 1)
                                }
                            })
                        })
                })
                return response.data
            })
        const pokemonSpecies = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
            .then(async (response) => {
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
                weaknesses: pokemonInfo.weaknesses,
            },
            description: pokemonSpecies.description,
        }
        return await response
    }
    async function infinityScroll(pageParam: number) {
        let response: any = []
        for(let i = pageParam + 1; i <= pageParam + 8; i++) {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
            response.push(res.data)
        }
        return response
    }
    return {
        searchPokemon,
        formatVersion,
        infinityScroll
    }
}