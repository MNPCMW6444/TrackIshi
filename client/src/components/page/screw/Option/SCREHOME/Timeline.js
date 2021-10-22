import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar,  Step } from "react-step-progress-bar";
 

export default function Timeline() {
    
    const mesimac = [
        "צוער בקרה אווירית",
        "b",
            "קצין טכני",
            "b",
                "קרבות",
                "b",
                    "קצין בקרה אווירית",
                    "b",
                        "טק''א",
                        "כיפ''ב",
                        "קלע דוד",
                        "הג''ר",
                        "משימות עזר",
                        "תובלייט",
                        "קזת''א",
                        "גילוי עיטם",
                        "b",
                            "קמנ''ק דרג א'",
                            "b",
                                "יירוט בט''ש",
                                "בת''ק בט''ש",
                                "צילום",
                                "חילוץ בט''ש",
                                "מתארים",
                                "b",
                                    "מ''ע אימון",
                                    "b",
                                        "ועדת דרג ב'",
                                        "b",
                                            "מ''ע משולב",
                                            "קמנ''ק דרג ב'",
                                            "b",
                                                "הגנ''ש",
                                                "חילוץ לחימה",
                                                "איסוף",
                                                "אוצר",
                                                "בת''ק קרב",
                                                "בת''ק מסוקים",
                                                "b",
                                                    "מנהל הגנ''א",
                                                    "b",
                                                        "מפקד תורן",
                                                        "b",
                                                            "מ''ע לחימה",
                                                            "b",
                                                                "מנהל לחימה"
    ];
    const taavurac = [
        "צוער בקרה אווירית",
        "b",
            "קצין טכני",
            "b",
                "קרבות",
                "b",
                    "קצין בקרה אווירית",
                    "b",
                        "טק''א",
                        "כיפ''ב",
                        "קלע דוד",
                        "הג''ר",
                        "משימות עזר",
                        "תובלייט",
                        "קזת''א",
                        "גילוי עיטם",
                        "b",
                            "קמנ''ק דרג א'",
                            "b",
                                "תובלות",
                                "b",
                                    "מחוברת",
                                    "b",
                                        "עפרוני",
                                        "b",
                                            "בק''צ",
                                            "b",
                                                "מתאם אימון",
                                                "b",
                                                    "חמש''ס",
                                                    "b",
                                                        "ועדת דרג ב'",
                                                        "b",
                                                            "מנהל תעבורה דרג ב'",
                                                            "b",
                                                                "משימות שוהות",
                                                                "כטמ''מ תא שטח",
                                                                "תיבה אווירית",
                                                                "תדלוק לחימה",
                                                                "b",
                                                                    "מרחבי",
                                                                    "b",
                                                                        "מנהל תעבורה דרג ג'"
    ];
    

    return (
        <ProgressBar
        percent={75}
        filledBackground="linear-gradient(to righ,  #fefb7,  #f0bb31)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
            />
          )}
        </Step>
      </ProgressBar>
    );
}



 
