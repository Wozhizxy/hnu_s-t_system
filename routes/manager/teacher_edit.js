module.exports = (req, res) => {
  const user = req.session.user;
  const msg = req.query.msg;
  res.render("manager/edit_teacher.html", { user, msg });
};
