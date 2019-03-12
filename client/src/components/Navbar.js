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
          <NavLink to=''>
            Login with Google
          </NavLink>
        )
      default:
        return 'Log Out'
    }
  }

  render() {
    return (
      <Menu size='huge'>
        <Menu.Item>
            Emaily
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