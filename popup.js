function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });
}

var charities = {
  'http://www.konbitmizik.org/home/' : 'Konbit Mizik'
}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    if (url in charities) {
      renderStatus('Organization name is ' + charities[url]);
    } else {
      renderStatus('This charity is not in our database.');
    }
  });
});
