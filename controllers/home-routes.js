const router = require("express").Router();
const { Blog } = require("../models");

router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll();
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    res.render("homepage", {
      blogs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/blogpost/:id", async (req, res) => {
  try {
    const dbPostData = await Blog.findByPk(req.params.id);
    const singlePost = dbPostData.get({ plain: true });
    console.log({ singlePost, loggedIn: req.session.loggedIn });
    res.render("blogpost", { ...singlePost, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
