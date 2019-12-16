// @flow

import React from 'react';
import style from './ExampleMessage.css';

type Props = {
  name: string;
  message: string;
}

const ExampleMessage = (props: Props) => {
  const { name, message } = props;

  return (
    <div className={style['msg-box']}>
      <div className={style.case}>
        <div className={style.name}>
          {name}
        </div>
        <div className={style.message}>
          {message}
        </div>
      </div>
    </div>
  );
};

export default ExampleMessage;
