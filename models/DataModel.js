const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  temperature: Number,
  humidity: Number,
  soil_moisture: Number,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Data = mongoose.model('Data', dataSchema);

class DataModel {
  async addData(temperature, humidity, soil_moisture) {
    const newData = new Data({ temperature, humidity, soil_moisture });

    try {
      await newData.save();
    } catch (error) {
      throw new Error('Error saving data to the database');
    }
  }

  async getAllData() {
    return await Data.find({});
  }
}

module.exports = DataModel;
