import React, {Component} from 'react';
import CustomerDetails from './components/CustomerDetails';
import ShippingDetails from './components/ShippingDetails';
import PaymentDetails from './components/PaymentDetails';

class Checkout extends Component {
  state = {
    customerDetails: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
    },
    shippingDetails: {
      street: '',
      housenumber: '',
      zip: '',
    },
    paymentDetails: {
      cardNumber: '',
    },
  };

  handleChange = e => {
    console.log (e.currentTarget.value);
    // this.setState (e.currentTarget.value);
    //this.setState ({customerDetails: e.currentTarget.value});

    var customerDetails = this.state.customerDetails;
    var shippingDetails = this.state.shippingDetails;

    switch (e.currentTarget.name) {
      case 'firstName':
        customerDetails.firstName = e.currentTarget.value;
        this.setState ({customerDetails});
        break;
      case 'lastName':
        customerDetails.lastName = e.currentTarget.value;
        this.setState ({customerDetails});
        break;
      case 'dateOfBirth':
        customerDetails.dateOfBirth = e.currentTarget.value;
        this.setState ({customerDetails});
        break;
      case 'street':
        shippingDetails.street = e.currentTarget.value;
        this.setState ({shippingDetails});
        break;
      case 'houseNr':
        shippingDetails.houseNr = e.currentTarget.value;
        this.setState ({shippingDetails});
        break;
      case 'zip':
        shippingDetails.zip = e.currentTarget.value;
        this.setState ({shippingDetails});
        break;

      default:
        break;
    }
  };

  updateCardNumber = input => {
    let paymentDetails = this.state.paymentDetails;
    paymentDetails.cardNumber = input;
    this.setState ({PaymentDetails});
  };

  render () {
    return (
      <React.Fragment>
        <h2>{'State of <Checkout /> component'}</h2>
        <pre>state:{JSON.stringify (this.state, '\t', 2)}</pre>

        <CustomerDetails handleCustomerDetails={this.handleChange} />
        <ShippingDetails onEntry={this.handleChange} />
        <PaymentDetails handlePaymentDetails={this.updateCardNumber} />
      </React.Fragment>
    );
  }
}

export default Checkout;
