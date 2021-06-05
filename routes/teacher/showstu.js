const { Teacher, S_C } = require("../../modules/stc");
module.exports = async (req, res) => {
  const user = req.session.user;
  const teacher = await Teacher.findOne({ username: user.username });
  const totaldata = await S_C.find({ teacher: teacher._id });
  const pagesize = 10;
  const page = parseInt(req.query.page);
  let count = totaldata.length;
  const total = Math.ceil(count / pagesize);
  let mystu = await S_C.find({ teacher: teacher._id })
    .sort("-score")
    .skip((page - 1) * pagesize)
    .limit(pagesize)
    .populate("student");
  mystu = JSON.parse(JSON.stringify(mystu));

  //   res.send({ user, teacher, mystu });
  res.render("teacher/mystu", { user, mystu, page, total, teacher });
};
