import { createSelector } from '@reduxjs/toolkit'

export const pokemonsSelector = () =>
    createSelector(
        (state) => state.pokemon.data,
        (data) => data
    )