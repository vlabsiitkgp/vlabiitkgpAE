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
            "preq": " 	Analog signals have continuous electrical signals. ",
            "prea": [
			 {"option": "False", "correct": false},
				{"option": " True", "correct": true}// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "preq": "Analog signal is represented by ___________",
            "prea": [
                {"option": "Square Wave ", "correct":false},
                {"option": " Triangle Wave", "correct": false },
				{"option": "  Sine Wave", "correct": true}//no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "preq": " 	A 4-bit R/2R digital-to-analog (DAC) converter has a reference of 5 volts. What is the analog output for the input code (B3, B2, B1, B0) = 0011.",
            "prea": [
                {"option": "	9.125", "correct": false},
                {"option": " 0.765", "correct": false},
                {"option": " 0.938", "correct": true},
				{"option": "  -0.938", "correct": false},// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
         {// Question 4 - Multiple Choice, Single True Answer
            "preq": " Determine the resolution and full scale output of 4-bit weighted resistor DAC with a reference of 10 volts. ",
            "prea": [
                {"option": " Resolution=1.25 V, Full scale voltage=18.75 V", "correct": true},
                {"option": " Resolution=2.5 V, Full scale voltage=18.75 V", "correct": false},
                {"option": " Resolution=5 V, Full scale voltage=18.25 V", "correct": false},
				{"option": " Resolution=2.5, Full scale voltage=18.75 V", "correct": false},// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here      
        },
         {// Question 4 - Multiple Choice, Single True Answer
            "preq": " The two ways of representing the 0 with signed magnitude representation is",
            "prea": [
                {"option": " 	+0 and +0", "correct": false},
                {"option": " -0 and +0 ", "correct": true},
                {"option": "-0 and -0", "correct": false},
				{"option": " None of the above", "correct": false},// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here      
        }
    ]
};
