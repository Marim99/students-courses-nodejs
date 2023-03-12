const Ajv = require("ajv");
const ajv = new Ajv();

const CoursesSchema = {
  type: "object",
  properties: {
    name: { type: "string", pattern: "^[a-zA-Z]+$" },
    instructorName: { type: "string", pattern: "^[a-zA-Z]+$" },
    duration: { type: "number", minimum: 15, maximum: 50 },
  },
  required: ["name", "instructorName", "duration"],
  additionalProperties: false,
};
module.exports = ajv.compile(CoursesSchema);
