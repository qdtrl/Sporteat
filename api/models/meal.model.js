const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Meal must have name"]
  },
  numberOfBlock: {
    type: Number,
    required: [true, "Meal must have number of block"],
    min: [1, 'Need at least one']
  },
  ingredients: []
  },
  { timestamps: true },
)

const Meal = mongoose.model("Meal", mealSchema);

module.exports = Meal;