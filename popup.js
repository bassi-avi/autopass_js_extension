//jshint esversion:6
chrome.tabs.query({
  active: true,
  currentWindow: true
}, function(tabs) {
  chrome.tabs.onActivated.addListener(()=>{
    chrome.tabs.sendMessage(tabs[0].id, {
      "tab":"changed"
    });
  });
});
