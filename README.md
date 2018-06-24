# bz-mailer

##Usage Example

```javascript
const mailer = require("bz-mailer");
const path = require("path");
mailer.init({}, {
    view_path: path.join(__dirname,'mails'),
    mailgun: {
        api_key: 'YOUR MAILGUN API KEY',
        domain: 'MAILGUN DOMAIN',
    },
});
```