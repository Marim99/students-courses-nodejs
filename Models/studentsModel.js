const mongoose = require("mongoose");
const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A student must has a name"],
  },
  address: {
    type: String,
    required: [true, "A student must has an address"],
  },
  age: {
    type: Number,
    required: [true, "A student must has an age"],
  },
});

const Student = mongoose.model("Student", studentsSchema);

module.exports = Student;
