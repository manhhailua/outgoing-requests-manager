import React from 'react';
import classNames from 'classnames';

import style from './Controllers.css';

import WhiteList from '../WhiteList/WhiteList'
import WhiteListInput from '../WhiteListInput/WhiteListInput'

export default class Controllers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style['controllers']}>
        <div className={classNames('row', style['white-list-input'])}>
          <div className="col-lg-12">
            <WhiteListInput/>
          </div>
        </div>

        <div className={classNames('row', style['white-list'])}>
          <div className="col-lg-12">
            <WhiteList/>
          </div>
        </div>
      </div>
    );
  }
}