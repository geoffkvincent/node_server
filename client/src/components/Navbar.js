import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'

class Navbar extends React.Component {

  renderContent() {
    switch(this.props.auth) {
      case null:
        return
      case false:
        return (
          <a href='/auth/google'>Login with Google</a>
        )
      default:
          return (
            <a href='/api/logout'>Logout</a>
          )
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