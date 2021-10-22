const router = require("express").Router();
const User = require("../models/userModel");
const Opinion = require("../models/opinionModel");
const jwt = require("jsonwebtoken");

router.get("/getallmy", async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) return res.status(400)
      .json({ errorMessage: "אינך מחובר"});

    const validatedUser = jwt.verify(token, process.env.JWTSECRET);

    const userr = await User.findById(validatedUser.user);

    const opinions = await Opinion.find({ CrewM: userr });
    res.json(opinions);
  } catch (err) {
    res.status(500).send();
  }
});

router.get("/getmyOpinion/:id", async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) return res.status(400)
      .json({ errorMessage: "אינך מחובר"});

    const validatedUser = jwt.verify(token, process.env.JWTSECRET);

    const userr = await User.findById(validatedUser.user);

    const opinion = await Opinion.findById(req.params.id);
    
    if(opinion.CrewM.toJSON() != userr._id.toJSON())
      return res.status(400)
        .json({ errorMessage: "אינך יכול לצפות בחוו''ד זה מכיוון שאינו שלך"});

    let josnres = opinion.toJSON();

    const comanderr = await User.findById(josnres.Commander);
    const authorizerr = await User.findById(josnres.Authorizer);

    josnres.CrewM=userr;
    josnres.Commander=comanderr;
    josnres.Authorizer=authorizerr;

    res.json(josnres);
  } catch (err) {
    console.log("Error on sending opinion: /n"+err)
    res.status(401).send();
  }
});

/* router.put("/updateOpinion/:id", async (req, res) => {
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
      ofp
    } = req.body;
    
    const opinionId = req.params.id;
    
    if (!opinionId)
      return res.status(400).json({
        errorMessage: "יש בעיה... לא התקבל מזהה חוו''ד",
      });
    
    if (!token) return res.status(400).json({
     errorMessage: "אינך מחובר",
    });

    
    if (!otkufa) {
      return res.status(400).json({
        errorMessage: "חובה להזין תקופה רלוונטית לחוו''ד",
      });
    }

    if ((await Opinion.find({Tkufa: otkufa})).length !=0) {
      return res.status(400).json({
        errorMessage: "לתקופה שהוזנה כבר קיימת חוו''ד, נא לערוך או למחוק את החו''ד הקיימת",
      });
    }

    if ((new Date())<ofilldate) {
      return res.status(400).json({
        errorMessage: "לא ניתן להזין תאריך מילוי חוו''ד עתידי",
      });
    }

    if (!omonthsno) {
      return res.status(400).json({
        errorMessage: "יש להזין מס' חודשים תחת פיקודך",
      });
    }

    if (omonthsno>0) {
      return res.status(400).json({
        errorMessage: "יש להזין מס' חודשים תחת פיקודך הגדול מ-0",
      });
    }

    if (!oposition) {
      return res.status(400).json({
        errorMessage: "יש להזין תפקיד / נע''ת כלשהו",
      });
    }

    if (!(oc1==4||oc1==5||oc1==6||oc1==7||oc1==8||oc1==9||oc1==10)||
        !(oc2==4||oc2==5||oc2==6||oc2==7||oc2==8||oc2==9||oc2==10)||
        !(oc3==4||oc3==5||oc3==6||oc3==7||oc3==8||oc3==9||oc3==10)||
        !(oc4==4||oc4==5||oc4==6||oc4==7||oc4==8||oc4==9||oc4==10)||
        !(oc5==4||oc5==5||oc5==6||oc5==7||oc5==8||oc5==9||oc5==10)||
        !(oc6==4||oc6==5||oc6==6||oc6==7||oc6==8||oc6==9||oc6==10)||
        !(oc7==4||oc7==5||oc7==6||oc7==7||oc7==8||oc7==9||oc7==10)||
        !(oc8==4||oc8==5||oc8==6||oc8==7||oc8==8||oc8==9||oc8==10)||
        !(oc9==4||oc9==5||oc9==6||oc9==7||oc9==8||oc9==9||oc9==10)) {
      return res.status(400).json({
        errorMessage: "חסר קריטריון כלשהו",
      });
    }
    
    if (!(om1==4||om1==5||om1==6||om1==7||om1==8||om1==9||om1==10)){
      return res.status(400).json({
        errorMessage: "חסר ציון מסכם",
      });
    }

    if (!(om2==0||om2==1||om2==2||om2==3||om2==4)){
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

    const originalOpinion = await Opinion.findById(opinionId);
    if (!originalOpinion)
      return res.status(400).json({
        errorMessage:
          "יש בעיה... אין חוו''ד עם הID הזה",
      });

    if (originalOpinion.Commander.toString() !== req.user)
      return res.status(401).json({ errorMessage: "אינך מורשה לערוך חוו''ד זה מכיוון שלא אתה יצרת אותו" });

    originalOpinion.Tkufa = otkufa;
    originalOpinion.FillDate = ofilldate;
    originalOpinion.MonthsNo = omonthsno;
    originalOpinion.Position = oposition;

    originalOpinion.C1 = oc1;
    originalOpinion.C2 = oc2;
    originalOpinion.C3 = oc3;
    originalOpinion.C4 = oc4;
    originalOpinion.C5 = oc5;
    originalOpinion.C6 = oc6;
    originalOpinion.C7 = oc7;
    originalOpinion.C8 = oc8;
    originalOpinion.C9 = oc9;

    originalOpinion.M1 = om1;

    originalOpinion.M2 = om2;
          
    originalOpinion.Tp = otp;
    originalOpinion.Fp = ofp;

    const savedOpinion = await originalOpinion.save();

    res.json({savedOpinion});
    
  } catch (err) {
    res.status(500).send();
    console.log(err);
  }
});  */

module.exports = router;
