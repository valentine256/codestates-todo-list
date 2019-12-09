import React from 'react';
import style from './ExampleMessage.css';

class ExampleMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style['msg-box']}>
        <span>
          Component: ExampleMessage
        </span>
        <div className={style['case']}>
          <div className={style['name']}>
            {this.props.name}
          </div>
          <div className={style['message']}>
            {this.props.message}
          </div>
        </div>
      </div>
    )
  }
}

export default ExampleMessage;