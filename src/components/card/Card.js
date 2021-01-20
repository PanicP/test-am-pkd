import { useEffect } from 'react'
import styled from 'styled-components'
import cuteImg from '../../static/image/cute.png'
import { colors } from '../../static/color'
import Gauge from './Gauge'
import useHover from '../utils/useHover'
import usePokemon from '../../store/pokemon/store'

const hpCalculation = ({ hp }) => (hp > 100 ? 100 : hp < 0 ? 0 : hp)

const strCalculation = ({ attLength }) =>
  attLength < 2 && attLength > 0 ? attLength * 50 : 0

const weaknessCalculation = ({ weaknessLength }) =>
  weaknessLength === 1 ? 100 : 0

const damageCalculation = ({ attacks }) =>
  attacks
    ? attacks.reduce((sum, att) => {
        const intDmg = parseInt(att.damage.replace(/\D/g, ''))
        return (sum += intDmg)
      }, 0)
    : 0

const Card = ({
  mode,
  name,
  nationalPokedexNumber,
  imgUrl,
  hp,
  attacks,
  weaknesses,
}) => {
  // console.log(isCompact, name, imgUrl, hp, attacks, weaknesses)
  const calculatedHp = hpCalculation({ hp: parseInt(hp) })
  const calculatedStr = strCalculation({
    attLength: attacks ? attacks.length : 0,
  })
  const calculatedWeakness = weaknessCalculation({
    weaknessLength: weaknesses ? weaknesses.length : 0,
  })
  const calculatedDmg = damageCalculation({ attacks })
  const calculatedHappiness =
    (calculatedHp / 10 + calculatedDmg / 10 - calculatedWeakness / 100 + 10) / 5

  const happinessList = () => {
    const list = []
    if (calculatedHappiness >= 5 && mode === 'compact') {
      for (let i = 0; i < 5; i++) {
        list.push(
          <img key={i} src={cuteImg} alt="cute.png" width="48" height="48" />
        )
      }
      list.push(<Ellipsis>...</Ellipsis>)
    } else {
      for (let i = 0; i < calculatedHappiness; i++) {
        list.push(
          <img key={i} src={cuteImg} alt="cute.png" width="48" height="48" />
        )
      }
    }

    return [...list]
  }

  const [refCard, isCardHovered] = useHover()
  const [refAddButton, isAddButtonHovered] = useHover()
  const [refDeleteButton, isDeleteHovered] = useHover()
  const { handleAddSelectedPokemon, handleRemoveSelectedPokemon } = usePokemon()

  const handleAdd = () => {
    console.log('add')
    handleAddSelectedPokemon({ nationalPokedexNumber })
  }

  const handleRemove = () => {
    handleRemoveSelectedPokemon({ nationalPokedexNumber })
  }

  return (
    <CardContainer ref={refCard} mode={mode}>
      <LeftPart>
        <CardPicture src={imgUrl} alt={name} width="150" height="220" />
      </LeftPart>
      <RightPart>
        {
          // (isCardHovered || isAddButtonHovered) &&
          mode === 'default' && (
            <AddButton ref={refAddButton} onClick={handleAdd}>
              Add
            </AddButton>
          )
        }
        {
          // (isCardHovered || isDeleteHovered) &&
          mode === 'compact' && (
            <DeleteButton ref={refDeleteButton} onClick={handleRemove}>
              X
            </DeleteButton>
          )
        }
        <CardTitle>{name.toUpperCase()}</CardTitle>
        <Stat mode={mode}>
          <Gauge label="HP" percentage={calculatedHp} />
          <Gauge label="STR" percentage={calculatedStr} />
          <Gauge label="WEAK" percentage={calculatedWeakness} />
        </Stat>
        <HappinessGauge>{happinessList().map((icon) => icon)}</HappinessGauge>
      </RightPart>
    </CardContainer>
  )
}
/* width: ${ props => props.mode === 'compact' ? calc(50% - 16px) : calc(100% - 16px) }; */
// const CardContainer = styled.div`
//   display: flex;
//   position: relative;
//   width: calc(50% - 16px);
//   border: 3px solid ${ colors.cardBoxShadow };
//   border-radius: 1px;
//   margin: 4px;
//   background-color: ${colors.cardBackground};

//   :hover {
//     border: 3px solid ${ colors.cardBoxShadowHover };
//   }
// `

// width: calc(100% - 8px);
const CardContainer = styled.div`
  display: flex;
  /* flex: 1; */
  position: relative;
  ${(props) =>
    props.mode === 'compact'
      ? 'width: calc(50% - 16px);'
      : 'width: calc(100% - 8px - 6px);'}
  border: 3px solid ${colors.cardBoxShadow};
  border-radius: 1px;
  margin: 4px;
  background-color: ${colors.cardBackground};

  :hover {
    border: 3px solid ${colors.cardBoxShadowHover};
  }
`

const LeftPart = styled.div`
  display: flex;
  width: fit-content;
  margin: 8px;
`

const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 16px;
`

const AddButton = styled.div`
  font-family: Atma;
  font-size: 36px;
  line-height: 1;
  color: ${colors.colorAddButton};
  position: absolute;
  right: 16px;
  top: 16px;

  :hover {
    cursor: pointer;
  }
`

const DeleteButton = styled.div`
  font-family: Atma;
  font-size: 36px;
  line-height: 1;
  color: ${colors.colorAddButton};
  position: absolute;
  right: 16px;
  top: 16px;

  :hover {
    cursor: pointer;
  }
`

const CardPicture = styled.img``

const CardTitle = styled.p`
  margin: 0;
  font-size: 40px;
  line-height: 1.3;
`

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  ${(props) => (props.mode === 'compact' ? 'width: 100%;' : 'width: 70%')}
`

const HappinessGauge = styled.div`
  display: flex;
  margin-top: 8px;
`

const Ellipsis = styled.div`
  font-size: 48px;
  color: #f7b239;
`

export default Card
