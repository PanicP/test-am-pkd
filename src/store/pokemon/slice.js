import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { get, isEmpty } from 'lodash'

import PokemonApi from '../../services/api/pokemon'

const initialState = {
  pokemons: [],
  selectedPokemons: [],
  searchedPokemons: [],
}

export const getPokemonsTrunk = createAsyncThunk(
  'pokemon/getPokemons',
  async () => {
    const res = await PokemonApi.getPokemons()
    const pokemons = await get(res, 'data.cards', [])
    return pokemons
  }
)

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    getPokemons: (state, action) => {
      //   const res = await PokemonApi.getPokemons()
      //   const pokemons = await get(res, 'data.cards', [])
      //   state.data = await [...pokemons]
      // state = state
      // state.data = [1,2]
    },
    addSelectedPokemon: (state, action) => {},
    removeSelectedPokemon: (state, action) => {},
    setSearchedPokemonByKeyword: (state, action) => {
      // name and type
      const keyword = action.payload.keyword
      const mappedTargetData = state.pokemons.map((pokemon) => (pokemon.name + ' ' + pokemon.type).toLowerCase())
      const filteredPokemons = state.pokemons.filter((pokemon, index) => mappedTargetData[index].includes(keyword))
      state.searchedPokemons = filteredPokemons
    },
    // setPokemons: (state, action) => {
    //     state.selectedData = action.payload.data
    // },
  },
  extraReducers: {
    [getPokemonsTrunk.fulfilled]: (state, action) => {
      state.pokemons = action.payload
    },
    [getPokemonsTrunk.rejected]: (state, action) => {
      state.pokemons = {}
    },
  },
})

// const { getPokemons } = pokemonSlice.actions
export const {
  getPokemons,
  addSelectedPokemon,
  removeSelectedPokemon,
  setSearchedPokemonByKeyword,
} = pokemonSlice.actions

export default pokemonSlice.reducer
