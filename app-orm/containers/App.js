import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as DomainActions from '../actions/domains';

import 'expose?$!expose?jQuery!jquery';
import 'bootstrap-loader';
import '../../chrome/extension/orm.css';

import Controllers from '../components/Controllers/Controllers';
import Filters from '../components/DomainsList/Filters';

@connect(
  state => ({
    domains: state.domains
  }),
  dispatch => ({
    actions: bindActionCreators(DomainActions, dispatch)
  })
)

export default class AppORM extends Component {

  static propTypes = {
    domains: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const {domains, actions} = this.props;

    return (
      <section>
        <Controllers actions={actions} domains={domains}/>
        <Filters domains={domains}/>
      </section>
    );
  }
}
