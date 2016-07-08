import React from 'react';
import uuid from 'node-uuid';

import Request from './Request';

export default class RequestsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table id="outgoing-requests" className="table table-striped">
        <tbody id="requests-pool">
        <tr>
          <th>Method</th>
          <th>Status</th>
          <th>Domain</th>
          <th>MIME</th>
          <th>Size</th>
        </tr>
        {
          this.props.pool.map(request => (
            <Request key={uuid.v4()} request={request}/>
          ))
        }
        </tbody>
      </table>
    );
  }
}