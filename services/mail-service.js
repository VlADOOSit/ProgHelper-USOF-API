const nodemailer = require('nodemailer');

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'Setting for you',
                pass: 'Setting for you'
            }
        })
    }

    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: 'Setting for you',
            to,
            subject: 'Activation account  USOF',
            text: '',
            html:
                `
                    <div>
                        <h1>Activation link</h1>
                        <a href="${link}">${link}</a>
                    </div>
                `
        })
    }

    async sendPass(to, pass) {
        await this.transporter.sendMail({
            from: 'Setting for you',
            to,
            subject: 'Activation account  USOF',
            text: '',
            html:
                `
                    <div>
                        <h1>New Pass</h1>
                        <h2>${pass}</h2>
                    </div>
                `
        })
    }

}

module.exports = new MailService();
