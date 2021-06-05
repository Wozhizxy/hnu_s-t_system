const { Student } = require("../../modules/stc");
const login = async (req, res) => {
  const { username, password, role } = req.body;
  if (
    username.trim().length === 0 ||
    password.trim().length === 0 ||
    role === undefined
  ) {
    return res.status(400).render("student/common/error", {
      msg: "用户名或密码错误，或角色未选择",
    });
  }
  const student = await Student.findOne({ username: username });
  if (student && student.password === password) {
    req.session.user = { role: "student", username: username };
    // res.send({ user: req.session.user, student });
    res.redirect("/student");
  } else {
    return res.status(400).render("student/common/error", {
      msg: "用户名或密码错误，或角色未选择",
    });
  }
};
module.exports = login;
