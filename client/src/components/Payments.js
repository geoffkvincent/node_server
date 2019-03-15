import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

class Payments extends React.Component {
  render() {
    return (
      <StripeCheckout 
        amount={500}
        token={}
      />
    )
  }
}

export default Payments