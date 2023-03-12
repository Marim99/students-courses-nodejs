const { v4: uuidv4 } = require("uuid");

class Course {
  id;
  name;
  instructorName;
  duration;
  constructor(name, instructorName, duration) {
    this.id = uuidv4(); //
    this.name = name;
    this.instructorName = instructorName;
    this.duration = duration;
  }
}

module.exports = Course;
