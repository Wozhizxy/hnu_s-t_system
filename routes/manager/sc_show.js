const { S_C, Teacher } = require("../../modules/stc");
module.exports = async (req, res) => {
  const teachers = await Teacher.find();
  let teacher = teachers[0];
  if (req.query.course)
    teacher = await Teacher.findOne({ course: req.query.course });
  const user = req.session.user;
  const pagesize = 10;
  const page = parseInt(req.query.page);
  let count = (await S_C.find({ teacher: teacher._id })).length;
  const total = Math.ceil(count / pagesize);
  const scs = await S_C.find({ teacher: teacher._id })
    .sort("-score")
    .populate("student teacher")
    .skip((page - 1) * pagesize)
    .limit(pagesize);
  const scoredata = JSON.parse(JSON.stringify(scs));
  // return res.send(scoredata);

  // res.send(scs);
  res.render("manager/show_sc", { user, total, page, scoredata, teachers });
};
