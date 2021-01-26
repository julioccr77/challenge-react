import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import {Routes} from "../routes";
import HomePage from "./pages/Home";
import {withBodyHome} from "./components/organisms/bodyHome/BodyHome";
import CalculatorPage from "./pages/Calculator";


const RoutesPage = (props) => {

  return(
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Redirect to={Routes.HOME} />} />
        <Route Route path={Routes.HOME} exact component={withBodyHome(HomePage)}/>
        <Route Route path={`${Routes.CALCULATOR}/:id`} exact component={withBodyHome(CalculatorPage)}/>
      </Switch>
    </Router>
  )
}

export default RoutesPage
