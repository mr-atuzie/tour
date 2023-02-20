const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter tour name"],
    unique: true,
  },
  duration: {
    type: Number,
    required: [true, "Please enter tour duration"],
  },
  maxGroupSize: {
    type: Number,
    required: [true, "Please enter tour group size"],
  },
  difficulty: {
    type: Number,
    required: [true, "Please enter tour difficulty"],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, "Please enter tour price"],
  },
  priceDiscount: {
    type: Number,
  },
  summary: {
    type: String,
    trim: true,
    required: [true, "Please add tour description "],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, "Please add tour cover Image "],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDates: [Date],
});

const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;
