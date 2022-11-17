const express = require('express');
const router = express.Router();
const sendEmailController = require('../controllers/sendmail.controller');

//Send email
router.get ('/', sendEmailController.sendEmail)
router.post ('/', sendEmailController.sendEmail)

// router.post('/', async function(req, res, next) {
//   try {
//     res.json(await sendEmailController.sendEmail(req.body))
//   } catch(err){
//       console.error(`Profile creation failed `, err.message)
//   }
// })


module.exports = router