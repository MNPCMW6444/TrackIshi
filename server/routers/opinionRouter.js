const router = require("express").Router();
const User = require("../models/userModel");
const Opinion = require("../models/opinionModel");
const jwt = require("jsonwebtoken");

async function addFudsToOpinion(theopinion) {
  let josnres = theopinion.toJSON();
  const screww = await User.findById(josnres.CrewM);
  josnres.CrewM = screww;
  const commm = await User.findById(josnres.Commander);
  josnres.Commander = commm;
  const authh = await User.findById(josnres.Authorizer);
  josnres.Authorizer = authh;
  return josnres;
}

router.get("/getallmy", async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) return res.status(400).json({ errorMessage: "אינך מחובר" });

    const validatedUser = jwt.verify(token, process.env.JWTSECRET);

    const userr = await User.findById(validatedUser.user);

    const opinions = await Opinion.find({ CrewM: userr });

    for (let i = 0; i < opinions.length; i++)
      opinions[i] = await addFudsToOpinion(opinions[i]);

    res.json(opinions);
  } catch (err) {
    res.status(500).send();
  }
});

router.get("/getmyOpinion/:id", async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) return res.status(400).json({ errorMessage: "אינך מחובר" });

    const validatedUser = jwt.verify(token, process.env.JWTSECRET);

    const userr = await User.findById(validatedUser.user);

    const opinion = await Opinion.findById(req.params.id);

    if (opinion.CrewM.toJSON() != userr._id.toJSON())
      return res
        .status(400)
        .json({ errorMessage: "אינך יכול לצפות בחוו''ד זה מכיוון שאינו שלך" });

    res.json(await addFudsToOpinion(opinion));
  } catch (err) {
    res.status(401).send();
  }
});

router.get("/getallmyn/:ma", async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) return res.status(400).json({ errorMessage: "אינך מחובר" });

    const validatedUser = jwt.verify(token, process.env.JWTSECRET);

    const comm = await User.findById(validatedUser.user);

    const screww = await User.find({ MA: req.params.ma });

    const opinions = await Opinion.find({ CrewM: screww });

    if (
      comm.Role === "DIRECT" &&
      comm._id.toString() === screww[0].MyComm.toString()
    ) {
      for (let i = 0; i < opinions.length; i++)
        opinions[i] = await addFudsToOpinion(opinions[i]);
      res.json(opinions);
    } else {
      return res.status(401).json({
        errorMessage:
          'ניסית לקבל את כל החוו"דים של איש צוות אך אינך מפקד גף שלו',
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

router.put("/editOpinion/:id", async (req, res) => {
  try {
    const token = req.cookies.token;
    const { o1, o2, o3, o4, o5, o6, o7, o8, o9, fn } = req.body;

    const opinionId = req.params.id;

    if (!opinionId)
      return res.status(400).json({
        errorMessage: "יש בעיה... לא התקבל מזהה חוו''ד",
      });
    const opinionn = await Opinion.findById(opinionId);
    if (opinionn === "not found")
      return res.status(400).json({
        errorMessage: 'יש בעיה... לא נמצא חוו"ד התואם את המזהה שהתקבל',
      });

    if (!token) return res.status(400).json({ errorMessage: "אינך מחובר" });

    const validatedUser = jwt.verify(token, process.env.JWTSECRET);

    const comm = await User.findById(validatedUser.user);

    if (
      !(
        o1 == 4 ||
        o1 == 5 ||
        o1 == 6 ||
        o1 == 7 ||
        o1 == 8 ||
        o1 == 9 ||
        o1 == 10
      )
    )
      return res.status(400).json({ errorMessage: "פרמטר 1 לא תקין" });

    if (
      !(
        o2 == 4 ||
        o2 == 5 ||
        o2 == 6 ||
        o2 == 7 ||
        o2 == 8 ||
        o2 == 9 ||
        o2 == 10
      )
    )
      return res.status(400).json({ errorMessage: "פרמטר 2 לא תקין" });

    if (
      !(
        o3 == 4 ||
        o3 == 5 ||
        o3 == 6 ||
        o3 == 7 ||
        o3 == 8 ||
        o3 == 9 ||
        o3 == 10
      )
    )
      return res.status(400).json({ errorMessage: "פרמטר 3 לא תקין" });

    if (
      !(
        o4 == 4 ||
        o4 == 5 ||
        o4 == 6 ||
        o4 == 7 ||
        o4 == 8 ||
        o4 == 9 ||
        o4 == 10
      )
    )
      return res.status(400).json({ errorMessage: "פרמטר 4 לא תקין" });

    if (
      !(
        o5 == 4 ||
        o5 == 5 ||
        o5 == 6 ||
        o5 == 7 ||
        o5 == 8 ||
        o5 == 9 ||
        o5 == 10
      )
    )
      return res.status(400).json({ errorMessage: "פרמטר 5 לא תקין" });

    if (
      !(
        o6 == 4 ||
        o6 == 5 ||
        o6 == 6 ||
        o6 == 7 ||
        o6 == 8 ||
        o6 == 9 ||
        o6 == 10
      )
    )
      return res.status(400).json({ errorMessage: "פרמטר 6 לא תקין" });

    if (
      !(
        o7 == 4 ||
        o7 == 5 ||
        o7 == 6 ||
        o7 == 7 ||
        o7 == 8 ||
        o7 == 9 ||
        o7 == 10
      )
    )
      return res.status(400).json({ errorMessage: "פרמטר 7 לא תקין" });

    if (
      !(
        o8 == 4 ||
        o8 == 5 ||
        o8 == 6 ||
        o8 == 7 ||
        o8 == 8 ||
        o8 == 9 ||
        o8 == 10
      )
    )
      return res.status(400).json({ errorMessage: "פרמטר 8 לא תקין" });

    if (
      !(
        o9 == 4 ||
        o9 == 5 ||
        o9 == 6 ||
        o9 == 7 ||
        o9 == 8 ||
        o9 == 9 ||
        o9 == 10
      )
    )
      return res.status(400).json({ errorMessage: "פרמטר 9 לא תקין" });

    if (
      !(
        fn == 4 ||
        fn == 5 ||
        fn == 6 ||
        fn == 7 ||
        fn == 8 ||
        fn == 9 ||
        fn == 10
      )
    )
      return res.status(400).json({ errorMessage: "ציון מסכם לא תקין" });

    if (!opinionn)
      return res.status(400).json({
        errorMessage: "יש בעיה... אין חוו''ד עם הID הזה",
      });

    opinionn.C1 = o1;
    opinionn.C2 = o2;
    opinionn.C3 = o3;
    opinionn.C4 = o4;
    opinionn.C5 = o5;
    opinionn.C6 = o6;
    opinionn.C7 = o7;
    opinionn.C8 = o8;
    opinionn.C9 = o9;

    opinionn.M1 = fn;

    const screww = await User.findById(opinionn.CrewM.toString());

    if (
      comm.Role === "DIRECT" &&
      comm._id.toString() === screww.MyComm.toString()
    ) {
      const savedOpinion = await opinionn.save();

      res.json({ savedOpinion });
    } else {
      return res.status(401).json({
        errorMessage: "ניסית לערוך חווד של איש צוות אך אינך מפקד גף שלו",
      });
    }
  } catch (err) {
    res.status(500).send();
    console.log(err);
  }
});

router.put("/createOpinion/:id", async (req, res) => {
  try {
    const token = req.cookies.token;
    const {
      otkufa,
      ofilldate,
      omonthsno,
      oposition,

      oc1,
      oc2,
      oc3,
      oc4,
      oc5,
      oc6,
      oc7,
      oc8,
      oc9,

      om1,

      om2,

      otp,
      ofp,
    } = req.body;

    const opinionId = req.params.id;

    if (!opinionId)
      return res.status(400).json({
        errorMessage: "יש בעיה... לא התקבל מזהה חוו''ד",
      });

    if (!token)
      return res.status(400).json({
        errorMessage: "אינך מחובר",
      });

    if (!otkufa) {
      return res.status(400).json({
        errorMessage: "חובה להזין תקופה רלוונטית לחוו''ד",
      });
    }

    if ((await Opinion.find({ Tkufa: otkufa })).length != 0) {
      return res.status(400).json({
        errorMessage:
          "לתקופה שהוזנה כבר קיימת חוו''ד, נא לערוך או למחוק את החו''ד הקיימת",
      });
    }

    if (new Date() < ofilldate) {
      return res.status(400).json({
        errorMessage: "לא ניתן להזין תאריך מילוי חוו''ד עתידי",
      });
    }

    if (!omonthsno) {
      return res.status(400).json({
        errorMessage: "יש להזין מס' חודשים תחת פיקודך",
      });
    }

    if (omonthsno > 0) {
      return res.status(400).json({
        errorMessage: "יש להזין מס' חודשים תחת פיקודך הגדול מ-0",
      });
    }

    if (!oposition) {
      return res.status(400).json({
        errorMessage: "יש להזין תפקיד / נע''ת כלשהו",
      });
    }

    if (
      !(
        oc1 == 4 ||
        oc1 == 5 ||
        oc1 == 6 ||
        oc1 == 7 ||
        oc1 == 8 ||
        oc1 == 9 ||
        oc1 == 10
      )
    )
      return res.status(400).json({ errorMessage: "פרמטר 1 חסר" });

    if (
      !(
        oc2 == 4 ||
        oc2 == 5 ||
        oc2 == 6 ||
        oc2 == 7 ||
        oc2 == 8 ||
        oc2 == 9 ||
        oc2 == 10
      )
    )
      return res.status(400).json({ errorMessage: "פרמטר 2 חסר" });

    if (
      !(
        oc3 == 4 ||
        oc3 == 5 ||
        oc3 == 6 ||
        oc3 == 7 ||
        oc3 == 8 ||
        oc3 == 9 ||
        oc3 == 10
      )
    )
      return res.status(400).json({ errorMessage: "פרמטר 3 חסר" });

    if (
      !(
        oc4 == 4 ||
        oc4 == 5 ||
        oc4 == 6 ||
        oc4 == 7 ||
        oc4 == 8 ||
        oc4 == 9 ||
        oc4 == 10
      )
    )
      return res.status(400).json({ errorMessage: "פרמטר 4 חסר" });

    if (
      !(
        oc5 == 4 ||
        oc5 == 5 ||
        oc5 == 6 ||
        oc5 == 7 ||
        oc5 == 8 ||
        oc5 == 9 ||
        oc5 == 10
      )
    )
      return res.status(400).json({ errorMessage: "פרמטר 5 חסר" });

    if (
      !(
        oc6 == 4 ||
        oc6 == 5 ||
        oc6 == 6 ||
        oc6 == 7 ||
        oc6 == 8 ||
        oc6 == 9 ||
        oc6 == 10
      )
    )
      return res.status(400).json({ errorMessage: "פרמטר 6 חסר" });

    if (
      !(
        oc7 == 4 ||
        oc7 == 5 ||
        oc7 == 6 ||
        oc7 == 7 ||
        oc7 == 8 ||
        oc7 == 9 ||
        oc7 == 10
      )
    )
      return res.status(400).json({ errorMessage: "פרמטר 7 חסר" });

    if (
      !(
        oc8 == 4 ||
        oc8 == 5 ||
        oc8 == 6 ||
        oc8 == 7 ||
        oc8 == 8 ||
        oc8 == 9 ||
        oc8 == 10
      )
    )
      return res.status(400).json({ errorMessage: "פרמטר 8 חסר" });

    if (
      !(
        oc9 == 4 ||
        oc9 == 5 ||
        oc9 == 6 ||
        oc9 == 7 ||
        oc9 == 8 ||
        oc9 == 9 ||
        oc9 == 10
      )
    ) {
      return res.status(400).json({
        errorMessage: "חסר קריטריון כלשהו",
      });
    }

    if (
      !(
        om1 == 4 ||
        om1 == 5 ||
        om1 == 6 ||
        om1 == 7 ||
        om1 == 8 ||
        om1 == 9 ||
        om1 == 10
      )
    ) {
      return res.status(400).json({
        errorMessage: "חסר ציון מסכם",
      });
    }

    if (!(om2 == 0 || om2 == 1 || om2 == 2 || om2 == 3 || om2 == 4)) {
      return res.status(400).json({
        errorMessage: "חסר פוטנציאל להובלה",
      });
    }

    if (!otp) {
      return res.status(400).json({
        errorMessage: "לא התקבלו יעדים לשיפור",
      });
    }

    if (!ofp) {
      return res.status(400).json({
        errorMessage: "לא התקבל סיכם",
      });
    }

    const opinionn = await Opinion.findById(opinionId);
    if (!opinionn)
      return res.status(400).json({
        errorMessage: "יש בעיה... אין חוו''ד עם הID הזה",
      });

    if (opinionn.Commander.toString() !== req.user)
      return res.status(401).json({
        errorMessage: "אינך מורשה לערוך חוו''ד זה מכיוון שלא אתה יצרת אותו",
      });

    opinionn.Tkufa = otkufa;
    opinionn.FillDate = ofilldate;
    opinionn.MonthsNo = omonthsno;
    opinionn.Position = oposition;

    opinionn.C1 = oc1;
    opinionn.C2 = oc2;
    opinionn.C3 = oc3;
    opinionn.C4 = oc4;
    opinionn.C5 = oc5;
    opinionn.C6 = oc6;
    opinionn.C7 = oc7;
    opinionn.C8 = oc8;
    opinionn.C9 = oc9;

    opinionn.M1 = om1;

    opinionn.M2 = om2;

    opinionn.Tp = otp;
    opinionn.Fp = ofp;

    const savedOpinion = await opinionn.save();

    res.json({ savedOpinion });
  } catch (err) {
    res.status(500).send();
    console.log(err);
  }
});

module.exports = router;
