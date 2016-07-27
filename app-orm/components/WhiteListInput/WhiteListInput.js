import React, {Component, PropTypes} from 'react';

import style from './WhiteListInput.css';

import InputDomainName from './InputDomainName';
import UtilitiesButton from './UtilitiesButton';

export default class WhiteListInput extends Component {

  static propTypes = {
    onSave: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="input-group">
        <InputDomainName onSubmit={this.props.onSave}/>
        <UtilitiesButton onSubmit={this.props.onSave} onClear={this.props.onClear}/>
      </div>
    );
  }
}

