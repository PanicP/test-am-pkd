import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useMemo } from 'react'
import {
  getPokemonsTrunk,
  setSearchedPokemonByKeyword,
  addSelectedPokemon,
  removeSelectedPokemon,
} from './slice'
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

  const handleAddSelectedPokemon = useCallback(
    ({ nationalPokedexNumber }) => {
      dispatch(addSelectedPokemon({ nationalPokedexNumber }))
    },
    [dispatch]
  )
  const handleRemoveSelectedPokemon = useCallback(
    ({ nationalPokedexNumber }) => {
      dispatch(removeSelectedPokemon({ nationalPokedexNumber }))
    },
    [dispatch]
  )

  return {
    pokemonsData,
    selectedPokemonsData,
    searchedPokemonsData,
    handleGetPokemons,
    handleSetSearchedPokemonByKeyword,
    handleAddSelectedPokemon,
    handleRemoveSelectedPokemon,
  }
}

export default usePokemon
