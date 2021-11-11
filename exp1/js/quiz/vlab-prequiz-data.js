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
            "preq": " Schmitt trigger is an example of ------ circuit. ",
            "prea": [
			 {"option": "Amplifier", "correct": false},
                {"option": "Oscillator ", "correct": false},              
                {"option": "  Power supply", "correct": false},
				{"option": " Switching", "correct": true},// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "preq": " In Schmitt trigger circuit, op-amp switches between",
            "prea": [
                {"option": "Cut-off and negative saturation ", "correct":false},
                {"option": " Negative and positive saturation", "correct": true},
				{"option": "  Slight conduction and cut-off", "correct": false},
				{"option": "  Cut-off and positive saturation", "correct": false}//no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "preq": " If the power supply voltage applied to the op-amp that has a open loop gain of 100db is ±20V, the op-amp saturation voltage is",
            "prea": [
                {"option": " 20mV", "correct": false},
                {"option": " 2mV", "correct": true},
                {"option": " 20µV", "correct": false},
				{"option": "  200µV", "correct": false},// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 4 - Multiple Choice, Single True Answer
            "preq": "  The operation of a Schmitt trigger is similar to that of a",
            "prea": [
                {"option": "Full wave rectifier", "correct": false},
                {"option": "Series clipper", "correct": true},
                {"option": "Polarity detector", "correct": false},
                {"option": " Clamper", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },	
       {// Question 5 - Multiple Choice, Single True Answer
            "preq": " The main application of Schmitt trigger is in ",
            "prea": [
                {"option": " Amplifiers", "correct": false},
                {"option": "Oscillators", "correct": false},
                {"option": " Sine wave to square wave converters", "correct": true},
                {"option": " Rectifiers", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        }	,
		{// Question 6 - Multiple Choice, Single True Answer
            "preq": "  The speed of switching in the Schmitt trigger depends on ",
            "prea": [
                {"option": " Open loop gain ", "correct": true},
                {"option": " Input resistor", "correct": false},
                {"option": " Hysteresis", "correct": false},
                {"option": "  Feedback resistor", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        }	
    ]
};
