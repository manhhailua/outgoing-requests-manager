import React from 'react';
import classNames from 'classnames';

import style from './WhiteList.css';

export default class WhiteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className={classNames("label", "label-primary", style["white-listed-domain"])}>admicro.vn&nbsp;<span
            className="glyphicon glyphicon-remove" aria-hidden="true"></span></div>
          <div className={classNames("label", "label-primary", style["white-listed-domain"])}>vcmedia.vn&nbsp;<span
            className="glyphicon glyphicon-remove" aria-hidden="true"></span></div>
        </div>
      </div>
    );
  }
}