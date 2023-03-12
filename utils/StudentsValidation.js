const Ajv = require("ajv");
const ajv = new Ajv();

const StudentsSchema = {
  type: "object",
  properties: {
    name: { type: "string", pattern: "^[a-zA-Z]+$" },
    address: { type: "string" },
    age: { type: "number" },
  },
  required: ["name", "address", "age"],
  additionalProperties: false,
};
module.exports = ajv.compile(StudentsSchema);
