const { Teacher } = require("../../modules/stc");
module.exports = async (req, res) => {
  const user = req.session.user;
  const pagesize = 5;
  const page = parseInt(req.query.page);
  let count = await Teacher.countDocuments();
  const total = Math.ceil(count / pagesize);
  const teachers = await Teacher.find()
    .skip((page - 1) * pagesize)
    .limit(pagesize);
  res.render("manager/show_teacher.html", { user, page, teachers, total });
};
