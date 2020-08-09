/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "questions": [
        {// Question 1 - Multiple Choice, Single True Answer
            "q": "A signal generator with a negligible internal resistance R<sub>S</sub> is connected to a resistor R=10k&#937; through a coupling capacitor C=1&#956;F . RC Combination acts as <br/><p style=\"text-align:center\"><img src=\"image/rcfrq1.png\"style=\"width:350px;height:200px\"></p> ",
            "a": [
                {"option": "Low Pass Filter  ", "correct": false},
                {"option": "High Pass Filter", "correct": true},
                {"option": "None of the above", "correct": false}
              //  {"option": " 2.7 k&#937;", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "A signal generator with a negligible internal resistance R<sub>S</sub> is connected to a resistor R=10k&#937; through a coupling capacitor C=1&#956;F . The upper cut off frequency is f<sub>H</sub>  & lower cut off frequency is f<sub>L</sub> <br/><p style=\"text-align:center\"><img src=\"image/rcfrq2.png \" style=\"width:350px;height:200px\"></p>  ",
            "a": [
                {"option": " f<sub>H</sub> and f<sub>L</sub> can not be determined from given data   ", "correct":true},
                {"option": "f<sub>H</sub> = 6.28 kHz  ", "correct": false},
                {"option": "15Hz &#8804; f<sub>L</sub> &#8804; 20HZ  ", "correct": false}
               // {"option": " 3.333 m&#937;", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "q": "Given the approximate equivalent circuit of an amplifier. R=effective output impedance of the amplifier C=effective capacitance across the output of the amplifier. V<sub>out</sub>=Signal output voltage when no load is connected. R=250&#937; and C=200pF. RC Combination acts as <br/><p style=\"text-align:center\"><img src=\"image/rcfrq3.png \" style=\"width:350px;height:200px\"></p>  ",
            "a": [
                {"option": "Low Pass Filter ", "correct": true},
                {"option": "High Pass Filter ", "correct": false},
                {"option": " None of the above ", "correct": false}
               // {"option": " it is impossible to determine the change in the resistor value", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 4 - Multiple Choice, Single True Answer
            "q": "Given the approximate equivalent circuit of an amplifier. R=effective output impedance of the amplifier C=effective capacitance across the output of the amplifier. V<sub>out</sub>=Signal output voltage when no load is connected. R=250&#937; and C=200pF. f<sub>H</sub>  and f<sub>L</sub>  are upper and lower cut off frequency respectively<br/><p style=\"text-align:center\"><img src=\"image/rcfrq4.png \" style=\"width:350px;height:200px\"></p>  ",
            "a": [
                {"option": "f<sub>L</sub> and f<sub>H</sub> can not be determined from the given data", "correct": true},
                {"option": "f<sub>H</sub> = 6.28 kHz", "correct":false},
                {"option": "15Hz &#8804; f<sub>L</sub> &#8804; 20HZ ", "correct": false}
               // {"option": " It increases by a factor of five", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        }
    ]
};

