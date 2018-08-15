# bz-mailer

## Install
`npm install bz-mailer -S`

## Usage Example

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
    method: "sendgrid", // "sendgrid", "mailgun",
    default_from: "noreply@domain.com" // default from address
});

//send message
// set from address to null to use default address
mailer.send('no-reply@domain.com', 'fickyirwanto@gmail.com', 'test', 'test', {title: "test email", name:"Ficky"})
.then((body)=> {
    // show email generated
})
.catch((err)=> {
    // show error
})



// you can also use mailer.sendFrom to automatically use default from address
mailer.sendFrom('fickyirwanto@gmail.com', 'test', 'test', {title: "test email", name:"Ficky"})

```
