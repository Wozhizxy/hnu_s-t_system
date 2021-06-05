const { Student } = require("../../modules/stc");
module.exports = async (req, res) => {
  const student = await Student.findOne({ _id: req.query.id });
  const user = req.session.user;
  res.render("student/change", { student, user });
};
