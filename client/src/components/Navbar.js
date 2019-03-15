import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import Payments from './Payments'

class Navbar extends React.Component {

  renderContent() {
    switch(this.props.auth) {
      case null:
        return
      case false:
        return (
          <Menu.Item><a href='/auth/google'>Login with Google</a></Menu.Item>
        )
      default:
          return [
            <Menu.Item><Payments /></Menu.Item>,
            <Menu.Item><a href='/api/logout'>Logout</a></Menu.Item>
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