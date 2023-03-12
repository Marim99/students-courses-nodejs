const { v4: uuidv4 } = require("uuid");

class Student {
  id;
  name;
  address;
  age;
  constructor(name, address, age) {
    this.id = uuidv4(); //
    this.name = name;
    this.address = address;
    this.age = age;
  }
}

module.exports = Student;
