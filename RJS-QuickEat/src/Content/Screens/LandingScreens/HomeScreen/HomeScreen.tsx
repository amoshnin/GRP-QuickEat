// PLUGINS IMPORTS //
import React, { memo } from "react"
import styled from "styled-components"

// COMPONENTS IMPORTS //
import { memoComparison } from "Content/Shared/Helpers/Functions/Functions"

// EXTRA IMPORTS //

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
            laborum omnis, eligendi numquam cupiditate neque officiis. Delectus
            deleniti eum ad vel officia, sapiente ullam? Ullam doloribus quaerat
            aliquam maxime voluptas.
          </Description>
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
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 60px;
  color: white;
`

const Description = styled.p`
  font-size: 17px;
  line-height: 130%;
`

export default memo(HomeScreen, memoComparison)
