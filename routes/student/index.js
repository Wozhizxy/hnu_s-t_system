const { Student } = require("../../modules/stc");
module.exports = async (req, res) => {
  const user = req.session.user;
  const student = await Student.findOne({ username: user.username });
  res.render("student/index.html", { user, student });
};
