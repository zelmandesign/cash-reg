import React from 'react'

const bills = [1, 5, 10, 20, 100]

class Bills extends React.Component {
  render() {
    const listBills = bills.map((bill) =>
      //<li key={link.endpoint}>{link.endpoint}</li>
      <option value={bill}>${bill}</option>
    );
    return (
      <div className="bills-select form-group row">
        <label className="col-4 col-form-label">Pay with:</label>
        <select className="col-4 form-control">
          {listBills}
        </select>
        <div className="col-4 text-left">
          <button className="btn btn-danger"> + </button>
        </div>
      </div>
    );
  }
}

export default Bills;