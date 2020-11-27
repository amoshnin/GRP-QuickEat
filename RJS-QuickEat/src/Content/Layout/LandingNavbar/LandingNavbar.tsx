// PLUGINS IMPORTS //
import React, { memo } from "react"

// COMPONENTS IMPORTS //
import { memoComparison } from "Content/Shared/Helpers/Functions/Functions"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {}

const LandingNavbar: React.FC<PropsType> = () => {
  return <div>landing navbar</div>
}

export default memo(LandingNavbar, memoComparison)
