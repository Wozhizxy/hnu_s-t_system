const { S_C, Student, Teacher } = require("../../modules/stc");
module.exports = async (req, res) => {
  const student = await Student.findOne({
    username: req.session.user.username,
  });
  await S_C.deleteMany({ student: student._id });
  const courses = req.body.courses;
  if (Array.isArray(courses)) {
    courses.forEach(async (item) => {
      const teacher = await Teacher.findOne({ course: item });
      await S_C.create({ student: student._id, teacher: teacher._id });
    });
  } else if (courses) {
    const teacher = await Teacher.findOne({ course: courses });
    await S_C.create({ student: student._id, teacher: teacher._id, score: -1 });
  }
  res.redirect("/student/mycourse");
};
