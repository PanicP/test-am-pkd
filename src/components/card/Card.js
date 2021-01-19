import styled from 'styled-components'
import cuteImg from '../../static/image/cute.png'
import { colors } from '../../static/color'
import Gauge from './Gauge'

const hpCalculation = ({ hp }) => (hp > 100 ? 100 : hp < 0 ? 0 : parseInt(hp))

const strCalculation = ({ attLength }) =>
  attLength < 2 && attLength > 0 ? attLength * 50 : 0

const weaknessCalculation = ({ weaknessLength }) =>
  weaknessLength === 1 ? 100 : 0

const damageCalculation = ({ attacks }) =>
  attacks.reduce((sum, att) => {
    const intDmg = parseInt(att.damage.replace(/\D/g, ''))
    return (sum += intDmg)
  }, 0)

const Card = ({ isCompact, name, imgUrl, hp, attacks, weaknesses }) => {
  const calculatedHp = hpCalculation({ hp })
  const calculatedStr = strCalculation({ attLength: attacks.length })
  const calculatedWeakness = weaknessCalculation({
    weaknessLength: weaknesses.length,
  })
  const calculatedDmg = damageCalculation({ attacks })
  const calculatedHappiness =
    ((calculatedHp / 10) + 
    (calculatedDmg / 10) - 
    (calculatedWeakness / 100) + 
    10) / 5
  const happinessList = () => {
    const list = []
    for (let i = 0; i < calculatedHappiness; i++) {
      list.push(<img src={cuteImg} alt="cute.png" width="48" height="48"></img>)
    }
    return [...list]
  }
  // console.log(
  //   ' hp: ',
  //   calculatedHp,
  //   ' str: ',
  //   calculatedStr,
  //   ' wkn: ',
  //   calculatedWeakness,
  //   ' dmg: ',
  //   calculatedDmg,
  //   ' hpn: ',
  //   calculatedHappiness
  // )
  return (
    <CardContainer>
      <LeftPart>
        <CardPicture src={imgUrl} alt={name} width="150" height="220" />
      </LeftPart>
      <RightPart>
        <CardTitle>{name}</CardTitle>
        <Stat>
          <Gauge label="HP" percentage={calculatedHp} />
          <Gauge label="Str" percentage={calculatedStr} />
          <Gauge label="Weak" percentage={calculatedWeakness} />
        </Stat>
        <HappinessGauge>
          { happinessList().map( icon => icon )}
        </HappinessGauge>
      </RightPart>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  display: flex;
  width: calc(50% - 16px);
  border: 2px solid lightgrey;
  border-radius: 1px;
  margin: 4px;
  background-color: ${colors.cardBackground};
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

const CardPicture = styled.img``

const CardTitle = styled.p``

const Stat = styled.div`
  display: flex;
  flex-direction: column;
`

const HappinessGauge = styled.div`
  display: flex;
`

export default Card