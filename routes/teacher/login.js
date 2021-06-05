const { Teacher } = require("../../modules/stc");
const login = async (req, res) => {
  const { username, password, role } = req.body;
  if (
    username.trim().length === 0 ||
    password.trim().length === 0 ||
    role === undefined
  ) {
    return res.status(400).render("teacher/common/error", {
      msg: "用户名或密码错误，或角色未选择",
    });
  }
  const teacher = await Teacher.findOne({ username: username });
  if (teacher && teacher.password === password) {
    req.session.user = { role: "teacher", username: username };
    // res.send({ user: req.session.user, teacher });
    res.redirect("/teacher");
  } else {
    return res.status(400).render("teacher/common/error", {
      msg: "用户名或密码错误，或角色未选择",
    });
  }
};
module.exports = login;
