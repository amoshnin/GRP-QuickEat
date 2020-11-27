// PLUGINS IMPORTS //
import React, { memo } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

// COMPONENTS IMPORTS //
// Layout
import LandingNavbar from "Content/Layout/LandingNavbar/LandingNavbar"

// Landing screens
import HomeScreen from "Content/Screens/LandingScreens/HomeScreen/HomeScreen"

// Dashboard screens

// Other screens
import UnFoundScreen from "Content/Screens/SharedScreens/InvalidScreen/InvalidScreen"

// EXTRA IMPORTS //
import { memoComparison } from "Content/Shared/Helpers/Functions/Functions"
import "Content/Shared/Styles/index.css"

/////////////////////////////////////////////////////////////////////////////

interface PropsType {}

const App: React.FC<PropsType> = () => {
  return (
    <BrowserRouter basename={"artem.uno"}>
      <Route path={"//"} render={() => <LandingNavbar />} />
      <Switch>
        <Route exact path="/" render={() => <HomeScreen />} />
        <Route component={UnFoundScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(App, memoComparison)
