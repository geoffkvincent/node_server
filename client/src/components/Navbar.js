import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class Navbar extends React.Component {
  render() {
    return (
      <Menu size='huge'>
        <Menu.Item>
            Emaily
        </Menu.Item>
        <Menu.Item position='right'>
          <NavLink to=''>
            Login with Google
          </NavLink>
        </Menu.Item>
      </Menu>
    )
  }
}

export default Navbar