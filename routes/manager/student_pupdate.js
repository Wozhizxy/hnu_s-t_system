const mongoose = require("mongoose");
const { Student, Teacher, S_C } = require("../../modules/stc");
module.exports = async (req, res) => {
  const { username, name, password, courses } = req.body;
  await Student.findOneAndUpdate({ username }, { password, name });
  const student = await Student.findOne({ username });
  await S_C.deleteMany({ student: student._id });
  if (Array.isArray(courses)) {
    courses.forEach(async (item) => {
      const teacher = await Teacher.findOne({ course: item });
      await S_C.create({
        student: student._id,
        teacher: teacher._id,
        score: -1,
      });
    });
  } else if (courses) {
    const teacher = await Teacher.findOne({ course: courses });
    // console.log(teacher);
    await S_C.create({
      student: student._id,
      teacher: teacher._id,
      score: -1,
    });
  }

  res.redirect("/manager?page=1");
};
