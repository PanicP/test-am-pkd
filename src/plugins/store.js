import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from '../store/pokemon/slice'

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
})
