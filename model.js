const mongoose = require('mongoose');
require("dotenv").config()
mongoose.connect(process.env.DBPASSWORD);
const CarSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: [true, "Car needs to have a name"]
  },
  exterior: {
    type: String,
    required: [true, "Car needs to have an exterior color"]
  },
  interior: {
    type: String,
    required: [true, "Car needs to have an interior color"]
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
  },
  make: {
    type: String,
    required: [true, "Car needs to have a make"]
  },
  status: {
    type: String,
    required: [true, "Car needs to have a status"]
  }
},
{timestamps: true}  
);
const Car = mongoose.model('CarDealership', CarSchema);
module.exports = {
  Car: Car
}