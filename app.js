const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Import mongoose
const DataController = require('./controllers/dataController');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB
const DB_URL = "mongodb+srv://minosh:minosh@cluster0.u1yxx.mongodb.net/hotelssssssystem?retryWrites=true&w=majority";
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dataController = new DataController();

app.post('/data', (req, res) => {
  dataController.postData(req, res);
});

app.get('/data', (req, res) => {
  dataController.getAllData(req, res);
});

// Bind to all available network interfaces on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
