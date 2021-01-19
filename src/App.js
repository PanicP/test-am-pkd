import styled from 'styled-components'

import Card from './components/card/Card'
import Footer from './components/layout/Footer'

const testData = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const pikachu = {
  name: 'Pikachu',
  hp: 110,
  attacks: [
    { name: 'attack A', damage: '20+' },
    { name: 'attack B', damage: '40x' },
  ],
  weaknesses: [{ name: 'weakness A' }],
  imageUrl: 'https://images.pokemontcg.io/ex8/98.png',
}

const App = () => {
  return (
    <div className="App">
      <MainContainer>
        <HeaderContainer>
          <HeaderLabel>Pokedex</HeaderLabel>
        </HeaderContainer>
        <SelectedCardListContainer>
          <SelectedCardList>
            {testData.map((data) => (
              // <SelectedCard>{data}</SelectedCard>
              <Card
                name={pikachu.name}
                imgUrl={pikachu.imageUrl}
                hp={pikachu.hp}
                attacks={pikachu.attacks}
                weaknesses={pikachu.weaknesses}
              />
            ))}
          </SelectedCardList>
        </SelectedCardListContainer>
      </MainContainer>
      <Footer />
    </div>
  )
}

const MainContainer = styled.div`
  
  /* display: flex;
  flex-direction: column; */
  /* grid-template-rows: 25% auto; */
`

const HeaderContainer = styled.div`
  /* flex: 1; */
  /* grid-row-start: 1;
  grid-row-end: 2; */
  text-align: center;
  height: 112px;
  background-color: blue;
`

const HeaderLabel = styled.p`
  margin: 0;
`

const SelectedCardListContainer = styled.div`
  /* flex: 1; */
  /* grid-row-start: 2;
  grid-row-end: 3; */
  min-height: calc(768px - 96px - 112px);
  max-height: calc(768px - 96px - 112px);
  overflow-y: auto;
  background-color: white;
`

const SelectedCardList = styled.div`
  display: flex;
  flex-wrap: wrap;

  /* :nth-child(even) {
    margin-right: 4px
  }

  :nth-child(odd) {
  } */
`

export default App
