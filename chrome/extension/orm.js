import React from 'react';
import ReactDOM from 'react-dom';

// ORM app
import AppORM from '../../app-orm/containers/App';

const ormContainerId = document.getElementById('root-orm');

// If React is not exactly loaded
ormContainerId.innerHTML = '<div class="container"><h3>Outgoing Requests Manager</h3><h6>This means React components did not work.</h6></div>';

var pool = [];

chrome.devtools.network.onNavigated.addListener(function (url) {
  pool = [];
});

chrome.devtools.network.onRequestFinished.addListener(function (request) {
  pool.unshift(request);

  ReactDOM.render(
    <AppORM pool={pool}/>,
    ormContainerId
  );
});