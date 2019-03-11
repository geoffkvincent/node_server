import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './Landing'
import Dashboard from './Dashboard'
import SurveyForm from './SurveyForm'
import Navbar from './Navbar'

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Landing} />
      <Route path='/surveys' component={Dashboard} />
      <Route path='/survey/new' component={SurveyForm} />
    </Router>
  )
}

export default App