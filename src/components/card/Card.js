import styled from 'styled-components'
import { colors } from '../../static/color'
import Gauge from './Gauge'

const Card = ({ isCompact, name, imgUrl, hp, attacks, weaknesses }) => {
  const hpCalculation = ({}) => {}

  const attackCalculation = ({}) => {}

  const damageCalculation = ({}) => {}

  const happinessCalculation = ({}) => {}

  return (
    <CardContainer>
      <LeftPart>
        <CardPicture src={imgUrl} alt={name} width="150" height="220" />
      </LeftPart>
      <RightPart>
        <CardTitle>{ name }</CardTitle>
        <Stat>
          <Gauge
            label='HP'
            percentage={ 50 }
          />
          {/* <HPGauge>

          </HPGauge>
          <StrGauge>

          </StrGauge>
          <WeakGauge>

          </WeakGauge> */}
        </Stat>
        <HappinessGauge></HappinessGauge>
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

const CardPicture = styled.img`
  
`

const CardTitle = styled.p``

const Stat = styled.div`
  display: flex;
`

const HappinessGauge = styled.div`
  display: flex;
`

export default Card
