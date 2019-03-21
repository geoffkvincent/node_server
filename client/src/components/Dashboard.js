import React from 'react'
import { Button, Icon, Container, Header } from 'semantic-ui-react'

class Dashboard extends React.Component {
  render() {
    return (
      <Container>
        <Header as='h1'>Dashboard</Header>
        <Icon name='plus square outline' size='huge'/>
      </Container>
    )
  }
}

export default Dashboard