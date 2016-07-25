import React from 'react';
import ReactDOM from 'react-dom';
import '../../app-orm/helpers/StringHelpers';

import Root from '../../app-orm/containers/Root';

const ormContainerId = document.getElementById('root-orm');

ormContainerId.innerHTML = '<div class="container">' +
  '<h1>Refresh your current tab</h1>' +
  '<h3>Outgoing Requests Manager</h3>' +
  '<h6>This means React components did not work.</h6>' +
  '</div>';

// Call to current state tree
chrome.storage.local.get('state', obj => {
  const {state} = obj;
  const initialState = JSON.parse(state || '{}');
  const createStore = require('../../app-orm/store/configureStore');

  // Render App
  ReactDOM.render(
    <Root store={createStore(initialState)}/>,
    ormContainerId
  );
});