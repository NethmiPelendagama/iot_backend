const express = require('express');
const bodyParser = require('body-parser');
const DataController = require('./controllers/dataController');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const dataController = new DataController();

app.post('/data', (req, res) => {
  dataController.postData(req, res);
});

app.get('/data', (req, res) => {
  dataController.getAllData(req, res);
});

// Bind to address 0.0.0.0 and port 3000
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on 0.0.0.0:${port}`);
});
