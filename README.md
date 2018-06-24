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
});

//send message
mailer.send('no-reply@domain.com', 'recipient@gmail.com', 'test', 'test', {title: "test email", name:"Ficky"})
.then((body)=> {
    // show email generated
})
.catch((err)=> {
    // show error
})

```
