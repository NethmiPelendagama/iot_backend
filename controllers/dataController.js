const mongoose = require('mongoose');

// Define a schema for your data
const dataSchema = new mongoose.Schema({
  temperature: Number,
  humidity: Number,
  soil_moisture: Number,

});

// Create a model based on the schema
const Data = mongoose.model('Data', dataSchema);

class DataModel {
  async addData(temperature, humidity, soil_moisture) {
    // Create a new data document using the Data model
    const newData = new Data({ temperature, humidity, soil_moisture });

    try {
      // Save the new data to the database
      await newData.save();
    } catch (error) {
      throw new Error('Error saving data to the database');
    }
  }

  async getAllData() {
    // Retrieve all data from the database
    return await Data.find({});
  }
}

module.exports = DataModel;
