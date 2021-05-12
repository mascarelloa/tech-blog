const router = require("express").Router();
const { Blog, Comment, User } = require("../models");
const withAuth = require("../utils/auth");


router.get("/", async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/dashboard");
      return;
    }
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/login", async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/dashboard");
      return;
    }
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get("/dashboard", withAuth, async (req, res) => {
  try {
 
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });
    const serializedUser = userData.get({plain:true})

    res.render("dashboard", {
      logged_in: req.session.logged_in,
      serializedUser
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/addpost"), withAuth, async (req,res) => {
//   console.log("you have reached the fountain of youth")
//   res.render("add-post", {logged_in:req.session.logged_in, user_id: req.session.user})
// }

router.post("/newpost"), withAuth, async (req, res) => {
  try { 
    const blogPost = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(blogPost)
  } catch (err) {
    res.status(500).json(err);
  }
}




module.exports = router;
