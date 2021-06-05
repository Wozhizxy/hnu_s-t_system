const { Teacher } = require("../../modules/stc");
module.exports = async (req, res) => {
  const user = req.session.user;
  const teacher = await Teacher.findOne({ username: user.username });
  res.render("teacher/change", { user, teacher });
};
