import React from 'react';
import style from './ExampleMessage.css';

const ExampleMessage = (props) => {

  return (
    <div className={style['msg-box']}>
      <span>
        Component: ExampleMessage
      </span>
      <div className={style['case']}>
        <div className={style['name']}>
          {props.name}
        </div>
        <div className={style['message']}>
          {props.message}
        </div>
      </div>
    </div>
  )
}

export default ExampleMessage;