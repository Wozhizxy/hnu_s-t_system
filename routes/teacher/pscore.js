const { Teacher, S_C } = require("../../modules/stc");
module.exports = async (req, res) => {
  const user = req.session.user;
  const teacher = await Teacher.findOne({ username: user.username });
  await S_C.findOneAndUpdate(
    { teacher: teacher._id, student: req.query.id },
    { score: req.body.score }
  );
  res.redirect("/teacher/myStu");
};
