import React from 'react';

import Request from './Request';

export default class OrmRequestsList extends React.Component {
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
          <th>URL</th>
          <th>MIME</th>
          <th>Size</th>
        </tr>
        {
          this.props.pool.map(request => (
            <Request request={request}/>
          ))
        }
        </tbody>
      </table>
    );
  }
}