const { Student, Teacher, S_C } = require("../../modules/stc");
module.exports = async (req, res) => {
  const user = req.session.user;
  const student = await Student.findOne({
    username: req.session.user.username,
  });
  let teachers = await Teacher.find();
  let checked = await S_C.find({ student: student._id })
    .populate("teacher")
    .select("teacher");
  if (checked.length > 0) {
    checked = JSON.parse(JSON.stringify(checked));
    checked = checked.map((item) => item.teacher.course);
    //   console.log(teachers, checked);
  } else checked = [];
  res.render("student/changecourse", { user, student, teachers, checked });
};
