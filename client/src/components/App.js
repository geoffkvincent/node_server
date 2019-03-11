import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Landing from './Landing'
import Dashboard from './Dashboard'
import SurveyForm from './SurveyForm'
import Navbar from './Navbar'

const App = () => {
  return (
    <Container>
      <Switch>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <Route exact path='/surveys' component={Dashboard} />
        <Route exact path='/survey/new' component={SurveyForm} />
      </Switch>
    </Container>
  )
}

export default App