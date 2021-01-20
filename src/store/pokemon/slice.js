import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { get, isEmpty } from 'lodash'

import PokemonApi from '../../services/api/pokemon'

const initialState = {
  data: [],
  selectedData: [],
  test: 'sdf',
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
    // setPokemons: (state, action) => {
    //     state.selectedData = action.payload.data
    // },
  },
  extraReducers: {
    [getPokemonsTrunk.fulfilled]: (state, action) => {
      state.data = action.payload
    },
    [getPokemonsTrunk.rejected]: (state, action) => {
      state.data = {}
    },
  },
})

// const { getPokemons } = pokemonSlice.actions
export const { getPokemons } = pokemonSlice.actions

export default pokemonSlice.reducer
