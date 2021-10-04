const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/create", async (req, res) => {
  try {
    const { iMA, password, passwordVerify } = req.body;

      if (!iMA || !password || !passwordVerify)
        return res
          .status(400)
          .json({ errorMessage: "missing input" });

      docuser = (await User.findOne({MA : iMA}));
      if (docuser != null)
        if (docuser.MA == iMA)
          return res
            .status(400)
            .json({ errorMessage: "user already exists" })

      if (password.length < 1)
        return res.status(400).json({
          errorMessage: "password is empty",
        });

      if (password !== passwordVerify)
        return res.status(400).json({
          errorMessage: "passwords dont match",
        });
      

      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      const Role = "SCREW";
      const MA = iMA;


      const newUser = new User ({MA, passwordHash, Role});

      const savedUser = await newUser.save();


      const token = jwt.sign(
        {
          user: savedUser._id,
        },
        process.env.JWTSECRET
      );


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

router.post("/login", async (req, res) => {
  try {
    const { MA, password } = req.body;

      if (!MA || !password)
      return res
        .status(400)
        .json({ errorMessage: "missing login info" });
      
      const existingUser = await User.findOne({ MA });
      if (!existingUser)
        return res.status(401).json({ errorMessage: "user doesnt exists" });

      if (!existingUser.passwordHash)
        return res.status(401).json({ errorMessage: "wrong password" });

      const passwordCorrect = await bcrypt.compare(
        password,
        existingUser.passwordHash
      );
      if (!passwordCorrect)
        return res.status(401).json({ errorMessage: "wrong password" });


      const token = jwt.sign(
        {
          user: existingUser._id,
        },
        process.env.JWTSECRET
      );


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

    if (!token) return res.json(null);

    const validatedUser = jwt.verify(token, process.env.JWTSECRET);

    res.json(validatedUser.id);
  } catch (err) {
    return res.json(null);
  }
});

router.get("/getFullDetails", async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) return res.json(null);

    const validatedUser = jwt.verify(token, process.env.JWTSECRET);

    const userr = await User.findById(validatedUser.user);

    res.json(userr);
  } catch (err) {
    res.status(401).send();
  }
});

module.exports = router;
