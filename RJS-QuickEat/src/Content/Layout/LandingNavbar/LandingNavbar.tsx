// PLUGINS IMPORTS //
import React, { memo } from "react"
import styled from "styled-components"

// COMPONENTS IMPORTS //
import { memoComparison } from "Content/Shared/Helpers/Functions/Functions"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {}

const LandingNavbar: React.FC<PropsType> = () => {
  return <Wrapper>landing navbar</Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
`

export default memo(LandingNavbar, memoComparison)
