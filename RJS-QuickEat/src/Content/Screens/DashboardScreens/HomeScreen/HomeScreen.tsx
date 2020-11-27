// PLUGINS IMPORTS //
import React, { memo } from "react"

// COMPONENTS IMPORTS //
import { memoComparison } from "Content/Shared/Helpers/Functions/Functions"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {}

const HomeScreen: React.FC<PropsType> = () => {
  return <div>Dashboard Home screen</div>
}

export default memo(HomeScreen, memoComparison)
