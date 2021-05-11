const router = require("express").Router();
const { Book, User } = require("../models");
const withAuth = require("../utils/auth");

//This is the home/index page route.
router.get("/", async (req, res) => {
  try {
    //If the user successfully logs in, then they are redirected to profile page.
    if (req.session.logged_in) {
      res.redirect("/profile");
      return;
    }
    //The login.handlebars is rendering on this home/index pag route.
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

//This will route to the profile page when a user logs in or signs up.
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });
    const serializedUser = userData.get({plain:true})
    //The shelf.handlebars will render into secondary.handlebars.
    res.render("shelf", {
      layout: "second.handlebars",
      logged_in: req.session.logged_in,
      serializedUser
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
