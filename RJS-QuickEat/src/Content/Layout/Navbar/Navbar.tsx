// PLUGINS IMPORTS //
import React, { memo } from "react"

// COMPONENTS IMPORTS //

import { memoComparison } from "Content/Shared/Helpers/Functions/Functions"

// EXTRA IMPORTS //
import "Content/Shared/Styles/index.css"

/////////////////////////////////////////////////////////////////////////////

interface PropsType {}

const Navbar: React.FC<PropsType> = () => {
  return <div></div>
}

export default memo(Navbar, memoComparison)
