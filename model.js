const mongoose = require('mongoose');


mongoose.connect(process.env.DBPASSWORD);

const CarSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: [true, "Car needs to have a name"]
  },
  horsepower: {
    type: Number,
    required: [true, "must have an Hp number"],
  },
  color: {
    type: String,
    required: [true, "Car needs to have a color"]
  },
  price: {
    type: Number,
    required: [true, "Car needs to have a price"]
  },
},
{timestamps: true}  
);

const Car = mongoose.model('Car', CarSchema);

module.exports = {
  Car: Car
}