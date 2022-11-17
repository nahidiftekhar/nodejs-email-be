const express = require('express');
const app = express();
const port = 5127;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
    res.json({message: 'Where is the mail'});
});
app.listen(port, () => console.log(`Node email sender running on port ${port}!`));