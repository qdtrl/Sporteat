const { DEFAULT_EXPIRATION } = require("../config/config");
const Ingredient = require("../models/ingredient.model");

exports.getIngredients = async (req, res, next) => {
  try {
    const ingredients = await Ingredient.find();

    res.status(200).json({
      status: 'success',
      results: ingredients.length,
      data: {
        ingredients
      }
    })
  } catch (e) {
    res.status(400).json({
      status: `fail ${e}`,
    })
  }
}

exports.getIngredient = async (req, res, next) => {
  try {
    const ingredient = await Ingredient.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        ingredient
      }
    })
  } catch (e) {
    res.status(400).json({
      status: `fail ${e}`,
    })
  }
}

exports.createIngredient = async (req, res, next) => {
  try {
    const ingredient = await Ingredient.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        ingredient
      }
    })
  } catch (e) {
    res.status(400).json({
      status: `fail ${e}`,
    })
  }
}

exports.updateIngredient = async (req, res, next) => {
  try {
    const ingredient = await Ingredient.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(201).json({
      status: 'success',
      data: {
        ingredient
      }
    })
  } catch (e) {
    res.status(400).json({
      status: `fail ${e}`,
    })
  }
}

exports.deleteIngredient = async (req, res, next) => {
  try {
    const ingredient = await Ingredient.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'success',
    })
  } catch (e) {
    res.status(400).json({
      status: `fail ${e}`,
    })
  }
}
