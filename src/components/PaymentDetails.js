import React, {Component} from 'react';

class PaymentDetails extends Component {
  state = {
    cardNumber: '',
  };

  handlePayment = e => {
    console.log (e.currentTarget.value);
    this.setState ({cardNumber: e.currentTarget.value});
  };

  updateCardDetails = () => {
    this.props.handlePaymentDetails (this.state.cardNumber);
  };

  render () {
    return (
      <React.Fragment>
        <h1>Payment Details Details page</h1>
        <pre>state:{JSON.stringify (this.state, '\t', 2)}</pre>
        <form>
          Card Number:
          <input
            type="text"
            name="cardNumber"
            onChange={e => this.handlePayment (e)}
          />
          <button onClick={this.updateCardDetails}>Submit</button>
          {' '}
        </form>

      </React.Fragment>
    );
  }
}

export default PaymentDetails;
