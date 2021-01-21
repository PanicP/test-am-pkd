import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { get } from 'lodash'

import PokemonApi from '@/services/api/pokemon'

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
    addSelectedPokemon: (state, action) => {
      const nationalPokedexNumber = action.payload.nationalPokedexNumber
      let selectedPokemon

      state.pokemons = state.pokemons.reduce((newPokemons, pokemon) => {
        if (pokemon.nationalPokedexNumber === nationalPokedexNumber) {
          selectedPokemon = { ...pokemon }
          return [...newPokemons]
        } else {
          return [...newPokemons, pokemon]
        }
      }, [])

      state.searchedPokemons = state.searchedPokemons.reduce(
        (newPokemons, pokemon) => {
          if (pokemon.nationalPokedexNumber === nationalPokedexNumber) {
            selectedPokemon = { ...pokemon }
            return [...newPokemons]
          } else {
            return [...newPokemons, pokemon]
          }
        },
        []
      )

      state.selectedPokemons = [...state.selectedPokemons, selectedPokemon]
    },
    removeSelectedPokemon: (state, action) => {
      const nationalPokedexNumber = action.payload.nationalPokedexNumber
      let selectedPokemon

      state.selectedPokemons = state.selectedPokemons.reduce(
        (newPokemons, pokemon) => {
          if (pokemon.nationalPokedexNumber === nationalPokedexNumber) {
            selectedPokemon = { ...pokemon }
            return [...newPokemons]
          } else {
            return [...newPokemons, pokemon]
          }
        },
        []
      )

      state.searchedPokemons = [...state.searchedPokemons, selectedPokemon]
      state.pokemons = [...state.pokemons, selectedPokemon]
    },
    setSearchedPokemonByKeyword: (state, action) => {
      // name and type
      const keyword = action.payload.keyword
      const mappedTargetData = state.pokemons.map((pokemon) =>
        (pokemon.name + ' ' + pokemon.type).toLowerCase()
      )
      const filteredPokemons = state.pokemons.filter((pokemon, index) =>
        mappedTargetData[index].includes(keyword)
      )
      state.searchedPokemons = filteredPokemons
    },
  },
  extraReducers: {
    [getPokemonsTrunk.fulfilled]: (state, action) => {
      state.pokemons = action.payload
      state.searchedPokemons = action.payload
    },
    [getPokemonsTrunk.rejected]: (state, action) => {
      state.pokemons = {}
    },
  },
})

export const {
  getPokemons,
  addSelectedPokemon,
  removeSelectedPokemon,
  setSearchedPokemonByKeyword,
} = pokemonSlice.actions

export default pokemonSlice.reducer
