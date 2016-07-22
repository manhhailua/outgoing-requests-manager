import React from 'react';

export default class WhiteListInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="input-group">
        <div className="input-group-addon" id="basic-addon3">Doma.in</div>
        <input type="text" className="form-control" id="basic-url" placeholder="example.com"
               aria-describedby="basic-addon3" autoFocus="true"/>
        <div className="input-group-btn">
          <button className="btn btn-default" type="button">
            <div className="glyphicon glyphicon-plus" aria-hidden="true"></div>
          </button>
        </div>
      </div>
    );
  }
}