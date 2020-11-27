// PLUGINS IMPORTS //
import React from "react"
import styled from "styled-components"

// COMPONENTS IMPORTS //
import UnFoundImage from "Assets/Images/illustrations/404.svg"
import { memoComparison } from "Content/Shared/Helpers/Functions/Functions"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const UnFoundScreen: React.FC<PropsType> = () => {
  return <Image src={UnFoundImage} />
}

/////////////////////////////////////////////////////////////////////////////

const Image = styled.img`
  width: 50%;
  margin-top: 10%;
`

export default React.memo(UnFoundScreen, memoComparison)
