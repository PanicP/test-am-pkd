import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useMemo } from 'react'
import { getPokemonsTrunk, setSearchedPokemonByKeyword } from './slice'
import {
  pokemonsSelector,
  selectedPokemonsSelector,
  searchedPokemonsSelector,
} from './selector'

const usePokemon = () => {
  const dispatch = useDispatch()

  const pokemonsData = useSelector(useMemo(pokemonsSelector, [dispatch]))
  const selectedPokemonsData = useSelector(
    useMemo(selectedPokemonsSelector, [dispatch])
  )
  const searchedPokemonsData = useSelector(
    useMemo(searchedPokemonsSelector, [dispatch])
  )

  const handleGetPokemons = useCallback(() => {
    dispatch(getPokemonsTrunk())
  }, [dispatch])

  const handleSetSearchedPokemonByKeyword = useCallback(
    ({ keyword }) => {
      dispatch(setSearchedPokemonByKeyword({ keyword }))
    },
    [dispatch]
  )

  return {
    pokemonsData,
    selectedPokemonsData,
    searchedPokemonsData,
    handleGetPokemons,
    handleSetSearchedPokemonByKeyword
  }
}

export default usePokemon
