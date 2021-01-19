import styled from 'styled-components'

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <AddButtonContainer>
          <AddButton></AddButton>
        </AddButtonContainer>
      </FooterContainer>
    </>
  )
}

const FooterContainer = styled.div`
  background-color: red;
  position: absolute;
  bottom: 0;
  height: 96px;
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
  background-color: red;
  border-top-left-radius: 66px;
  border-top-right-radius: 66px;
  border: 6px solid darkred;
  border-bottom: 0;

  position: absolute;
  left: calc(50% - 60px);
  top: -50px;

`

export default Footer
