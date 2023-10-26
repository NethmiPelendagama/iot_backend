const DataModel = require('../models/DataModel');

class DataController {
  constructor() {
    this.dataModel = new DataModel();
  }

  postData(req, res) {
    const { temperature, humidity, soil_moisture } = req.body;

    if (temperature !== undefined && humidity !== undefined && soil_moisture !== undefined) {
      this.dataModel.addData(temperature, humidity, soil_moisture);
      res.status(201).json({ message: 'Data added successfully' });
    } else {
      res.status(400).json({ error: 'Invalid data' });
    }
  }

  getAllData(req, res) {
    const allData = this.dataModel.getAllData();
    res.json(allData);
  }
}

module.exports = DataController;
