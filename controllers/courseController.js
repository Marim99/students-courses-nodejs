const Course = require("../Models/coursesModel");

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({
      status: "success",
      results: courses.length,
      data: {
        courses,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        course,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.createCourse = async (req, res) => {
  try {
    const newCourse = await Course.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        course: newCourse,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "faild",
      message: "Invalid data",
    });
  }
};
exports.deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "faild",
      message: "Invalid data",
    });
  }
};
exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.body.params, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",

      data: {
        course,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "faild",
      message: "Invalid data",
    });
  }
};
