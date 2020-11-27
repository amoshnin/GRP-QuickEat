// PLUGINS IMPORTS //
import React, { memo } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

// COMPONENTS IMPORTS //
import { memoComparison } from "Content/Shared/Helpers/Functions/Functions"

// Layout
import LandingNavbar from "Content/Layout/LandingNavbar/LandingNavbar"

// Landing screens
import HomeScreen from "Content/Screens/LandingScreens/HomeScreen/HomeScreen"

// Dashboard screens

// Other screens
import UnFoundScreen from "Content/Screens/SharedScreens/InvalidScreen/InvalidScreen"

// EXTRA IMPORTS //
import { GlobalStyle } from "./Shared/Styles/GlobalStyle"
import "Content/Shared/Styles/styles.css"

/////////////////////////////////////////////////////////////////////////////

interface PropsType {}

const App: React.FC<PropsType> = () => {
  return (
    <BrowserRouter basename={"artem.uno"}>
      <GlobalStyle />
      <Route path={"//"} render={() => <LandingNavbar />} />
      <Switch>
        <Route exact path="/" render={() => <HomeScreen />} />
        <Route component={UnFoundScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(App, memoComparison)
