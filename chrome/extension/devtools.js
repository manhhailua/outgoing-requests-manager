// Create DevTools panel
chrome.devtools.panels.create("ORM", "icon.png", "orm.html", function (panel) {
  // Init pool
  sessionStorage.setItem('requests-pool', []);
});
