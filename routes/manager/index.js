const { Student } = require("../../modules/stc");
module.exports = async (req, res) => {
  const user = req.session.user;
  // if (user.role !== "admin")
  //   return res.status(400).render("manager/common/error", {
  //     msg: "请以管理员的身份登录后再访问该页面。",
  //   });
  // return res.send(req.query.page);
  const pagesize = 5;
  const page = parseInt(req.query.page);
  let count = await Student.countDocuments();
  const total = Math.ceil(count / pagesize);
  const student = await Student.find()
    .skip((page - 1) * pagesize)
    .limit(pagesize);
  res.render("manager/manager", { user, student, total, page });
};
