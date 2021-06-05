const { Admin, Student } = require("../../modules/stc");
module.exports = async (req, res) => {
  const student = req.body;
  //   res.send(student);
  const isExit = await Student.findOne({ username: student.username });
  if (isExit) return res.redirect("/manager/addStudent?message=学号已存在");
  try {
    await Student.create(req.body);
  } catch (error) {
    res.status(400).send(error);
  }
  res.redirect("/manager?page=1");
};
