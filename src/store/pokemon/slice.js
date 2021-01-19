import { createSlice } from '@reduxjs/toolkit'
import { isEmpty } from 'lodash'

import PokemonApi from '../../services/api/pokemon'

const initialState = {
    data: [],
    selectedData: []
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        getPokemons: async (state, action) => {
          const pokemons = await PokemonApi.getPokemons()
          state.data = [...pokemons]
        },
        // setPokemons: (state, action) => {
        //     state.selectedData = action.payload.data
        // },
    },
})

export const { getPokemons } = pokemonSlice.actions

export default pokemonSlice.reducer