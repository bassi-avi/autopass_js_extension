//jshint esversion:6

function main_fx() {
  let req = new XMLHttpRequest();
  req.open("get", chrome.runtime.getURL("texts.json"));
  req.send();
  req.onload = () => {
    const json = JSON.parse(req.responseText);
    for (let site in json) {
      let lgn_identifier = json[site].login_identifier;
      if (document.querySelector(lgn_identifier) != null) {
        let login_details = json[site];
        console.log("logged out - logging in now");
        console.log(login_details.email_query);
        setTimeout(function(){
        document.querySelector(login_details.email_query).focus();
        document.execCommand('insertText', false, login_details.email);
        document.querySelector(login_details.pwd_query).focus();
        document.execCommand('insertText', false, login_details.pwd);
        document.querySelector(login_details.login_btn_query).click();
        }, login_details.delay * 1000);
      }
    }
  };
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("tab chnaged");
    main_fx();
  });


window.addEventListener('load', () => {
  console.log('page has loaded');
  main_fx();
});

document.addEventListener("visibilitychange", main_fx, false);
