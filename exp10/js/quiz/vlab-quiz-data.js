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
            "q": "	A DAC converts an  digital input signal to a analog output.",
            "a": [
                {"option": "True", "correct": true},
				{"option": " False", "correct": false}// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "	The equivalent weight of LSB in a four-bit variable resistive divider D/A converter is",
            "a": [
                {"option": "1/16", "correct":false},
                {"option": " 1/15", "correct": true},
                {"option": " 1/8 ", "correct":false},
                {"option": " 8/15", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "q": "What is used to represent the signed magnitude?",
            "a": [
                {"option": "MSB", "correct": true},
                {"option": "LSB", "correct": false},
                {"option": "	None of the above", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },
        {// Question 4 - Multiple Choice, Single True Answer
            "q": " Determine the resolution and full scale output of 4-bit weighted resistor DAC with a reference of 10 volts. ",
            "a": [
                {"option": " Resolution=1.25 V, Full scale voltage=18.75 V", "correct": true},
                {"option": " Resolution=2.5 V, Full scale voltage=18.75 V", "correct": false},
                {"option": " Resolution=5 V, Full scale voltage=18.25 V", "correct": false},
				{"option": " Resolution=2.5, Full scale voltage=18.75 V", "correct": false},// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },
		{// Question 5 - Multiple Choice, Single True Answer
            "q": " A 4-bit R/2R digital-to-analog (DAC) converter has a reference of 5 volts. What is the analog output for the input code (B3, B2, B1, B0) = 0010.",
            "a": [
                {"option": "	0.625", "correct": true},
                {"option": " 0.765", "correct": false},
                {"option": " 0.938", "correct": false},
				{"option": "  -0.938", "correct": false},// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        }
    ]
};




 