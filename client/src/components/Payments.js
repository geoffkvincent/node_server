import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {connect} from 'react-redux'
import { handleToken } from '../reducers/auth'
import {Button} from 'semantic-ui-react'

class Payments extends React.Component {
  render() {
    return (
      <StripeCheckout 
        name='Emaily'
        description='$5 for 5 email credits'
        amount={500}
        token={ token => this.props.dispatch(handleToken(token))}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <Button>Add Credits</Button>
      </StripeCheckout>
    )
  }
}

export default connect()(Payments)
