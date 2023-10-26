class DataModel {
    constructor() {
      this.data = [];
    }
  
    addData(temperature, humidity, soil_moisture) {
      this.data.push({ temperature, humidity, soil_moisture });
    }
  
    getAllData() {
      return this.data;
    }
  }
  
  module.exports = DataModel;
  