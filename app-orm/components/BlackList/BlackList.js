import React from 'react';
import uuid from 'node-uuid';

import style from './BlackList.css';

export default class BlackList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    let pool = this.props.pool;
    let elements = [];

    for (const domain in pool) {
      if (pool.hasOwnProperty(domain)) {
        elements.push(
          <tr key={uuid.v4()}>
            <td>{domain}</td>
            <td>{pool[domain].length}</td>
          </tr>
        )
      }
    }

    return elements;
  }

  render() {
    return (
      <div className={style.blacklist}>
        <table className="table table-striped">
          <tbody>
          <tr>
            <th>Not White Listed</th>
            <th>Quantity</th>
          </tr>
          {this.renderList(this.props.pool)}
          </tbody>
        </table>
      </div>
    );
  }
}