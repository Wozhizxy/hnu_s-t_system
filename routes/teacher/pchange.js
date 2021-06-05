const { Teacher } = require("../../modules/stc");
module.exports = async (req, res) => {
  await Teacher.findOneAndUpdate(
    { username: req.session.user.username },
    req.body
  );
  res.redirect("/teacher");
};
