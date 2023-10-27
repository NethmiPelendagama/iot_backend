const DataModel = require('../models/DataModel');

class DataController {
  constructor() {
    this.dataModel = new DataModel();
  }

  async postData(req, res) {
    const { temperature, humidity, soil_moisture } = req.body;

    if (temperature !== undefined && humidity !== undefined && soil_moisture !== undefined) {
      try {
        await this.dataModel.addData(temperature, humidity, soil_moisture);
        res.status(201).json({ message: 'Data added successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Error saving data to the database' });
      }
    } else {
      res.status(400).json({ error: 'Invalid data' });
    }
  }

  async getAllData(req, res) {
    try {
      const allData = await this.dataModel.getAllData();
      res.json(allData);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving data from the database' });
    }
  }
}

module.exports = DataController;
