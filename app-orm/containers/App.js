import React from 'react';

import RequestsList from '../components/RequestsList';

import 'expose?$!expose?jQuery!jquery';
import 'bootstrap-loader';
import '../../chrome/extension/orm.css';

export default class AppORM extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RequestsList pool={this.props.pool}/>
    );
  }
}
