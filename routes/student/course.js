const { S_C, Student } = require("../../modules/stc");

module.exports = async (req, res) => {
  const user = req.session.user;
  const student = await Student.findOne({
    username: req.session.user.username,
  });
  const scs = await S_C.find({ student: student._id })
    .populate("teacher")
    .select("teacher score");
  let courses;
  if (scs.length > 0) {
    courses = scs.map((item) => {
      return { teacher: item.teacher, score: item.score };
    });
    courses = JSON.parse(JSON.stringify(courses));
  } else courses = [];
  //   console.log(req.session.user.username);
  //   res.send({ student, courses });
  res.render("student/mycourse.html", { user, courses, student });
};
