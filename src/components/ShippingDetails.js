import React from 'react';

const ShippingDetails = props => {
  return (
    <React.Fragment>
      <h1>Shipping Details </h1>
      <form>
        Street:
        {' '}
        <input
          type="text"
          name="street"
          id="street"
          onChange={e => props.onEntry (e)}
        />
        House nr:
        {' '}
        <input
          type="text"
          name="houseNr"
          id="houseNr"
          onChange={e => props.onEntry (e)}
        />
        Zip:
        {' '}
        <input
          type="text"
          name="zip"
          id="zip"
          onChange={e => props.onEntry (e)}
        />
      </form>
    </React.Fragment>
  );
};

export default ShippingDetails;
