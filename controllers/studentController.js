const Student = require("../Models/studentsModel");
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({
      status: "success",
      results: students.length,
      data: {
        students,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        student,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.createStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        student: newStudent,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "faild",
      message: "Invalid data",
    });
  }
};
exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
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
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.body.params, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",

      data: {
        student,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "faild",
      message: "Invalid data",
    });
  }
};
