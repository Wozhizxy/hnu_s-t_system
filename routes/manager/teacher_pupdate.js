const { Teacher } = require("../../modules/stc");
// course不让改，只能改密码和名字
module.exports = async (req, res) => {
  await Teacher.findOneAndUpdate({ _id: req.query.id }, req.body);
  res.redirect("/manager/showTeacher?page=1");
};
