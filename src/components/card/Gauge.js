import styled from 'styled-components'
import { colors } from '@/static/color'

const Gauge = ({ label, percentage }) => (
  <GaugeContainer>
    <Label>{label}</Label>
    <PercentageGaugeContainer>
      <PercentageGauge percentage={percentage} />
    </PercentageGaugeContainer>
  </GaugeContainer>
)

const GaugeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const Label = styled.p`
  margin: 0;
  flex: 2;
  font-family: Atma;
  font-size: 24px;
  line-height: 1.3;
`

const PercentageGaugeContainer = styled.div`
  flex: 5;
  width: 100%;
  height: 1.5em;
  border-radius: 1.5em;
  background-color: ${colors.levelTubeBackground};
  overflow: hidden;
`

const PercentageGauge = styled.div`
  width: ${ props => props.percentage }%;
  border-radius: 1.5em;
  background-color: ${colors.levelTubeValueBackground};
  height: 1.5em;
`

export default Gauge
