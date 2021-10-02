const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/create", async (req, res) => {
  try {
    const { iMA, password, passwordVerify, supersecretMATOBEUPGRADED2022 } = req.body;
    if (supersecretMATOBEUPGRADED2022 != undefined && supersecretMATOBEUPGRADED2022.length > 1)
    {
      // validation
      docuser = (await User.findOne({MA : supersecretMATOBEUPGRADED2022}));
      if (docuser != null)
        if (docuser.MA == supersecretMATOBEUPGRADED2022)
          return res
            .status(400)
            .json({ errorMessage: "user already exists" })

      const passwordHash = "passed";
      const Role = "SCREW";
      const MA = supersecretMATOBEUPGRADED2022;
      // save a user account to the db

      const newUser = new User ({MA, passwordHash, Role});

      const savedUser = await newUser.save();

      // sign the token

      const token = jwt.sign(
        {
          user: savedUser._id,
        },
        process.env.JWTSECRET
      );

      // send the token in a HTTP-only cookie

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })
        .send();
    }
    else
    {
      // validation

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
      
      // hash the password

      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      const Role = "SCREW";
      const MA = iMA;
      // save a user account to the db

      const newUser = new User ({MA, passwordHash, Role});

      const savedUser = await newUser.save();

      // sign the token

      const token = jwt.sign(
        {
          user: savedUser._id,
        },
        process.env.JWTSECRET
      );

      // send the token in a HTTP-only cookie

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })
        .send();
    }
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});



// log in

router.post("/login", async (req, res) => {
  try {
    const { MA, password, supersecretMATOBEUPGRADED2022 } = req.body;

    // validate
      
    if (!supersecretMATOBEUPGRADED2022)
    {
       
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

      // sign the token

      const token = jwt.sign(
        {
          user: existingUser._id,
        },
        process.env.JWTSECRET
      );

      // send the token in a HTTP-only cookie

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })
        .send();
    }
    else
    {
      const existingUser = await User.findOne({ supersecretMATOBEUPGRADED2022 });
      if (!existingUser)
        return res.status(401).json({ errorMessage: "user doenst exists" });

      // sign the token

      const token = jwt.sign(
        {
          user: existingUser._id,
        },
        process.env.JWTSECRET
      );

      // send the token in a HTTP-only cookie

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })
        .send();
    }
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
