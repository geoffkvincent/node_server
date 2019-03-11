import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Home = () => <h1>Home</h1>

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Home} />
    </Router>
  )
}

export default App