import React from 'react'
import {Menu} from 'semantic-ui-react'

class Navbar extends React.Component {
  render() {
    return (
      <Menu size='huge'>
        <Menu.Item>
          Nav
        </Menu.Item>
        <Menu.Item position='right'>
          Login with Google
        </Menu.Item>
      </Menu>
    )
  }
}

export default Navbar