const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register

router.post("/createpassword", async (req, res) => {
  try {
    const { MA, password, passwordVerify } = req.body;

    // validation

    if (!MA || !password || !passwordVerify)
      return res
        .status(400)
        .json({ errorMessage: "נא להזין הכל" });

    if (password.length < 1)
      return res.status(400).json({
        errorMessage: "השתמש בלפחות תו אחד לסיסמה",
      });

    if (password !== passwordVerify)
      return res.status(400).json({
        errorMessage: "סיסמאות לא תואמות",
      });
    
    // hash the password

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // save (an almost new) user account to the db

    const newUser = await User.findOne({ MA });
    newUser.passwordHash=passwordHash;

    const savedUser = await newUser.save();

    // sign the token

    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      "lkdfnkdfnvkldfnkldnfklgnfdklgndfkkdfklrngklrngklnklgnrklngv"
    );

    // send the token in a HTTP-only cookie

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});


// log in

router.post("/login", async (req, res) => {
  try {
    const { MA, password } = req.body;

    // validate

    if (!MA || !password)
      return res
        .status(400)
        .json({ errorMessage: "נא להזין מספר אישי וסיסמה" });

    const existingUser = await User.findOne({ MA });
    if (!existingUser)
      return res.status(401).json({ errorMessage: "אינך רשום במערכת" });

    if (!existingUser.passwordHash)
      return res.status(401).json({ errorMessage: "סיסמה שגויה" });

    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );
    if (!passwordCorrect)
      return res.status(401).json({ errorMessage: "סיסמה שגויה" });

    // sign the token

    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      "lkdfnkdfnvkldfnkldnfklgnfdklgndfkkdfklrngklrngklnklgnrklngv"
    );

    // send the token in a HTTP-only cookie

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "none",
    })
    .send();
});

router.get("/loggedIn", (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);

    jwt.verify(token, process.env.JWT_SECRET);

    res.send(true);
  } catch (err) {
    res.json(false);
  }
});

module.exports = router;
