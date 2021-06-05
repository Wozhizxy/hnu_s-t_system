const express = require("express");
const path = require("path");
const session = require("express-session");
const app = express();

app.use(
  session({ secret: "secret key", resave: false, saveUninitialized: true })
);
app.engine("html", require("express-art-template"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
app.use(express.urlencoded({ extended: false }));
// 设置静态资源路径.
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/teacher", require("./routes/teacher"));
app.use("/student", require("./routes/student"));
app.use("/manager", require("./routes/manage"));
app.get("/", (req, res) => {
  res.render("login");
});
app.get("/logout", (req, res) => {
  req.session.user = null;
  res.redirect("/");
});

app.listen(3000);
