// PLUGINS IMPORTS //
import React, { memo } from "react"
import styled from "styled-components"

// COMPONENTS IMPORTS //
import { memoComparison } from "Content/Shared/Helpers/Functions/Functions"
import { Caption2, SmallText } from "Content/Shared/Styles/TextStyles"

// EXTRA IMPORTS //
import CreditImage from "Assets/Images/Icons/credit.svg"
import RingImage from "Assets/Images/Icons/icon-ring.svg"

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  title: string
  subtitle: string
}

const Button: React.FC<PropsType> = (props) => {
  return (
    <Wrapper>
      <IconWrapper>
        <IconImg src={CreditImage} />
        <RingImg src={RingImage} />
      </IconWrapper>
      <TextWrapper>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
      </TextWrapper>
    </Wrapper>
  )
}

/////////////////////////////////////////////////////////////////////////////

const Wrapper = styled.div`
  max-width: 280px;
  padding: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  border: 0px;
  display: grid;
  grid-template-columns: 53px auto;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 1px;
`

const Title = styled(Caption2)`
  color: black;
`

const Subtitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
`

const ICON_WRAP_SIZE = "45px"
const IconWrapper = styled.div`
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  height: ${ICON_WRAP_SIZE};
  width: ${ICON_WRAP_SIZE};
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;
`

const ICON_SIZE = "29px"
const IconImg = styled.img`
  height: ${ICON_SIZE};
  width: ${ICON_SIZE};
`

const RingImg = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;

  ${Wrapper}:hover & {
    transform: rotate(30deg) scale(1.1) translate(1px, 1px);
  }
`

export default memo(Button, memoComparison)
