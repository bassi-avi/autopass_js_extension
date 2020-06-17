PROBLEM :
1. dev/test use a fixed set of product UIs with different IPs.
2. Usually these products have session timeouts and log us out.
3. Many times, all these products have default passwords and we need to enter them manually to login.

SOLUTION : 
1. A chrome / opera extension which if installed, tracks the tab for the following states - reload, changetab, tab visibility (foreground) and AUTO LOGS me into the product.
2. Happens without any typing or a button.

INSTALLATION INSTRUCTIONS FOR CHROME or OPERA : 
1. Clone.
2. Go to Chrome extensions.
3. Enable developer mode.
4. load unpacked and load the directory. Extension should start showing up with AVI A logo.

HOW IT WORKS : 
1. Check texts.json format. https://github.com/bassi-avi/autopass_js_extension/blob/master/texts.json
2. keyname is not important, but please provide descriptive name. e.g. Facebook for Facebook login
3. add in a login_identifier which essentially looks for that id or class name in the page.
4. Enter email_query, pwd_query adn login_btn_query which identifies email and password field class/ids.
5. email , pwd for actual login credentials.
6. delay for any additional delay (0 for no delay)
7. All fields are currently mandatory.

ADD ADDITIONAL websites support : 
1. Check texts.json. Understand the format.
2. Add in any key name and add in appropriate values for any identifier field.

TODO : 
1. go back in browser history to redirect user to appropriate page.
2. Check mozilla integration? if req?
