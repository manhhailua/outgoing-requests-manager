import React, {Component, PropTypes} from 'react';

export default class WhiteListInput extends React.Component {

  static propTypes = {
    onSave: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      name: this.props.name || ''
    };
  }

  _addDomain(domain) {
    this.props.onSave(domain);
    document.getElementById('input-domain-name').value = '';
  }

  _handleSubmit(event) {
    const domain = event.target.value.trim();
    if (event.which === 13 && domain) {
      this._addDomain(domain)
    }
  }

  _handleClick(event) {
    const domain = document.getElementById('input-domain-name').value;
    if (domain) {
      this._addDomain(domain)
    }
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" id="input-domain-name" className="form-control" placeholder="example.com"
               aria-describedby="basic-addon3" autoFocus="true"
               onKeyDown={ event => this._handleSubmit(event) }
        />
        <div className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={ event => this._handleClick(event) }>
            Add <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </button>
          <button type="button" className="btn btn-default" aria-label="Help">
            <span className="glyphicon glyphicon-question-sign"></span>
          </button>
        </div>
      </div>
    );
  }
}

