const express = require('express');

const mealController = require('../controllers/meal.controller');
const protect = require('../middleware/authMiddleware');

const router = express.Router()

router.route('/')
  .get(mealController.getMeals)
  .post(mealController.createMeal);

router.route('/:id')
  .get(mealController.getMeal)
  .patch(mealController.updateMeal)
  .delete(mealController.deleteMeal);

module.exports = router;