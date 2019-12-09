import React from 'react';

class ExampleInputSet extends React.Component {

  render() {
    return (
      <div>
        <span>{this.props.inputText} : </span>
        <input onChange={this.props.onChange} id={this.props.inputId}/>
      </div>
    )
  }
}

export default ExampleInputSet;