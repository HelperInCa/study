import React from 'react';
import './HiddenContent.css';

class HiddenContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false
    };

    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden() {
    this.setState({
      hidden: !this.state.hidden
    });
  }

  render() {
    return (
      <div onClick={this.toggleHidden} className="hidden-content">
        { this.state.hidden || this.props.children }
        { this.state.hidden && <button>Show Words</button> }
      </div>
    );
  }
};

export default HiddenContent;
