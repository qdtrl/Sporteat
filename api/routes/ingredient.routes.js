const express = require('express');

const ingredientController = require('../controllers/ingredient.controller');
const protect = require('../middleware/authMiddleware');

const router = express.Router()

router.route('/')
  .get(ingredientController.getIngredients)
  .post(ingredientController.createIngredient);

router.route('/:id')
  .get(ingredientController.getIngredient)
  .patch(ingredientController.updateIngredient)
  .delete(ingredientController.deleteIngredient);

module.exports = router;