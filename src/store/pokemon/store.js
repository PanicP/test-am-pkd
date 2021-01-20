import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useMemo } from 'react'
import { getPokemons, getPokemonsTrunk } from './slice'
import { pokemonsSelector } from './selector'

const usePokemon = () => {
  const dispatch = useDispatch()

  const pokemonsData = useSelector(useMemo(pokemonsSelector, [dispatch]))

  const handleGetPokemons = useCallback(() => {
    // dispatch(getPokemons())
    dispatch(getPokemonsTrunk())
  }, [dispatch])

//   const handleGetPokemons = () => dispatch(getPokemons())

  return {
    pokemonsData,
    handleGetPokemons,
  }
}

export default usePokemon