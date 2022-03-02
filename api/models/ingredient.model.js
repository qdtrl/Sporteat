const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Ingredient must have name"]
  },
  calories: {
    type: Number,
    required: [true, "Ingredient must have number of calories"],
    min: [1, 'Need at least one']
  },
  lipides: {
    type: Number,
    required: [true, "Ingredient must have number of lipides"],
    min: [1, 'Need at least one']
  },
  glucides: {
    type: Number,
    required: [true, "Ingredient must have number of glucides"],
    min: [1, 'Need at least one']
  },
  proteines: {
    type: Number,
    required: [true, "Ingredient must have number of proteines"],
    min: [1, 'Need at least one']
  },
  },
  { timestamps: true },
)

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports = Ingredient;