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
            "preq": " 	A common source amplifier has. ",
            "prea": [
			 {"option": "Low Input Impedance", "correct": false},
                {"option": "No Gate resistance ", "correct": false},              
                {"option": "  No Drain resistance", "correct": false},
				{"option": " No source resistance", "correct": true},// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "preq": " 	An amplifier is designed using fixed bias configuration, what is its output impedance?",
            "prea": [
                {"option": "RD + rd ", "correct":false},
                {"option": " RD || rd", "correct": true},
				{"option": "  RG", "correct": false},
				{"option": "  0", "correct": false}//no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "preq": "	Which of the following is true about the common source amplifier?",
            "prea": [
                {"option": " It has low input impedance", "correct": false},
                {"option": " Phase reversal voltage output", "correct": true},
                {"option": " Infinite gain", "correct": false},
				{"option": "  It has high output impedance ", "correct": false},// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 4 - Multiple Choice, Single True Answer
            "preq": "  	What are the small signal FET parameter?",
            "prea": [
                {"option": "gm and rds", "correct": true},
                {"option": "gm and vgs", "correct": false},
                {"option": "vds and rds", "correct": false},
                {"option": " gm", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },	
       {// Question 5 - Multiple Choice, Single True Answer
            "preq": " Given for an FET, gm = - 9 .5 m A /volt, total capacitance = 500 pF. For a voltage gain of -30, the bandwidth will be",
            "prea": [
                {"option": " 630", "correct": false},
                {"option": "3", "correct": false},
                {"option": " 100", "correct": true},
                {"option": " 19", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        }	
    ]
};
