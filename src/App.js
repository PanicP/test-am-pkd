import { useEffect } from 'react'
import styled from 'styled-components'

import Card from '@/components/card/Card'
import Footer from '@/components/layout/Footer'
import SearchModal from '@/components/modal/SearchModal'
import usePokemon from '@/store/pokemon/store'
import useUtils from '@/store/utils/store'

const App = () => {

  const { selectedPokemonsData, handleGetPokemons } = usePokemon()
  const { isShowSearchModal } = useUtils()

  // constructor
  useEffect(() => {
    handleGetPokemons()
    // handleSetSearchedPokemonByKeyword({ keyword: ' ' })
  }, [])

  // useEffect(() => {
  //   console.log('isShowSearchModal', isShowSearchModal)
  // }, [isShowSearchModal])

  return (
    <div className="App">
      <MainContainer>
        <HeaderContainer>
          <HeaderLabel>My Pokedex</HeaderLabel>
        </HeaderContainer>
        <SelectedCardListContainer>
          <SelectedCardList>
            {/* {testData.map((pokemon, index) => ( */}
            {selectedPokemonsData.map((pokemon, index) => (
              <Card
                key={ index }
                name={pokemon.name}
                nationalPokedexNumber={ pokemon.nationalPokedexNumber }
                imgUrl={pokemon.imageUrl}
                hp={pokemon.hp}
                attacks={pokemon.attacks}
                weaknesses={pokemon.weaknesses}
                mode="compact"
              />
            ))}
          </SelectedCardList>
        </SelectedCardListContainer>
      </MainContainer>
      <Footer />
      {/* modal */}
      { isShowSearchModal && <SearchModal /> }
    </div>
  )
}

const MainContainer = styled.div`

`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 112px;
`

const HeaderLabel = styled.p`
  margin: 0;
  font-family: Atma;
  font-size: 48px;
`

const SelectedCardListContainer = styled.div`
  min-height: calc(768px - 72px - 112px);
  max-height: calc(768px - 72px - 112px);
  overflow-y: auto;
  background-color: white;
`

const SelectedCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default App
