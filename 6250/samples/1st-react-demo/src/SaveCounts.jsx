import React, { Component } from 'react';

class SaveCounts extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.saveCount}>Save Value</button>
      </div>
    );
  }
}

export default SaveCounts;

