import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import Payments from './Payments'

class Navbar extends React.Component {

  renderContent() {
    const { auth } = this.props
    switch(auth) {
      case null:
        return
      case false:
        return (
          <Menu.Item><a href='/auth/google'>Login with Google</a></Menu.Item>
        )
      default:
          return [
            <Menu.Item key='1'><Payments /></Menu.Item>,
            <Menu.Item key='3'>
              Credits: {auth.credits}
            </Menu.Item>,
            <Menu.Item key='2'><a href='/api/logout'>Logout</a></Menu.Item>
          ]
    }
  }
  

  render() {
    const { auth } = this.props
    return (
      <Menu size='huge'>
        <Menu.Item>
          <NavLink 
            to={ auth ? '/surveys' : '/' }
          >
            Emaily
          </NavLink>
        </Menu.Item>
        <Menu.Item position='right'>
          {this.renderContent()}
        </Menu.Item>
      </Menu>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return { auth }
}

export default connect(mapStateToProps)(Navbar)