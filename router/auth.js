const router = require("express").Router();
const { User } = require("../models/models");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register"),
  async (req, res) => {
    try {
      //gen password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      //creating user
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
      //SAVE USER AND RESPOND
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      console.log.err;
    }
  };
//LOGIN
router.post("/login"),
  async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(400).json("user not found");

      const validPassword = await bcrypt.compare(
        req.body.password,
        this.user.password
      );
      !validPassword && res.status(400).json("password incorrect");

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  };

module.exports = router;
