const express = require('express');
const model = require('./model');
const cors = require('cors');



const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }));

// retirves all cars from the database
app.get('/cars' , async function (req, res) {
  try {
    let car = await model.Car.find()
    res.json(car);
  }
  catch (err) {
    console.error(err);
    response.status(400).send("Generic Error")

  }


})

app.get('/cars/:id' , async function (req, res) {
  try {
    let car = await model.Car.findById({_id: req.params.id})
    res.json(car);
  }
  catch (err) {
    console.error(err);
    response.status(400).send("Generic Error")
  }
})

app.post('/cars', async function (req, res) {
  const data = (req.body)
  try{
    let new_car = new model.Car({
      name: data.name,
      horsepower: data.horsepower,
      color: data.color,
      price: data.price,
  
    })
    let error = new_car.validateSync();
    if (error) {
      response.status(400).json(error);
      return;
    }
  
    new_car.save().then(() => {
      res.status(201).send("Post Success!");
    })
  }
  catch(err){
    console.log(err);
    res.status(400).send("Generic Error");
  }


});

app.delete('/cars/:id', async function (req, res) {
  try{
    let isDeleted = await model.Car.findOneAndDelete({_id: req.params.id});
    if(!isDeleted){
      res.status(404).send("could not find car")
      return;
    }
    res.status(204).send("car delete")
  }
  catch(err){
    console.log(err)
    res.status(400).send("generic error")

  }
  
})

app.put('/cars/:id', async function(req, res){

  try{
    const data = (req.body);
    const updatedCar = {
      name: data.name,
      horsepower: data.horsepower,
      color: data.color,
      price: data.price,
    };
    let isUpdated = await model.Car.findByIdAndUpdate({_id: req.params.id} , updatedCar, {new: true})
    if(!isUpdated){
      res.status(404).send("car not found")
      return;
    }
    res.status(204).json(isUpdated)

  }
  catch(err){
    console.log(err)
    res.status(400).send("generic error")
  }


  
});

app.listen(8080, () => {
  console.log("listening on port 8080")
})