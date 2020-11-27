// PLUGINS IMPORTS //
import React, { memo } from "react"
import styled from "styled-components"

// COMPONENTS IMPORTS //
import { memoComparison } from "Content/Shared/Helpers/Functions/Functions"
import { Caption2, SmallText } from "Content/Shared/Styles/TextStyles"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  title: string
  subtitle: string
}

const Button: React.FC<PropsType> = (props) => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Wrapper>
  )
}

/////////////////////////////////////////////////////////////////////////////

const Wrapper = styled.div`
  max-width: 280px;
  height: 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  border: 0px;
`

const Title = styled(Caption2)`
  color: black;
`

const Subtitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
`

export default memo(Button, memoComparison)
