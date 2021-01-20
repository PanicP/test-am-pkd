import { createSelector } from '@reduxjs/toolkit'
import { get } from 'lodash'

export const pokemonsSelector = () =>
  createSelector(
    (state) => state.pokemon,
    (pokemon) => get(pokemon, 'pokemons', [])
  )

export const selectedPokemonsSelector = () =>
  createSelector(
    (state) => state.pokemon,
    (pokemon) => get(pokemon, 'selectedPokemons', [])
  )

export const searchedPokemonsSelector = () =>
  createSelector(
    (state) => state.pokemon,
    (pokemon) => get(pokemon, 'searchedPokemons', [])
  )
