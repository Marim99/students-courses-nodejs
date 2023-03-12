const mongoose = require("mongoose");
const coursesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A course must has a name"],
  },
  instructorName: {
    type: String,
    required: [true, "A course must has an instructorName"],
  },
  duration: {
    type: Number,
    required: [true, "A course must has an duration"],
  },
});

const Course = mongoose.model("Course", coursesSchema);

module.exports = Course;
