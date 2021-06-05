module.exports = (req, res, next) => {
  const user = req.session.user;
  // console.log(req.query.message);
  res.render("manager/add_student", { user: user, msg: req.query.message });
};
