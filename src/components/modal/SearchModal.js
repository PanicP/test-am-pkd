import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Card from '@/components/card/Card'
import searchImg from '@/static/image/search.png'
import useUtils from '@/store/utils/store'
import usePokemon from '@/store/pokemon/store'
import { colors } from '@/static/color'

const SearchModal = () => {
  const {
    pokemonsData,
    searchedPokemonsData,
    handleSetSearchedPokemonByKeyword,
  } = usePokemon()
  const { handleSetIsShowSearchModal } = useUtils()
  const [keyword, setKeyword] = useState()

  const handleClickOutsideModalMain = (event) => {
    handleSetIsShowSearchModal({ isShowSearchModal: false })
  }
  const handleClickInsideModalMain = (event) => {
    event.stopPropagation()
  }
  const handleOnInputChange = (event) => {
    console.log(event.target.value)
    setKeyword(event.target.value)
    handleSetSearchedPokemonByKeyword({ keyword: event.target.value })
  }

  useEffect(() => {
    return () => {
      handleSetSearchedPokemonByKeyword({ keyword: '' })
    }
  }, [])

  return (
    <ModalContainer onClick={handleClickOutsideModalMain}>
      <ModalMain onClick={handleClickInsideModalMain}>
        <SearchInputWrapper>
          <SearchInput
            placeholder="Find Pokemon"
            onChange={handleOnInputChange}
            value={keyword}
          />
          <SearchImage
            src={searchImg}
            alt="search.png"
            width="36"
            height="36"
          />
        </SearchInputWrapper>
        <SearchedCardList>
          {searchedPokemonsData.map((pokemon, index) => (
            <Card
              key={index}
              name={pokemon.name}
              nationalPokedexNumber={pokemon.nationalPokedexNumber}
              imgUrl={pokemon.imageUrl}
              hp={pokemon.hp}
              attacks={pokemon.attacks}
              weaknesses={pokemon.weaknesses}
              mode="default"
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
  background: ${colors.modalOutside};
  z-index: 2;
`

const ModalMain = styled.div`
  position: absolute;

  width: 95%;
  max-width: 95%;
  height: 95%;
  max-height: 95%;
  top: 50%;
  left: 50%;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  border: 3px solid ${colors.modalContentBoxShadow};
  background-color: ${colors.modalContentBackground};
`

const SearchInputWrapper = styled.div`
  display: flex;
  position: relative;
`

const SearchInput = styled.input`
  font-family: 'Gaegu';
  margin: 8px;
  font-size: 32px;
  flex: 1;
  border: 2px solid ${colors.searchBoxBorder};
`

const SearchImage = styled.img`
  position: absolute;
  right: 8px;
  top: 10px;
`

const SearchedCardList = styled.div`
  overflow-y: auto;
`

export default SearchModal
