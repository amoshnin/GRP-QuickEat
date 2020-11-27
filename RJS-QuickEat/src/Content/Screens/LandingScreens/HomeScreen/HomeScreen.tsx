// PLUGINS IMPORTS //
import React, { memo } from "react"
import styled from "styled-components"

// COMPONENTS IMPORTS //
import { Button } from "Content/Shared/Components/Buttons"
import { memoComparison } from "Content/Shared/Helpers/Functions/Functions"

// EXTRA IMPORTS //
import { H1, MediumText } from "Content/Shared/Styles/TextStyles"

/////////////////////////////////////////////////////////////////////////////

interface PropsType {}

const HomeScreen: React.FC<PropsType> = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>Quick Eat</Title>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            laborum omnis, eligendi numquam cupiditate neque officiis.
          </Description>
          <Button
            title={"Start using"}
            subtitle={"Lorem upsum imso loim riem"}
          />
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

/////////////////////////////////////////////////////////////////////////////

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`

const Title = styled(H1)`
  color: white;
`

const Description = styled(MediumText)``

export default memo(HomeScreen, memoComparison)
