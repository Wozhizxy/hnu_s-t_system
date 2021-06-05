const { S_C, Teacher } = require("../../modules/stc");
module.exports = async (req, res) => {
  const user = req.session.user;
  const teacher = await Teacher.findOne({ username: user.username });
  let item = await S_C.findOne({
    teacher: teacher._id,
    student: req.query.id,
  }).populate("teacher student");
  item = JSON.parse(JSON.stringify(item));
  //   res.send(item);
  res.render("teacher/score", { user, teacher, item });
};
