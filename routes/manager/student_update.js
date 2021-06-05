const { Student, Teacher, S_C } = require("../../modules/stc");
const mongoose = require("mongoose");
module.exports = async (req, res) => {
  const _id = req.query.id;
  const user = req.session.user;
  const teachers = await Teacher.find();
  const student = await Student.findOne({ _id: req.query.id });
  let checkedCourse = [];
  const scs = await S_C.find({
    student: mongoose.Types.ObjectId(_id),
  })
    .select("teacher")
    .populate("teacher");
  // 要判断哪些课是这个学生已经选择的，所以把已经选的课组成的数组传过去。
  scs.forEach((item) => {
    checkedCourse.push(item.teacher.course);
  });

  res.render("manager/update_student.html", {
    user,
    student,
    teachers,
    checkedCourse,
  });
};
