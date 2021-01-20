import styled from 'styled-components'

import Card from '../card/Card'
import useUtils from '../../store/utils/store'
import usePokemon from '../../store/pokemon/store'
import { useEffect } from 'react'

const SearchModal = () => {
  const { searchedPokemonsData, handleSetSearchedPokemonByKeyword } = usePokemon()
  const { handleSetIsShowSearchModal } = useUtils()

  const handleClickOutsideModalMain = (event) => {
    handleSetIsShowSearchModal({ isShowSearchModal: false })
  }
  const handleClickInsideModalMain = (event) => {
    event.stopPropagation()
  }
  const handleOnInputChange = (event) => {
    console.log(event.target.value)
    handleSetSearchedPokemonByKeyword({ keyword: event.target.value })
  }

  useEffect(() => {
      console.log('searchedPokemonsData', searchedPokemonsData)
    }, [searchedPokemonsData])

  return (
    <ModalContainer onClick={handleClickOutsideModalMain}>
      <ModalMain onClick={handleClickInsideModalMain}>
        <SearchInput placeholder="Find Pokemon" onChange={handleOnInputChange}></SearchInput>
        <SearchedCardList>
          {searchedPokemonsData.map((pokemon, index) => (
            <Card
              key={index}
              name={pokemon.name}
              imgUrl={pokemon.imageUrl}
              hp={pokemon.hp}
              attacks={pokemon.attacks}
              weaknesses={pokemon.weaknesses}
            />
          ))}
        </SearchedCardList>
      </ModalMain>
    </ModalContainer>
  )
}

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
`

const ModalMain = styled.div`
  position: absolute;
  background: white;
  width: 95%;
  height: 95%;
  top: 50%;
  left: 50%;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  z-index: 3;
`

const SearchInput = styled.input``

const SearchedCardList = styled.div``

export default SearchModal
