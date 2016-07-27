import React, {Component, PropTypes} from 'react';
import * as _ from 'lodash';
import URI from 'urijs';
import classNames from 'classnames';

import style from './Filters.css';

export default class Filters extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    domains: PropTypes.array.isRequired
  };

  constructor(props, context) {
    super(props, context);

    // Init state
    this.state = {
      pool: [],
      whiteListPool: [],
      blackListPool: [],
      testPool: {}
    };
  }

  componentDidMount() {
    // Create "this" alias
    let self = this;

    // Detect if current window is refreshed
    chrome.devtools.network.onNavigated.addListener(function (url) {
      // Reset pool when page was reloaded/refreshed
      self.setState({
        pool: {}
      });
    });

    // Event: on request sent
    chrome.devtools.network.onRequestFinished.addListener(function (request) {
      self.setState(function (previousState, currentProps) {
        let uri = URI(request.request.url);
        let domain = uri.domain();

        if (!previousState.pool.hasOwnProperty(domain)) { // Check if existed
          previousState.pool[domain] = [];
        }

        previousState.pool[domain].push(request);

        // New state
        return {
          pool: previousState.pool,
        };
      });
    });
  }

  // Check if current domain from request is white listed
  _isWhiteListed(domain) {
    const {domains} = this.props;
    return _.isObject(_.find(domains, object => {
      return object.domain === domain;
    }));
  }

  _clickToWhiteList(domain) {
    this.props.actions.addDomain(domain);
  }

  _renderFilteredList() {
    let filteredRequestsComponents = [];

    for (let domain in this.state.pool) {
      if (domain && !this._isWhiteListed(domain)) { // Reject response from cache (if not like a domain pattern)
        filteredRequestsComponents.push(
          <tr key={domain}>
            <td className={style['action-container']}>
              <span className={classNames('label label-warning', style['click-to-white-list'])}
                    onClick={() => this._clickToWhiteList(domain)}
                    title="Click to add to white list">
                <span className="glyphicon glyphicon-fire" aria-hidden="true"></span>
              </span>
            </td>
            <td>{domain}</td>
            <td>{this.state.pool[domain].length}</td>
          </tr>
        );
      }
    }

    return filteredRequestsComponents;
  }

  render() {
    return (
      <div className={style.blacklist}>
        <table className="table table-striped">
          <tbody>
          <tr>
            <th>&nbsp;</th>
            <th>Not White Listed</th>
            <th>Number of requests</th>
          </tr>
          {this._renderFilteredList()}
          </tbody>
        </table>
      </div>
    );
  }
}