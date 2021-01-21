import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from '@/store/pokemon/slice'
import utilsReducer from '@/store/utils/slice'

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    utils: utilsReducer,
  },
})
