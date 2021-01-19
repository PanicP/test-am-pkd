import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useMemo } from 'react'
import { getPokemons } from './slice'
import { pokemonsSelector } from './selector'

export const useHostel = () => {
    const dispatch = useDispatch()

    const pokemonsData = useSelector(useMemo(pokemonsSelector, [dispatch]))

    const handleGetPokemons = useCallback(
        ({ data }) => {
            dispatch(getPokemons({ data }))
        },
        [dispatch]
    )

    return {
      pokemonsData,
      handleGetPokemons
    }
}