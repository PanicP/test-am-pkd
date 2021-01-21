import instance from '@/services/instance'

const getPokemons = () =>
	instance.httpPokemon({
		method: 'get',
		url: '/api/cards?limit=999'
	})

export default {
	getPokemons
}
