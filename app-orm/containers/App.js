import React from 'react';

import Controllers from '../components/Controllers/Controllers';
import RequestsList from '../components/RequestsList/RequestsList';
import BlackList from '../components/BlackList/BlackList';

import 'expose?$!expose?jQuery!jquery';
import 'bootstrap-loader';
import '../../chrome/extension/orm.css';

export default class AppORM extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <Controllers/>
        <BlackList pool={this.props.blackListPool} poop="This is the shit"/>
        {/*<RequestsList pool={this.props.pool}/>*/}
      </section>
    );
  }
}
