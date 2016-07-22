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

  // Default domains lists
  const whiteList = [
    'vcmedia.vn',
    'admicro.vn'
  ];

  // Pool
  let pool = [];
  let whiteListPool = {};
  let blackListPool = {};

  // Detect if current window is refreshed
  chrome.devtools.network.onNavigated.addListener(function (url) {
    // Reset pool when page was reloaded/refreshed
    pool = [];
    whiteListPool = {};
    blackListPool = {};
  });

  // Listen to each request
  chrome.devtools.network.onRequestFinished.addListener(function (request) {
    pool.unshift(request);

    let fullDomain = request.request.url.extractDomain(); // Grab domain from url
    let realDomain = fullDomain.extractRealDomain(); // Get the real domain like: "do.main"

    if (realDomain && whiteList.indexOf(realDomain) >= 0) { // Is white listed?
      (!whiteListPool.hasOwnProperty(fullDomain)) ?
        whiteListPool[fullDomain] = [request] : whiteListPool[fullDomain].push(request);
    } else {
      (!blackListPool.hasOwnProperty(fullDomain)) ?
        blackListPool[fullDomain] = [request] : blackListPool[fullDomain].push(request);
    }

    // Render App
    ReactDOM.render(
      <Root
        pool={pool}
        whiteListPool={whiteListPool}
        blackListPool={blackListPool}
        store={createStore(initialState)}
      />,
      ormContainerId
    );
  });
});