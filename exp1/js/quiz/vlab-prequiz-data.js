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
            "preq": " CRO stands for __________. ",
            "prea": [
			 {"option": " Current Resistance Oscillator", "correct": false},
                {"option": " Capacitance Resistance Oscilloscope ", "correct": false},              
                {"option": " Central Resistance Oscillator", "correct": false},
				{"option": " Cathode Ray Oscilloscope", "correct": true},// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "preq": " A function generator  is a multipurpose signal source, it can generate:",
            "prea": [
                {"option": " Square Wave", "correct":false},             
				{"option": " Triangle Wave", "correct": false},
				{"option": " Sine Wave", "correct": false},
				{"option": " All of above", "correct": true}//no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "preq": " An advantage of  Oscilloscope over multimeter is that",
            "prea": [
                {"option": " We can measure accurate value of voltage", "correct": false},
                {"option": " We can see the wave shape of  voltage", "correct": true},
                {"option": " We can measure accurate value of current", "correct": false},
				{"option": " We can measure accurate resistance", "correct": false},// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 4 - Multiple Choice, Single True Answer
            "preq": "  The graticule of an oscilloscope, which has a grid pattern graduated in",
            "prea": [
                {"option": " Square centimeters", "correct": false},
                {"option": " Millimeters", "correct": false},
                {"option": " Centimeters", "correct": true},
                {"option": " None of these", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },	
       {// Question 5 - Multiple Choice, Single True Answer
            "preq": " If the vertical sensitivity is set to 0.5 volt per division and occupies 4 divisions, then peak-to-peak voltage is ",
            "prea": [
                {"option": " 4 volt", "correct": false},
                {"option": " 5 volt", "correct": false},
                {"option": " 2 volt", "correct": true},
                {"option": " 20 volt", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        }	
    ]
};
