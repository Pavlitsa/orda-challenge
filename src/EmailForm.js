import React, { Component } from "react";

class EmailForm extends Component {
  constructor() {
    super();
    this.state = {
      ordersCount: 0,
      sumTotal: 0,
      timeStamp: "",
      tipSum: 0,
      venueId: "",
      venueName: ""
    };
  }

  handleFormSubmit() {}

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Venue ID:</label>
          <input type="text" name="venueId" value={this.state.venueId} />

          <label>Venue Name:</label>
          <input type="text" name="venueId" value={this.state.venueName} />

          <label>Timestamp:</label>
          <input type="text" name="timeStamp" value={this.state.timeStamp} />

          <label>Number of Orders:</label>
          <input
            type="number"
            name="ordersCount"
            value={this.state.ordersCount}
          />

          <label>Order Turnover:</label>
          <input type="number" name="sumTotal" value={this.state.sumTotal} />

          <label>Sum of Tips:</label>
          <input type="number" name="tipSum" value={this.state.tipSum} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EmailForm;
