import { createSelector } from '@reduxjs/toolkit'
import { get } from 'lodash'

export const pokemonsSelector = () =>
    createSelector(
        (state) => state.pokemon,
        (pokemon) => get(pokemon, 'data', [])
    )