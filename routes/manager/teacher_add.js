const { Teacher } = require("../../modules/stc");
module.exports = async (req, res) => {
  const teacher = req.body;
  const isExit = await Teacher.findOne({ username: teacher.username });
  if (isExit) return res.redirect("/manager/editTeacher?msg=职工号已存在");
  const isExit2 = await Teacher.findOne({ course: teacher.course });
  if (isExit2)
    return res.redirect("/manager/editTeacher?msg=该课程已经有老师教了");
  await Teacher.create(teacher);
  res.redirect("/manager/showTeacher");
};
