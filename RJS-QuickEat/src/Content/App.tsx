// PLUGINS IMPORTS //
import React, { memo } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

// COMPONENTS IMPORTS //
import Navbar from "Content/Layout/Navbar/Navbar"
import UnFoundScreen from "Content/Screens/SharedScreens/UnfoundScreen/UnfoundScreen"

import { memoComparison } from "Content/Shared/Helpers/Functions/Functions"

// EXTRA IMPORTS //
import "Content/Shared/Styles/index.css"

/////////////////////////////////////////////////////////////////////////////

interface PropsType {}

const App: React.FC<PropsType> = () => {
  return (
    <BrowserRouter basename={"artem.uno"}>
      <Navbar />
      <Switch>
        {/* <Route exact path="/" render={() => <HomeScreen />} /> */}
        <Route component={UnFoundScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(App, memoComparison)
