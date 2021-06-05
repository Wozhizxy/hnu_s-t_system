module.exports = (req, res, next) => {
  // if (req.url !== "/login" && req.session.user === undefined) res.redirect("/");
  // else next();

  if (req.url === "/login") {
    next();
  } else {
    if (req.session.user === undefined) res.redirect("/");
    else if (req.session.user.role === "student") next();
    else res.redirect("/");
  }
};
