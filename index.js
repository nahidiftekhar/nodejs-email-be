const express = require('express');
const app = express();
const port = 5127;
const sendEmailRouter = require('./src/routes/sendmail.route')

// app.use(express.bodyParser())

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
    res.json({message: 'Where is the mail'});
});

app.use('/send-email/', sendEmailRouter)
/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});
    
    return;
  });
  
app.listen(port, () => console.log(`Node email sender running on port ${port}!`));