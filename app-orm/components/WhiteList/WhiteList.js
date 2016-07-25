import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

import style from './WhiteList.css';

export default class WhiteList extends React.Component {
  static propTypes = {
    domains: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  handleDelete(event) {
    this.props.onDelete(event.target.id);
  }

  render() {
    const {domains, onDelete} = this.props;

    return (
      <div className="panel panel-default">
        <div className="panel-body">
          {domains.map(domain =>
            <div key={domain.id}
                 className={classNames("label", "label-primary", style["white-listed-domain"])}>{domain.domain}&nbsp;
              <span id={domain.id} className="glyphicon glyphicon-remove" aria-hidden="true"
                    onClick={ event => this.handleDelete(event) }></span>
            </div>
          )}
        </div>
      </div>
    );
  }
}