const express = require("express");
const {
  createCourse,
  updateCourse,
  deleteCourse,
  getAllCourses,
  getCourse,
} = require("../controllers/courseController");
const router = express.Router();

router.route("/").get(getAllCourses).post(createCourse);
router.route("/:id").get(getCourse).patch(updateCourse).delete(deleteCourse);

module.exports = router;
