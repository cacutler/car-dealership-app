const mongoose = require('mongoose');
require("dotenv").config()

mongoose.connect(process.env.DBPASSWORD);

const CarSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: [true, "Car needs to have a name"]
  },
  color: {
    type: String,
    required: [true, "Car needs to have a color"]
  },
  price: {
    type: Number,
    required: [true, "Car needs to have a price"]
  },
  mileage: {
    type: Number,
    required: [true, "Car needs to have a mileage"]
  },
  transmission: {
    type: String,
    required: [true, "Car needs to have a transmission type"]
  },
  drive: {
    type: String,
    required: [true, "Car needs to have a wheel drive"]
  }
},
{timestamps: true}  
);

const Car = mongoose.model('Car', CarSchema);

module.exports = {
  Car: Car
}