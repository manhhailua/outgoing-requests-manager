import React, {Component, PropTypes} from 'react'

import style from './InputDomainName.css';

export default class InputDomainName extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  _handleSubmit(event) {
    const domain = event.target.value.trim();
    if (event.which === 13 && domain) {
      this.props.onSubmit(domain);
      document.getElementById(style['input-domain-name']).value = '';
    }
  }

  render() {
    return (
      <input type="text" id={style['input-domain-name']} className="form-control" placeholder="example.com"
             aria-describedby="basic-addon3" autoFocus="true"
             onKeyDown={ event => this._handleSubmit(event) }/>
    );
  }
}