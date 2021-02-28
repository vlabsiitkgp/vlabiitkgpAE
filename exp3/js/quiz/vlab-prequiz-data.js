/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var prequizJSON = {
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
    "prequestions": [
        {// Question 1 - Multiple Choice, Single True Answer
            "preq": "What is the formula to calculate the time period of the  monostable multivibrator.",
            "prea": [
                {"option": " T = 0.69 * (R<sub>A</sub> + R<sub>B</sub>) * C ", "correct":false},
                {"option": " T = 0.69 * (R<sub>A</sub> + 2R<sub>B</sub>) * C ", "correct":false},
                {"option": " T = 0.69 * R<sub>B</sub> * C", "correct": false},              
                {"option": " T = 1.1 * R * C", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "preq": "When a capacitor charges:",
            "prea": [
                {"option": " the voltage across the plates rises exponentially", "correct":false},
                {"option": " the circuit current falls exponentially ", "correct":false},
                {"option": "  the capacitor charges to the source voltage in 5×RC seconds", "correct": false}, 
             {"option": " all of the above", "correct": true}          
                 ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "preq": "The ________ is defined as the time the output is active divided by the total period of the output signal.",
            "prea": [
                {"option": "active ratio", "correct": false},
                {"option": "duty cycle", "correct": true},
                {"option": " on time", "correct": false},
				{"option": " off time", "correct": false}// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 4 - Multiple Choice, Single True Answer
            "preq": " A monostable 555 timer has the following number of stable states:",
            "prea": [
                {"option": "0", "correct": false},
                {"option": "1", "correct": true},
                {"option": "2", "correct": false},
                {"option": "3", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },	
       {// Question 5 - Multiple Choice, Single True Answer
            "preq": "What is the output pulse width of the waveform at the output of the circuit in the given figure?<br/><p style=\"text-align:center\"><img src=\"image/post_quiz1.png \" style=\"width:350px;height:200px\"></p>",
            "prea": [
                {"option": "1.65 ms", "correct": false},
                {"option": "18.2 ms", "correct": true},
                {"option": "4.98 ms", "correct": false},
                {"option": " 54.6 ms", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        }	
    ]
};
