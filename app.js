const express = require("express");
const app = express();
const tourRouter = require("./routes/tourRouter.js");

const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require("./controllers/tourController.js");

// Middleware to parse JSON
app.use(express.json());

// Route: /tours
app.use("/tours", tourRouter);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
