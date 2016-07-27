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
      blackListPool: []
    };
  }

  componentDidMount() {
    // Create "this" alias
    let self = this;

    // Detect if current window is refreshed
    chrome.devtools.network.onNavigated.addListener(function (url) {
      // Reset pool when page was reloaded/refreshed
      self.setState({
        pool: [],
        whiteListPool: {},
        blackListPool: {}
      });
    });

    // Event: on request sent
    chrome.devtools.network.onRequestFinished.addListener(function (request) {
      self.setState(function (previousState, currentProps) {
        let uri = URI(request.request.url);
        let domain = uri.domain();

        // Check if current domain from request is white listed
        function _isWhiteListed() {
          return _.isObject(_.find(currentProps.domains, object => {
            return object.domain === domain;
          }));
        }

        // Create new object:whiteListPool
        function nextWhiteListPool() {
          if (!previousState.whiteListPool.hasOwnProperty(domain) && _isWhiteListed(domain)) { // Check if existed
            previousState.whiteListPool[domain] = [];
          }

          if (_isWhiteListed(domain)) {
            previousState.whiteListPool[domain].push(request);
          }

          return previousState.whiteListPool;
        }

        // Create new object:backListPool
        function nextBlackListPool() {
          if (!previousState.blackListPool.hasOwnProperty(domain) && !_isWhiteListed(domain)) { // Check if existed
            previousState.blackListPool[domain] = [];
          }

          if (!_isWhiteListed(domain)) {
            previousState.blackListPool[domain].push(request)
          }

          return previousState.blackListPool;
        }

        // New state
        return {
          pool: [request, ...previousState.pool],
          whiteListPool: nextWhiteListPool(),
          blackListPool: nextBlackListPool(),
        };
      });
    });
  }

  _clickToWhiteList(event, domain) {
    this.props.actions.addDomain(domain);
  }

  _renderFilteredList() {
    let filteredRequestsComponents = [];

    for (let domain in this.state.blackListPool) {
      if (domain) { // Reject response from cache (if not like a domain pattern)
        filteredRequestsComponents.push(
          <tr key={domain}>
            <td className={style['action-container']}>
              <span className={classNames('label label-warning', style['click-to-white-list'])}
                    onClick={ event => this._clickToWhiteList(event, domain) }
                    title="Click to add to white list">
                <span className="glyphicon glyphicon-fire" aria-hidden="true"></span>
              </span>
            </td>
            <td>{domain}</td>
            <td>{this.state.blackListPool[domain].length}</td>
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