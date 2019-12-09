import React from 'react';

class ExampleButton extends React.Component {

  render() {
    return (
      <button onClick={this.props.click}>
        {this.props.buttonName}
      </button>
    )
  }
}

export default ExampleButton;