import React from 'react';
import ReactDOM from 'react-dom';

import AppORM from '../../app-orm/containers/App';
import '../../app-orm/helpers/StringHelpers';

const ormContainerId = document.getElementById('root-orm');

ormContainerId.innerHTML = '<div class="container">' +
  '<h3>Outgoing Requests Manager</h3>' +
  '<h6>This means React components did not work.</h6>' +
  '</div>';

// Domains lists
let whiteList = [
  'data', // cache
  'vcmedia.vn',
  'admicro.vn',
];

// Pool
let pool = [];
let whiteListPool = {};
let blackListPool = {};

chrome.devtools.network.onNavigated.addListener(function (url) {
  // Reset pool when page was reloaded/refreshed
  pool = [];
  whiteListPool = {};
  blackListPool = {};
});

chrome.devtools.network.onRequestFinished.addListener(function (request) {
  pool.unshift(request);

  let domain = request.request.url.extractDomain(); // Grab domain from url

  if (whiteList.indexOf(domain) >= 0) { // Is white listed?
    (!whiteListPool.hasOwnProperty(domain)) ? whiteListPool[domain] = [request] : whiteListPool[domain].push(request);
  } else {
    (!blackListPool.hasOwnProperty(domain)) ? blackListPool[domain] = [request] : blackListPool[domain].push(request);
  }

  ReactDOM.render(
    <AppORM
      pool={pool}
      whiteListPool={whiteListPool}
      blackListPool={blackListPool}
    />,
    ormContainerId
  );

  // ReactDOM.render(
  //   <code>
  //     <pre>{JSON.stringify(request)}</pre>
  //   </code>,
  //   ormContainerId
  // );
});