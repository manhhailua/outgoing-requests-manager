import React from 'react';

import style from './Controllers.css';

export default class Controllers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.controllers}>
        <p>All controllers go here.</p>
      </div>
    );
  }
}