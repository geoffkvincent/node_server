import  React, {Fragment}  from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './Landing'
import Dashboard from './Dashboard'
import SurveyForm from './SurveyForm'
import Navbar from './Navbar'

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/surveys' component={Dashboard} />
        <Route exact path='/survey/new' component={SurveyForm} />
      </Switch>
    </Fragment>
  )
}

export default App