import React from 'react';
import '../helpers/helpers';

import RequestStatus from './RequestStatus';

export default class OrmRequest extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.request.request.method}</td>
        <td><RequestStatus status={this.props.request.response.status}/></td>
        <td>{this.props.request.request.url.truncate(30)}</td>
        <td>{this.props.request.response.content.mimeType}</td>
        <td>{this.props.request.response.content.size}</td>
      </tr>
    );
  }
}