import React from 'react';

export default class RequestStatus extends React.Component {
  constructor(props) {
    super(props);
  }

  _stateColor(status) {
    switch (true) {
      case /1[0-9]{2}/.test(status.toString()):
        return 'info';
        break;
      case /2[0-9]{2}/.test(status.toString()):
        return 'success';
        break;
      case /3[0-9]{2}/.test(status.toString()):
        return 'primary';
        break;
      case /^0$/.test(status.toString()):
        return 'default';
        break;
      default:
        return 'danger';
    }
  }

  render() {
    return (
      <span className={"label label-" + this._stateColor(this.props.status)}>{this.props.status}</span>
    );
  }
}