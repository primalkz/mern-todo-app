const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../model/User");

// validation
const { registerValidation, loginValidation } = require("../validation");

// register route
router.post("/register", async (req, res) => {
  // validate the user
  const { error } = registerValidation(req.body);

  // throw validation errors
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const isUsernameExist = await User.findOne({ username: req.body.username });

  // throw error when username already registered
  if (isUsernameExist) {
    return res.status(400).json({
      message: "Username already exists, please choose a different one.",
    });
  }

  // hash the password
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    username: req.body.username,
    password,
  });

  try {
    const savedUser = await user.save();
    res.json({ message: null, data: { userId: savedUser._id } });
  } catch (error) {
    res.status(400).json({ error });
  }
});

// login route
router.post("/login", async (req, res) => {
  // validate the user
  const { error } = loginValidation(req.body);

  // throw validation errors
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const user = await User.findOne({ username: req.body.username });

  // throw error when username is wrong
  if (!user)
    return res.status(400).json({ message: "Username does not exist." });

  // check for password correctness
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).json({ message: "Password is wrong." });
  }

  // create token
  const token = jwt.sign(
    { user: user.username, _id: user._id },
    process.env.TOKEN_SECRET
  );
  const userId = user._id;
  res.status(200).json({
    token,
    userId,
    username: user.username,
  });
});

module.exports = router;
