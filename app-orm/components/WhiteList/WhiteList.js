import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import * as _ from 'lodash';

import style from './WhiteList.css';
import InputDomainNameStyle from '../WhiteListInput/InputDomainName.css'

export default class WhiteList extends React.Component {
  static propTypes = {
    domains: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      currentInput: ''
    }
  }

  componentDidMount() {
    let self = this;

    // Listen to #input-domain-name change
    document.getElementById(InputDomainNameStyle['input-domain-name']).addEventListener('keyup', function (event) {
      // Store current input domain name to component's state
      self.setState({currentInput: event.target.value.trim()});
    });
  }

  _handleDelete(event) {
    this.props.onDelete(event.target.id);
  }

  _renderDomains() {
    const {domains} = this.props;
    let domainsElements = [];

    for (let domain of domains) {
      // Filter for domain names contain the string in current input (#input-domain-name)
      if (domain.domain.indexOf(this.state.currentInput) !== -1) {
        domainsElements.push(
          <div key={domain.id}
               className={classNames('label label-primary', style['white-listed-domain'])}>{domain.domain}&nbsp;
            <span id={domain.id} aria-hidden="true" onClick={ event => this._handleDelete(event) }
                  title="Click to remove"
                  className={classNames('glyphicon glyphicon-remove', style['remove-domain'])}></span>
          </div>
        );
      }
    }

    if (_.isEmpty(domainsElements)) {
      return (
        <span><em>Hit "enter" or click [Add +] button to create a new white listed domain.</em></span>
      );
    }

    return domainsElements;
  }

  render() {
    return (
      <div className="alert alert-info" role="alert">
        { this._renderDomains() }
      </div>
    );
  }
}