const Tour = require("../models/Tour");

exports.getAllTour = async (req, res) => {
  try {
    const tours = await Tour.find();

    res.status(200).json({
      success: true,
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
      success: true,
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);

    res.status(204).json({
      success: true,
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      success: true,
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};
