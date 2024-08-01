import nodemailer from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';

const loadTemplate = (email, data) => {
    const filePath = path.join(__dirname, '../../src/view/email', `${email}.html`);
    const source = fs.readFileSync(filePath, 'utf8');
    const template = handlebars.compile(source);
    return template(data);
};

const sendmail = async (data) => {
    const htmlContent = loadTemplate('email', data);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.email,
            pass: process.env.pass
        }
    });

    const mailOptions = {
        from: process.env.email,
        to: data.email,
        subject: data.subject,
        text: data.text,
        html: htmlContent
    };

    // transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //         logger.error(error);
    //     } else {
    //         logger.info('Email sent: ' + info.response);
    //     }
    // });
};

module.exports = {
    sendmail
};
