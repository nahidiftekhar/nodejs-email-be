const nodemailer = require("nodemailer");
const mailConfig = require("../../configs/mail.config");

const senderMail = mailConfig.mailConfig.EMAIL_USERNAME;
const senderPassword = mailConfig.mailConfig.EMAIL_PASSWORD;

async function sendSingleEmail(mailDetails, res) {
  const transporter = nodemailer.createTransport({
    port: mailConfig.mailConfig.EMAIL_PORT,
    host: mailConfig.mailConfig.EMAIL_HOST,
    auth: {
      user: mailConfig.mailConfig.EMAIL_USERNAME,
      pass: mailConfig.mailConfig.EMAIL_PASSWORD,
    },
    secure: true,
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take new messages");
    }
  });

  var mailOptions = {
    from: mailConfig.EMAIL_USERNAME,
    to: mailDetails.toMail,
    replyTo: mailDetails.replyTo,
    subject: mailDetails.subject,
    text: mailConfig.DEFAULT_TEXT,
    html: mailDetails.message,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
}

module.exports = {
  sendSingleEmail,
};
