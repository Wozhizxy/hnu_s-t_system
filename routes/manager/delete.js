const { Student, Teacher, S_C } = require("../../modules/stc");
const deleteStudent = async (req, res) => {
  const student = await Student.findOne({ _id: req.query.id });
  //   res.send(student);
  await S_C.deleteMany({ student: student._id });
  await Student.findOneAndDelete({ _id: student._id });
  res.redirect("/manager?page=1");
};
const deleteTeacher = async (req, res) => {
  const teacher = await Teacher.findOne({ _id: req.query.id });
  await S_C.deleteMany({ teacher: teacher._id });
  await Teacher.findOneAndDelete({ _id: teacher._id });
  res.redirect("/manager/showTeacher?page=1");
};
module.exports = { deleteStudent, deleteTeacher };
