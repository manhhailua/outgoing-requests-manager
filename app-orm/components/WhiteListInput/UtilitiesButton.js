import React, {Component, PropTypes} from 'react';

import InputDomainNameStyle from './InputDomainName.css';
import UtilitiesButtonStyle from './UtilitiesButton.css';

export default class UtilitiesButton extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  };

  _clearDomains() {
    let confirm = prompt('Are you sure to clear all white listed domains?\nType "OK" (case-sensitive) to confirm.');

    if (confirm === "OK") {
      this.props.onClear();
    }
  }

  _submitDomain(event) {
    const domain = document.getElementById(InputDomainNameStyle['input-domain-name']).value;
    if (domain) {
      this.props.onSubmit(domain);
      document.getElementById(InputDomainNameStyle['input-domain-name']).value = '';
    }
  }

  render() {
    return (
      <div className="input-group-btn">
        <button className="btn btn-default" type="button" onClick={ event => this._submitDomain(event) }>
          Add&nbsp;&nbsp;<span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
        </button>
        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
          <span className="glyphicon glyphicon-option-vertical"></span>
        </button>
        <ul className="dropdown-menu dropdown-menu-right">
          <li onClick={ event => this._clearDomains(event) }>
            <a href="#"><span className="glyphicon glyphicon-erase"></span>&nbsp;&nbsp;Clear domains</a>
          </li>
          <li role="separator" className="divider"></li>
          <li>
            <a href="#"><span className="glyphicon glyphicon-info-sign"></span>&nbsp;&nbsp;About</a>
          </li>
          <li>
            <a href="#"><span className="glyphicon glyphicon-question-sign"></span>&nbsp;&nbsp;Help</a>
          </li>
        </ul>
      </div>
    );
  }
}