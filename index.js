const fs = require("fs"); 
const path = require ("path");

module.exports = {

    config: {
        view_path: '/view',
        mailgun: {
            api_key: '',
            domain: '',
        },
        auto_bcc: false, // or csv
    },

    app: null,

    init: function(app, config) {

        this.app = app;

        if (config)
            this.config = Object.assign(this.config, config);

        this.mailgun = require('mailgun-js')({apiKey: this.config.mailgun.api_key, domain: this.config.mailgun.domain});
    },

    setBCC: function(bcc) {
        this.config.bcc = bcc;
    },


    renderHTML: async function(viewname, viewdata) {
        return new Promise(async (resolve, reject) => { 

            fs.readFile(path.join(this.config.view_path, viewname +'.html'), 'utf8', async (err,data) => {
                if (err) {
                    reject(err);
                }
                else {
                    var html = data;
                    for (var key in viewdata) {
                        html = html.replace(/{{\S*}}/g, (match)=> {
                            if (viewdata[key])
                                return viewdata[key]
                            else return '';
                        })
                    }

                    resolve(html);
                }
            });
        });
    },

    send: async function(from, to, subject, viewname, viewdata) {
        return new Promise((resolve, reject)=> {

            var data= {
                from: from,
                to: to,
                subject: subject,
                text: '',
                html: ''
            }

            data.html = this.renderHTML(viewname, viewdata);

            this.mailgun.messages().send(data, async (error, body) => {
                if (error) reject (error);
                else resolve(body);
            })
        })
        
    }




}