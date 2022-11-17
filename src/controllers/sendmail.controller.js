const sendEmailService = require("../services/sendmail.service")

async function sendEmail (req, res) {
    try {
        res.json(await sendEmailService.sendSingleEmail(req.body))
    } catch (error) {
        console.log('Error sending mail', error.message);        
    }
}

async function testRoute (req, res) {
    try {
        // res.json({'msg': 'something happened'})
        console.log(req);
    } catch (error) {
        console.log('Error sending mail', error.message);        
    }
}

module.exports = {
    sendEmail,
    testRoute
}