import instance from '../instance'

const getPokemons = () =>
	instance.httpPokemon({
		method: 'get',
		url: '/api/cards'
	})

export default {
	getPokemons
}
