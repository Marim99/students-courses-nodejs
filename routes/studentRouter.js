const express = require("express");
const {
  createStudent,
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");
const router = express.Router();

router.route("/").get(getAllStudents).post(createStudent);
router.route("/:id").get(getStudent).patch(updateStudent).delete(deleteStudent);

module.exports = router;
