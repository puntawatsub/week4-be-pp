const express = require("express");
const {
  getAllTours,
  createTour,
  getTourById,
  updateTour,
  deleteTour,
} = require("../controllers/tourControllers");
const router = express.Router();

// ROUTES
// GET /tours
router.get("/", getAllTours);

// POST /tours
router.post("/", createTour);

// GET /tours/:tourId
router.get("/:tourId", getTourById);

// PUT /tours/:tourId
router.put("/:tourId", updateTour);

// DELETE /tours/:tourId
router.delete("/:tourId", deleteTour);

module.exports = router;
