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
    sendgrid: {
        api_key: 'YOUR SENDGRID API KEY'
    },
    method: "sendgrid", // "sendgrid", "mailgun"
});

//send message
mailer.send('no-reply@domain.com', 'fickyirwanto@gmail.com', 'test', 'test', {title: "test email", name:"Ficky"})
.then((body)=> {
    // show email generated
})
.catch((err)=> {
    // show error
})

```