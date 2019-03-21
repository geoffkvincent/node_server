import React from 'react'
import { Icon, Container, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
  render() {
    return (
      <Container>
        <Header as='h1'>Dashboard</Header>
        <Link to='/api/surveys'>
          <Icon name='plus square outline' size='huge'/>
        </Link>
      </Container>
    )
  }
}

export default Dashboard