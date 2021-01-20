import styled from 'styled-components'
import useUtils from '../../store/utils/store'
import { colors } from '../../static/color'

const Footer = () => {
  const { handleSetIsShowSearchModal } = useUtils()

  return (
    <>
      <FooterContainer>
        <AddButtonContainer>
          <AddButton onClick={() => handleSetIsShowSearchModal({ isShowSearchModal: true })}>
            <PlusIcon>+</PlusIcon>
          </AddButton>
        </AddButtonContainer>
      </FooterContainer>
    </>
  )
}

const FooterContainer = styled.div`
  background-color: ${ colors.bottomBarBackground };
  border-top: 3px solid ${ colors.bottomBarBoxShadow };
  position: absolute;
  bottom: 0;
  height: 72px;
  width: 100%;
  z-index: 1;
`

const AddButtonContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

const AddButton = styled.div`
  width: 120px;
  height: 60px;
  background-color: ${ colors.bottomBarBackground };
  border-top-left-radius: 66px;
  border-top-right-radius: 66px;
  border: 3px solid ${ colors.bottomBarBoxShadow };
  border-bottom: 0;

  position: absolute;
  left: calc(50% - 60px);
  top: -50px;

  :hover {
    cursor: pointer;
  }
`

const PlusIcon = styled.div`
  font-family: Atma;
  color: ${ colors.bottomBarTextColor };
  font-size: 96px;

  position: absolute;
  left: calc(50% - 24px);
  top: -8px;

`

export default Footer
