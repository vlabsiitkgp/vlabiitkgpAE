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
            "q": "How to calculate duty cycle of an astable multivibrator output? ",
            "a": [
                {"option": " Duty cycle =(T<sub>ON</sub>/(1+T<sub>OFF</sub>)) *100", "correct": false},
                {"option": " Duty cycle = T<sub>ON</sub>/T * 100 ", "correct": false},
                {"option": " Duty cycle =  (T<sub>OFF</sub>/(T<sub>ON</sub>+T<sub>OFF</sub>)) *100 ", "correct": false},
                {"option": " Duty cycle =  (T<sub>ON</sub>/(T<sub>ON</sub>+T<sub>OFF</sub>)) *100", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What is the formula to calculate the time period of the astable multivibrator? ",
            "a": [
                {"option": " T = 0.69 * (R<sub>A</sub> + 2R<sub>B</sub>) * C ", "correct":true},
                {"option": " T = 0.69 * R<sub>B</sub> * C", "correct": false},
                {"option": " T = 0.69 * (R<sub>A</sub> + R<sub>B</sub>) * C ", "correct":false},
                {"option": " T = 1.1 * R * C", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "q": "Design a 555 timer as an astable multivibrator with an output signal frequency 0f 800 Hz and 60 % duty cycle.",
            "a": [
                {"option": " R<sub>A</sub>=  36 kohm,R<sub>B</sub>= 72 kohm, C=0.01uF", "correct": true},
                {"option": " R<sub>A</sub>=  100 kohm,R<sub>B</sub>= 36 kohm, C=0.01uF ", "correct": false},
                {"option": " R<sub>A</sub>=  72 kohm,R<sub>B</sub>= 36 kohm, C=0.01uF", "correct": false},
                {"option": " R<sub>A</sub>=  72 kohm,R<sub>B</sub>= 100 kohm, C=0.01uF", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },
		{// Question 4 - Multiple Choice, Single True Answer
            "q": "Determine the positive pulse width,negative pulse width and free running frequency for an astable multivibrator using 555 timer. R<sub>A</sub>=4.7 kohm, R<sub>B</sub> = 1 ohm, C=1 uF, C<sub>1</sub> = 0.01 uF. What is the duty cycle of output waveform?",
            "a": [
                {"option": " Duty cycle = 50 %", "correct": false},
                {"option": " Duty cycle = 25 %", "correct": false},
                {"option": " Duty cycle = 85 %", "correct": true},
                {"option": " Duty cycle = 100 %", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },
		{// Question 5 - Multiple Choice, Single True Answer
            "q": "The timer IC555 is used as astable multivibrator. It is desired to have square-wave output with 50% duty cycle of 1 kHz. The timing capacitor is of 0.01uF. Find the values of resistors required and draw the circuit.",
            "a": [
                {"option": " R<sub>A</sub> = R<sub>B</sub>=58 kohm", "correct": false},
                {"option": " R<sub>A</sub> = R<sub>B</sub>=2 kohm", "correct": false},
                {"option": " R<sub>A</sub> = R<sub>B</sub>=100 kohm", "correct": false},
                {"option": " R<sub>A</sub> = R<sub>B</sub>=68 kohm", "correct": true} // no comma here 
				//equation is in form  Em sin wt. w = 100 ᴨ rad/s. w=2 ᴨ x frequency. so frequency = w/2ᴨ =100ᴨ/2ᴨ=50
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        }
    ]
};

 