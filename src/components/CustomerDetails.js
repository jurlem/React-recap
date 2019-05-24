import React from 'react';

const CustomerDetails = props => {
  return (
    <React.Fragment>
      <h1>Customer Details </h1>
      <form>
        First name:
        {' '}
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={e => props.handleCustomerDetails (e)}
        />
        Last name:
        {' '}
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={e => props.handleCustomerDetails (e)}
        />
        Date of birth:
        {' '}
        <input
          type="date"
          name="dateOfBirth"
          id="dateOfBirth"
          onChange={e => props.handleCustomerDetails (e)}
        />
      </form>
    </React.Fragment>
  );
};

export default CustomerDetails;
