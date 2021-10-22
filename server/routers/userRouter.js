const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/addnewCrewmByComm", async (req, res) => {
  try {
    const { iMA, password, passwordVerify } = req.body;
    
    const token = req.cookies.token;

    if (!token) return res.status(400)
          .json({ errorMessage: "אינך מחובר" });

    const validatedUser = jwt.verify(token, process.env.JWTSECRET);

    const userr = await User.findById(validatedUser.user);

    if(userr.Role === "DIRECT")
    {
      if (!iMA || !password || !passwordVerify)
        return res
          .status(400)
          .json({ errorMessage: "מספר אישי או שתי סיסמאות לא התקבלו" });

      docuser = (await User.findOne({MA : iMA}));
      if (docuser != null)
        if (docuser.MA == iMA)
          return res
            .status(400)
            .json({ errorMessage: "משתמש כבר קיים" })

      if (password.length < 1)
        return res.status(400).json({
          errorMessage: "לא ניתן להשתמש בסיסמה ריקה",
        });

      if (password !== passwordVerify)
        return res.status(400).json({
          errorMessage: "סיסמאות לא תואמות",
        });
        

      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      const Role = "SCREW";
      const MA = iMA;
      const MyComm = user._id;


      const newUser = new User ({MA, passwordHash, Role, MyComm});

      const saveduserr = await newUser.save();

      res.json(saveduserr);

      }
      else
      {
        return res.status(401).json({ errorMessage: "ניסית להוסיף איש צוות תחת פיקודך אך אינך מחובר כמפקד מקצועי שוטף" });
      }
  }
  catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.put("/takeCrewmbyComm", async (req, res) => {
  try {
    const { iMA } = req.body;
    
    const token = req.cookies.token;

    if (!token) return res.status(400)
          .json({ errorMessage: "אינך מחובר" });

    const validatedUser = jwt.verify(token, process.env.JWTSECRET);

    const userr = await User.findById(validatedUser.user);

    if(userr.Role === "DIRECT")
    {
      if (!iMA)
        return res
          .status(400)
          .json({ errorMessage: "מספר אישי לא התקבל" });

      docuser = (await User.findOne({MA : iMA}));
      if (docuser == null)
        if (docuser.MA != iMA)
          return res
            .status(400)
            .json({ errorMessage: "משתמש לא קיים" })

      if (docuser.Role != "CREWM")
        return res
          .status(400)
          .json({ errorMessage: "משתמש לא מוגדר כאיש צוות" })


      docuser.MyComm=userr._id;
      
      const saveduserr = await userr.save();

      res.json(saveduserr);

      }
      else
      {
        return res.status(401).json({ errorMessage: "ניסית לקחת פיקוד על איש צוות אך אינך מחובר כמפקד מקצועי שוטף" });
      }
  }
  catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.put("/takeCommbyAuth", async (req, res) => {
  try {
    const { iMA } = req.body;
    
    const token = req.cookies.token;

    if (!token) return res.status(400)
          .json({ errorMessage: "אינך מחובר" });

    const validatedUser = jwt.verify(token, process.env.JWTSECRET);

    const userr = await User.findById(validatedUser.user);

    if(userr.Role === "AUTHCO")
    {
      if (!iMA)
        return res
          .status(400)
          .json({ errorMessage: "מספר אישי לא התקבל" });

      docuser = (await User.findOne({MA : iMA}));
      if (docuser == null)
        if (docuser.MA != iMA)
          return res
            .status(400)
            .json({ errorMessage: "משתמש לא קיים" })

      if (docuser.Role != "DIRECT")
        return res
          .status(400)
          .json({ errorMessage: "משתמש לא מוגדר מפקד מקצועי שוטף" })


      docuser.MyAuth=userr._id;
      
      const saveduserr = await userr.save();

      res.json(saveduserr);

      }
      else
      {
        return res.status(401).json({ errorMessage: "ניסית לקחת פיקוד מפקד מקוצעי שוטף אך אינך מחובר כמפקד מקצועי מאשר" });
      }
  }
  catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.post("/addnewCommByAuth", async (req, res) => {
  try {
    const { iMA, password, passwordVerify } = req.body;
    
    const token = req.cookies.token;

    if (!token) return res.status(400)
          .json({ errorMessage: "אינך מחובר" });

    const validatedUser = jwt.verify(token, process.env.JWTSECRET);

    const userr = await User.findById(validatedUser.user);

    if(userr.Role === "AUTHCO")
    {
      if (!iMA || !password || !passwordVerify)
        return res
          .status(400)
          .json({ errorMessage: "מספר אישי או שתי סיסמאות לא התקבלו" });

      docuser = (await User.findOne({MA : iMA}));
      if (docuser != null)
        if (docuser.MA == iMA)
          return res
            .status(400)
            .json({ errorMessage: "משתמש כבר קיים" })

      if (password.length < 1)
        return res.status(400).json({
          errorMessage: "לא ניתן להשתמש בסיסמה ריקה",
        });

      if (password !== passwordVerify)
        return res.status(400).json({
          errorMessage: "סיסמאות לא תואמות",
        });
        

      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      const Role = "DIRECT";
      const MA = iMA;
      const MyAuth = user._id;


      const newUser = new User ({MA, passwordHash, Role, MyAuth});

      const saveduserr = await newUser.save();

      res.json(saveduserr);

      }
      else
      {
        return res.status(401).json({ errorMessage: "ניסית להוסיף מפקד מקצועי שוטף תחת פיקודך אך אינך מחובר כמפקד מאשר" });
      }
  }
  catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.put("/makeAnyCommByAuth", async (req, res) => {
  try {
    const { iMA } = req.body;
    
    const token = req.cookies.token;

    if (!token) return res.status(400)
          .json({ errorMessage: "אינך מחובר" });

    const validatedUser = jwt.verify(token, process.env.JWTSECRET);

    const userr = await User.findById(validatedUser.user);

    if(userr.Role === "AUTHCO")
    {
      if (!iMA)
        return res
          .status(400)
          .json({ errorMessage: "מספר אישי לא התקבל" });

      docuser = (await User.findOne({MA : iMA}));
      if (docuser == null)
        if (docuser.MA != iMA)
          return res
            .status(400)
            .json({ errorMessage: "משתמש לא קיים" })


      docuser.Role = "DIRECT";
      docuser.MyComm = undefined;
      docuser.MyAuth=userr._id;
      
      const saveduserr = await userr.save();

      res.json(saveduserr);

      }
      else
      {
        return res.status(401).json({ errorMessage: "ניסית למנות משתמש כלשהו למפקד מקצועי שוטף תחת פיקודך אך אינך מחובר כמפקד מאשר" });
      }
  }
  catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.put("/makeAnyAuthByAuth", async (req, res) => {
  try {
    const { iMA } = req.body;
    
    const token = req.cookies.token;

    if (!token) return res.status(400)
          .json({ errorMessage: "אינך מחובר" });

    const validatedUser = jwt.verify(token, process.env.JWTSECRET);

    const userr = await User.findById(validatedUser.user);

    if(userr.Role === "AUTHCO")
    {
      if (!iMA)
        return res
          .status(400)
          .json({ errorMessage: "מספר אישי לא התקבל" });

      docuser = (await User.findOne({MA : iMA}));
      if (docuser == null)
        if (docuser.MA != iMA)
          return res
            .status(400)
            .json({ errorMessage: "משתמש לא קיים" })


      docuser.Role = "AUTHCO";
      docuser.MyComm = undefined;
      docuser.MyAuth=undefined;
      
      const saveduserr = await userr.save();

      res.json(saveduserr);

      }
      else
      {
        return res.status(401).json({ errorMessage: "ניסית למנות משתמש כלשהו להיות מפקד מאשר כמוך אך אינך בעצמך" });
      }
  }
  catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

//CHANGE MY PASSWORD - Must be if no LDAP in the end (can be easily)

router.post("/login", async (req, res) => {
  try {
    const { MA, password } = req.body;

      if (!MA || !password)
      return res
        .status(400)
        .json({ errorMessage: "מספר אישי או סיסמה לא התקבלו" });
      
      const existingUser = await User.findOne({ MA });
      if (!existingUser)
        return res.status(401).json({ errorMessage: "משתמש לא קיים" });

      if (!existingUser.passwordHash)
        return res.status(401).json({ errorMessage: "סיסמתך שגויה כי אינה קיימת" });

      const passwordCorrect = await bcrypt.compare(
        password,
        existingUser.passwordHash
      );
      if (!passwordCorrect)
        return res.status(401).json({ errorMessage: "סיסמתך שגויה" });


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

router.get("/loggedIn", async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) return res.status(400)
          .json({ errorMessage: "אינך מחובר" });

    const validatedUser = jwt.verify(token, process.env.JWTSECRET);

    const userr = await User.findById(validatedUser.user);

    res.json(userr);
  } catch (err) {
    return res.status(400)
          .json({ errorMessage: "אינך מחובר" });
  }
});


router.get("/getFullDetails", async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) return res.status(400)
          .json({ errorMessage: "אינך מחובר" });

    const validatedUser = jwt.verify(token, process.env.JWTSECRET);

    const userr = await User.findById(validatedUser.user);

    res.json(userr);
  } catch (err) {
    res.status(401).send();
  }
});

router.put("/updateFullDetails", async (req, res) => {
  try {
    const { firstname, lastname, nickname, courseno, birthdate, email, mainphone, emergencyphone, addresscity, addressline, rank } = req.body;

    if (!firstname)
    return res
      .status(400)
      .json({ errorMessage: "נא למלא שם פרטי" });

  if (!lastname)
    return res
      .status(400)
      .json({ errorMessage: "נא למלא שם משפחה" });

  if (!courseno)
    return res
      .status(400)
      .json({ errorMessage: "נא למלא מספר קורס" });

  if (!birthdate)
  return res
    .status(400)
    .json({ errorMessage: "נא למלא תאריך לידה" });

  if (!email)
    return res
      .status(400)
      .json({ errorMessage: "נא למלא כתובת דואר אלקטרוני" });

  if (!mainphone)
  return res
    .status(400)
    .json({ errorMessage: "נא למלא מספר טלפון" });

  if (!addresscity)
  return res
    .status(400)
    .json({ errorMessage: "עיר מגורים" });addressline

  if (!addressline)
  return res
    .status(400)
    .json({ errorMessage: "נא למלא כתובת מגורים" });

  if (!rank)
  return res
    .status(400)
    .json({ errorMessage: "נא למלא דרגה" });

      const token = req.cookies.token;

      if (!token) return res.status(400)
          .json({ errorMessage: "אינך מחובר"});
  
      const validatedUser = jwt.verify(token, process.env.JWTSECRET);
  
      const userr = await User.findById(validatedUser.user);

      userr.FirstName = firstname;
      userr.LastName = lastname;
      userr.NickName = nickname;
      userr.CourseNo = courseno;
      userr.BirthDate = birthdate;
      userr.Email = email;
      userr.MainPhone = mainphone;
      userr.EmergencyPhone = emergencyphone;
      userr.AddressCity = addresscity;
      userr.AddressLine = addressline;
      userr.Rank = rank;

      const saveduserr = await userr.save();

      res
        .json(saveduserr);
  } catch (err) {
    console.error(err);
    res.status(500).json({errorMessage: "נתונים לא תקינים"});
  }
});

module.exports = router;
