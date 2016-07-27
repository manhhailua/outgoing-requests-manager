import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

import style from './Controllers.css';

import WhiteList from '../WhiteList/WhiteList'
import WhiteListInput from '../WhiteListInput/WhiteListInput'

export default class Controllers extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    domains: PropTypes.array.isRequired
  };

  render() {
    const {actions, domains} = this.props;

    return (
      <div className={style['controllers']}>
        <div className={classNames('row', style['white-list-input'])}>
          <div className="col-lg-12">
            <WhiteListInput onSave={actions.addDomain} onClear={actions.clearDomains}/>
          </div>
        </div>

        <div className={classNames('row', style['white-list'])}>
          <div className="col-lg-12">
            <WhiteList domains={domains} onDelete={actions.deleteDomain}/>
          </div>
        </div>
      </div>
    );
  }
}