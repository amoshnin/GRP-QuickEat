// PLUGINS IMPORTS //
import React from "react"
import styled from "styled-components"

// COMPONENTS IMPORTS //
import InvalidImage from "Assets/Images/Illustrations/404.svg"
import { memoComparison } from "Content/Shared/Helpers/Functions/Functions"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {}

const InvalidScreen: React.FC<PropsType> = () => {
  return <Image src={InvalidImage} />
}

/////////////////////////////////////////////////////////////////////////////

const Image = styled.img`
  width: 50%;
  margin-top: 10%;
`

export default React.memo(InvalidScreen, memoComparison)
