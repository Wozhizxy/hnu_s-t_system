const mongoose = require("mongoose");
require("./connect");

const Admin = mongoose.model(
  "Admin",
  new mongoose.Schema({
    username: String,
    password: String,
  })
);
// Admin.create({ username: "Zhang", password: "123456" }).then((doc) =>
//   console.log(doc)
// );
const Student = mongoose.model(
  "Student",
  mongoose.Schema({
    username: { type: String, required: true, minlength: 12, maxlength: 12 },
    name: { type: String, required: true },
    password: String,
  })
);
const Teacher = mongoose.model(
  "Teacher",
  mongoose.Schema({
    username: String,
    name: String,
    password: String,
    course: String,
  })
);
const S_C = mongoose.model(
  "S_C",
  mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
    score: Number,
  })
);
module.exports = { Admin, Student, Teacher, S_C };
