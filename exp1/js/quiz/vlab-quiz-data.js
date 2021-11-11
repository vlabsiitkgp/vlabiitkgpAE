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
            "q": "The speed of operation of Schmitt trigger depends on ",
            "a": [
                {"option": " op-amp gain ", "correct": false},
                {"option": "Supply voltage ", "correct": false},
                {"option": " op-amp configuration ", "correct": false},
                {"option": " Rate of change of input", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The feedback used in Schmitt trigger is",
            "a": [
                {"option": "Degenerative", "correct":false},
                {"option": " Regenerative", "correct": true},
                {"option": " Series ", "correct":false},
                {"option": " Shunt", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "q": "The value of cross over at increasing or decreasing input are called",
            "a": [
                {"option": "Cut-off points", "correct": false},
                {"option": "Saturation points", "correct": false},
                {"option": " Trip-point", "correct": true},
                {"option": " Null points", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },
		{// Question 4 - Multiple Choice, Single True Answer
            "q": " The Schmitt trigger could also be used for",
            "a": [
                {"option": "Voltage level detection", "correct": false},
                {"option": "Astable operation ", "correct": false},
                {"option": "  Monostable operation ", "correct": true},
                {"option": " Voltage limiting", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },
		{// Question 5 - Multiple Choice, Single True Answer
            "q": "  The Schmitt trigger could be used as",
            "a": [
                {"option": "Voltage detector", "correct": false},
                {"option": "Astable multivibrator", "correct": false},
                {"option": "Monostable multivibrator ", "correct": false},
                {"option": "All of the above", "correct": true} // no comma here 
				//equation is in form  Em sin wt. w = 100 ᴨ rad/s. w=2 ᴨ x frequency. so frequency = w/2ᴨ =100ᴨ/2ᴨ=50
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },
		{// Question 6 - Multiple Choice, Single True Answer
            "q": " The switching speed could be improved by using",
            "a": [
                {"option": " Zener diode at output", "correct": false},
                {"option": " Two Zener diode connected back to back at output", "correct": true},
                {"option": "Feed back resistor", "correct": false},
                {"option": "Capacitor in feedback", "correct": false} // no comma here 
				//equation is in form  Em sin wt. w = 100 ᴨ rad/s. w=2 ᴨ x frequency. so frequency = w/2ᴨ =100ᴨ/2ᴨ=50
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        }
    ]
};




 