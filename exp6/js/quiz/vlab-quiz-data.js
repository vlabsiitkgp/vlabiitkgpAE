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
            "q": "Which of the following statement is true about FET common source amplifier compared to BJT amplifier? ",
            "a": [
                {"option": " it has high input impedance ", "correct": true},
                {"option": "it has low input impedance ", "correct": false},
                {"option": " no input voltage is needed ", "correct": false},
                {"option": " input voltage is needed", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "An amplifier is designed using fixed bias configuration, what is its input impedance?",
            "a": [
                {"option": "RD||rd", "correct":false},
                {"option": " RD+rd", "correct": false},
                {"option": " 0 ", "correct":false},
                {"option": " RG", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "q": "	What is the reason for connecting a capacitor in parallel with Rs",
            "a": [
                {"option": "It blocks the noise", "correct": false},
                {"option": "For ac signal it acts a short circuit resulting in grounding source terminal", "correct": false},
                {"option": " It blocks the noise and for ac signal it acts a short circuit resulting in grounding source terminal", "correct": true},
                {"option": " To increase impedance", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },
		{// Question 4 - Multiple Choice, Single True Answer
            "q": " The output voltage at fcl = 12 mV. What is the output voltage at the midpoint frequency?",
            "a": [
                {"option": "12 mV", "correct": false},
                {"option": "8.48 mV", "correct": false},
                {"option": "  10 mV", "correct": false},
                {"option": " 16.97 mV", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },
		{// Question 5 - Multiple Choice, Single True Answer
            "q": "   A sinusoidal signal has 1.5v at t=2S, if this signal is given to common source amplifier with Av=5 v what will be its output at t=2S?",
            "a": [
                {"option": "7.5", "correct": false},
                {"option": "-7.5", "correct": true},
                {"option": "15 ", "correct": false},
                {"option": "0", "correct": false} // no comma here 
				//equation is in form  Em sin wt. w = 100 ᴨ rad/s. w=2 ᴨ x frequency. so frequency = w/2ᴨ =100ᴨ/2ᴨ=50
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        }
    ]
};




 