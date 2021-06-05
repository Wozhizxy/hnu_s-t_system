const { Admin } = require("../../modules/stc");
const login = async (req, res) => {
  const { username, password, role } = req.body;
  if (
    username.trim().length === 0 ||
    password.trim().length === 0 ||
    role === undefined
  ) {
    return res.status(400).render("manager/common/error", {
      msg: "用户名或密码错误，或角色未选择",
    });
  }
  const admin = await Admin.findOne({ username: username });
  if (admin && admin.password === password) {
    req.session.user = { role: "admin", username: username };
    res.redirect("/manager?page=1");
  } else {
    return res.status(400).render("manager/common/error", {
      msg: "用户名或密码错误，或角色未选择",
    });
  }
};
module.exports = login;
