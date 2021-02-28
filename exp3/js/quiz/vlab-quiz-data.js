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
            "q": "What does the discharge transistor do in the 555 timer circuit? ",
            "a": [
                {"option": " Charge the external capacitor to start the timing over again", "correct": false},
                {"option": " Charge the external capacitor to stop the timing", "correct": false},
                {"option": " Discharge the external capacitor to stop the timing", "correct": false},
                {"option": " Discharge the external capacitor to start the timing over again	", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The monostable multivibrator circuit is not an oscillator because ________.  ",
            "a": [
                {"option": " Its output switches between two states", "correct":false},
                {"option": " It requires a sine wave input signal", "correct": false},
                {"option": " It requires a trigger to obtain an output signal	 ", "correct":true},
                {"option": " The circuit does not require a dc power supply", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The monostable multivibrator circuit is also know as ________.  ",
            "a": [
                {"option": " One shot", "correct":true},
                {"option": " Two shot", "correct": false},
                {"option": "Three shot  ", "correct":false},
                {"option": " Four shot", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 4 - Multiple Choice, Single True Answer
            "q": " A monostable 555 timer has one stable states:",
            "a": [
                {"option": "True", "correct": true},
                {"option": "False", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },	
        {// Question 5 - Multiple Choice, Single True Answer
            "q": "What is the formula to calculate the time period of the  monostable multivibrator.",
            "a": [
                {"option": " T = 0.69 * (R<sub>A</sub> + R<sub>B</sub>) * C ", "correct":false},
                {"option": " T = 0.69 * (R<sub>A</sub> + 2R<sub>B</sub>) * C ", "correct":false},
                {"option": " T = 0.69 * R<sub>B</sub> * C", "correct": false},              
                {"option": " T = 1.1 * R * C", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        }
    ]
};

 