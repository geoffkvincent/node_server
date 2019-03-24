import  React, {Fragment}  from 'react'
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchUser} from '../reducers/auth'
import { Container } from 'semantic-ui-react'
import Landing from './Landing'
import Dashboard from './Dashboard'
import SurveyNew from './surveys/SurveyNew'
import Navbar from './Navbar'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUser())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Container>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/surveys' component={Dashboard} />
              <Route exact path='/survey/new' component={SurveyNew} />
            </Switch>
          </Container>
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App)
